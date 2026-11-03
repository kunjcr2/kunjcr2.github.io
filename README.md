# Kunj Shah | Portfolio Website

Source for [kunjcr2.github.io](https://kunjcr2.github.io), a simple static portfolio built with HTML and CSS.

## Files

```text
kunjcr2.github.io/
├── index.html              # Portfolio
├── astrophotography.html   # Photo gallery
├── styles.css              # Shared styles
├── assets/                 # Gallery images and data
├── Kunj.png                # Profile photo
├── Kunj.pdf                # Résumé
└── README.md
```

## Running locally

To preview the site locally, run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

The astrophotography page contains HTML generated from `assets/astrophotography/gallery.json`. After changing the gallery data, regenerate the page before committing:

```bash
python scripts/render_gallery.py
```

The gallery can also be opened directly as a `file://` URL.

All site styling lives in `styles.css`. The site needs no package installation.
