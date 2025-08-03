# Viem2 Upgrade Patch for HYPEPAD

## Purpose
Fixes the build error caused by RainbowKit requiring viem 2.x by upgrading the dependency versions and providing a compatible wallet setup.

## Included
- frontend/package.json with:
  - @rainbow-me/rainbowkit@^2.2.8
  - wagmi@^1.11.0
  - viem@^2.8.4
  - react 18.x, react-dom, react-router-dom
  - Vite and plugin-react in devDependencies
- frontend/src/wallet/setup.js with WalletConnect v2 projectId support.

## Instructions
1. **Apply patch**: unzip and copy/merge into your existing repo root, replacing `frontend/package.json` and updating `src/wallet/setup.js`.

2. **Set WalletConnect project ID**:
   - Locally create `.env` in `frontend/`:
     ```
     WALLETCONNECT_PROJECT_ID=your_project_id_here
     ```
   - In Vercel dashboard, set `WALLETCONNECT_PROJECT_ID` environment variable.

3. **Clean existing install**:
   ```
   cd frontend
   rm -rf node_modules package-lock.json
   ```

4. **Install dependencies**:
   ```
   npm ci
   ```

5. **Build**:
   ```
   npm run build
   ```

6. **Commit & push**:
   ```
   git add package.json package-lock.json src/wallet/setup.js
   git commit -m "fix: upgrade viem to 2.x and RainbowKit/Wagmi for compatibility"
   git push origin main
   ```

7. **Redeploy** on Vercel, choose “Clear cache and deploy”.

