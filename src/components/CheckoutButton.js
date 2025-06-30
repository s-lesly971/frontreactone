import React, { useState } from 'react';
import { Button, Spinner, Alert } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import StripeService from '../services/stripe.service';
import UserService from '../services/user.service';

const CheckoutButton = ({ 
  variant = 'success', 
  size = 'lg', 
  className = '',
  disabled = false,
  children = '💳 Procéder au paiement'
}) => {
  const { cartItems, getCartTotal } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      setError('Votre panier est vide');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      console.log('🛒 Démarrage du processus de checkout...');
      
      // Préparer les informations client (sans auth pour le moment)
      const customerInfo = {
        email: 'guest@ubeer.com',
        name: 'Invité UBeer'
      };

      // Créer la session Stripe
      const session = await StripeService.createCheckoutSession(cartItems, customerInfo);
      
      if (session.success) {
        if (session.url) {
          console.log(' Redirection vers:', session.url);
          window.location.href = session.url;
        } else if (session.isDevelopment) {
          console.log(' Mode développement - Redirection simulation');
          window.location.href = session.url;
        } else {
          console.log(' Redirection Stripe directe en cours...');
          // La redirection est gérée par stripe.redirectToCheckout()
        }
      } else {
        setError(session.error || 'Erreur lors de la création de la session de paiement');
      }
    } catch (error) {
      console.error(' Erreur checkout:', error);
      setError(
        error.response?.data?.message || 
        error.message || 
        'Une erreur est survenue lors du processus de paiement'
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const total = getCartTotal();

  return (
    <div>
      {error && (
        <Alert variant="danger" className="mb-3" dismissible onClose={() => setError(null)}>
          {error}
        </Alert>
      )}
      
      <Button
        variant={variant}
        size={size}
        className={`w-100 ${className}`}
        onClick={handleCheckout}
        disabled={disabled || isProcessing || cartItems.length === 0 || total <= 0}
      >
        {isProcessing ? (
          <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              className="me-2"
            />
            Traitement en cours...
          </>
        ) : (
          <>
            {children}
            {total > 0 && (
              <span className="ms-2">
                ({total.toFixed(2)} €)
              </span>
            )}
          </>
        )}
      </Button>
      
      {cartItems.length === 0 && (
        <small className="text-muted d-block mt-2 text-center">
          Ajoutez des articles à votre panier pour continuer
        </small>
      )}
      
      <div className="mt-2 text-center">
        <small className="text-muted">
          🔒 Paiement sécurisé par Stripe
        </small>
      </div>
    </div>
  );
};

export default CheckoutButton;
