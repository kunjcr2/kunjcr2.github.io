# Astrophotography images

Place the gallery images in this folder, then add a matching object to `gallery.json`. Run the renderer to update the page; you never need to edit the gallery HTML by hand.

Each gallery card loads a WebP preview from `thumbs/`, then opens the original image when clicked. After adding an image and its entry to `gallery.json`, run `python scripts/render_gallery.py` from the repository root. The script creates or refreshes its WebP preview at `thumbs/<image stem>.webp` and updates `astrophotography.html`. The `thumbnail` field is optional; if present, use the generated path.

Each entry needs these fields:

```json
{
  "src": "assets/astrophotography/my-photo.jpg",
  "thumbnail": "assets/astrophotography/thumbs/my-photo.webp",
  "title": "North America Nebula",
  "type": "Emission nebula",
  "iso": "ISO 800",
  "focal": "300 mm",
  "integration": "3h total",
  "exposure": "60 seconds per frame",
  "aperture": "f/4",
  "note": "A short note about the capture or processing."
}
```

Keep the objects inside the surrounding square brackets and separate each object with a comma. The image path is relative to the website root.

You can use any filename; just set it in that entry's `src` field.
