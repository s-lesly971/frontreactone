import apiClient from './api.service';

/**
 * Service de test pour vérifier la connectivité API
 */
class TestService {
  // Test de connectivité générale
  async testConnection() {
    const results = {
      beers: { status: 'pending', data: null, error: null },
      brewery: { status: 'pending', data: null, error: null },
      cart: { status: 'pending', data: null, error: null },
      stripe: { status: 'pending', data: null, error: null }
    };

    console.log('🔍 Test de connectivité API UBeer...');

    // Test des bières
    try {
      const beersResponse = await apiClient.get('/beers');
      results.beers = {
        status: 'success',
        data: beersResponse.data,
        error: null
      };
      console.log('✅ Bières:', beersResponse.data?.length || 0, 'trouvées');
    } catch (error) {
      results.beers = {
        status: 'error',
        data: null,
        error: error.message
      };
      console.log('❌ Erreur bières:', error.message);
    }

    // Test des brasseries
    try {
      const breweryResponse = await apiClient.get('/brewery');
      results.brewery = {
        status: 'success',
        data: breweryResponse.data,
        error: null
      };
      console.log('✅ Brasseries:', breweryResponse.data?.length || 0, 'trouvées');
    } catch (error) {
      results.brewery = {
        status: 'error',
        data: null,
        error: error.message
      };
      console.log('❌ Erreur brasseries:', error.message);
    }

    // Test du panier
    try {
      const cartResponse = await apiClient.get('/cart');
      results.cart = {
        status: 'success',
        data: cartResponse.data,
        error: null
      };
      console.log('✅ Panier: API accessible');
    } catch (error) {
      results.cart = {
        status: 'error',
        data: null,
        error: error.message
      };
      console.log('❌ Erreur panier:', error.message);
    }

    // Test Stripe
    try {
      const stripeResponse = await apiClient.post('/stripe/checkout', {
        test: true
      });
      results.stripe = {
        status: 'success',
        data: stripeResponse.data,
        error: null
      };
      console.log('✅ Stripe: API accessible');
    } catch (error) {
      results.stripe = {
        status: 'error',
        data: null,
        error: error.message
      };
      console.log('❌ Erreur Stripe:', error.message);
    }

    return results;
  }

  // Test spécifique d'une route
  async testRoute(route) {
    try {
      console.log(`🔍 Test de la route: ${route}`);
      const response = await apiClient.get(route);
      console.log(`✅ Route ${route} accessible:`, response.status);
      return {
        success: true,
        status: response.status,
        data: response.data
      };
    } catch (error) {
      console.log(`❌ Route ${route} inaccessible:`, error.message);
      return {
        success: false,
        error: error.message,
        status: error.response?.status || 'unknown'
      };
    }
  }

  // Génère un rapport de santé de l'API
  async healthCheck() {
    const startTime = Date.now();
    const results = await this.testConnection();
    const endTime = Date.now();
    
    const summary = {
      timestamp: new Date().toISOString(),
      duration: endTime - startTime,
      totalTests: 4,
      successCount: 0,
      errorCount: 0,
      details: results
    };

    // Compter les succès et erreurs
    Object.values(results).forEach(result => {
      if (result.status === 'success') {
        summary.successCount++;
      } else {
        summary.errorCount++;
      }
    });

    summary.healthScore = (summary.successCount / summary.totalTests) * 100;

    console.log('📊 Rapport de santé API:');
    console.log(`- Score: ${summary.healthScore}%`);
    console.log(`- Succès: ${summary.successCount}/${summary.totalTests}`);
    console.log(`- Durée: ${summary.duration}ms`);

    return summary;
  }
}

const testService = new TestService();
export default testService;
