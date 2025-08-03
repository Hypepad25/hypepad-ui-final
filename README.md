# Fix: revert to wagmi/providers/public

The previous attempt used @wagmi/core which is causing the missing specifier error. This patch restores the correct usage for RainbowKit v2 + wagmi v2:

## What’s included
- `frontend/src/wallet/setup.jsx` using `configureChains` and `publicProvider` from 'wagmi' and 'wagmi/providers/public' respectively.

## Requirements
Ensure your `frontend/package.json` dependencies include compatible versions:
```json
{
  "@rainbow-me/rainbowkit": "^2.2.8",
  "wagmi": "^2.9.0",
  "viem": "^2.8.4"
}
```

And devDependencies include:
```json
{
  "@vitejs/plugin-react": "^4.0.0"
}
```

## Steps
1. Replace `frontend/src/wallet/setup.jsx` with this file.
2. Clean and reinstall:
   ```
   cd frontend
   rm -rf node_modules package-lock.json
   npm ci
   ```
3. Ensure env var set:
   ```
   echo "WALLETCONNECT_PROJECT_ID=your_project_id_here" > .env
   ```
   In production set in Vercel dashboard.
4. Build:
   ```
   npm run build
   ```
5. Commit & push:
   ```
   git add src/wallet/setup.jsx package.json package-lock.json
   git commit -m "fix: restore wagmi publicProvider usage and update wallet setup"
   git push origin main
   ```
6. Redeploy on Vercel with cache cleared.
