import apiClient from './api.service';

const UserService = {
  // Get all users
  getAllUsers: async () => {
    try {
      const response = await apiClient.get('/users');
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },

  // Get a specific user by ID
  getUserById: async (id) => {
    try {
      const response = await apiClient.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user with ID ${id}:`, error);
      throw error;
    }
  },

  // Register a new user
  registerUser: async (userData) => {
    try {
      const response = await apiClient.post('/users', userData);
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  },

  // Update a user
  updateUser: async (id, userData) => {
    try {
      const response = await apiClient.patch(`/users/${id}`, userData);
      return response.data;
    } catch (error) {
      console.error(`Error updating user with ID ${id}:`, error);
      throw error;
    }
  },

  // Delete a user
  deleteUser: async (id) => {
    try {
      const response = await apiClient.delete(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting user with ID ${id}:`, error);
      throw error;
    }
  },

  // Login (this would need to be connected to your authentication endpoint if available)
  login: async (credentials) => {
    try {
      // This is a placeholder - you would connect to your actual login endpoint
      const response = await apiClient.post('/login', credentials);
      // Store the token in localStorage
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      return response.data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  },

  // Logout
  logout: () => {
    UserService.clearAuth();
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    const token = localStorage.getItem('ubeer_token');
    return !!token;
  },

  // Get current user from localStorage
  getCurrentUser: () => {
    try {
      const user = localStorage.getItem('ubeer_user');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Erreur parsing user:', error);
      return null;
    }
  },

  // Set current user in localStorage
  setCurrentUser: (user) => {
    localStorage.setItem('ubeer_user', JSON.stringify(user));
  },

  // Set auth token
  setToken: (token) => {
    localStorage.setItem('ubeer_token', token);
  },

  // Get auth token
  getToken: () => {
    return localStorage.getItem('ubeer_token');
  },

  // Clear auth data
  clearAuth: () => {
    localStorage.removeItem('ubeer_token');
    localStorage.removeItem('ubeer_user');
  }
};

export default UserService;
