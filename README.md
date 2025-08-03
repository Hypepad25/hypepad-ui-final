# Stable v1 fix bundle

This includes:
- wagmi v1 + RainbowKit v0.7.4 compatibility, using publicProvider (no missing specifier)
- Hero, Navbar, Presale with ConnectButton
- Wallet setup and favicon/logo references

Apply:
cd frontend
rm -rf node_modules package-lock.json
npm ci
echo "WALLETCONNECT_PROJECT_ID=your_project_id_here" > .env
npm run build
git add .
git commit -m "apply stable v1 UI + wallet fix"
git push origin main
