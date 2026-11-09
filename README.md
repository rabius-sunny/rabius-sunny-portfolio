# Rabius Sunny — Portfolio

Static portfolio website of Rabius Sunny, built with [Astro](https://astro.build) and Tailwind CSS v4, deployed to Cloudflare Workers static assets on `rabiussunny.com`.

## Commands

| Command            | Action                                              |
| ------------------ | --------------------------------------------------- |
| `bun install`      | Install dependencies                                |
| `bun dev`          | Start dev server at `http://localhost:4321`         |
| `bun run build`    | Build production site to `./dist/`                  |
| `bun run preview`  | Preview the production build locally                |
| `bun run check`    | Type-check with `astro check`                       |
| `bun run deploy`   | Build and deploy to Cloudflare (`astro build && wrangler deploy`) |

## Notes

- Fully static output (`output: 'static'`). Contact form markup is present but has no backend (TODO in `src/pages/contact.astro`).
- Images are optimized at build time via `astro:assets` (AVIF/WebP).
- SEO: per-page title/description/canonical, OG/Twitter tags, JSON-LD, sitemap, robots, web manifest.
