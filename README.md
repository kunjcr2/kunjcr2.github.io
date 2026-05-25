# Kunj Shah | Portfolio Website

This repository contains the source code for my static portfolio website, hosted live at [kunjcr2.github.io](https://kunjcr2.github.io).

The site is designed to be a fast, modern, and minimalist single-page application (SPA) displaying my background, professional experience, projects, and research in Deep Learning and Large Language Models (LLMs).

---

## Features

- **Responsive Single-Page Architecture**: Client-side hash routing (`#home`, `#experience`, `#projects`, `#skills`, `#contact`) with smooth layout transitions and automatic tab state management.
- **Dynamic Light/Dark Modes**: High-contrast theme system that respects system preferences (`prefers-color-scheme`) and persists user choices via `localStorage`.
- **Modern Typography & Icons**: Utilizes Google Fonts (*Inter*, *Playfair Display*, *JetBrains Mono*) combined with dynamic *Lucide Icons*.
- **Tailwind Design System**: Highly customizable utility styles via the Tailwind CDN configuration.
- **Embedded Forms**: Dynamic integration of Google Forms for direct user outreach and feedback.

---

## Repository Structure

```text
kunjcr2.github.io/
├── index.html       # Single-file HTML containing structure, custom styles, and router logic
└── README.md        # Project documentation (this file)
```

---

## Getting Started / Development

### Running Locally
To test the website locally, you can open `index.html` directly in your browser or run a lightweight local HTTP server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (via http-server)
npx http-server -p 8000
```
Then visit `http://localhost:8000` in your web browser.

### Styling & Theme Customization
Custom design system configurations (such as custom colors and typography scales) are defined inside the `tailwind.config` script block at the top of `index.html`. You can add new brand colors or spacing units directly in the config object.

---

## Notes & Missing Assets

1. **Resume Link**: The site links to `Kunj.pdf` in the root directory of this repository. Make sure you place your resume file with the name `Kunj.pdf` in this directory so that the "Resume (PDF)" button functions correctly.
2. **Tailwind Class Support**: Several non-standard utility classes (e.g. `zinc-850`, `zinc-550`, `zinc-150`, `zinc-350`, and `w-4.5`/`h-4.5`) are configured directly in the inline `tailwind.config` to extend Tailwind's default palette and spacing scale dynamically.
