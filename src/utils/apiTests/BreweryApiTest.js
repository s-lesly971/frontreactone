import BreweryService from '../../services/brewery.service';

/**
 * Utilitaire de test pour vérifier les opérations CRUD sur les brasseries
 */
class BreweryApiTest {
  constructor() {
    this.testResults = {
      getAllBreweries: { status: 'pending', data: null, error: null },
      getBreweryById: { status: 'pending', data: null, error: null },
      createBrewery: { status: 'pending', data: null, error: null },
      updateBrewery: { status: 'pending', data: null, error: null },
      deleteBrewery: { status: 'pending', data: null, error: null }
    };
    
    this.testBrewery = {
      name: "Brasserie Test " + new Date().getTime()
    };
    
    this.createdBreweryId = null;
  }

  /**
   * Exécute tous les tests CRUD sur les brasseries
   */
  async runAllTests() {
    console.log('---- Démarrage des tests API pour les brasseries ----');
    
    try {
      // Étape 1: Récupérer toutes les brasseries
      await this.testGetAllBreweries();
      
      // Étape 2: Créer une nouvelle brasserie
      await this.testCreateBrewery();
      
      // Étape 3: Récupérer la brasserie par ID
      if (this.createdBreweryId) {
        await this.testGetBreweryById(this.createdBreweryId);
      } else {
        this.testResults.getBreweryById.status = 'skipped';
        this.testResults.getBreweryById.error = 'Impossible de tester: aucune brasserie créée';
      }
      
      // Étape 4: Mettre à jour la brasserie
      if (this.createdBreweryId) {
        await this.testUpdateBrewery(this.createdBreweryId);
      } else {
        this.testResults.updateBrewery.status = 'skipped';
        this.testResults.updateBrewery.error = 'Impossible de tester: aucune brasserie créée';
      }
      
      // Étape 5: Supprimer la brasserie
      if (this.createdBreweryId) {
        await this.testDeleteBrewery(this.createdBreweryId);
      } else {
        this.testResults.deleteBrewery.status = 'skipped';
        this.testResults.deleteBrewery.error = 'Impossible de tester: aucune brasserie créée';
      }
    } catch (error) {
      console.error('Erreur lors de l\'exécution des tests:', error);
    }
    
    // Afficher les résultats
    this.displayResults();
    
    return this.testResults;
  }

  /**
   * Teste la récupération de toutes les brasseries
   */
  async testGetAllBreweries() {
    console.log('Test: Récupération de toutes les brasseries');
    try {
      const breweries = await BreweryService.getAllBreweries();
      this.testResults.getAllBreweries.status = 'success';
      this.testResults.getAllBreweries.data = `${breweries.length} brasseries récupérées`;
      console.log(`✅ Succès: ${breweries.length} brasseries récupérées`);
      return breweries;
    } catch (error) {
      this.testResults.getAllBreweries.status = 'failed';
      this.testResults.getAllBreweries.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la création d'une brasserie
   */
  async testCreateBrewery() {
    console.log('Test: Création d\'une brasserie');
    try {
      const newBrewery = await BreweryService.createBrewery(this.testBrewery);
      this.createdBreweryId = newBrewery.id;
      this.testResults.createBrewery.status = 'success';
      this.testResults.createBrewery.data = newBrewery;
      console.log(`✅ Succès: Brasserie créée avec l'ID ${newBrewery.id}`);
      return newBrewery;
    } catch (error) {
      this.testResults.createBrewery.status = 'failed';
      this.testResults.createBrewery.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la récupération d'une brasserie par ID
   */
  async testGetBreweryById(id) {
    console.log(`Test: Récupération de la brasserie avec l'ID ${id}`);
    try {
      const brewery = await BreweryService.getBreweryById(id);
      this.testResults.getBreweryById.status = 'success';
      this.testResults.getBreweryById.data = brewery;
      console.log(`✅ Succès: Brasserie "${brewery.name}" récupérée`);
      return brewery;
    } catch (error) {
      this.testResults.getBreweryById.status = 'failed';
      this.testResults.getBreweryById.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la mise à jour d'une brasserie
   */
  async testUpdateBrewery(id) {
    console.log(`Test: Mise à jour de la brasserie avec l'ID ${id}`);
    try {
      const updatedData = {
        name: this.testBrewery.name + " (Modifiée)"
      };
      
      const updatedBrewery = await BreweryService.updateBrewery(id, updatedData);
      this.testResults.updateBrewery.status = 'success';
      this.testResults.updateBrewery.data = updatedBrewery;
      console.log(`✅ Succès: Brasserie modifiée en "${updatedBrewery.name}"`);
      return updatedBrewery;
    } catch (error) {
      this.testResults.updateBrewery.status = 'failed';
      this.testResults.updateBrewery.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la suppression d'une brasserie
   */
  async testDeleteBrewery(id) {
    console.log(`Test: Suppression de la brasserie avec l'ID ${id}`);
    try {
      const result = await BreweryService.deleteBrewery(id);
      this.testResults.deleteBrewery.status = 'success';
      this.testResults.deleteBrewery.data = result;
      console.log('✅ Succès: Brasserie supprimée');
      return result;
    } catch (error) {
      this.testResults.deleteBrewery.status = 'failed';
      this.testResults.deleteBrewery.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Affiche les résultats des tests
   */
  displayResults() {
    console.log('\n---- Résultats des tests API pour les brasseries ----');
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

export default BreweryApiTest;
