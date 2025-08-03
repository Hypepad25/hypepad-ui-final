# RainbowKit v2 Upgrade Patch

## Contents
- Updated `package.json` with compatible versions:
  - `@rainbow-me/rainbowkit@^2.2.8` (requires wagmi 2.x)
  - `wagmi@^2.9.0`
  - `viem@^2.8.4`
- Updated wallet setup for RainbowKit/Wagmi v2 in `src/wallet/setup.js`
- `.env.example` template

## Steps
1. Copy these files into your `frontend/` directory (overwrite existing).
2. Create `.env` with your WalletConnect project ID:
   ```
   WALLETCONNECT_PROJECT_ID=your_project_id_here
   ```
3. Remove old installs:
   ```
   rm -rf node_modules package-lock.json
   ```
4. Install and build:
   ```
   npm ci
   npm run build
   ```
5. Commit & push:
   ```
   git add package.json package-lock.json src/wallet/setup.js
   git commit -m "fix: upgrade to wagmi v2 and viem 2 for RainbowKit compatibility"
   git push origin main
   ```
6. On Vercel: set `WALLETCONNECT_PROJECT_ID` environment variable and redeploy (clear cache).

