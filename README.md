# 👁️ Fovea Opticals - Full Stack Optical Clinic Management System

A modern, full-stack web application for managing optical clinic operations, including appointment booking, service management, and optician profiles.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://fovea-opticals-frontend.onrender.com)
[![Backend API](https://img.shields.io/badge/API-live-blue)](https://fovea-opticals-backend.onrender.com)
[![Docker](https://img.shields.io/badge/docker-ready-blue)](https://hub.docker.com/u/ngumonelson123)

## 🌟 Features

- 📅 **Appointment Booking System** - Real-time appointment scheduling with conflict detection
- 👨‍⚕️ **Optician Management** - Comprehensive profiles for eye care professionals
- 🔬 **Service Catalog** - Detailed eye care services with pricing
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🔒 **Secure Authentication** - JWT-based user authentication
- 🐳 **Docker Ready** - Fully containerized for easy deployment
- 🚀 **CI/CD Pipeline** - Automated deployments with GitHub Actions

## 🛠️ Tech Stack

### Frontend
- **React** 18.2.0 - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library

### Backend
- **Node.js** 18.x - Runtime environment
- **Express** 4.18.2 - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Nginx** - Reverse proxy and static file serving
- **GitHub Actions** - CI/CD automation
- **Render** - Cloud hosting platform

## 🚀 Live Demo

- **Frontend**: https://fovea-opticals-frontend.onrender.com
- **Backend API**: https://fovea-opticals-backend.onrender.com
- **Health Check**: https://fovea-opticals-backend.onrender.com/api/health
- **Docker Hub**: https://hub.docker.com/u/ngumonelson123

> **Note**: Free tier services may take 30-60 seconds to wake up after inactivity.

## 📦 Installation

### Prerequisites
- Node.js 18.x or higher
- MongoDB (local or Atlas)
- Docker & Docker Compose (optional)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ngumonelson123/full-stack-application.git
   cd full-stack-application
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your MongoDB URI
   npm start
   ```

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   npm start
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

### Docker Deployment

1. **Using Docker Compose**
   ```bash
   docker-compose up -d
   ```

2. **Access the application**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000
   - MongoDB: localhost:27017

## 📁 Project Structure

```
fovea-opticals/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── models/          # Database schemas
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Custom middleware
│   │   └── server.js        # Entry point
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   └── App.js           # Root component
│   ├── Dockerfile
│   ├── default.conf         # Nginx config
│   └── package.json
├── .github/
│   └── workflows/           # GitHub Actions
├── docker-compose.yml
└── README.md
```

## 🔧 Configuration

### Backend Environment Variables

Create `backend/.env`:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/fovea-opticals
JWT_SECRET=your-secret-key
FRONTEND_URL=http://localhost:3000
```

### Frontend Environment Variables

Create `frontend/.env`:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

## 🐳 Docker Images

Pre-built images available on Docker Hub:
- **Backend**: `ngumonelson123/fovea-opticals-backend:latest`
- **Frontend**: `ngumonelson123/fovea-opticals-frontend:latest`

Pull and run:
```bash
docker pull ngumonelson123/fovea-opticals-backend:latest
docker pull ngumonelson123/fovea-opticals-frontend:latest
```

## 🚀 Deployment

### Deploy to Render

See [RENDER_DEPLOYMENT.md](RENDER_DEPLOYMENT.md) for detailed instructions.

Quick steps:
1. Push code to GitHub
2. Connect repository to Render
3. Configure environment variables
4. Deploy automatically on push

### GitHub Actions CI/CD

See [.github/GITHUB_ACTIONS.md](.github/GITHUB_ACTIONS.md) for setup.

Automatic on every push:
- ✅ Build Docker images
- ✅ Push to Docker Hub
- ✅ Deploy to Render

## 📚 API Documentation

### Base URL
```
Production: https://fovea-opticals-backend.onrender.com/api
Local: http://localhost:5000/api
```

### Example Request
```bash
# Get all services
curl https://fovea-opticals-backend.onrender.com/api/services

# Book an appointment
curl -X POST https://fovea-opticals-backend.onrender.com/api/appointments \
  -H "Content-Type: application/json" \
  -d '{
    "patientName": "John Doe",
    "patientEmail": "john@example.com",
    "patientPhone": "0712345678",
    "appointmentDate": "2026-02-15T10:00:00",
    "service": "SERVICE_ID",
    "optician": "OPTICIAN_ID",
    "notes": "First visit"
  }'
```

### Endpoints

#### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get service by ID
- `POST /api/services` - Create service (auth required)
- `PUT /api/services/:id` - Update service (auth required)
- `DELETE /api/services/:id` - Delete service (auth required)

#### Opticians
- `GET /api/opticians` - Get all opticians
- `GET /api/opticians/:id` - Get optician by ID
- `POST /api/opticians` - Create optician (auth required)
- `PUT /api/opticians/:id` - Update optician (auth required)
- `DELETE /api/opticians/:id` - Delete optician (auth required)

#### Appointments
- `GET /api/appointments` - Get all appointments
- `POST /api/appointments` - Book appointment
- `PUT /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Cancel appointment

#### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

## 🧪 Testing

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test

# Test appointment booking locally
curl -X POST http://localhost:5000/api/appointments \
  -H "Content-Type: application/json" \
  -d '{"patientName":"Test User","patientEmail":"test@test.com","patientPhone":"0712345678","appointmentDate":"2026-02-15T10:00:00","service":"SERVICE_ID","optician":"OPTICIAN_ID"}'
```

## 📊 Database Schema

### Appointment
```javascript
{
  patientName: String,
  patientEmail: String,
  patientPhone: String,
  appointmentDate: Date,
  service: ObjectId (ref: Service),
  optician: ObjectId (ref: Optician),
  status: String,
  notes: String
}
```

### Service
```javascript
{
  name: String,
  description: String,
  duration: Number,
  price: Number,
  category: String,
  isActive: Boolean
}
```

### Optician
```javascript
{
  name: String,
  specialty: String,
  bio: String,
  imageUrl: String,
  experience: Number,
  isAvailable: Boolean
}
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature' --no-verify`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### Development Workflow

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature" --no-verify

# Push to GitHub (triggers CI/CD)
git push origin feature/new-feature

# Render auto-deploys on merge to master
```

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Nelson Ngumo**
- GitHub: [@Ngumonelson123](https://github.com/Ngumonelson123)
- Docker Hub: [ngumonelson123](https://hub.docker.com/u/ngumonelson123)

## 🙏 Acknowledgments

- MongoDB Atlas for database hosting
- Render for application hosting
- Unsplash for images
- React and Node.js communities

## 📞 Support

For support, open an issue on GitHub or contact the maintainer.

## 🎯 Project Status

- ✅ Backend deployed and running on Render
- ✅ Frontend deployed and running on Render
- ✅ MongoDB Atlas database connected
- ✅ Docker images published to Docker Hub
- ✅ CI/CD pipeline with GitHub Actions
- ✅ Appointment booking system functional
- ✅ Services and opticians management
- ✅ Responsive design for all devices

## 📈 Future Enhancements

- [ ] Admin dashboard for managing appointments
- [ ] Email notifications for appointments
- [ ] SMS reminders for patients
- [ ] Payment integration
- [ ] Patient portal with appointment history
- [ ] Real-time availability calendar
- [ ] Multi-language support
- [ ] Analytics and reporting

## 🔐 Security

- JWT-based authentication
- Password hashing with bcryptjs
- CORS configuration for API security
- Environment variables for sensitive data
- Input validation and sanitization
- MongoDB injection prevention

## 📊 Performance

- Docker containerization for consistent deployments
- Nginx for efficient static file serving
- MongoDB indexing for fast queries
- React code splitting for faster load times
- Gzip compression enabled
- CDN-ready architecture

---

⭐ **Star this repo if you find it helpful!**

📝 **Made with ❤️ by Nelson Ngumo**
