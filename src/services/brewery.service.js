import apiClient from './api.service';

const FALLBACK_BREWERIES = [];

const BreweryService = {
  // Get all breweries
  getAllBreweries: async () => {
    try {
      const response = await apiClient.get('/brewery');
      // Vérifie que la réponse est bien un tableau
      if (Array.isArray(response.data)) {
        return response.data;
      } else {
        console.error('API response is not an array:', response.data);
        return FALLBACK_BREWERIES;
      }
    } catch (error) {
      console.error('Error fetching breweries:', error);
      return FALLBACK_BREWERIES;
    }
  },

  // Get a specific brewery by ID
  getBreweryById: async (id) => {
    try {
      const response = await apiClient.get(`/brewery/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching brewery with ID ${id}:`, error);
      throw error;
    }
  },

  // Create a new brewery
  createBrewery: async (breweryData) => {
    try {
      const response = await apiClient.post('/brewery', breweryData);
      return response.data;
    } catch (error) {
      console.error('Error creating brewery:', error);
      throw error;
    }
  },

  // Update an existing brewery
  updateBrewery: async (id, breweryData) => {
    try {
      const response = await apiClient.put(`/brewery/${id}`, breweryData);
      return response.data;
    } catch (error) {
      console.error(`Error updating brewery with ID ${id}:`, error);
      throw error;
    }
  },

  // Delete a brewery
  deleteBrewery: async (id) => {
    try {
      const response = await apiClient.delete(`/brewery/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting brewery with ID ${id}:`, error);
      throw error;
    }
  }
};

export default BreweryService;
