# Astrophotography images

Place the gallery images in this folder, then add a matching object to `gallery.json`. The site loads this file automatically, so you never need to edit JavaScript to add a photo.

Each gallery card loads the matching WebP preview from `thumbs/`, then opens the original image when clicked. Create a thumbnail with the same filename stem (for example, `my-photo.jpg` uses `thumbs/my-photo.webp`) and include its path in the entry.

Each entry needs these fields:

```json
{
  "src": "assets/astrophotography/my-photo.jpg",
  "thumbnail": "assets/astrophotography/thumbs/my-photo.webp",
  "title": "North America Nebula",
  "type": "Emission nebula",
  "iso": "ISO 800",
  "focal": "300 mm",
  "exposure": "3h total",
  "aperture": "f/4",
  "note": "A short note about the capture or processing."
}
```

Keep the objects inside the surrounding square brackets and separate each object with a comma. The image path is relative to the website root.

You can use any filename; just set it in that entry's `src` field.
