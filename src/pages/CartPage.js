import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button, Card, Form, Alert, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import CartService from '../services/cart.service';
import BeerService from '../services/beer.service';
import UserService from '../services/user.service';

const CartPage = () => {
  const navigate = useNavigate();
  
  const [cartItems, setCartItems] = useState([]);
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updating, setUpdating] = useState(false);
  
  // Check if user is authenticated
  const isAuthenticated = UserService.isAuthenticated();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/cart' } });
      return;
    }
    
    const fetchCartItems = async () => {
      try {
        setIsLoading(true);
        // Fetch cart items
        const cartData = await CartService.getAllCartItems();
        setCartItems(cartData);
        
        // Fetch beer details for all beers in cart
        const beerIds = cartData.map(item => item.beer_id);
        if (beerIds.length > 0) {
          const beerDetails = [];
          for (const beerId of beerIds) {
            const beer = await BeerService.getBeerById(beerId);
            beerDetails.push(beer);
          }
          setBeers(beerDetails);
        }
        
        setIsLoading(false);
      } catch (err) {
        setError('Une erreur est survenue lors du chargement de votre panier.');
        setIsLoading(false);
        console.error('Error fetching cart data:', err);
      }
    };

    fetchCartItems();
  }, [isAuthenticated, navigate]);

  // Function to get beer details by ID
  const getBeerById = (beerId) => {
    return beers.find(beer => beer.id === beerId) || {};
  };

  // Calculate total price
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      const beer = getBeerById(item.beer_id);
      if (beer.price) {
        total += beer.price * item.quantity;
      }
    });
    return total.toFixed(2);
  };

  // Update quantity of an item
  const handleQuantityChange = async (cartItemId, newQuantity) => {
    if (newQuantity < 1) return;
    
    try {
      setUpdating(true);
      
      // Update cart item in API
      await CartService.updateCartItem(cartItemId, { quantity: newQuantity });
      
      // Update local state
      setCartItems(prevItems => 
        prevItems.map(item => 
          item.id === cartItemId ? { ...item, quantity: newQuantity } : item
        )
      );
      
      setUpdating(false);
    } catch (err) {
      setError('Une erreur est survenue lors de la mise à jour de la quantité.');
      setUpdating(false);
      console.error('Error updating quantity:', err);
    }
  };

  // Remove an item from cart
  const handleRemoveItem = async (cartItemId) => {
    if (window.confirm('Êtes-vous sûr de vouloir retirer cet article de votre panier ?')) {
      try {
        setUpdating(true);
        
        // Remove item from API
        await CartService.removeFromCart(cartItemId);
        
        // Update local state
        setCartItems(prevItems => prevItems.filter(item => item.id !== cartItemId));
        
        setUpdating(false);
      } catch (err) {
        setError('Une erreur est survenue lors de la suppression de l\'article.');
        setUpdating(false);
        console.error('Error removing item:', err);
      }
    }
  };

  // Checkout function (placeholder)
  const handleCheckout = () => {
    alert('Fonctionnalité de paiement non implémentée dans cette version de démo.');
    // This would redirect to a checkout page in a real application
  };

  if (isLoading) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Chargement...</span>
        </Spinner>
        <p className="mt-2">Chargement de votre panier...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <Alert variant="danger">
          <Alert.Heading>Erreur</Alert.Heading>
          <p>{error}</p>
          <Button onClick={() => window.location.reload()}>Réessayer</Button>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h1 className="mb-4">Votre Panier</h1>
      
      {cartItems.length === 0 ? (
        <Alert variant="info">
          <p>Votre panier est vide.</p>
          <Link to="/beers">
            <Button variant="primary">Parcourir nos bières</Button>
          </Link>
        </Alert>
      ) : (
        <Row>
          <Col lg={8}>
            <Table responsive className="align-middle">
              <thead>
                <tr>
                  <th>Produit</th>
                  <th>Prix</th>
                  <th>Quantité</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => {
                  const beer = getBeerById(item.beer_id);
                  return (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img 
                            src={beer.imageUrl || 'https://via.placeholder.com/50x50?text=Bière'} 
                            alt={beer.beer}
                            style={{ width: '50px', marginRight: '10px' }}
                          />
                          <div>
                            <Link to={`/beers/${beer.id}`} className="text-decoration-none">
                              {beer.beer}
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td>{beer.price} €</td>
                      <td>
                        <div className="d-flex align-items-center" style={{ width: '120px' }}>
                          <Button 
                            variant="outline-secondary" 
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            disabled={updating || item.quantity <= 1}
                          >
                            -
                          </Button>
                          <Form.Control
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                            className="mx-2 text-center"
                            style={{ width: '50px' }}
                            disabled={updating}
                          />
                          <Button 
                            variant="outline-secondary" 
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            disabled={updating}
                          >
                            +
                          </Button>
                        </div>
                      </td>
                      <td>{(beer.price * item.quantity).toFixed(2)} €</td>
                      <td>
                        <Button 
                          variant="outline-danger" 
                          size="sm"
                          onClick={() => handleRemoveItem(item.id)}
                          disabled={updating}
                        >
                          Supprimer
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          
          <Col lg={4}>
            <Card className="shadow">
              <Card.Header>
                <h5 className="mb-0">Récapitulatif</h5>
              </Card.Header>
              <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                  <span>Sous-total</span>
                  <span>{calculateTotal()} €</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Frais de livraison</span>
                  <span>
                    {parseFloat(calculateTotal()) >= 50 ? (
                      <span className="text-success">Gratuit</span>
                    ) : (
                      '4.99 €'
                    )}
                  </span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <h5>Total</h5>
                  <h5>
                    {parseFloat(calculateTotal()) >= 50 
                      ? `${calculateTotal()} €` 
                      : `${(parseFloat(calculateTotal()) + 4.99).toFixed(2)} €`}
                  </h5>
                </div>
                
                <Button 
                  variant="success" 
                  size="lg" 
                  className="w-100"
                  onClick={handleCheckout}
                  disabled={updating}
                >
                  Procéder au paiement
                </Button>
                
                <div className="mt-3 text-center">
                  <small className="text-muted">
                    Livraison gratuite à partir de 50€ d'achat
                  </small>
                </div>
              </Card.Body>
            </Card>
            
            <div className="mt-3">
              <Link to="/beers">
                <Button variant="outline-primary" className="w-100">
                  Continuer vos achats
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CartPage;
