# HYPEPAD All-in-One Working Bundle

## What’s included
- Full frontend scaffold with Vite + React + Tailwind fallback.
- SEO component, Navbar (large logo), Hero (no presale badge), Footer.
- Presale page with countdown, progress, and RainbowKit ConnectButton wallet connect.
- Wallet setup using RainbowKit v2 / wagmi v2 / viem v2 with required projectId support.
- Correct build config (vite.config.js) including React plugin.
- Dependencies in package.json aligned for successful build.

## Quick start

1. Push this into your repository root:
   ```bash
   cd frontend
   npm ci
   echo "WALLETCONNECT_PROJECT_ID=your_project_id_here" > .env
   npm run build
   git add .
   git commit -m "chore: use all-in-one working bundle with wallet connect and UI"
   git push origin main
   ```

2. In Vercel dashboard, set environment variable:
   - `WALLETCONNECT_PROJECT_ID` = your real project ID

3. Deploy with “Clear cache and deploy” to ensure fresh install.

## Notes
- Replace placeholder presale participation with real logic.
- Ensure assets like `rocket-logo.svg` and `favicon.png` are in `public/` in your repo.
