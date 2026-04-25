# SOLUTIONS FIRST SOFTWARE CONSULTING — Vercel Static Website

This project is a **zero-backend static site** designed to run comfortably on the **Vercel Hobby** plan with minimal/no usage.

## What's included
- `index.html` + simple pages: `services.html`, `about.html`, `contact.html`, `privacy.html`
- Clean routes via `vercel.json` so `/services` works without frameworks
- Contact form uses `mailto:` (no serverless functions, no database)

## Deploy (fast)
### Option 1 — Vercel UI
1. Create a GitHub repo and push this folder.
2. In Vercel: **New Project** → import the repo.
3. Framework preset: **Other** (or leave default).
4. Build command: **None**
5. Output directory: **/** (project root)
6. Deploy.

### Option 2 — Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow prompts. Choose **No build** when asked.

## Customize
- Email is set to `solutionsfirstconsult@gmail.com` in `contact.html` and footer.
- Update copy, services, and branding in the HTML files.
- Logo is at `assets/img/logo.svg`.

## Notes
- For a real contact form later (without email client), add Vercel Functions or a third‑party form endpoint.
