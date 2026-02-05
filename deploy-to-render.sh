#!/bin/bash

echo "🚀 Fovea Opticals - Render Deployment Checklist"
echo "================================================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Git not initialized"
    echo "   Run: git init"
    exit 1
else
    echo "✅ Git initialized"
fi

# Check if remote is set
if ! git remote -v | grep -q origin; then
    echo "⚠️  No git remote 'origin' found"
    echo "   Create a GitHub repo and run:"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/fovea-opticals.git"
else
    echo "✅ Git remote configured"
    git remote -v | head -1
fi

echo ""
echo "📋 Deployment Steps:"
echo ""
echo "1️⃣  Push to GitHub:"
echo "   git add ."
echo "   git commit -m 'Deploy to Render' --no-verify"
echo "   git push origin main"
echo ""
echo "2️⃣  Deploy Backend (Render):"
echo "   • Go to: https://dashboard.render.com"
echo "   • New + → Web Service"
echo "   • Connect your GitHub repo"
echo "   • Root Directory: backend"
echo "   • Build: npm install"
echo "   • Start: npm start"
echo "   • Add env vars:"
echo "     - NODE_ENV=production"
echo "     - MONGODB_URI=mongodb+srv://nelsonmbui88:kk4OQx1W9M7xdNJS@fovea-opticals.ssmjxuv.mongodb.net/"
echo ""
echo "3️⃣  Deploy Frontend (Render):"
echo "   • New + → Static Site"
echo "   • Root Directory: frontend"
echo "   • Build: npm install && npm run build"
echo "   • Publish: build"
echo "   • Add env var:"
echo "     - REACT_APP_API_URL=https://YOUR-BACKEND-URL.onrender.com/api"
echo ""
echo "4️⃣  Update Backend CORS:"
echo "   • Add env var to backend:"
echo "     - FRONTEND_URL=https://YOUR-FRONTEND-URL.onrender.com"
echo ""
echo "📖 Full guide: See RENDER_DEPLOYMENT.md"
echo ""
