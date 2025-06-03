
import { loadStripe } from '@stripe/stripe-js';


const STRIPE_PUBLIC_KEY = 'pk_test_TYooMQauvdEDq54NiTphI7jx'; 

let stripePromise = null;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_PUBLIC_KEY);
  }
  return stripePromise;
};

const StripeService = {
  
  createCheckoutSession: async (cartItems, beers) => {
    try {
      
      const lineItems = cartItems.map(item => {
        const beer = beers.find(b => b.id === item.beer_id);
        return {
          price_data: {
            currency: 'eur',
            product_data: {
              name: beer ? beer.beer : `Bière #${item.beer_id}`,
              images: beer && beer.imageUrl ? [beer.imageUrl] : [],
            },
            unit_amount: beer ? Math.round(beer.price * 100) : 0, 
          },
          quantity: item.quantity,
        };
      });


      console.log('Simulation de création de session Stripe avec:', lineItems);
      return {
        sessionId: 'session_simulated_' + Math.random().toString(36).substring(2, 15),
        success: true
      };
    } catch (error) {
      console.error('Erreur lors de la création de la session Stripe:', error);
      throw error;
    }
  },

  // Rediriger vers Checkout
  redirectToCheckout: async (sessionId) => {
    try {
      const stripe = await getStripe();
      
      // Simulation d'une redirection réussie/échouée (pour la démo)
      const simulationSuccess = true; // Changer à false pour tester l'erreur

      console.log('Redirection vers Stripe Checkout avec sessionId:', sessionId);
            
      if (simulationSuccess) {
        return { success: true };
      } else {
        return { error: 'Erreur de redirection vers Stripe' };
      }
    } catch (error) {
      console.error('Erreur lors de la redirection vers Stripe Checkout:', error);
      throw error;
    }
  },

  handlePaymentResult: async (sessionId) => {

    console.log('Vérification du résultat de paiement pour la session:', sessionId);
    return {
      success: true,
      orderId: 'order_' + Math.random().toString(36).substring(2, 10)
    };
  }
};

export default StripeService;
