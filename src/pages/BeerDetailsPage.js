import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image, Card, Spinner, Alert, Form, Toast, ToastContainer } from 'react-bootstrap';
import BeerService from '../services/beer.service';
import BreweryService from '../services/brewery.service';
import CartService from '../services/cart.service';
import UserService from '../services/user.service';

const BeerDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [beer, setBeer] = useState(null);
  const [brewery, setBrewery] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  
  // Check if user is authenticated
  const isAuthenticated = UserService.isAuthenticated();

  useEffect(() => {
    const fetchBeerDetails = async () => {
      try {
        setIsLoading(true);
        const beerData = await BeerService.getBeerById(id);
        setBeer(beerData);
        
        // Fetch brewery details
        if (beerData && beerData.brewery_id) {
          const breweryData = await BreweryService.getBreweryById(beerData.brewery_id);
          setBrewery(breweryData);
        }
        
        setIsLoading(false);
      } catch (err) {
        setError('Une erreur est survenue lors du chargement des détails de la bière.');
        setIsLoading(false);
        console.error('Error fetching beer details:', err);
      }
    };

    fetchBeerDetails();
  }, [id]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value > 0 ? value : 1);
  };

  const handleAddToCart = async () => {
    try {
      if (!isAuthenticated) {
        navigate('/login', { state: { from: `/beers/${id}` } });
        return;
      }
      
      setIsAdding(true);
      const userId = 1; // Dans une vraie application, cet ID viendrait de l'authentification
      
      await CartService.addToCart({
        user_id: userId,
        beer_id: parseInt(beer.id),
        quantity: quantity
      });
      
      setToastMessage(`${beer.beer} a été ajouté à votre panier !`);
      setShowToast(true);
      setIsAdding(false);
    } catch (err) {
      setError('Une erreur est survenue lors de l\'ajout au panier.');
      setIsAdding(false);
      console.error('Error adding to cart:', err);
    }
  };

  const handleDeleteBeer = async () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette bière ?')) {
      try {
        await BeerService.deleteBeer(id);
        navigate('/beers');
        alert('Bière supprimée avec succès !');
      } catch (err) {
        setError('Une erreur est survenue lors de la suppression de la bière.');
        console.error('Error deleting beer:', err);
      }
    }
  };

  if (isLoading) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Chargement...</span>
        </Spinner>
        <p className="mt-2">Chargement des détails de la bière...</p>
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

  if (!beer) {
    return (
      <Container className="my-5">
        <Alert variant="warning">
          <Alert.Heading>Bière non trouvée</Alert.Heading>
          <p>La bière que vous recherchez n'existe pas ou a été supprimée.</p>
          <Link to="/beers">
            <Button variant="primary">Retour à la liste des bières</Button>
          </Link>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      {/* Toast de notification */}
      <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 1 }}>
        <Toast 
          show={showToast} 
          onClose={() => setShowToast(false)} 
          delay={3000} 
          autohide 
          bg="success"
        >
          <Toast.Header closeButton>
            <strong className="me-auto">Panier</strong>
          </Toast.Header>
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
      <Link to="/beers" className="btn btn-outline-secondary mb-4">
        &larr; Retour aux bières
      </Link>
      
      <Row>
        <Col md={6}>
          <Image 
            src={beer.imageUrl || 'https://via.placeholder.com/600x400?text=Bière'} 
            alt={beer.beer} 
            fluid 
            rounded 
            className="shadow"
          />
        </Col>
        <Col md={6}>
          <h1>{beer.beer}</h1>
          
          {brewery && (
            <p className="text-muted">
              Brasserie: <Link to={`/breweries/${brewery.id}`}>{brewery.name}</Link>
            </p>
          )}
          
          <Card className="my-4">
            <Card.Body>
              <h3 className="text-primary mb-3">{beer.price} €</h3>
              
              <Form.Group className="mb-3">
                <Form.Label>Quantité</Form.Label>
                <div className="d-flex align-items-center">
                  <Button 
                    variant="outline-secondary" 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <Form.Control 
                    type="number" 
                    min="1" 
                    value={quantity} 
                    onChange={handleQuantityChange}
                    className="mx-2 text-center"
                    style={{ width: '70px' }}
                  />
                  <Button 
                    variant="outline-secondary" 
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </Form.Group>
              
              <Button 
                variant="success" 
                size="lg" 
                className="w-100 mb-2"
                onClick={handleAddToCart}
                disabled={isAdding}
              >
                {isAdding ? (
                  <>
                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                    <span className="ms-2">Ajout en cours...</span>
                  </>
                ) : (
                  <>
                    Ajouter au panier
                  </>
                )}
              </Button>
              
              <p className="text-muted mb-0">
                Livraison gratuite à partir de 50€
              </p>
            </Card.Body>
          </Card>
          
          {/* Admin actions */}
          <div className="d-flex mt-4">
            <Link to={`/beers/edit/${beer.id}`} className="me-2">
              <Button variant="outline-primary">Modifier</Button>
            </Link>
            <Button variant="outline-danger" onClick={handleDeleteBeer}>
              Supprimer
            </Button>
          </div>
        </Col>
      </Row>
      
      <Row className="mt-5">
        <Col>
          <h2>Description</h2>
          <p>
            {beer.description || 'Aucune description disponible pour cette bière.'}
          </p>
          
          {/* Placeholder for additional information */}
          <h3 className="mt-4">Caractéristiques</h3>
          <ul>
            <li><strong>Type:</strong> IPA</li>
            <li><strong>Degré d'alcool:</strong> 5.5%</li>
            <li><strong>Amertume:</strong> Moyenne</li>
            <li><strong>Origine:</strong> France</li>
          </ul>
        </Col>
      </Row>
      
      {/* Recommendations section */}
      <h3 className="mt-5">Vous pourriez aussi aimer</h3>
      <Row>
        {[1, 2, 3, 4].map((item) => (
          <Col md={3} sm={6} key={item} className="mb-4">
            <Card className="h-100">
              <Card.Img 
                variant="top" 
                src="https://via.placeholder.com/300x200?text=Bière" 
                alt="Bière recommandée"
              />
              <Card.Body>
                <Card.Title>Bière recommandée {item}</Card.Title>
                <Card.Text>4.50 €</Card.Text>
                <Link to={`/beers/${item}`}>
                  <Button variant="outline-primary" size="sm">Voir détails</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BeerDetailsPage;
