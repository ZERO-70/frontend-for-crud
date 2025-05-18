import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Create axios instance with base URL
const api = axios.create({
  baseURL: API_BASE_URL
});

// Education API calls
export const educationService = {
  getAll: () => api.get('/education'),
  getById: (id) => api.get(`/education/${id}`),
  create: (data) => api.post('/education', data),
  update: (id, data) => api.put(`/education/${id}`, data),
  delete: (id) => api.delete(`/education/${id}`)
};

// Skills API calls
export const skillsService = {
  getAll: () => api.get('/skills'),
  getById: (id) => api.get(`/skills/${id}`),
  create: (data) => api.post('/skills', data),
  update: (id, data) => api.put(`/skills/${id}`, data),
  delete: (id) => api.delete(`/skills/${id}`)
};

// Projects API calls
export const projectsService = {
  getAll: () => api.get('/projects'),
  getById: (id) => api.get(`/projects/${id}`),
  create: (data) => api.post('/projects', data),
  update: (id, data) => api.put(`/projects/${id}`, data),
  delete: (id) => api.delete(`/projects/${id}`)
};

// Experiences API calls
export const experiencesService = {
  getAll: () => api.get('/experiences'),
  getById: (id) => api.get(`/experiences/${id}`),
  create: (data) => api.post('/experiences', data),
  update: (id, data) => api.put(`/experiences/${id}`, data),
  delete: (id) => api.delete(`/experiences/${id}`)
};

const apiServices = {
  educationService,
  skillsService,
  projectsService,
  experiencesService
};

export default apiServices;
