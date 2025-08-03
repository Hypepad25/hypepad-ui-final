# RainbowKit & wagmi Upgrade Patch

## Summary
Updates the dependencies to current working versions and makes wallet setup use WalletConnect v2 projectId from env.

### Changes
- Updated `frontend/package.json` to use:
  - `@rainbow-me/rainbowkit@^2.2.8`
  - `wagmi@^1.11.0`
  - `viem@^1.0.0`
- Added `WALLETCONNECT_PROJECT_ID` usage in `wallet/setup.js`.
- Provided `.env.example` for setting the required `projectId`.

## Instructions
1. Copy `package.json` into `frontend/package.json` (or manually merge the dependencies).  
2. Set your WalletConnect project ID:
   - Create one at https://cloud.walletconnect.com (if needed).
   - Copy `.env.example` to `.env` and replace with your actual ID:
     ```
     WALLETCONNECT_PROJECT_ID=abc123yourprojectid
     ```
3. Install and build:
   ```bash
   cd frontend
   npm install
   npm run build
   ```
4. Commit changes:
   ```bash
   git add package.json .env
   git commit -m "chore: upgrade RainbowKit/wagmi to latest and add WalletConnect projectId env support"
   git push
   ```
5. Redeploy on Vercel. Make sure to add `WALLETCONNECT_PROJECT_ID` as an environment variable in Vercel settings too.

