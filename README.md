# Hotfix Stable Launch Bundle

## Summary
This bundle pins versions to the compatible older stack so you can deploy immediately:
- RainbowKit v0.7.4 + wagmi@0.7.6 + ethers (no viem) avoids previous dependency/specifier errors.
- Hero, Navbar, Presale, Wallet setup, and assets included.
- React plugin via Vite is assumed in existing config; if not, add @vitejs/plugin-react in devDependencies.

## Steps
cd frontend
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run build
git add .
git commit -m "hotfix: stable v0.7.4/wagmi 0.7.6 build for launch"
git push origin main

Deploy on Vercel with cache cleared. No WalletConnect v2 projectId needed for basic connect.

