Patch to fix build failure: adds @vitejs/plugin-react and ensures vite.config.js is correct.

Steps to apply:
1. Copy this patch into your repo root or fetch the script.
2. Run:

   ./apply_patch.sh
3. Commit changes (package.json and package-lock.json updated, vite.config.js overwritten):
   git add frontend/package.json frontend/package-lock.json frontend/vite.config.js
   git commit -m "Fix build: add @vitejs/plugin-react and correct Vite config"
4. Push and redeploy.

If you prefer manual:
- In frontend directory: npm install -D @vitejs/plugin-react
- Replace your vite.config.js with the provided one (or ensure it has:
import react from '@vitejs/plugin-react';
plugins:[react()],
 etc.)
