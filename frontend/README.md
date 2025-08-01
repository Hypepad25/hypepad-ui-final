# HYPEPAD Navbar + Assets Patch

## Included
- Navbar.jsx: full top nav with all links and Resources dropdown, fallback rocket logo image.
- rocket-logo.svg: rocket icon (used in navbar and as favicon fallback).
- favicon.png: PNG favicon.
- index.html: example head snippet showing favicon setup.

## Installation
1. Copy `rocket-logo.svg` and `favicon.png` into your public root so they are served at:
   - `/rocket-logo.svg`
   - `/favicon.png`
2. Replace your existing Navbar component with the provided `Navbar.jsx`.
3. Insert the favicon lines into your HTML `<head>` as in `index.html`.
4. Rebuild, deploy, and hard refresh.

