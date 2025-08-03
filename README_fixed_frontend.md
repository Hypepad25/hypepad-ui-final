HYPEPAD Fixed Frontend Bundle
Source: recovered working Vite frontend (commit 63cde64 expected)
Structure: This contains the Vite-based React app under ./frontend

Quick start (requires Node.js and internet for dependency install):
    cd frontend
    npm ci
    # set any required environment variables, e.g. WALLETCONNECT_PROJECT_ID in .env
    npm run dev    # for local dev
    npm run build  # for production build

Deployment notes:
- Ensure the deployment root is ./frontend (not the upper-level `frontend` sibling that had conflicting App.jsx).
- Build output will be in dist/ by default.
- Ignore/move any legacy top-level App.jsx or other competing frontends from original ZIP; they were causing blank/black pages due to mismatched routing.
