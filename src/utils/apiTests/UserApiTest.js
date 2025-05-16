import UserService from '../../services/user.service';

/**
 * Utilitaire de test pour vérifier les opérations CRUD sur les utilisateurs
 */
class UserApiTest {
  constructor() {
    this.testResults = {
      getAllUsers: { status: 'pending', data: null, error: null },
      getUserById: { status: 'pending', data: null, error: null },
      createUser: { status: 'pending', data: null, error: null },
      updateUser: { status: 'pending', data: null, error: null },
      deleteUser: { status: 'pending', data: null, error: null }
    };
    
    // Créons un email unique pour éviter les conflits
    const timestamp = new Date().getTime();
    this.testUser = {
      name: "Utilisateur Test",
      email: `test.user.${timestamp}@example.com`,
      password: "TestPassword123",
      role: "USER"
    };
    
    this.createdUserId = null;
  }

  /**
   * Exécute tous les tests CRUD sur les utilisateurs
   */
  async runAllTests() {
    console.log('---- Démarrage des tests API pour les utilisateurs ----');
    
    try {
      // Étape 1: Récupérer tous les utilisateurs
      await this.testGetAllUsers();
      
      // Étape 2: Créer un nouvel utilisateur
      await this.testCreateUser();
      
      // Étape 3: Récupérer l'utilisateur par ID
      if (this.createdUserId) {
        await this.testGetUserById(this.createdUserId);
      } else {
        this.testResults.getUserById.status = 'skipped';
        this.testResults.getUserById.error = 'Impossible de tester: aucun utilisateur créé';
      }
      
      // Étape 4: Mettre à jour l'utilisateur
      if (this.createdUserId) {
        await this.testUpdateUser(this.createdUserId);
      } else {
        this.testResults.updateUser.status = 'skipped';
        this.testResults.updateUser.error = 'Impossible de tester: aucun utilisateur créé';
      }
      
      // Étape 5: Supprimer l'utilisateur
      if (this.createdUserId) {
        await this.testDeleteUser(this.createdUserId);
      } else {
        this.testResults.deleteUser.status = 'skipped';
        this.testResults.deleteUser.error = 'Impossible de tester: aucun utilisateur créé';
      }
    } catch (error) {
      console.error('Erreur lors de l\'exécution des tests:', error);
    }
    
    // Afficher les résultats
    this.displayResults();
    
    return this.testResults;
  }

  /**
   * Teste la récupération de tous les utilisateurs
   */
  async testGetAllUsers() {
    console.log('Test: Récupération de tous les utilisateurs');
    try {
      const users = await UserService.getAllUsers();
      this.testResults.getAllUsers.status = 'success';
      this.testResults.getAllUsers.data = `${users.length} utilisateurs récupérés`;
      console.log(`✅ Succès: ${users.length} utilisateurs récupérés`);
      return users;
    } catch (error) {
      this.testResults.getAllUsers.status = 'failed';
      this.testResults.getAllUsers.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la création d'un utilisateur
   */
  async testCreateUser() {
    console.log('Test: Création d\'un utilisateur');
    try {
      const newUser = await UserService.registerUser(this.testUser);
      this.createdUserId = newUser.id;
      this.testResults.createUser.status = 'success';
      this.testResults.createUser.data = newUser;
      console.log(`✅ Succès: Utilisateur créé avec l'ID ${newUser.id}`);
      return newUser;
    } catch (error) {
      this.testResults.createUser.status = 'failed';
      this.testResults.createUser.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la récupération d'un utilisateur par ID
   */
  async testGetUserById(id) {
    console.log(`Test: Récupération de l'utilisateur avec l'ID ${id}`);
    try {
      const user = await UserService.getUserById(id);
      this.testResults.getUserById.status = 'success';
      this.testResults.getUserById.data = user;
      console.log(`✅ Succès: Utilisateur "${user.name}" récupéré`);
      return user;
    } catch (error) {
      this.testResults.getUserById.status = 'failed';
      this.testResults.getUserById.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la mise à jour d'un utilisateur
   */
  async testUpdateUser(id) {
    console.log(`Test: Mise à jour de l'utilisateur avec l'ID ${id}`);
    try {
      const updatedData = {
        name: this.testUser.name + " (Modifié)"
      };
      
      const updatedUser = await UserService.updateUser(id, updatedData);
      this.testResults.updateUser.status = 'success';
      this.testResults.updateUser.data = updatedUser;
      console.log(`✅ Succès: Utilisateur modifié en "${updatedUser.name}"`);
      return updatedUser;
    } catch (error) {
      this.testResults.updateUser.status = 'failed';
      this.testResults.updateUser.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la suppression d'un utilisateur
   */
  async testDeleteUser(id) {
    console.log(`Test: Suppression de l'utilisateur avec l'ID ${id}`);
    try {
      const result = await UserService.deleteUser(id);
      this.testResults.deleteUser.status = 'success';
      this.testResults.deleteUser.data = result;
      console.log('✅ Succès: Utilisateur supprimé');
      return result;
    } catch (error) {
      this.testResults.deleteUser.status = 'failed';
      this.testResults.deleteUser.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Affiche les résultats des tests
   */
  displayResults() {
    console.log('\n---- Résultats des tests API pour les utilisateurs ----');
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

export default UserApiTest;
