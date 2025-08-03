# Final Fix Bundle

This bundle contains the minimal wired files that address:
- Hero banner updates (large logo, responsive headline, no presale badge)
- Navbar with enlarged logo
- Presale page with RainbowKit ConnectButton and wallet status
- Wallet setup (RainbowKit v2 / wagmi v2) with projectId support
- Favicon and SVG logo
- Index.html with favicon links

## To apply:
1. Copy these into your repo (replace existing):
   - frontend/index.html
   - frontend/src/components/Hero.jsx
   - frontend/src/components/Navbar.jsx
   - frontend/src/pages/Presale.jsx
   - frontend/src/wallet/setup.jsx
   - frontend/public/favicon.png
   - frontend/public/rocket-logo.svg

2. Ensure package.json has compatible deps:
   ```
   "@rainbow-me/rainbowkit": "^2.2.8",
   "wagmi": "^2.9.0",
   "viem": "^2.8.4",
   "@vitejs/plugin-react": "^4.0.0"
   ```

3. Install, build, deploy:
   ```
   cd frontend
   rm -rf node_modules package-lock.json
   npm ci
   echo "WALLETCONNECT_PROJECT_ID=your_project_id_here" > .env
   npm run build
   git add .
   git commit -m "fix: final hero/navbar/presale wallet connect favicon wiring"
   git push origin main
   ```

4. Set `WALLETCONNECT_PROJECT_ID` in Vercel environment variables and redeploy (clear cache).

