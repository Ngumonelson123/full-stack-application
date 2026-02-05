# GitHub Actions CI/CD Setup

## What This Does

When you push code to GitHub:
1. ✅ **Render auto-deploys** (already configured)
2. ✅ **GitHub Actions builds Docker images** and pushes to Docker Hub
3. ✅ **Both happen automatically** on every push to `master` branch

## Setup Instructions

### Step 1: Add GitHub Secrets

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Add these secrets:

   **Secret 1:**
   ```
   Name: DOCKER_USERNAME
   Value: ngumonelson123
   ```

   **Secret 2:**
   ```
   Name: DOCKER_PASSWORD
   Value: YOUR_DOCKER_HUB_PASSWORD
   ```

### Step 2: Push the Workflow Files

```bash
cd /home/nelson-ngumo/SD_Project/fovea-opticals-mern-master
git add .github/workflows/
git commit -m "Add GitHub Actions CI/CD pipeline" --no-verify
git push origin master
```

### Step 3: Verify It Works

1. Go to your GitHub repo
2. Click **"Actions"** tab
3. You should see workflows running
4. Check Docker Hub for new images with tags

## How It Works

### Render Auto-Deployment (Already Active)
- Render watches your `master` branch
- On push → Render rebuilds and redeploys
- No configuration needed (already set up)

### GitHub Actions (New)
- Triggers on push to `master` branch
- Builds Docker images for backend and frontend
- Pushes to Docker Hub with two tags:
  - `latest` - always points to newest build
  - `<commit-sha>` - specific version for rollback

## Workflow Files

### 1. `deploy.yml` - Full CI/CD Pipeline
- Builds Docker images
- Pushes to Docker Hub
- Shows deployment status
- Runs on every push

### 2. `docker-build.yml` - Docker Only
- Only builds and pushes Docker images
- Runs when backend/frontend code changes
- Lighter and faster

## Benefits

✅ **Automatic Deployments**: Push code → Everything updates
✅ **Docker Images**: Always have latest images on Docker Hub
✅ **Version Control**: Each commit gets a unique Docker tag
✅ **Rollback Ready**: Can deploy any previous version
✅ **No Manual Work**: Everything happens automatically

## Monitoring

### Check Render Deployments
- Dashboard: https://dashboard.render.com
- View logs and deployment status

### Check GitHub Actions
- Go to: https://github.com/YOUR_USERNAME/full-stack-application/actions
- See build status and logs

### Check Docker Hub
- Go to: https://hub.docker.com/u/ngumonelson123
- See new images with timestamps

## Workflow Triggers

Both workflows trigger on:
- Push to `master` branch
- Changes in `backend/` or `frontend/` directories

## Customization

### Change Branch
Edit `.github/workflows/*.yml`:
```yaml
on:
  push:
    branches: [ master, main, develop ]  # Add more branches
```

### Add Tests
Add before build step:
```yaml
- name: Run tests
  run: |
    cd backend
    npm install
    npm test
```

### Add Notifications
Add Slack/Discord webhook:
```yaml
- name: Notify Slack
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

## Troubleshooting

### Workflow fails with "unauthorized"
- Check Docker Hub credentials in GitHub Secrets
- Verify DOCKER_USERNAME and DOCKER_PASSWORD are correct

### Render not deploying
- Check Render dashboard for errors
- Verify branch name matches (master vs main)
- Check Render logs for build errors

### Docker images not updating
- Check GitHub Actions logs
- Verify Docker Hub credentials
- Check if workflow is triggered (Actions tab)

## Cost

**Everything is FREE!**
- GitHub Actions: 2,000 minutes/month free
- Docker Hub: Unlimited public images
- Render: Auto-deploys included in free tier

## Next Steps

1. Add secrets to GitHub
2. Push workflow files
3. Watch it work automatically!
4. Make a code change and push to test

Your deployment is now fully automated! 🚀
