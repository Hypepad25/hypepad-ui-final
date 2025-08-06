# HYPEPAD Full Navbar Integration

This package ensures your custom Navbar is properly loaded and routed in a Next.js App Router setup.

## Files:

- `src/components/Navbar.jsx`
- `app/layout.jsx`

## Steps to Apply:

1. **Replace** your existing `src/components/Navbar.jsx` with the provided version.
2. **Replace or update** `app/layout.jsx` in the root of your `app/` directory with the provided layout file.
3. **Ensure** you have the following assets in `public/`:
   - `rocket-logo.svg`
   - `hypepad-banner.jpg`
4. **Check** that your `next.config.js` allows absolute imports (if using `@/components`):
   ```js
   // next.config.js
   module.exports = {
     compiler: {
       // Enables the styled-components SWC transform
       styledComponents: true
     },
     webpack: (config) => {
       config.resolve.alias['@'] = path.resolve(__dirname);
       return config;
     }
   };
   ```
5. **Redeploy** your app.  
6. **Open** the browser console to confirm you see `Navbar loaded`. If not, the component isn't being mounted.

This ensures the Navbar renders before your content, all links are active, and the mobile dropdown works.