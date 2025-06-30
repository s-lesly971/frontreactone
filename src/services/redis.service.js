/**
 * Service Redis pour la gestion du cache et des sessions temporaires
 * Note: Ce service communique avec le backend Next.js qui gère Redis
 */

import apiClient from './api.service';

const RedisService = {
  
  // Cache des bières pour améliorer les performances
  cacheBeers: async (beers, ttl = 3600) => {
    try {
      console.log('🗄️ Mise en cache de', beers.length, 'bières');
      
      const response = await apiClient.post('/redis/cache-beers', {
        beers,
        ttl // Time to live en secondes (1h par défaut)
      });
      
      return response.data.success;
    } catch (error) {
      console.error('❌ Erreur cache bières:', error);
      return false;
    }
  },

  // Récupérer les bières depuis le cache
  getCachedBeers: async () => {
    try {
      console.log('🔍 Récupération bières depuis cache Redis');
      
      const response = await apiClient.get('/redis/cached-beers');
      
      if (response.data.success && response.data.beers) {
        console.log('✅ Bières récupérées depuis cache:', response.data.beers.length);
        return response.data.beers;
      }
      
      return null;
    } catch (error) {
      console.error('❌ Erreur récupération cache bières:', error);
      return null;
    }
  },

  // Sauvegarder le panier temporaire (utilisateur non connecté)
  saveTempCart: async (cartItems, sessionId = null) => {
    try {
      const tempSessionId = sessionId || 'temp_' + Date.now() + '_' + Math.random().toString(36).substring(2, 15);
      
      console.log('🛒 Sauvegarde panier temporaire:', tempSessionId);
      
      const response = await apiClient.post('/redis/temp-cart', {
        sessionId: tempSessionId,
        cartItems,
        ttl: 86400 // 24h
      });
      
      if (response.data.success) {
        // Stocker l'ID de session temporaire dans localStorage
        localStorage.setItem('ubeer_temp_session', tempSessionId);
        return tempSessionId;
      }
      
      return null;
    } catch (error) {
      console.error('❌ Erreur sauvegarde panier temporaire:', error);
      return null;
    }
  },

  // Récupérer le panier temporaire
  getTempCart: async (sessionId = null) => {
    try {
      const tempSessionId = sessionId || localStorage.getItem('ubeer_temp_session');
      
      if (!tempSessionId) {
        return null;
      }
      
      console.log('🔍 Récupération panier temporaire:', tempSessionId);
      
      const response = await apiClient.get(`/redis/temp-cart/${tempSessionId}`);
      
      if (response.data.success && response.data.cartItems) {
        return response.data.cartItems;
      }
      
      return null;
    } catch (error) {
      console.error('❌ Erreur récupération panier temporaire:', error);
      return null;
    }
  },

  // Migrer le panier temporaire vers l'utilisateur connecté
  migrateTempCartToUser: async (userId) => {
    try {
      const tempSessionId = localStorage.getItem('ubeer_temp_session');
      
      if (!tempSessionId) {
        return false;
      }
      
      console.log('🔄 Migration panier temporaire vers utilisateur:', userId);
      
      const response = await apiClient.post('/redis/migrate-cart', {
        tempSessionId,
        userId
      });
      
      if (response.data.success) {
        // Supprimer la session temporaire
        localStorage.removeItem('ubeer_temp_session');
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('❌ Erreur migration panier:', error);
      return false;
    }
  },

  // Cache des statistiques de vente (pour admin)
  cacheSalesStats: async (stats, ttl = 1800) => {
    try {
      console.log('📊 Mise en cache statistiques ventes');
      
      const response = await apiClient.post('/redis/cache-stats', {
        stats,
        ttl // 30 minutes par défaut
      });
      
      return response.data.success;
    } catch (error) {
      console.error('❌ Erreur cache statistiques:', error);
      return false;
    }
  },

  // Récupérer les statistiques depuis le cache
  getCachedStats: async () => {
    try {
      const response = await apiClient.get('/redis/cached-stats');
      
      if (response.data.success && response.data.stats) {
        return response.data.stats;
      }
      
      return null;
    } catch (error) {
      console.error('❌ Erreur récupération stats cache:', error);
      return null;
    }
  },

  // Invalider le cache (pour les mises à jour)
  invalidateCache: async (cacheKey) => {
    try {
      console.log('🗑️ Invalidation cache:', cacheKey);
      
      const response = await apiClient.delete(`/redis/cache/${cacheKey}`);
      return response.data.success;
    } catch (error) {
      console.error('❌ Erreur invalidation cache:', error);
      return false;
    }
  },

  // Vérifier la connexion Redis (health check)
  checkRedisHealth: async () => {
    try {
      const response = await apiClient.get('/redis/health');
      return {
        isConnected: response.data.success,
        info: response.data.info
      };
    } catch (error) {
      console.error('❌ Erreur vérification Redis:', error);
      return {
        isConnected: false,
        error: error.message
      };
    }
  }
};

export default RedisService;
