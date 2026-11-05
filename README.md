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

The astrophotography page contains HTML generated from `assets/astrophotography/gallery.json`. Install the image processing dependency once, then run the renderer after adding an image and its gallery entry:

```bash
npm install
python scripts/render_gallery.py
```

The renderer creates or refreshes WebP previews in `assets/astrophotography/thumbs/` and updates the gallery HTML.

The gallery can also be opened directly as a `file://` URL.

All site styling lives in `styles.css`. Serving the static site needs no package installation.
