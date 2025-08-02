#!/bin/bash
set -e
echo "Installing missing dependency @vitejs/plugin-react"
cd frontend
npm install -D @vitejs/plugin-react
echo "Ensuring vite.config.js uses @vitejs/plugin-react"
# Backup existing
if [ -f vite.config.js ]; then
  cp vite.config.js vite.config.js.bak
fi
cat > vite.config.js <<'EOF'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
EOF
echo "Run 'npm run build' to verify locally."
