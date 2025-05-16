import CartService from '../../services/cart.service';

/**
 * Utilitaire de test pour vérifier les opérations CRUD sur le panier
 */
class CartApiTest {
  constructor() {
    this.testResults = {
      getAllCartItems: { status: 'pending', data: null, error: null },
      getCartItemById: { status: 'pending', data: null, error: null },
      createCartItem: { status: 'pending', data: null, error: null },
      updateCartItem: { status: 'pending', data: null, error: null },
      deleteCartItem: { status: 'pending', data: null, error: null }
    };
    
    // Pour les tests du panier, nous avons besoin d'IDs d'utilisateur et de bière valides
    this.testCartItem = {
      user_id: 1, // Remplacer par un ID utilisateur valide
      beer_id: 1, // Remplacer par un ID de bière valide
      quantity: 2
    };
    
    this.createdCartItemId = null;
  }

  /**
   * Permet de définir les IDs d'utilisateur et de bière à utiliser pour les tests
   * @param {number} userId - ID de l'utilisateur
   * @param {number} beerId - ID de la bière
   */
  setTestIds(userId, beerId) {
    this.testCartItem.user_id = userId;
    this.testCartItem.beer_id = beerId;
    console.log(`Test configuré avec user_id=${userId} et beer_id=${beerId}`);
  }

  /**
   * Exécute tous les tests CRUD sur le panier
   */
  async runAllTests() {
    console.log('---- Démarrage des tests API pour le panier ----');
    
    try {
      // Étape 1: Récupérer tous les éléments du panier
      await this.testGetAllCartItems();
      
      // Étape 2: Créer un nouvel élément dans le panier
      await this.testCreateCartItem();
      
      // Étape 3: Récupérer l'élément du panier par ID
      if (this.createdCartItemId) {
        await this.testGetCartItemById(this.createdCartItemId);
      } else {
        this.testResults.getCartItemById.status = 'skipped';
        this.testResults.getCartItemById.error = 'Impossible de tester: aucun élément de panier créé';
      }
      
      // Étape 4: Mettre à jour l'élément du panier
      if (this.createdCartItemId) {
        await this.testUpdateCartItem(this.createdCartItemId);
      } else {
        this.testResults.updateCartItem.status = 'skipped';
        this.testResults.updateCartItem.error = 'Impossible de tester: aucun élément de panier créé';
      }
      
      // Étape 5: Supprimer l'élément du panier
      if (this.createdCartItemId) {
        await this.testDeleteCartItem(this.createdCartItemId);
      } else {
        this.testResults.deleteCartItem.status = 'skipped';
        this.testResults.deleteCartItem.error = 'Impossible de tester: aucun élément de panier créé';
      }
    } catch (error) {
      console.error('Erreur lors de l\'exécution des tests:', error);
    }
    
    // Afficher les résultats
    this.displayResults();
    
    return this.testResults;
  }

  /**
   * Teste la récupération de tous les éléments du panier
   */
  async testGetAllCartItems() {
    console.log('Test: Récupération de tous les éléments du panier');
    try {
      const cartItems = await CartService.getAllCartItems();
      this.testResults.getAllCartItems.status = 'success';
      this.testResults.getAllCartItems.data = `${cartItems.length} éléments de panier récupérés`;
      console.log(`✅ Succès: ${cartItems.length} éléments de panier récupérés`);
      return cartItems;
    } catch (error) {
      this.testResults.getAllCartItems.status = 'failed';
      this.testResults.getAllCartItems.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la création d'un élément dans le panier
   */
  async testCreateCartItem() {
    console.log('Test: Création d\'un élément dans le panier');
    try {
      const newCartItem = await CartService.addToCart(this.testCartItem);
      this.createdCartItemId = newCartItem.id;
      this.testResults.createCartItem.status = 'success';
      this.testResults.createCartItem.data = newCartItem;
      console.log(`✅ Succès: Élément ajouté au panier avec l'ID ${newCartItem.id}`);
      return newCartItem;
    } catch (error) {
      this.testResults.createCartItem.status = 'failed';
      this.testResults.createCartItem.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la récupération d'un élément du panier par ID
   */
  async testGetCartItemById(id) {
    console.log(`Test: Récupération de l'élément du panier avec l'ID ${id}`);
    try {
      const cartItem = await CartService.getCartItemById(id);
      this.testResults.getCartItemById.status = 'success';
      this.testResults.getCartItemById.data = cartItem;
      console.log(`✅ Succès: Élément du panier récupéré (quantité: ${cartItem.quantity})`);
      return cartItem;
    } catch (error) {
      this.testResults.getCartItemById.status = 'failed';
      this.testResults.getCartItemById.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la mise à jour d'un élément du panier
   */
  async testUpdateCartItem(id) {
    console.log(`Test: Mise à jour de l'élément du panier avec l'ID ${id}`);
    try {
      const updatedData = {
        user_id: this.testCartItem.user_id,
        beer_id: this.testCartItem.beer_id,
        quantity: this.testCartItem.quantity + 1
      };
      
      const updatedCartItem = await CartService.updateCartItem(id, updatedData);
      this.testResults.updateCartItem.status = 'success';
      this.testResults.updateCartItem.data = updatedCartItem;
      console.log(`✅ Succès: Élément du panier mis à jour avec la quantité ${updatedCartItem.quantity}`);
      return updatedCartItem;
    } catch (error) {
      this.testResults.updateCartItem.status = 'failed';
      this.testResults.updateCartItem.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la suppression d'un élément du panier
   */
  async testDeleteCartItem(id) {
    console.log(`Test: Suppression de l'élément du panier avec l'ID ${id}`);
    try {
      const result = await CartService.removeFromCart(id);
      this.testResults.deleteCartItem.status = 'success';
      this.testResults.deleteCartItem.data = result;
      console.log('✅ Succès: Élément du panier supprimé');
      return result;
    } catch (error) {
      this.testResults.deleteCartItem.status = 'failed';
      this.testResults.deleteCartItem.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Affiche les résultats des tests
   */
  displayResults() {
    console.log('\n---- Résultats des tests API pour le panier ----');
    Object.entries(this.testResults).forEach(([testName, result]) => {
      const emoji = result.status === 'success' ? '✅' : result.status === 'pending' ? '⏳' : '❌';
      console.log(`${emoji} ${testName}: ${result.status}`);
      if (result.status === 'failed' && result.error) {
        console.log(`   Erreur: ${result.error}`);
      }
    });
    console.log('------------------------------------------------\n');
  }
}

export default CartApiTest;
