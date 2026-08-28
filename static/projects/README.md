# Project screenshots

Drop a screenshot here, then point the matching project at it in
`src/lib/data/en.ts` **and** `src/lib/data/fr.ts`:

```ts
{
  id: 'homescraper',
  name: 'HomeScraper',
  image: '/projects/homescraper.png',
  ...
}
```

A card with `image` set renders as a 2-column card (screenshot left, text
right). A card without one renders text-only, so missing screenshots never
show up as an empty grey panel. Add them one at a time.

Suggested filenames, matching the project `id`s:

| file | project |
| --- | --- |
| `skyblock-tracker.png` | SkyblockTracker |
| `homescraper.png` | HomeScraper |
| `recipes-rag.png` | Turkish Recipes RAG Chatbot |
| `4sure.png` | 4Sure |
| `velib.png` | Vélib Visualisation & Booking |
| `24h-info.png` | 24h INFO 2026 contest repo |
| `curve-viz.png` | Curve Visualisation |

Aim for roughly 4:3, at least 800px wide, and compress before committing
(`magick in.png -resize 1200x -quality 82 out.webp` works fine).
