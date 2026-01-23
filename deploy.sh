#!/bin/bash
# Fovea Opticals - DevOps Deployment Script (Docker Hub Images)
# Commands:
#   setup   - Setup MongoDB connection + check dependencies
#   dev     - Pull images from Docker Hub and run docker compose
#   stop    - Stop containers
#   build   - Build + push images to Docker Hub
#   up      - Pull + run (same as dev)
#   logs    - View logs
#   cleanup - Remove containers/volumes + prune docker

set -euo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_info()    { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
log_error()   { echo -e "${RED}[ERROR]${NC} $1"; }

ensure_compose_alias() {
  if command -v docker-compose &>/dev/null; then
    return 0
  fi

  if docker compose version &>/dev/null; then
    sudo tee /usr/local/bin/docker-compose >/dev/null <<'EOF'
#!/bin/sh
exec docker compose "$@"
EOF
    sudo chmod +x /usr/local/bin/docker-compose
  fi
}

check_docker() {
  if ! command -v docker &>/dev/null; then
    log_error "Docker is not installed. Please install Docker first."
    exit 1
  fi

  ensure_compose_alias

  if ! command -v docker-compose &>/dev/null; then
    log_error "Docker Compose is not installed. Install docker-compose-plugin:"
    log_info  "sudo apt install -y docker-compose-plugin"
    exit 1
  fi

  log_success "Docker and Docker Compose are installed"
}

require_docker_username() {
  if [ -z "${DOCKER_USERNAME:-}" ]; then
    log_error "Please set DOCKER_USERNAME environment variable"
    log_info  "Example: DOCKER_USERNAME=ngumonelson123 $0 build"
    exit 1
  fi
}

# Build and push Docker images
build_and_push() {
  local service="$1"
  local tag="${2:-latest}"

  log_info "Building $service image..."

  if [ "$service" = "backend" ]; then
    docker build --no-cache -t "${DOCKER_USERNAME}/fovea-opticals-backend:${tag}" ./backend
    docker push "${DOCKER_USERNAME}/fovea-opticals-backend:${tag}"
  elif [ "$service" = "frontend" ]; then
    docker build --no-cache -t "${DOCKER_USERNAME}/fovea-opticals-frontend:${tag}" ./frontend
    docker push "${DOCKER_USERNAME}/fovea-opticals-frontend:${tag}"
  else
    log_error "Unknown service: $service"
    exit 1
  fi

  log_success "$service image built and pushed successfully"
}

# Local deployment (Docker Hub images only)
deploy_local() {
  log_info "Starting local deployment using Docker Hub images..."

  # Ensure backend env exists
  if [ ! -f "./backend/.env" ]; then
    log_warning "backend/.env not found. Creating from backend/.env.example if available..."
    cp ./backend/.env.example ./backend/.env 2>/dev/null || true
  fi

  # Export DOCKER_USERNAME so compose can use it (image: ${DOCKER_USERNAME}/xxx)
  if [ -n "${DOCKER_USERNAME:-}" ]; then
    export DOCKER_USERNAME
  else
    log_warning "DOCKER_USERNAME not set. Compose must use fixed image names (not variables)."
  fi

  # Pull latest images
  docker-compose pull

  # Start services
  docker-compose up -d --remove-orphans

  log_success "Local deployment started!"
  log_info "Frontend: http://localhost:3000"
  log_info "Backend:  http://localhost:5000"
  log_info "MongoDB:  http://localhost:27017"
}

stop_local() {
  log_info "Stopping local deployment..."
  docker-compose down
  log_success "Local deployment stopped"
}

cleanup() {
  log_info "Cleaning up Docker resources..."
  docker-compose down -v || true
  docker system prune -f
  log_success "Cleanup completed"
}

setup_mongodb() {
  log_info "Setting up MongoDB connection..."
  read -r -p "Enter your MongoDB connection string (Atlas or Local): " mongodb_uri

  if [ ! -f "./backend/.env" ]; then
    touch ./backend/.env
  fi

  if grep -q '^MONGODB_URI=' ./backend/.env; then
    sed -i "s|^MONGODB_URI=.*|MONGODB_URI=${mongodb_uri}|" ./backend/.env
  else
    echo "MONGODB_URI=${mongodb_uri}" >> ./backend/.env
  fi

  log_success "MongoDB connection configured in backend/.env"
}

show_logs() {
  log_info "Showing logs..."
  docker-compose logs -f --tail=100
}

usage() {
  echo "Fovea Opticals - DevOps Deployment Scripts"
  echo ""
  echo "Usage: $0 {setup|dev|up|stop|build|logs|cleanup}"
  echo ""
  echo "Commands:"
  echo "  setup    - Setup MongoDB connection"
  echo "  dev/up   - Pull Docker Hub images and start containers"
  echo "  stop     - Stop local containers"
  echo "  build    - Build + push images to Docker Hub"
  echo "  logs     - Follow logs"
  echo "  cleanup  - Clean docker resources"
  echo ""
  echo "Examples:"
  echo "  $0 setup"
  echo "  DOCKER_USERNAME=ngumonelson123 $0 build"
  echo "  DOCKER_USERNAME=ngumonelson123 $0 dev"
}

case "${1:-}" in
  setup)
    check_docker
    setup_mongodb
    ;;
  dev|up)
    check_docker
    deploy_local
    ;;
  stop)
    check_docker
    stop_local
    ;;
  build)
    check_docker
    require_docker_username
    build_and_push backend latest
    build_and_push frontend latest
    log_success "Images pushed to Docker Hub successfully!"
    ;;
  logs)
    check_docker
    show_logs
    ;;
  cleanup)
    check_docker
    cleanup
    ;;
  *)
    usage
    exit 1
    ;;
esac
