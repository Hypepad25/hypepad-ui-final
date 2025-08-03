# Hotfix stable launch bundle final

Use this to deploy quickly: includes v1 wagmi/rainbowkit wallet setup, hero/navbar/presale, favicon, etc.

Instructions:
cd frontend
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run build
git add .
git commit -m "hotfix stable launch build"
git push origin main
