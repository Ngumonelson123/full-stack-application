# 🆓 Render Free Tier - Manual Setup (No Payment Required)

## Why Manual Setup Works
- **Blueprint** requires payment info (even for free services)
- **Manual creation** uses free tier without payment info
- **Same auto-deploy features** once connected

## Step 1: Deploy Backend (Web Service)

1. **Go to Render Dashboard**
   - Visit [render.com](https://render.com)
   - Sign up/login with GitHub

2. **Create Web Service**
   - Click "New +" → "Web Service"
   - **Don't use Blueprint** - select "Build and deploy from a Git repository"
   - Connect GitHub: `Ngumonelson123/full-stack-application`

3. **Configure Backend Service**
   ```
   Name: fovea-opticals-api
   Region: Oregon (US West)
   Branch: main
   Root Directory: backend
   Runtime: Node
   Build Command: npm install
   Start Command: npm start
   ```

4. **Environment Variables**
   ```
   NODE_ENV=production
   PORT=10000
   MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_jwt_secret_key
   ZOHO_MAIL=your_email@domain.com
   ZOHO_APP_PASSWORD=your_app_password
   ```

5. **Deploy**
   - Click "Create Web Service"
   - **Free tier selected automatically** (no payment needed)

## Step 2: Deploy Frontend (Static Site)

1. **Create Static Site**
   - Click "New +" → "Static Site"
   - Connect same GitHub repository
   - **Don't use Blueprint**

2. **Configure Frontend Service**
   ```
   Name: fovea-opticals-frontend
   Branch: main
   Root Directory: frontend
   Build Command: npm install && npm run build
   Publish Directory: build
   ```

3. **Environment Variables**
   ```
   REACT_APP_API_URL=https://fovea-opticals-api.onrender.com/api
   ```
   *(Replace with your actual backend URL after step 1)*

4. **Deploy**
   - Click "Create Static Site"
   - **Free tier automatically** (no payment needed)

## Step 3: Auto-Deploy Setup

### Both services will auto-deploy when you push to GitHub:
- ✅ **Auto-deploy enabled by default**
- ✅ **Watches main branch**
- ✅ **Deploys on every push**

### Your URLs will be:
- **Backend**: `https://fovea-opticals-api.onrender.com`
- **Frontend**: `https://fovea-opticals-frontend.onrender.com`

## Step 4: Update Frontend Environment

After backend is deployed:
1. Get backend URL from Render dashboard
2. Update frontend environment variable:
   ```
   REACT_APP_API_URL=https://your-actual-backend-url.onrender.com/api
   ```
3. Frontend will auto-redeploy with new API URL

## Free Tier Features
- ✅ **750 hours/month** (enough for 24/7 if optimized)
- ✅ **Auto-deploy from GitHub**
- ✅ **HTTPS certificates**
- ✅ **Custom domains**
- ⚠️ **Services sleep after 15min inactivity**

## Troubleshooting

### If Payment Required:
- **Don't use Blueprint** - use manual service creation
- **Select "Web Service" or "Static Site" directly**
- **Free tier should be default**

### If Still Asks for Payment:
- Try different region (Oregon, Frankfurt)
- Clear browser cache
- Use incognito mode
- Contact Render support

The key is **avoiding Blueprint** and creating services manually!