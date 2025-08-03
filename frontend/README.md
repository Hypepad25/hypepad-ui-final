Fix for missing './providers/public' specifier error.

Updates:
- Added '@wagmi/core' dependency and uses its configureChains + publicProvider.
- Adjusted wallet/setup.jsx to import from '@wagmi/core' for chain setup and from 'wagmi' for React wrapper.

Apply:
cd frontend
rm -rf node_modules package-lock.json
npm ci
# ensure environment variable
echo "WALLETCONNECT_PROJECT_ID=your_project_id_here" > .env
npm run build
