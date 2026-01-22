#!/bin/bash

# Fovea Opticals - DevOps Deployment Scripts

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed
check_docker() {
    if ! command -v docker &> /dev/null; then
        log_error "Docker is not installed. Please install Docker first."
        exit 1
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        log_error "Docker Compose is not installed. Please install Docker Compose first."
        exit 1
    fi
    
    log_success "Docker and Docker Compose are installed"
}

# Build and push Docker images
build_and_push() {
    local service=$1
    local tag=${2:-latest}
    
    log_info "Building $service image..."
    
    if [ "$service" = "backend" ]; then
        docker build -t $DOCKER_USERNAME/fovea-opticals-backend:$tag ./backend
        docker push $DOCKER_USERNAME/fovea-opticals-backend:$tag
    elif [ "$service" = "frontend" ]; then
        docker build -t $DOCKER_USERNAME/fovea-opticals-frontend:$tag ./frontend
        docker push $DOCKER_USERNAME/fovea-opticals-frontend:$tag
    else
        log_error "Unknown service: $service"
        exit 1
    fi
    
    log_success "$service image built and pushed successfully"
}

# Deploy locally with Docker Compose
deploy_local() {
    log_info "Starting local deployment with Docker Compose..."
    
    # Check if .env file exists
    if [ ! -f "./backend/.env" ]; then
        log_warning "Backend .env file not found. Creating template..."
        cp ./backend/.env.example ./backend/.env 2>/dev/null || true
    fi
    
    # Start services
    docker-compose up -d
    
    log_success "Local deployment started!"
    log_info "Frontend: http://localhost:3000"
    log_info "Backend: http://localhost:5000"
    log_info "MongoDB: localhost:27017"
}

# Stop local deployment
stop_local() {
    log_info "Stopping local deployment..."
    docker-compose down
    log_success "Local deployment stopped"
}

# Clean up Docker resources
cleanup() {
    log_info "Cleaning up Docker resources..."
    docker-compose down -v
    docker system prune -f
    log_success "Cleanup completed"
}

# Deploy to Render
deploy_render() {
    log_info "Deploying to Render..."
    
    # Check if render CLI is installed
    if ! command -v render &> /dev/null; then
        log_warning "Render CLI not found. Please install it first:"
        log_info "npm install -g @render/cli"
        exit 1
    fi
    
    # Deploy backend
    log_info "Deploying backend to Render..."
    cd backend && render deploy && cd ..
    
    # Deploy frontend
    log_info "Deploying frontend to Render..."
    cd frontend && render deploy && cd ..
    
    log_success "Deployment to Render completed!"
}

# Setup MongoDB Atlas connection
setup_mongodb() {
    log_info "Setting up MongoDB connection..."
    
    read -p "Enter your MongoDB Atlas connection string: " mongodb_uri
    
    # Update .env file
    if [ -f "./backend/.env" ]; then
        sed -i "s|MONGODB_URI=.*|MONGODB_URI=$mongodb_uri|" ./backend/.env
    else
        echo "MONGODB_URI=$mongodb_uri" > ./backend/.env
        echo "JWT_SECRET=f400435f518f3984ba54600353f8be3a60a09acbe12bfb0095f1f3cf8eeb8b66" >> ./backend/.env
        echo "NODE_ENV=development" >> ./backend/.env
        echo "PORT=5000" >> ./backend/.env
    fi
    
    log_success "MongoDB connection configured"
}

# Main script logic
case "$1" in
    "setup")
        check_docker
        setup_mongodb
        ;;
    "dev")
        check_docker
        deploy_local
        ;;
    "stop")
        stop_local
        ;;
    "build")
        check_docker
        if [ -z "$DOCKER_USERNAME" ]; then
            log_error "Please set DOCKER_USERNAME environment variable"
            exit 1
        fi
        build_and_push backend
        build_and_push frontend
        ;;
    "deploy")
        deploy_render
        ;;
    "cleanup")
        cleanup
        ;;
    *)
        echo "Fovea Opticals - DevOps Deployment Scripts"
        echo ""
        echo "Usage: $0 {setup|dev|stop|build|deploy|cleanup}"
        echo ""
        echo "Commands:"
        echo "  setup    - Setup MongoDB connection and check dependencies"
        echo "  dev      - Start local development environment"
        echo "  stop     - Stop local development environment"
        echo "  build    - Build and push Docker images to Docker Hub"
        echo "  deploy   - Deploy to Render"
        echo "  cleanup  - Clean up Docker resources"
        echo ""
        echo "Examples:"
        echo "  $0 setup                    # Initial setup"
        echo "  $0 dev                      # Start local development"
        echo "  DOCKER_USERNAME=myuser $0 build  # Build and push images"
        echo "  $0 deploy                   # Deploy to production"
        exit 1
        ;;
esac