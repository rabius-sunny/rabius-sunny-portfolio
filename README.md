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

- Fully static output (`output: 'static'`) served by Workers static assets.
- Contact form: posts to `/api/contact`, handled by the Worker in `worker/index.ts` (Turnstile + honeypot + rate limit, emailed via the Email Routing `send_email` binding to the verified destination in `wrangler.jsonc`). Only `/api/*` runs the Worker (`run_worker_first`).
- Worker secret (once): `bunx wrangler secret put TURNSTILE_SECRET` (get it with `bunx wrangler turnstile widget get <sitekey>`). Local dev: put it in `.dev.vars` (gitignored) and run `bun run build && bunx wrangler dev`.
- Images are optimized at build time via `astro:assets` (AVIF/WebP).
- SEO: per-page title/description/canonical, OG/Twitter tags, JSON-LD, sitemap, robots, web manifest.
