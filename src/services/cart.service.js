import apiClient from './api.service';

const CartService = {
  // Get all cart items
  getAllCartItems: async () => {
    try {
      const response = await apiClient.get('/cart');
      return response.data;
    } catch (error) {
      console.error('Error fetching cart items:', error);
      throw error;
    }
  },

  // Get a specific cart item by ID
  getCartItemById: async (id) => {
    try {
      const response = await apiClient.get(`/cart/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching cart item with ID ${id}:`, error);
      throw error;
    }
  },

  // Add item to cart
  addToCart: async (cartData) => {
    try {
      const response = await apiClient.post('/cart', cartData);
      return response.data;
    } catch (error) {
      console.error('Error adding item to cart:', error);
      throw error;
    }
  },

  // Update cart item
  updateCartItem: async (id, cartData) => {
    try {
      const response = await apiClient.patch(`/cart/${id}`, cartData);
      return response.data;
    } catch (error) {
      console.error(`Error updating cart item with ID ${id}:`, error);
      throw error;
    }
  },

  // Remove item from cart
  removeFromCart: async (id) => {
    try {
      const response = await apiClient.delete(`/cart/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error removing cart item with ID ${id}:`, error);
      throw error;
    }
  }
};

export default CartService;
