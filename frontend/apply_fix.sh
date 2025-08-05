#!/bin/bash
set -e
echo "Ensuring SEO.jsx and Navbar.jsx are in place"
# no-op if run at repo root; just verify files exist
if [ ! -f frontend/src/components/SEO.jsx ]; then
  echo "SEO.jsx missing"
  exit 1
fi
if [ ! -f frontend/src/components/Navbar.jsx ]; then
  echo "Navbar.jsx missing"
  exit 1
fi
echo "Installing dependencies and building"
cd frontend
if [ -f package.json ]; then
  npm ci
  npm run build
else
  echo "package.json not found in frontend/"
  exit 1
fi
