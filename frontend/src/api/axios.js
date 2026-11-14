import axios from 'axios';

// Use Vite's same-origin proxy during development.
// This works whether the frontend is opened via localhost or a LAN IP.
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
