# RainbowKit ConnectButton Presale Patch

## What's included
- Updated presale page with RainbowKit ConnectButton integration.
- Updated wallet/setup.js that exports ConnectButton and wraps the app with Wagmi/RainbowKit.
- Instructions to wire into existing app.

## Dependencies
Make sure your frontend/package.json includes:
{
  "@rainbow-me/rainbowkit": "^2.2.8",
  "wagmi": "^1.11.0",
  "viem": "^1.0.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.14.1"
}

## Setup
1. Add environment variable for WalletConnect v2:
   - Locally create .env with:
     WALLETCONNECT_PROJECT_ID=your_project_id

   - In production (Vercel) add `WALLETCONNECT_PROJECT_ID` to env settings.

2. Wrap your app in `main.jsx`:
```jsx
import { WalletProvider } from './wallet/setup.js';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <WalletProvider>
    <App />
  </WalletProvider>
);
```

3. Ensure routing includes Presale:
```jsx
import Presale from './pages/Presale.jsx';
<Route path="/presale" element={<Presale />} />
```

4. Commit:
```
git add src/pages/Presale.jsx src/wallet/setup.js
git commit -m "feat: add RainbowKit ConnectButton to presale page and updated wallet setup"
git push
```

5. Redeploy with updated env (clear cache).
