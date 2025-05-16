import BeerService from '../../services/beer.service';

/**
 * Utilitaire de test pour vérifier les opérations CRUD sur les bières
 */
class BeerApiTest {
  constructor() {
    this.testResults = {
      getAllBeers: { status: 'pending', data: null, error: null },
      getBeerById: { status: 'pending', data: null, error: null },
      createBeer: { status: 'pending', data: null, error: null },
      updateBeer: { status: 'pending', data: null, error: null },
      deleteBeer: { status: 'pending', data: null, error: null }
    };
    
    this.testBeer = {
      beer: "Test IPA " + new Date().getTime(),
      price: 4.5,
      brewery_id: 1,
      imageUrl: "https://example.com/test-beer.webp"
    };
    
    this.createdBeerId = null;
  }

  /**
   * Exécute tous les tests CRUD sur les bières
   */
  async runAllTests() {
    console.log('---- Démarrage des tests API pour les bières ----');
    
    try {
      // Étape 1: Récupérer toutes les bières
      await this.testGetAllBeers();
      
      // Étape 2: Créer une nouvelle bière
      await this.testCreateBeer();
      
      // Étape 3: Récupérer la bière par ID
      if (this.createdBeerId) {
        await this.testGetBeerById(this.createdBeerId);
      } else {
        this.testResults.getBeerById.status = 'skipped';
        this.testResults.getBeerById.error = 'Impossible de tester: aucune bière créée';
      }
      
      // Étape 4: Mettre à jour la bière
      if (this.createdBeerId) {
        await this.testUpdateBeer(this.createdBeerId);
      } else {
        this.testResults.updateBeer.status = 'skipped';
        this.testResults.updateBeer.error = 'Impossible de tester: aucune bière créée';
      }
      
      // Étape 5: Supprimer la bière
      if (this.createdBeerId) {
        await this.testDeleteBeer(this.createdBeerId);
      } else {
        this.testResults.deleteBeer.status = 'skipped';
        this.testResults.deleteBeer.error = 'Impossible de tester: aucune bière créée';
      }
    } catch (error) {
      console.error('Erreur lors de l\'exécution des tests:', error);
    }
    
    // Afficher les résultats
    this.displayResults();
    
    return this.testResults;
  }

  /**
   * Teste la récupération de toutes les bières
   */
  async testGetAllBeers() {
    console.log('Test: Récupération de toutes les bières');
    try {
      const beers = await BeerService.getAllBeers();
      this.testResults.getAllBeers.status = 'success';
      this.testResults.getAllBeers.data = `${beers.length} bières récupérées`;
      console.log(`✅ Succès: ${beers.length} bières récupérées`);
      return beers;
    } catch (error) {
      this.testResults.getAllBeers.status = 'failed';
      this.testResults.getAllBeers.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la création d'une bière
   */
  async testCreateBeer() {
    console.log('Test: Création d\'une bière');
    try {
      const newBeer = await BeerService.createBeer(this.testBeer);
      this.createdBeerId = newBeer.id;
      this.testResults.createBeer.status = 'success';
      this.testResults.createBeer.data = newBeer;
      console.log(`✅ Succès: Bière créée avec l'ID ${newBeer.id}`);
      return newBeer;
    } catch (error) {
      this.testResults.createBeer.status = 'failed';
      this.testResults.createBeer.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la récupération d'une bière par ID
   */
  async testGetBeerById(id) {
    console.log(`Test: Récupération de la bière avec l'ID ${id}`);
    try {
      const beer = await BeerService.getBeerById(id);
      this.testResults.getBeerById.status = 'success';
      this.testResults.getBeerById.data = beer;
      console.log(`✅ Succès: Bière "${beer.beer}" récupérée`);
      return beer;
    } catch (error) {
      this.testResults.getBeerById.status = 'failed';
      this.testResults.getBeerById.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la mise à jour d'une bière
   */
  async testUpdateBeer(id) {
    console.log(`Test: Mise à jour de la bière avec l'ID ${id}`);
    try {
      const updatedData = {
        ...this.testBeer,
        beer: this.testBeer.beer + " (Modifiée)",
        price: this.testBeer.price + 1
      };
      
      const updatedBeer = await BeerService.updateBeer(id, updatedData);
      this.testResults.updateBeer.status = 'success';
      this.testResults.updateBeer.data = updatedBeer;
      console.log(`✅ Succès: Bière modifiée en "${updatedBeer.beer}"`);
      return updatedBeer;
    } catch (error) {
      this.testResults.updateBeer.status = 'failed';
      this.testResults.updateBeer.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la suppression d'une bière
   */
  async testDeleteBeer(id) {
    console.log(`Test: Suppression de la bière avec l'ID ${id}`);
    try {
      const result = await BeerService.deleteBeer(id);
      this.testResults.deleteBeer.status = 'success';
      this.testResults.deleteBeer.data = result;
      console.log('✅ Succès: Bière supprimée');
      return result;
    } catch (error) {
      this.testResults.deleteBeer.status = 'failed';
      this.testResults.deleteBeer.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Affiche les résultats des tests
   */
  displayResults() {
    console.log('\n---- Résultats des tests API pour les bières ----');
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

export default BeerApiTest;
