Patch files to fix Vercel build error 'Cannot find module @vitejs/plugin-react'.

Use instructions:
1. Apply vite-fix.patch:
   git apply vite-fix.patch
2. Install the missing dependency:
   cd frontend
   npm install -D @vitejs/plugin-react
3. Commit changes:
   git add frontend/vite.config.js frontend/package.json frontend/package-lock.json
   git commit -m "Fix build: add @vitejs/plugin-react and correct Vite config"
4. Push to remote and trigger redeploy.

If package.json already has devDependencies block, you may need to manually merge the addition of "@vitejs/plugin-react": "^3.1.0" into it.

