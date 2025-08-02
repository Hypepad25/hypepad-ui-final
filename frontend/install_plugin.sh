#!/bin/bash
set -e
echo "Installing @vitejs/plugin-react and ensuring correct vite.config.js"
cd frontend
# Install plugin
npm install -D @vitejs/plugin-react
# Write correct vite.config.js if missing or overwrite
cat > vite.config.js <<'EOF'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
EOF
echo "Installation complete. Run 'npm run build' to verify locally."
