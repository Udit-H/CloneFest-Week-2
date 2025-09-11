import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Update this if your backend uses a different port or path
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export default api;
