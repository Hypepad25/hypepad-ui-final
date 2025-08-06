# HYPEPAD Vite Component Simplification

## Purpose
Use static imports for assets and plain `<a>` links for navigation in a Vite React setup.

## Steps
1. **Place assets** in `src/assets/`:
   - `rocket-logo.svg`
   - `hypepad-banner.jpg`
2. **Replace** your components:
   - `src/components/Navbar.jsx`
   - `src/components/Hero.jsx`
3. **Install** dependencies and **build**:
   ```bash
   cd frontend        # if your code is in a subdirectory
   npm install
   npm run build
   ```
4. **Deploy** again to Vercel.

This approach uses Vite’s asset handling to reference the hashed files automatically and ensures your navbar links and dropdown work via standard anchor tags.
