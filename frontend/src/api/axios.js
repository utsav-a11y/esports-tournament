import axios from 'react-axios';

// Using standard axios instance for API calls to Spring Boot
import rawAxios from 'axios';

const api = rawAxios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
