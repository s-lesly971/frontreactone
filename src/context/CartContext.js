import React, { createContext, useContext, useState, useEffect } from 'react';
import RedisService from '../services/redis.service';
import apiClient from '../services/api.service';
import UserService from '../services/user.service';

// Créer le contexte du panier
const CartContext = createContext();

// Hook personnalisé pour utiliser le contexte du panier
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Provider du contexte du panier
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Charger le panier au démarrage (localStorage + Redis)
  useEffect(() => {
    const loadCart = async () => {
      setIsLoading(true);
      
      try {
        // Vérifier si l'utilisateur est connecté
        const isAuthenticated = UserService.isAuthenticated();
        
        if (isAuthenticated) {
          // Utilisateur connecté - essayer de récupérer depuis Redis
          const tempCart = await RedisService.getTempCart();
          if (tempCart && tempCart.length > 0) {
            console.log('🔄 Migration panier temporaire vers utilisateur connecté');
            setCartItems(tempCart);
            
            // Migrer le panier temporaire vers l'utilisateur
            const user = UserService.getCurrentUser();
            if (user) {
              await RedisService.migrateTempCartToUser(user.id);
            }
          } else {
            // Charger depuis localStorage
            const savedCart = localStorage.getItem('ubeer_cart');
            if (savedCart) {
              setCartItems(JSON.parse(savedCart));
            }
          }
        } else {
          // Utilisateur non connecté - localStorage + Redis temporaire
          const savedCart = localStorage.getItem('ubeer_cart');
          if (savedCart) {
            const cartData = JSON.parse(savedCart);
            setCartItems(cartData);
            
            // Sauvegarder aussi dans Redis temporaire
            if (cartData.length > 0) {
              await RedisService.saveTempCart(cartData);
            }
          }
        }
      } catch (error) {
        console.error('❌ Erreur chargement panier:', error);
        // Fallback vers localStorage
        const savedCart = localStorage.getItem('ubeer_cart');
        if (savedCart) {
          try {
            setCartItems(JSON.parse(savedCart));
          } catch (parseError) {
            console.error('Erreur parsing localStorage:', parseError);
            localStorage.removeItem('ubeer_cart');
          }
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    loadCart();
  }, []);

  // Sauvegarder le panier (localStorage + Redis) à chaque modification
  useEffect(() => {
    const saveCart = async () => {
      // Toujours sauvegarder dans localStorage
      localStorage.setItem('ubeer_cart', JSON.stringify(cartItems));
      
      // Sauvegarder aussi dans Redis si possible
      try {
        const isAuthenticated = UserService.isAuthenticated();
        
        if (!isAuthenticated && cartItems.length > 0) {
          // Utilisateur non connecté      // Note: Redis désactivé car endpoint non disponible
          console.log('💾 Panier sauvegardé dans localStorage uniquement');
        }
      } catch (error) {
        console.warn('⚠️ Erreur sauvegarde Redis (non critique):', error);
      }
    };
    
    if (cartItems.length >= 0) { // Sauvegarder même si panier vide
      saveCart();
    }
  }, [cartItems]);

  // Synchroniser le panier avec l'API cart existante
  const syncCartWithAPI = async (cartItems) => {
    try {
      // Utiliser l'API cart existante pour chaque item
      for (const item of cartItems) {
        await apiClient.post('/cart', {
          user_id: 1, // ID utilisateur par défaut (guest)
          beer_id: item.beerId,
          quantity: item.quantity
        });
      }
      console.log('✅ Panier synchronisé avec l\'API cart:', cartItems.length, 'items');
    } catch (error) {
      console.warn('⚠️ Erreur sync panier API:', error);
      // Pas critique, on continue avec localStorage
    }
  };

  // Ajouter un article au panier
  const addToCart = async (beer, quantity = 1) => {
    console.log('🛒 CartContext - Ajout au panier:', beer);
    
    // Déterminer l'ID de la bière (flexible)
    const beerId = beer.id || beer.beerId || beer._id || Date.now();
    const beerName = beer.beer || beer.name || beer.beerName || 'Bière sans nom';
    const beerPrice = beer.price || 0;
    
    console.log('🔍 ID utilisé:', beerId, 'Nom:', beerName, 'Prix:', beerPrice);
    
    setCartItems(prevItems => {
      console.log('🔍 Panier actuel:', prevItems);
      
      const existingItem = prevItems.find(item => item.beerId === beerId);
      let updatedItems;
      
      if (existingItem) {
        console.log('✅ Article existant trouvé, mise à jour quantité');
        // Si l'article existe déjà, augmenter la quantité
        updatedItems = prevItems.map(item =>
          item.beerId === beerId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        console.log('➕ Nouvel article ajouté');
        // Sinon, ajouter un nouvel article
        const newItem = {
          beerId: beerId,
          beerName: beerName,
          price: beerPrice,
          quantity: quantity,
          beer: beer // Garder les données complètes de la bière
        };
        updatedItems = [...prevItems, newItem];
      }
      
      console.log('🔍 Nouveau panier:', updatedItems);
      
      // Synchroniser avec l'API en arrière-plan
      syncCartWithAPI(updatedItems);
      
      return updatedItems;
    });
  };

  // Supprimer un article du panier
  const removeFromCart = (beerId) => {
    setCartItems(prevItems => prevItems.filter(item => item.beerId !== beerId));
  };

  // Mettre à jour la quantité d'un article
  const updateQuantity = (beerId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(beerId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.beerId === beerId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Vider le panier
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculer le total du panier
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Calculer le nombre total d'articles
  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Vérifier si un article est dans le panier
  const isInCart = (beerId) => {
    return cartItems.some(item => item.beerId === beerId);
  };

  // Obtenir la quantité d'un article spécifique
  const getItemQuantity = (beerId) => {
    const item = cartItems.find(item => item.beerId === beerId);
    return item ? item.quantity : 0;
  };

  const value = {
    cartItems,
    isLoading,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    isInCart,
    getItemQuantity
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;