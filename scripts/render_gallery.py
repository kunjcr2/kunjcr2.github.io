"""Render gallery.json into crawlable HTML in astrophotography.html."""

from collections import defaultdict
from html import escape
import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
GALLERY = ROOT / "assets/astrophotography/gallery.json"
PAGE = ROOT / "astrophotography.html"
START = "      <!-- GALLERY_START: generated from assets/astrophotography/gallery.json -->"
END = "      <!-- GALLERY_END -->"


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
    photos = json.loads(GALLERY.read_text(encoding="utf-8"))
    years = defaultdict(list)
    for photo in photos:
        for key in ("src", "thumbnail"):
            if photo.get(key) and not (ROOT / photo[key]).is_file():
                raise FileNotFoundError(photo[key])
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
    print(f"Rendered {len(photos)} photos across {len(years)} years")


if __name__ == "__main__":
    main()
