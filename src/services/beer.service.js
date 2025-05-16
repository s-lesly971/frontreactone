import apiClient from './api.service';

// Données de secours au cas où l'API n'est pas accessible (problèmes CORS, etc.)
const FALLBACK_BEERS = [
  {
    id: 1,
    beer: 'IPA Blonde',
    price: 4.5,
    brewery_id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    beer: 'Stout Chocolat',
    price: 5.2,
    brewery_id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1523567830207-96731740fa71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    beer: 'Pale Ale Agrumes',
    price: 3.8,
    brewery_id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1518099074172-2e47ee6cfdc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    beer: 'Blanche de Blé',
    price: 4.0,
    brewery_id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const BeerService = {
  // Get all beers
  getAllBeers: async () => {
    try {
      const response = await apiClient.get('/beers');
      // Vérifie que la réponse est bien un tableau
      if (Array.isArray(response.data)) {
        return response.data;
      } else {
        console.error('API response is not an array:', response.data);
        return FALLBACK_BEERS;
      }
    } catch (error) {
      console.error('Error fetching beers:', error);
      // En cas d'erreur (CORS ou autre), on utilise les données de secours
      console.log('Utilisation des données de secours pour les bières');
      return FALLBACK_BEERS;
    }
  },

  // Get a specific beer by ID
  getBeerById: async (id) => {
    try {
      const response = await apiClient.get(`/beers/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching beer with ID ${id}:`, error);
      // En cas d'erreur, on cherche la bière dans les données de secours
      const fallbackBeer = FALLBACK_BEERS.find(beer => beer.id === parseInt(id));
      if (fallbackBeer) {
        console.log('Utilisation des données de secours pour la bière', id);
        return fallbackBeer;
      }
      throw error;
    }
  },

  // Create a new beer
  createBeer: async (beerData) => {
    try {
      const response = await apiClient.post('/beers', beerData);
      return response.data;
    } catch (error) {
      console.error('Error creating beer:', error);
      throw error;
    }
  },

  // Update an existing beer
  updateBeer: async (id, beerData) => {
    try {
      const response = await apiClient.put(`/beers/${id}`, beerData);
      return response.data;
    } catch (error) {
      console.error(`Error updating beer with ID ${id}:`, error);
      throw error;
    }
  },

  // Delete a beer
  deleteBeer: async (id) => {
    try {
      const response = await apiClient.delete(`/beers/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting beer with ID ${id}:`, error);
      throw error;
    }
  }
};

export default BeerService;
