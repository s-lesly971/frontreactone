import apiClient from './api.service';

const BreweryService = {
  // Get all breweries
  getAllBreweries: async () => {
    try {
      const response = await apiClient.get('/brewery');
      return response.data;
    } catch (error) {
      console.error('Error fetching breweries:', error);
      throw error;
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
