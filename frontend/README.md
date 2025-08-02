Patch bundle to fix Vite React build error by adding the missing plugin and correct config.

Files:
  - vite-fix.patch: patch to add/replace frontend/vite.config.js with the proper React plugin config.
  - package-json-add.patch: patch to insert @vitejs/plugin-react into devDependencies in frontend/package.json. You may need to merge manually if formatting differs.
  - install_plugin.sh: helper script that installs @vitejs/plugin-react and writes/overwrites vite.config.js.

Usage:
1. Unzip into your repo root.
2. Apply patches:
   git apply vite-fix.patch
   git apply package-json-add.patch  # adjust manually if it fails due to formatting
3. Run installer:
   chmod +x install_plugin.sh
   ./install_plugin.sh
4. Verify build locally:
   cd frontend
   npm run build
5. Commit changes:
   git add frontend/vite.config.js frontend/package.json frontend/package-lock.json
   git commit -m "fix: add @vitejs/plugin-react and correct Vite config"
   git push
6. Redeploy on Vercel with cache cleared.

If any patch application fails, manually:
- Add "@vitejs/plugin-react": "^4.0.0" under devDependencies in frontend/package.json.
- Create/update frontend/vite.config.js to:
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';

  export default defineConfig({
    plugins: [react()],
  });
