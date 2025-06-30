import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Alert, Button, Spinner } from 'react-bootstrap';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import StripeService from '../services/stripe.service';

const PaymentSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { clearCart } = useCart();
  
  const [paymentStatus, setPaymentStatus] = useState('loading');
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState(null);

  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const verifyPayment = async () => {
      if (!sessionId) {
        setError('Session ID manquant');
        setPaymentStatus('error');
        return;
      }

      try {
        console.log('🔍 Vérification du paiement...');
        
        // Vérifier le paiement via Stripe
        const result = await StripeService.verifyPayment(sessionId);
        
        if (result.success) {
          setOrderDetails(result);
          setPaymentStatus('success');
          
          // Vider le panier après paiement réussi
          clearCart();
          
          console.log('✅ Paiement confirmé:', result.orderId);
        } else {
          setError('Paiement non confirmé');
          setPaymentStatus('error');
        }
      } catch (error) {
        console.error('❌ Erreur vérification paiement:', error);
        setError('Erreur lors de la vérification du paiement');
        setPaymentStatus('error');
      }
    };

    verifyPayment();
  }, [sessionId, clearCart]);

  const handleContinueShopping = () => {
    navigate('/beers');
  };

  const handleViewOrders = () => {
    navigate('/profile/orders');
  };

  if (paymentStatus === 'loading') {
    return (
      <Container className="my-5 text-center">
        <Spinner animation="border" role="status" size="lg" />
        <h3 className="mt-3">Vérification de votre paiement...</h3>
        <p className="text-muted">Veuillez patienter quelques instants</p>
      </Container>
    );
  }

  if (paymentStatus === 'error') {
    return (
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Alert variant="danger" className="text-center">
              <Alert.Heading>❌ Erreur de paiement</Alert.Heading>
              <p>{error || 'Une erreur est survenue lors du traitement de votre paiement.'}</p>
              <hr />
              <div className="d-flex gap-2 justify-content-center">
                <Button variant="outline-danger" onClick={() => navigate('/cart')}>
                  Retour au panier
                </Button>
                <Button variant="primary" onClick={handleContinueShopping}>
                  Continuer les achats
                </Button>
              </div>
            </Alert>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg border-success">
            <Card.Header className="bg-success text-white text-center">
              <h2 className="mb-0">✅ Paiement réussi !</h2>
            </Card.Header>
            <Card.Body className="text-center p-4">
              <div className="mb-4">
                <div className="display-1 text-success mb-3">🎉</div>
                <h3>Merci pour votre commande !</h3>
                <p className="text-muted">
                  Votre paiement a été traité avec succès.
                </p>
              </div>

              {orderDetails && (
                <Card className="mb-4">
                  <Card.Body>
                    <h5>Détails de la commande</h5>
                    <Row className="text-start">
                      <Col sm={6}>
                        <strong>Numéro de commande :</strong>
                      </Col>
                      <Col sm={6}>
                        {orderDetails.orderId}
                      </Col>
                    </Row>
                    <Row className="text-start">
                      <Col sm={6}>
                        <strong>Statut du paiement :</strong>
                      </Col>
                      <Col sm={6}>
                        <span className="badge bg-success">
                          {orderDetails.paymentStatus === 'paid' ? 'Payé' : orderDetails.paymentStatus}
                        </span>
                      </Col>
                    </Row>
                    {orderDetails.customerEmail && (
                      <Row className="text-start">
                        <Col sm={6}>
                          <strong>Email de confirmation :</strong>
                        </Col>
                        <Col sm={6}>
                          {orderDetails.customerEmail}
                        </Col>
                      </Row>
                    )}
                    {orderDetails.isDevelopment && (
                      <Alert variant="info" className="mt-3">
                        <small>
                          🔧 Mode développement - Paiement simulé
                        </small>
                      </Alert>
                    )}
                  </Card.Body>
                </Card>
              )}

              <div className="d-flex gap-2 justify-content-center flex-wrap">
                <Button 
                  variant="outline-primary" 
                  onClick={handleViewOrders}
                  className="mb-2"
                >
                  📋 Voir mes commandes
                </Button>
                <Button 
                  variant="primary" 
                  onClick={handleContinueShopping}
                  className="mb-2"
                >
                  🛒 Continuer les achats
                </Button>
              </div>

              <div className="mt-4 pt-3 border-top">
                <small className="text-muted">
                  Un email de confirmation vous a été envoyé avec tous les détails de votre commande.
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentSuccessPage;
