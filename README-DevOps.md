# Fovea Opticals - DevOps & Deployment Guide

## 🚀 Complete DevOps Setup

This project includes a full DevOps pipeline with Docker, CI/CD, and cloud deployment capabilities.

## 📋 Prerequisites

- Node.js 18+
- Docker & Docker Compose
- MongoDB Atlas account
- GitHub account
- Render account
- Docker Hub account (optional)

## 🛠 Quick Setup

### 1. MongoDB Setup
```bash
# Run the setup script
./deploy.sh setup
```

### 2. Local Development
```bash
# Start all services locally
./deploy.sh dev

# Access the application
# Frontend: http://localhost:3000
# Backend: http://localhost:5000/api
# MongoDB: localhost:27017
```

### 3. Stop Local Environment
```bash
./deploy.sh stop
```

## 🐳 Docker Deployment

### Local Docker Compose
```bash
# Start with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Build & Push Images
```bash
# Set your Docker Hub username
export DOCKER_USERNAME=your-dockerhub-username

# Build and push images
./deploy.sh build
```

## ☁️ Cloud Deployment

### Render Deployment

#### Backend Deployment
1. Create new Web Service on Render
2. Connect your GitHub repository
3. Set root directory to `backend`
4. Configure environment variables:
   ```
   NODE_ENV=production
   PORT=10000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ZOHO_MAIL=your_email
   ZOHO_APP_PASSWORD=your_app_password
   ```

#### Frontend Deployment
1. Create new Static Site on Render
2. Connect your GitHub repository
3. Set root directory to `frontend`
4. Set build command: `npm install && npm run build`
5. Set publish directory: `build`
6. Configure environment variable:
   ```
   REACT_APP_API_URL=https://your-backend-url.onrender.com/api
   ```

### Automated Deployment
```bash
# Deploy to Render (requires Render CLI)
./deploy.sh deploy
```

## 🔄 CI/CD Pipeline

### GitHub Actions Setup

1. **Add Repository Secrets:**
   ```
   DOCKER_USERNAME=your-dockerhub-username
   DOCKER_PASSWORD=your-dockerhub-password
   RENDER_API_KEY=your-render-api-key
   RENDER_BACKEND_SERVICE_ID=your-backend-service-id
   RENDER_FRONTEND_SERVICE_ID=your-frontend-service-id
   REACT_APP_API_URL=https://your-backend-url.onrender.com/api
   ```

2. **Pipeline Triggers:**
   - Push to `main` branch → Deploy to production
   - Push to `develop` branch → Build and test
   - Pull requests → Run tests only

3. **Pipeline Features:**
   - Automated testing
   - Docker image building
   - Multi-stage deployments
   - Automatic rollback on failure

## 📁 Project Structure

```
fovea-opticals-mern-master/
├── .github/workflows/          # CI/CD pipelines
├── backend/                    # Node.js API
│   ├── src/                   # Source code
│   ├── Dockerfile             # Backend container
│   ├── render.yaml            # Render config
│   └── .dockerignore          # Docker ignore
├── frontend/                   # React app
│   ├── src/                   # Source code
│   ├── Dockerfile             # Frontend container
│   ├── nginx.conf             # Nginx config
│   ├── render.yaml            # Render config
│   └── .dockerignore          # Docker ignore
├── docker-compose.yml          # Local development
├── deploy.sh                   # Deployment scripts
└── README-DevOps.md           # This file
```

## 🔧 Environment Variables

### Backend (.env)
```env
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/fovea-opticals
JWT_SECRET=your-secret-key
NODE_ENV=development
PORT=5000
ZOHO_MAIL=info@foveaopticals.com
ZOHO_APP_PASSWORD=your-app-password
```

### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:5000/api
```

## 🚀 Deployment Commands

```bash
# Setup and configuration
./deploy.sh setup              # Initial setup with MongoDB

# Local development
./deploy.sh dev                # Start local environment
./deploy.sh stop               # Stop local environment

# Docker operations
export DOCKER_USERNAME=myuser
./deploy.sh build              # Build and push Docker images

# Production deployment
./deploy.sh deploy             # Deploy to Render

# Maintenance
./deploy.sh cleanup            # Clean Docker resources
```

## 📊 Monitoring & Health Checks

### Health Check Endpoints
- Backend: `/api/health`
- Frontend: `/health`

### Docker Health Checks
- Automatic container health monitoring
- Restart policies for failed containers
- Resource usage monitoring

## 🔒 Security Features

- Non-root Docker containers
- Security headers in Nginx
- Environment variable encryption
- CORS protection
- JWT authentication
- Input validation

## 🔄 Scaling & Performance

### Horizontal Scaling
- Load balancer ready
- Stateless backend design
- Database connection pooling

### Performance Optimizations
- Gzip compression
- Static asset caching
- Docker multi-stage builds
- Nginx reverse proxy

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Failed**
   ```bash
   # Check connection string
   ./deploy.sh setup
   ```

2. **Docker Build Failed**
   ```bash
   # Clean Docker cache
   docker system prune -f
   ```

3. **Port Already in Use**
   ```bash
   # Stop conflicting services
   ./deploy.sh stop
   ```

### Logs
```bash
# Docker Compose logs
docker-compose logs -f [service-name]

# Individual container logs
docker logs fovea-backend
docker logs fovea-frontend
```

## 📈 Future Enhancements

- [ ] Kubernetes deployment
- [ ] Terraform infrastructure
- [ ] Monitoring with Prometheus
- [ ] Log aggregation with ELK
- [ ] Blue-green deployments
- [ ] Database migrations
- [ ] Backup automation
- [ ] SSL certificate automation

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Run tests locally
5. Submit pull request
6. CI/CD pipeline will test and deploy

## 📞 Support

For deployment issues:
1. Check the logs
2. Review environment variables
3. Verify network connectivity
4. Contact DevOps team