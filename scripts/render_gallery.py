"""Build gallery WebP thumbnails and render crawlable HTML."""

from collections import defaultdict
from html import escape
import json
from pathlib import Path
import subprocess


ROOT = Path(__file__).resolve().parents[1]
GALLERY = ROOT / "assets/astrophotography/gallery.json"
PHOTOS = GALLERY.parent
THUMBS = PHOTOS / "thumbs"
PAGE = ROOT / "astrophotography.html"
START = "      <!-- GALLERY_START: generated from assets/astrophotography/gallery.json -->"
END = "      <!-- GALLERY_END -->"


def prepare_photos(photos):
    """Give each listed image a WebP preview, rebuilding it when the source changes."""
    THUMBS.mkdir(exist_ok=True)
    prepared = []
    jobs = []
    destinations = set()
    for photo in photos:
        source = (ROOT / photo["src"]).resolve()
        if source.parent != PHOTOS.resolve() or source.suffix.lower() not in {".jpg", ".jpeg", ".png", ".webp"}:
            raise ValueError(f"Gallery source must be an image in {PHOTOS}: {photo['src']}")
        if not source.is_file():
            raise FileNotFoundError(source)

        thumbnail = THUMBS / f"{source.stem}.webp"
        if thumbnail in destinations:
            raise ValueError(f"Two gallery images would share a thumbnail: {thumbnail}")
        destinations.add(thumbnail)
        if not thumbnail.is_file() or thumbnail.stat().st_mtime_ns < source.stat().st_mtime_ns:
            jobs.append({"source": str(source), "thumbnail": str(thumbnail)})

        entry = dict(photo)
        entry["thumbnail"] = thumbnail.relative_to(ROOT).as_posix()
        prepared.append(entry)
    if jobs:
        subprocess.run(
            ["node", str(ROOT / "scripts/create_gallery_thumbnails.js")],
            input=json.dumps(jobs),
            text=True,
            check=True,
        )
    return prepared, len(jobs)


def valid(value):
    return value is not None and str(value).strip().lower() not in ("", "null")


def render_photo(photo, index):
    title = escape(photo["title"])
    source = escape(photo["src"], quote=True)
    thumbnail = escape(photo.get("thumbnail") or photo["src"], quote=True)
    year = escape(str(photo["year"]))
    kind = escape(photo["type"])
    details = []
    for key, label in (("integration", "Integration"), ("exposure", "Exposure")):
        if valid(photo.get(key)):
            details.append(f"{label}: {photo[key]}")
    details.extend(str(photo[key]) for key in ("focal", "iso", "aperture") if valid(photo.get(key)))
    detail_html = (
        f'\n            <span class="photo-meta">{escape(" · ".join(details))}</span>'
        if details else ""
    )
    loading = 'loading="eager" fetchpriority="high"' if index == 0 else ('loading="eager"' if index < 3 else 'loading="lazy"')
    return (
        '          <figure class="photo">\n'
        f'            <a href="{source}" target="_blank" rel="noopener noreferrer">\n'
        f'              <img src="{thumbnail}" alt="{title} photographed by Kunj Shah" {loading} decoding="async">\n'
        '            </a>\n'
        f'            <figcaption><strong>{title}</strong> {kind}, {year}{detail_html}</figcaption>\n'
        '          </figure>'
    )


def main():
    photos, created = prepare_photos(json.loads(GALLERY.read_text(encoding="utf-8")))
    years = defaultdict(list)
    for photo in photos:
        years[photo["year"]].append(photo)

    sections = []
    photo_index = 0
    for year in sorted(years, reverse=True):
        figures = []
        for photo in years[year]:
            figures.append(render_photo(photo, photo_index))
            photo_index += 1
        sections.append(
            '      <section class="year-group">\n'
            f'        <h2 class="year-heading" id="year-{year}">{year}</h2>\n'
            '        <div class="photo-grid">\n'
            + "\n".join(figures)
            + '\n        </div>\n'
            '      </section>'
        )

    page = PAGE.read_text(encoding="utf-8")
    if page.count(START) != 1 or page.count(END) != 1:
        raise ValueError("Gallery markers must each occur once")
    before, remainder = page.split(START, 1)
    _, after = remainder.split(END, 1)
    PAGE.write_text(before + START + "\n" + "\n".join(sections) + "\n" + END + after, encoding="utf-8")
    print(f"Rendered {len(photos)} photos across {len(years)} years; created or refreshed {created} WebP thumbnails")


if __name__ == "__main__":
    main()
