// frontend/src/services/api.js - CORRECTED
import axios from 'axios';

// API Base URL - use environment variable in production, relative path in development
const API_BASE_URL = process.env.REACT_APP_API_URL || '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add auth token to all requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const opticiansAPI = {
  getAll: () => api.get('/opticians'),
  getById: (id) => api.get(`/opticians/${id}`),
  create: (data) => api.post('/opticians', data),
  update: (id, data) => api.put(`/opticians/${id}`, data),
  delete: (id) => api.delete(`/opticians/${id}`)
};

export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
  getMe: () => api.get('/auth/me')
};

export const appointmentsAPI = {
  create: (data) => api.post('/appointments', data),
  getAll: () => api.get('/appointments'),
  update: (id, data) => api.put(`/appointments/${id}`, data),
  delete: (id) => api.delete(`/appointments/${id}`)
};

export default api;