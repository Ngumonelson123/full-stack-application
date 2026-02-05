# Deploying Fovea Opticals to Render

## Prerequisites
- GitHub account
- Render account (sign up at https://render.com)
- MongoDB Atlas database (already configured)

## Step 1: Push Code to GitHub

```bash
cd /home/nelson-ngumo/SD_Project/fovea-opticals-mern-master

# Initialize git if not already done
git init

# Add all files
git add .

# Commit changes
git commit -m "Prepare for Render deployment" --no-verify

# Create GitHub repository and push
# Go to https://github.com/new and create a new repository named "fovea-opticals"
# Then run:
git remote add origin https://github.com/YOUR_USERNAME/fovea-opticals.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy Backend to Render

1. **Go to Render Dashboard**: https://dashboard.render.com
2. **Click "New +"** → Select **"Web Service"**
3. **Connect GitHub Repository**:
   - Click "Connect account" if not connected
   - Select your `fovea-opticals` repository
4. **Configure Backend Service**:
   - **Name**: `fovea-opticals-backend`
   - **Region**: Choose closest to you (e.g., Oregon, Frankfurt)
   - **Branch**: `main`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`

5. **Add Environment Variables**:
   Click "Advanced" → "Add Environment Variable":
   ```
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=mongodb+srv://nelsonmbui88:kk4OQx1W9M7xdNJS@fovea-opticals.ssmjxuv.mongodb.net/fovea-opticals?retryWrites=true&w=majority
   ```

6. **Click "Create Web Service"**
7. **Wait for deployment** (5-10 minutes)
8. **Copy your backend URL**: `https://fovea-opticals-backend.onrender.com`

## Step 3: Deploy Frontend to Render

### Option A: Static Site (Recommended - Free)

1. **Go to Render Dashboard**
2. **Click "New +"** → Select **"Static Site"**
3. **Connect Same Repository**
4. **Configure Frontend**:
   - **Name**: `fovea-opticals-frontend`
   - **Branch**: `main`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `build`

5. **Add Environment Variable**:
   ```
   REACT_APP_API_URL=https://fovea-opticals-backend.onrender.com/api
   ```

6. **Click "Create Static Site"**
7. **Wait for deployment** (5-10 minutes)
8. **Your frontend URL**: `https://fovea-opticals-frontend.onrender.com`

### Option B: Web Service with Nginx (Alternative)

1. **Click "New +"** → **"Web Service"**
2. **Configure**:
   - **Name**: `fovea-opticals-frontend`
   - **Root Directory**: `frontend`
   - **Environment**: `Docker`
   - **Dockerfile Path**: `frontend/Dockerfile`

3. **Add Environment Variable**:
   ```
   REACT_APP_API_URL=https://fovea-opticals-backend.onrender.com/api
   ```

## Step 4: Update Backend CORS

After frontend is deployed, update backend environment variable:

1. Go to backend service in Render
2. Click "Environment"
3. Add new variable:
   ```
   FRONTEND_URL=https://fovea-opticals-frontend.onrender.com
   ```
4. Click "Save Changes" (will trigger redeploy)

## Step 5: Test Your Deployment

1. **Backend Health Check**: 
   - Visit: `https://fovea-opticals-backend.onrender.com/api/health`
   - Should return: `{"status":"OK","database":"connected"}`

2. **Frontend**:
   - Visit: `https://fovea-opticals-frontend.onrender.com`
   - Test booking an appointment

## Important Notes

### Free Tier Limitations
- Backend spins down after 15 minutes of inactivity
- First request after spin-down takes 30-60 seconds
- 750 hours/month free (enough for 1 service)

### MongoDB Atlas
- Already configured and working
- Ensure IP whitelist includes `0.0.0.0/0` for Render access

### Custom Domain (Optional)
1. Go to your Render service
2. Click "Settings" → "Custom Domain"
3. Add your domain and follow DNS instructions

## Troubleshooting

### Backend won't start
- Check logs in Render dashboard
- Verify MONGODB_URI is correct
- Ensure MongoDB Atlas allows connections from anywhere

### Frontend can't reach backend
- Verify REACT_APP_API_URL is set correctly
- Check backend CORS allows frontend URL
- Check browser console for errors

### Database connection fails
- Go to MongoDB Atlas
- Network Access → Add IP: `0.0.0.0/0`
- Database Access → Verify user credentials

## Your Deployed URLs

After deployment, you'll have:
- **Backend API**: `https://fovea-opticals-backend.onrender.com`
- **Frontend**: `https://fovea-opticals-frontend.onrender.com`

## Monitoring

- **Render Dashboard**: View logs, metrics, and deployment status
- **MongoDB Atlas**: Monitor database usage and performance
- **Health Endpoint**: `https://fovea-opticals-backend.onrender.com/api/health`

## Updating Your App

```bash
# Make changes to your code
git add .
git commit -m "Your update message" --no-verify
git push origin main

# Render will automatically detect changes and redeploy
```

## Cost Optimization

**Current Setup (FREE)**:
- Backend: Free tier (750 hours/month)
- Frontend: Free static site (unlimited)
- Database: MongoDB Atlas Free tier (512MB)

**To Upgrade**:
- Backend: $7/month (always on, no spin-down)
- Frontend: Free (static sites are always free)
- Database: $9/month (2GB, better performance)
