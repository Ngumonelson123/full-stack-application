# 🚀 Render + GitHub Deployment Guide

## Step 1: Secure Your Repository

### 1.1 Security Setup (CRITICAL)
```bash
# Run security check before any git operations
./git-security.sh check

# Use safe commit (includes security checks)
./git-security.sh commit "Initial commit with DevOps setup"

# Use safe push (includes security checks)
./git-security.sh push origin main
```

### 1.2 Environment Variables Setup
```bash
# Copy example files and customize
cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Edit with your actual values (NEVER commit these files)
nano backend/.env  # Add your MongoDB Atlas connection
```

### 1.3 Push to GitHub
```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit with DevOps setup"

# Add your GitHub repository
git remote add origin https://github.com/Ngumonelson123/full-stack-application.git
git branch -M main
git push -u origin main
```

### 1.2 Verify render.yaml
Make sure your `render.yaml` is in the root directory with correct configuration.

## Step 2: Create Render Account & Connect GitHub

### 2.1 Sign Up for Render
1. Go to [render.com](https://render.com)
2. Click "Get Started for Free"
3. Sign up with GitHub (recommended)

### 2.2 Connect GitHub Repository
1. In Render dashboard, click "New +"
2. Select "Blueprint"
3. Connect your GitHub account if not already connected
4. Select repository: `Ngumonelson123/full-stack-application`
5. Select branch: `main` (or `master` if that's your default)

## Step 3: Configure Blueprint Deployment

### 3.1 Blueprint Settings
```
Blueprint Name: Optical_Full_Stack
Repository: Ngumonelson123/full-stack-application
Branch: main
```

### 3.2 Environment Variables Setup
After blueprint creation, you'll need to set these environment variables:

#### For Backend Service (fovea-opticals-api):
```
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=f400435f518f3984ba54600353f8be3a60a09acbe12bfb0095f1f3cf8eeb8b66
ZOHO_MAIL=info@foveaopticals.com
ZOHO_APP_PASSWORD=your_zoho_app_password
```

## Step 4: MongoDB Atlas Setup

### 4.1 Create MongoDB Atlas Account
1. Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. Sign up for free account
3. Create new project: "Fovea Opticals"

### 4.2 Create Database Cluster
1. Click "Build a Database"
2. Choose "M0 Sandbox" (Free tier)
3. Select region closest to your users
4. Name cluster: "fovea-cluster"

### 4.3 Configure Database Access
1. Go to "Database Access"
2. Click "Add New Database User"
3. Create user with username/password
4. Set privileges to "Read and write to any database"

### 4.4 Configure Network Access
1. Go to "Network Access"
2. Click "Add IP Address"
3. Select "Allow Access from Anywhere" (0.0.0.0/0)
4. Or add Render's IP ranges for better security

### 4.5 Get Connection String
1. Go to "Database" → "Connect"
2. Choose "Connect your application"
3. Copy the connection string
4. Replace `<password>` with your database user password
5. Add database name: `/fovea-opticals`

Example:
```
mongodb+srv://username:password@cluster-name.xxxxx.mongodb.net/database-name?retryWrites=true&w=majority
```

## Step 5: Deploy to Render

### 5.1 Blueprint Deployment
1. In Render, create Blueprint with your repository
2. Review the services that will be created:
   - `fovea-opticals-api` (Backend)
   - `fovea-opticals-frontend` (Frontend)
3. Click "Apply"

### 5.2 Set Environment Variables
After deployment starts:

1. Go to `fovea-opticals-api` service
2. Click "Environment"
3. Add the required environment variables:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster-name.mongodb.net/database-name
   JWT_SECRET=your_jwt_secret_key_here
   ZOHO_MAIL=info@yourdomain.com
   ZOHO_APP_PASSWORD=your_app_password_here
   ```

### 5.3 Update Frontend API URL
1. Go to `fovea-opticals-frontend` service
2. Click "Environment"
3. Update `REACT_APP_API_URL`:
   ```
   REACT_APP_API_URL=https://fovea-opticals-api.onrender.com/api
   ```

## Step 6: Verify Deployment

### 6.1 Check Service Status
1. Both services should show "Live" status
2. Backend health check: `https://fovea-opticals-api.onrender.com/api/health`
3. Frontend: `https://fovea-opticals-frontend.onrender.com`

### 6.2 Test Application
1. Visit your frontend URL
2. Try registering a new user
3. Test login functionality
4. Check if API calls work

## Step 7: Automatic Deployments

### 7.1 Auto-Deploy Setup
- Render automatically deploys when you push to the connected branch
- Each service has `autoDeploy: true` in render.yaml

### 7.2 Manual Deploy
If needed, you can manually deploy:
1. Go to service dashboard
2. Click "Manual Deploy"
3. Select "Deploy latest commit"

## Step 8: Custom Domains (Optional)

### 8.1 Add Custom Domain
1. In service settings, go to "Custom Domains"
2. Add your domain (e.g., `api.foveaopticals.com`)
3. Update DNS records as instructed
4. SSL certificates are automatically provisioned

## Troubleshooting

### Common Issues:

1. **Build Failed**
   ```bash
   # Check build logs in Render dashboard
   # Ensure package.json scripts are correct
   ```

2. **Environment Variables Not Set**
   ```bash
   # Go to service → Environment
   # Add missing variables
   # Redeploy service
   ```

3. **MongoDB Connection Failed**
   ```bash
   # Verify connection string
   # Check network access settings
   # Ensure database user has correct permissions
   ```

4. **CORS Issues**
   ```bash
   # Update backend CORS settings
   # Add frontend domain to allowed origins
   ```

## Monitoring

### 8.1 Service Logs
- View real-time logs in Render dashboard
- Monitor for errors and performance issues

### 8.2 Metrics
- CPU and memory usage
- Request volume and response times
- Error rates

## Cost Management

### 8.3 Free Tier Limits
- 750 hours/month for web services
- Services sleep after 15 minutes of inactivity
- 100GB bandwidth/month

### 8.4 Upgrade Options
- Starter plan: $7/month (no sleep)
- Standard plan: $25/month (more resources)

## Next Steps

1. ✅ Set up monitoring and alerts
2. ✅ Configure custom domains
3. ✅ Set up staging environment
4. ✅ Implement CI/CD with GitHub Actions
5. ✅ Add database backups
6. ✅ Set up error tracking (Sentry)

Your application will be live at:
- **Frontend**: `https://fovea-opticals-frontend.onrender.com`
- **Backend**: `https://fovea-opticals-api.onrender.com`