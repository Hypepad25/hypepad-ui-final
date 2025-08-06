# Wallet Setup Fix Patch

## Purpose
This patch fixes the previous parse error in wallet/setup.js and ensures correct integration with RainbowKit v2 and Wagmi v2.

## Included
- frontend/src/wallet/setup.js: corrected JSX syntax, proper export of WalletProvider and ConnectButton, uses required RainbowKit v2 / Wagmi v2 configuration.

## Steps to apply

1. **Copy file into your project**
   Place `frontend/src/wallet/setup.js` replacing any existing version.

2. **Ensure dependencies** in `frontend/package.json`:
   ```json
   {
     "@rainbow-me/rainbowkit": "^2.2.8",
     "wagmi": "^2.9.0",
     "viem": "^2.8.4"
   }
   ```

3. **Install dependencies**:
   ```bash
   cd frontend
   rm -rf node_modules package-lock.json
   npm ci
   ```

4. **Set WalletConnect project ID**
   Locally create `.env`:
   ```
   WALLETCONNECT_PROJECT_ID=your_real_project_id_here
   ```
   In production (Vercel), set the same environment variable in dashboard.

5. **Wrap your app**
   In your entry point (e.g., `main.jsx`):
   ```jsx
   import { WalletProvider } from './wallet/setup.js';
   import App from './App.jsx';
   createRoot(document.getElementById('root')).render(
     <WalletProvider>
       <App />
     </WalletProvider>
   );
   ```

6. **Use ConnectButton**
   Import where needed:
   ```jsx
   import { ConnectButton } from './wallet/setup.js';
   ```

7. **Build & deploy**
   ```bash
   npm run build
   git add src/wallet/setup.js package.json package-lock.json
   git commit -m "fix: wallet setup syntax and compat with RainbowKit v2"
   git push origin main
   ```

## Notes
- Make sure `WALLETCONNECT_PROJECT_ID` is set; without it WalletConnect v2 will not function properly.
- Clear cache in Vercel on redeploy to avoid stale dependency issues.
