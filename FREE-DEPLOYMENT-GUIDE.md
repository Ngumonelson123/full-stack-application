# 🆓 Render Free Tier Deployment Guide

## Option 1: Manual Deployment (100% Free)

### Backend Deployment (Free Web Service)

1. **Create Backend Service**
   - Go to Render Dashboard
   - Click "New +" → "Web Service"
   - Connect GitHub repository: `Ngumonelson123/full-stack-application`
   - Configure:
     ```
     Name: fovea-opticals-api
     Region: Oregon (US West)
     Branch: main
     Root Directory: backend
     Runtime: Node
     Build Command: npm install
     Start Command: npm start
     ```

2. **Environment Variables**
   ```
   NODE_ENV=production
   PORT=10000
   MONGODB_URI=your_mongodb_atlas_connection
   JWT_SECRET=your_jwt_secret
   ZOHO_MAIL=your_email
   ZOHO_APP_PASSWORD=your_password
   ```

### Frontend Deployment (Free Static Site)

1. **Create Frontend Service**
   - Click "New +" → "Static Site"
   - Connect same GitHub repository
   - Configure:
     ```
     Name: fovea-opticals-frontend
     Branch: main
     Root Directory: frontend
     Build Command: npm install && npm run build
     Publish Directory: build
     ```

2. **Environment Variables**
   ```
   REACT_APP_API_URL=https://fovea-opticals-api.onrender.com/api
   ```

## Option 2: Individual Service Files

### Backend render.yaml (backend/render.yaml)
```yaml
services:
  - type: web
    name: fovea-opticals-api
    env: node
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 10000
      - key: MONGODB_URI
        sync: false
      - key: JWT_SECRET
        sync: false
```

### Frontend render.yaml (frontend/render.yaml)
```yaml
services:
  - type: web
    name: fovea-opticals-frontend
    env: static
    buildCommand: npm install && npm run build
    staticPublishPath: ./build
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
```

## Free Tier Limitations

- **Web Services**: Sleep after 15 minutes of inactivity
- **Build Time**: 90 seconds max
- **Bandwidth**: 100GB/month
- **Build Minutes**: 500 minutes/month

## Cost-Free Alternatives

### 1. Netlify + Railway
- **Frontend**: Netlify (free static hosting)
- **Backend**: Railway (free tier with 500 hours)

### 2. Vercel + PlanetScale
- **Frontend**: Vercel (free)
- **Backend**: Vercel API routes (free)
- **Database**: PlanetScale (free tier)

### 3. GitHub Pages + Heroku
- **Frontend**: GitHub Pages (free)
- **Backend**: Heroku (free dyno hours)

Would you like me to set up any of these alternatives?