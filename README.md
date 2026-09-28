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

The astrophotography page loads its photographs from `assets/astrophotography/gallery.json`, so it must be viewed through this local server (or the deployed GitHub Pages site), rather than opened as a `file://` URL.

All site styling lives in `styles.css`. There is no build step and no package installation.
