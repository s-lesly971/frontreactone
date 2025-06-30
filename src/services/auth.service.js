import apiClient from './api.service';

class AuthService {
  // Connexion utilisateur
  async login(email, password) {
    try {
      console.log('🔐 Tentative de connexion pour:', email);
      
      // Tentative avec l'API réelle (si disponible)
      const response = await apiClient.post('/users/login', {
        email,
        password
      });
      
      if (response.data.token) {
        // Stocker le token JWT
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        console.log('✅ Connexion réussie');
        return response.data;
      }
      
      throw new Error('Token manquant dans la réponse');
    } catch (error) {
      console.error('❌ Erreur de connexion:', error);
      
      // Gestion des erreurs spécifiques
      if (error.response?.status === 401) {
        throw new Error('Email ou mot de passe incorrect');
      } else if (error.response?.status === 404) {
        throw new Error('Service d\'authentification indisponible');
      } else {
        throw new Error('Erreur de connexion. Veuillez réessayer.');
      }
    }
  }

  // Inscription utilisateur
  async register(userData) {
    try {
      console.log('📝 Tentative d\'inscription pour:', userData.email);
      
      const response = await apiClient.post('/auth/register', userData);
      
      if (response.data.token) {
        // Stocker le token JWT
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        console.log('✅ Inscription réussie');
        return response.data;
      }
      
      return response.data;
    } catch (error) {
      console.error('❌ Erreur d\'inscription:', error);
      
      if (error.response?.status === 409) {
        throw new Error('Cet email est déjà utilisé');
      } else if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error('Erreur d\'inscription. Veuillez réessayer.');
      }
    }
  }

  // Déconnexion
  logout() {
    console.log('👋 Déconnexion utilisateur');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Rediriger vers la page d'accueil
    window.location.href = '/';
  }

  // Obtenir l'utilisateur actuel
  getCurrentUser() {
    try {
      const userStr = localStorage.getItem('user');
      return userStr ? JSON.parse(userStr) : null;
    } catch (error) {
      console.error('Erreur parsing user:', error);
      return null;
    }
  }

  // Vérifier si l'utilisateur est connecté
  isAuthenticated() {
    const token = localStorage.getItem('token');
    const user = this.getCurrentUser();
    
    return !!(token && user);
  }

  // Obtenir le token JWT
  getToken() {
    return localStorage.getItem('token');
  }

  // Vérifier la validité du token (optionnel)
  async verifyToken() {
    try {
      const response = await apiClient.get('/auth/verify');
      return response.data;
    } catch (error) {
      console.error('Token invalide:', error);
      this.logout();
      return null;
    }
  }

  // Obtenir le profil utilisateur
  async getProfile() {
    try {
      const response = await apiClient.get('/auth/profile');
      
      // Mettre à jour les données utilisateur locales
      localStorage.setItem('user', JSON.stringify(response.data));
      
      return response.data;
    } catch (error) {
      console.error('Erreur récupération profil:', error);
      throw error;
    }
  }

  // Mettre à jour le profil
  async updateProfile(userData) {
    try {
      const response = await apiClient.put('/auth/profile', userData);
      
      // Mettre à jour les données locales
      localStorage.setItem('user', JSON.stringify(response.data));
      
      return response.data;
    } catch (error) {
      console.error('Erreur mise à jour profil:', error);
      throw error;
    }
  }
}

// Export d'une instance unique
const authService = new AuthService();
export default authService;

// Export des méthodes individuelles pour faciliter l'utilisation
export const {
  login,
  register,
  logout,
  getCurrentUser,
  isAuthenticated,
  getToken,
  verifyToken,
  getProfile,
  updateProfile
} = authService;
