# SEO + Navbar Fix Mini Bundle

## What’s included
- frontend/src/components/SEO.jsx
- frontend/src/components/Navbar.jsx (with rocket logo fallback and full links)
- apply_fix.sh to verify presence and build

## Usage
1. Place this inside your repo root.
2. Run:
   ./apply_fix.sh
3. Commit:
   git add frontend/src/components/SEO.jsx frontend/src/components/Navbar.jsx
   git commit -m "fix: add SEO and updated Navbar with logo fallback"
   git push
4. Redeploy on Vercel (clear cache if needed).
