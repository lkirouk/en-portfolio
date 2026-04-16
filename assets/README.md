# Assets — Required Images

Place the following image files in this `assets/` folder before deploying.

| Filename               | Description                                      | Dimensions      | Format |
|------------------------|--------------------------------------------------|-----------------|--------|
| `logo.svg`             | Rumo Certo brand logo (white or full-color SVG)  | Vector (SVG)    | SVG    |
| `banner-desktop.webp`  | Main hero banner — Edmilson + product shot       | 1920 × 1080 px  | WebP   |
| `banner-mobile.webp`   | Mobile hero banner — vertical framing            | 750 × 1334 px   | WebP   |
| `saco-15kg.webp`       | Product photo — 15 kg bag                        | min 800 × 600 px| WebP   |
| `saco-25kg.webp`       | Product photo — 25 kg bag                        | min 800 × 600 px| WebP   |

## Notes

- All images are referenced by their exact filenames in `index.html`. Do **not** rename them.
- Use WebP format for best performance. Fallback JPGs are not required for GitHub Pages.
- Optimise images before uploading (recommended: < 200 KB for product shots, < 500 KB for banners).
- The hero uses a `<picture>` element: `banner-mobile.webp` is served on viewports ≤ 767 px and `banner-desktop.webp` on wider screens.
- `logo.svg` is used in both the header and the footer.

## Recommended Tools

- **Image optimisation**: [Squoosh](https://squoosh.app) or [TinyPNG](https://tinypng.com)
- **SVG optimisation**: [SVGOMG](https://jakearchibald.github.io/svgomg/)
- **WebP conversion**: [CloudConvert](https://cloudconvert.com/jpg-to-webp)
