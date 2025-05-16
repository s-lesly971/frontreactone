import axios from 'axios';

// URL directe de l'API UBeer
const API_URL = 'https://ubeer-mpkw.onrender.com';

// Configuration de l'API client utilisant l'URL directe
const apiClient = axios.create({
  baseURL: API_URL,
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
