import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './global.css';
import { WalletProvider } from './wallet/setup.jsx';

createRoot(document.getElementById('root')).render(
  <WalletProvider>
    <App />
  </WalletProvider>
);
