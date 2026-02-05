# 🚀 Quick Deployment Guide to Render

## What You Need
1. GitHub account
2. Render account (free): https://render.com
3. Your MongoDB Atlas is already configured ✅

## 🎯 Quick Steps

### Step 1: Push to GitHub (5 minutes)

```bash
cd /home/nelson-ngumo/SD_Project/fovea-opticals-mern-master

# Add all changes
git add .

# Commit
git commit -m "Ready for Render deployment" --no-verify

# Push to GitHub
git push origin master
```

If you don't have a GitHub remote set up:
```bash
# Create new repo at: https://github.com/new
# Name it: fovea-opticals
# Then:
git remote add origin https://github.com/YOUR_USERNAME/fovea-opticals.git
git push -u origin master
```

### Step 2: Deploy Backend (10 minutes)

1. Go to **https://dashboard.render.com**
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Fill in:
   ```
   Name: fovea-opticals-backend
   Region: Oregon (US West)
   Branch: master
   Root Directory: backend
   Environment: Node
   Build Command: npm install
   Start Command: npm start
   Instance Type: Free
   ```

5. Click **"Advanced"** and add Environment Variables:
   ```
   NODE_ENV = production
   PORT = 5000
   MONGODB_URI = mongodb+srv://nelsonmbui88:kk4OQx1W9M7xdNJS@fovea-opticals.ssmjxuv.mongodb.net/fovea-opticals?retryWrites=true&w=majority
   ```

6. Click **"Create Web Service"**
7. Wait 5-10 minutes for deployment
8. **COPY YOUR BACKEND URL**: `https://fovea-opticals-backend-XXXX.onrender.com`

### Step 3: Deploy Frontend (10 minutes)

1. Go back to **https://dashboard.render.com**
2. Click **"New +"** → **"Static Site"**
3. Select same GitHub repository
4. Fill in:
   ```
   Name: fovea-opticals-frontend
   Branch: master
   Root Directory: frontend
   Build Command: npm install && npm run build
   Publish Directory: build
   ```

5. Click **"Advanced"** and add Environment Variable:
   ```
   REACT_APP_API_URL = https://YOUR-BACKEND-URL.onrender.com/api
   ```
   ⚠️ Replace `YOUR-BACKEND-URL` with the URL from Step 2!

6. Click **"Create Static Site"**
7. Wait 5-10 minutes for deployment
8. **YOUR FRONTEND URL**: `https://fovea-opticals-frontend-XXXX.onrender.com`

### Step 4: Update Backend CORS (2 minutes)

1. Go to your **backend service** in Render
2. Click **"Environment"** in left sidebar
3. Click **"Add Environment Variable"**
4. Add:
   ```
   FRONTEND_URL = https://YOUR-FRONTEND-URL.onrender.com
   ```
   ⚠️ Replace with your actual frontend URL from Step 3!

5. Click **"Save Changes"** (will auto-redeploy)

### Step 5: Test! 🎉

1. Visit your frontend URL
2. Try booking an appointment
3. Check backend health: `https://YOUR-BACKEND-URL.onrender.com/api/health`

## 📝 Important Notes

### Free Tier Behavior
- Backend sleeps after 15 min of inactivity
- First request takes 30-60 seconds to wake up
- This is normal for free tier!

### MongoDB Atlas
Your database is already configured correctly ✅
- Connection string is in backend env vars
- IP whitelist should include `0.0.0.0/0`

### Troubleshooting

**Backend won't start?**
- Check logs in Render dashboard
- Verify MONGODB_URI is correct
- Check MongoDB Atlas Network Access allows `0.0.0.0/0`

**Frontend can't reach backend?**
- Verify `REACT_APP_API_URL` is set correctly
- Check backend `FRONTEND_URL` matches your frontend
- Look at browser console for errors

**Need help?**
- Render logs: Click service → "Logs" tab
- MongoDB logs: MongoDB Atlas → Clusters → Metrics

## 🎯 Your Final URLs

After deployment:
- **Frontend**: `https://fovea-opticals-frontend.onrender.com`
- **Backend**: `https://fovea-opticals-backend.onrender.com`
- **API Health**: `https://fovea-opticals-backend.onrender.com/api/health`

## 💰 Cost

**Everything is FREE!**
- Backend: Free tier (750 hours/month)
- Frontend: Free static hosting (unlimited)
- Database: MongoDB Atlas Free (512MB)

## 🔄 Updating Your App

```bash
# Make changes
git add .
git commit -m "Update message" --no-verify
git push origin master

# Render auto-deploys on push!
```

## 📚 More Details

See `RENDER_DEPLOYMENT.md` for comprehensive guide.
