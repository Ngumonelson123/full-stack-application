# 🆓 100% Free Deployment (No Payment Required)

## Option 1: Netlify + Railway (Recommended)

### Frontend on Netlify (Free Forever)
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub: `Ngumonelson123/full-stack-application`
5. Configure:
   ```
   Base directory: frontend
   Build command: npm run build
   Publish directory: frontend/build
   ```
6. Environment variables:
   ```
   REACT_APP_API_URL=https://your-backend-url.up.railway.app/api
   ```

### Backend on Railway (Free $5 Credit)
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "Deploy from GitHub repo"
4. Select: `Ngumonelson123/full-stack-application`
5. Configure:
   ```
   Root Directory: backend
   Start Command: npm start
   ```
6. Environment variables:
   ```
   NODE_ENV=production
   PORT=3000
   MONGODB_URI=your_mongodb_atlas_connection
   JWT_SECRET=your_jwt_secret
   ```

## Option 2: Vercel (100% Free)

### Deploy Both on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import project: `Ngumonelson123/full-stack-application`

### Frontend Setup:
```
Framework Preset: Create React App
Root Directory: frontend
Build Command: npm run build
Output Directory: build
```

### Backend Setup (API Routes):
```
Framework Preset: Other
Root Directory: backend
Build Command: npm install
```

## Option 3: GitHub Pages + Heroku

### Frontend on GitHub Pages
1. In your repo, go to Settings → Pages
2. Source: Deploy from a branch
3. Branch: gh-pages
4. Add to package.json:
   ```json
   "homepage": "https://ngumonelson123.github.io/full-stack-application",
   "scripts": {
     "predeploy": "cd frontend && npm run build",
     "deploy": "gh-pages -d frontend/build"
   }
   ```

### Backend on Heroku
1. Go to [heroku.com](https://heroku.com)
2. Create new app
3. Connect GitHub repo
4. Set buildpack to Node.js
5. Add Procfile in backend/:
   ```
   web: node src/server.js
   ```

## Quick Setup Commands

### For Netlify + Railway:
```bash
# Add netlify.toml for frontend
echo '[build]
  base = "frontend"
  command = "npm run build"
  publish = "build"

[build.environment]
  NODE_VERSION = "18"' > netlify.toml

# Add railway.json for backend
echo '{
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm start",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}' > backend/railway.json
```

### For GitHub Pages:
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Deploy frontend
npm run deploy
```

All these options are 100% free with no payment info required!