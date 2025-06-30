import React from 'react';
import { Container, Row, Col, Table, Button, Card, Form, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CheckoutButton from '../components/CheckoutButton';

const CartPage = () => {
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    getCartTotal, 
    getCartItemsCount,
    isLoading 
  } = useCart();

  const calculateItemTotal = (item) => {
    return item.price * item.quantity;
  };

  if (isLoading) {
    return (
      <Container className="my-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Chargement...</span>
        </div>
        <p className="mt-3">Chargement de votre panier...</p>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1>🛒 Mon Panier</h1>
            {getCartItemsCount() > 0 && (
              <Badge bg="primary" pill className="fs-6">
                {getCartItemsCount()} article{getCartItemsCount() > 1 ? 's' : ''}
              </Badge>
            )}
          </div>
          
          {cartItems.length === 0 ? (
            <Card className="text-center p-5">
              <Card.Body>
                <div className="display-1 mb-3">🛒</div>
                <h3>Votre panier est vide</h3>
                <p className="text-muted mb-4">Découvrez notre sélection de bières artisanales !</p>
                <Link to="/beers" className="btn btn-primary btn-lg">
                  🍺 Découvrir nos bières
                </Link>
              </Card.Body>
            </Card>
          ) : (
            <>
              <Card className="mb-4">
                <Card.Body>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Produit</th>
                        <th>Prix unitaire</th>
                        <th>Quantité</th>
                        <th>Total</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems. map((item) => (
                        <tr key={item.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              {item.image_url && (
                                <img 
                                  src={item.image_url} 
                                  alt={item.name}
                                  style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                                  className="me-3 rounded"
                                />
                              )}
                              <div>
                                <h6 className="mb-1">{item.name}</h6>
                                <small className="text-muted">{item.brewery}</small>
                                {item.alcohol_content && (
                                  <div>
                                    <Badge bg="secondary" className="mt-1">
                                      {item.alcohol_content}% vol.
                                    </Badge>
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <strong>{item.price.toFixed(2)} €</strong>
                          </td>
                          <td className="align-middle">
                            <div className="d-flex align-items-center">
                              <Button
                                variant="outline-secondary"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                              >
                                -
                              </Button>
                              <Form.Control
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => {
                                  const newQuantity = parseInt(e.target.value) || 1;
                                  updateQuantity(item.id, newQuantity);
                                }}
                                className="mx-2 text-center"
                                style={{ width: '70px' }}
                              />
                              <Button
                                variant="outline-secondary"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </Button>
                            </div>
                          </td>
                          <td className="align-middle">
                            <strong>{calculateItemTotal(item).toFixed(2)} €</strong>
                          </td>
                          <td className="align-middle">
                            <Button
                              variant="outline-danger"
                              size="sm"
                              onClick={() => removeFromCart(item.id)}
                              title="Supprimer cet article"
                            >
                              🗑️
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
              
              <Row>
                <Col md={8}>
                  <div className="d-flex gap-2 mb-3">
                    <Button 
                      variant="outline-warning" 
                      onClick={clearCart}
                    >
                      🗑️ Vider le panier
                    </Button>
                    <Link to="/beers" className="btn btn-outline-primary">
                      ← Continuer les achats
                    </Link>
                  </div>
                </Col>
                <Col md={4}>
                  <Card className="sticky-top">
                    <Card.Header>
                      <h5 className="mb-0">💰 Récapitulatif</h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Sous-total ({getCartItemsCount()} article{getCartItemsCount() > 1 ? 's' : ''}):</span>
                        <span>{getCartTotal().toFixed(2)} €</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Livraison:</span>
                        <span className="text-success">Gratuite 🚚</span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between mb-3">
                        <strong>Total:</strong>
                        <strong className="text-success fs-5">{getCartTotal().toFixed(2)} €</strong>
                      </div>
                      
                      <CheckoutButton />
                      
                      <div className="mt-3 text-center">
                        <small className="text-muted">
                          🔒 Paiement 100% sécurisé<br/>
                          💳 Cartes acceptées: Visa, Mastercard, Amex
                        </small>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
