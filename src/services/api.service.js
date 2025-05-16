import axios from 'axios';

// L'API UBeer est accessible via le proxy configuré dans package.json
// eslint-disable-next-line no-unused-vars
const API_URL = 'https://ubeer-mpkw.onrender.com';

// Configuration de l'API client utilisant le proxy local
const apiClient = axios.create({
  baseURL: '/api', // Utilisation du proxy défini dans setupProxy.js
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to handle authentication
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle errors globally
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle 401 Unauthorized errors (expired token, etc.)
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      // Redirect to login page if not already there
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    
    // Log des erreurs réseau pour faciliter le debugging
    if (error.message === 'Network Error') {
      console.error('Network Error detected - Verify that the proxy is correctly configured.');
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;
