import { loadStripe } from '@stripe/stripe-js';
import apiClient from './api.service';

// Configuration Stripe - Utiliser les variables d'environnement
const STRIPE_PUBLIC_KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY || 'pk_test_51RVqRcQgNYtRjntdkW6KPPxcFrazQpwf6uMsfEDjgEbyBGRp1GqLoz5NJUqeZ6elj2ocnWUBV0Pqrr9eo8c4EsQr00WcS2f5Rk';

// Instance Stripe
let stripePromise = null;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_PUBLIC_KEY);
  }
  return stripePromise;
};

const StripeService = {
  
  createCheckoutSession: async (cartItems, customerInfo = {}) => {
    try {
      console.log('🛒 Création session Stripe via API backend:', { cartItems, customerInfo });
      
      const payload = {
        orderId: Date.now(),
        items: cartItems.map(item => ({
          name: item.beerName,
          amount: Math.round(item.price * 100),
          quantity: item.quantity
        }))
      };
      
      console.log(' Payload envoyé à l\'API backend:', payload);
      console.log(' URL API:', apiClient.defaults.baseURL + '/stripe/checkout');
      
      // Appel à l'API backend
      const response = await apiClient.post('/stripe/checkout', payload);
      
      console.log(' Réponse complète API:', response);
      console.log('& Data reçue:', response.data);
      
      // Vérifier différents formats de réponse possibles
      const responseData = response.data;
      const sessionUrl = responseData.url || responseData.sessionUrl || responseData.checkout_url;
      const sessionId = responseData.sessionId || responseData.id || responseData.session_id;
      
      if (sessionUrl) {
        console.log('🎯 URL Stripe trouvée:', sessionUrl);
        return {
          success: true,
          sessionId: sessionId,
          url: sessionUrl
        };
      } else {
        console.error('❌ Aucune URL de checkout dans la réponse:', responseData);
        throw new Error('URL de checkout manquante dans la réponse API');
      }
      
    } catch (error) {
      console.error('❌ Erreur création session via API backend:', error);
      
      // Logs détaillés pour debug
      if (error.response) {
        console.error('🔍 Status HTTP:', error.response.status);
        console.error('🔍 Headers:', error.response.headers);
        console.error('🔍 Data erreur:', error.response.data);
        console.error('🔍 Config requête:', error.config);
      } else if (error.request) {
        console.error('🔍 Pas de réponse reçue:', error.request);
      } else {
        console.error('🔍 Erreur config:', error.message);
      }
      
      return {
        success: false,
        error: error.response?.data?.message || error.message || 'Erreur lors de la création de la session de paiement'
      };
    }
  },

  // Rediriger vers Checkout Stripe
  redirectToCheckout: async (sessionId) => {
    try {
      const stripe = await getStripe();
      
      console.log('🔄 Redirection vers Stripe Checkout:', sessionId);
      
      // Mode développement - simulation
      if (sessionId.startsWith('session_dev_')) {
        console.log('🔧 Mode dév - Simulation redirection Stripe');
        window.location.href = '/payment/success?session_id=' + sessionId;
        return { success: true };
      }
      
      // Redirection réelle vers Stripe
      const { error } = await stripe.redirectToCheckout({ sessionId });
      
      if (error) {
        console.error('❌ Erreur redirection Stripe:', error);
        return { error: error.message };
      }
      
      return { success: true };
    } catch (error) {
      console.error('❌ Erreur redirection Stripe Checkout:', error);
      throw error;
    }
  },

  // Vérifier le résultat du paiement
  verifyPayment: async (sessionId) => {
    try {
      console.log('🔍 Vérification paiement session:', sessionId);
      
      // Mode développement
      if (sessionId.startsWith('session_dev_')) {
        return {
          success: true,
          orderId: 'order_dev_' + Date.now(),
          paymentStatus: 'paid',
          isDevelopment: true
        };
      }
      
      // Appel API pour vérifier le paiement
      const response = await apiClient.get(`/stripe/verify-payment/${sessionId}`);
      
      return {
        success: response.data.success,
        orderId: response.data.orderId,
        paymentStatus: response.data.paymentStatus,
        customerEmail: response.data.customerEmail
      };
    } catch (error) {
      console.error('❌ Erreur vérification paiement:', error);
      throw error;
    }
  },

  // Récupérer les détails d'une session
  getSessionDetails: async (sessionId) => {
    try {
      const response = await apiClient.get(`/stripe/session/${sessionId}`);
      return response.data;
    } catch (error) {
      console.error('❌ Erreur récupération session:', error);
      throw error;
    }
  }
};

export default StripeService;
