# Layout Fix Patch

## Purpose
Restores styling/layout by adding Tailwind via CDN and base fallback styles so utility classes (e.g., from existing Hero/Navbar) render correctly.

## Files included
- `frontend/src/index.html`: updated to include Tailwind CDN, base theme, favicon, and meta.
- `frontend/src/global.css`: minimal global CSS.

## Installation
Place these files into your repo (overwrite existing), then:
```bash
cd frontend
npm ci
npm run build
```
Commit and push:
```bash
git add src/index.html src/global.css
git commit -m "fix: restore layout with Tailwind CDN and base global styles"
git push
```
Then redeploy on Vercel (clear cache).
