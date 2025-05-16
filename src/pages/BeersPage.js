import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BeerService from '../services/beer.service';
import BreweryService from '../services/brewery.service';

const BeersPage = () => {
  const [beers, setBeers] = useState([]);
  const [breweries, setBreweries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrewery, setSelectedBrewery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Fetch all beers
        const beersData = await BeerService.getAllBeers();
        setBeers(beersData);
        
        // Fetch all breweries for the filter
        const breweriesData = await BreweryService.getAllBreweries();
        setBreweries(breweriesData);
        
        setIsLoading(false);
      } catch (err) {
        setError('Une erreur est survenue lors du chargement des bières.');
        setIsLoading(false);
        console.error('Error fetching beers:', err);
      }
    };

    fetchData();
  }, []);

  // Filter beers based on search term and selected brewery
  const filteredBeers = beers.filter((beer) => {
    const matchesSearchTerm = beer.beer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrewery = selectedBrewery ? beer.brewery_id === parseInt(selectedBrewery) : true;
    return matchesSearchTerm && matchesBrewery;
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleBreweryFilterChange = (e) => {
    setSelectedBrewery(e.target.value);
  };

  if (isLoading) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Chargement...</span>
        </Spinner>
        <p className="mt-2">Chargement des bières...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center my-5">
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
      <h1 className="text-center mb-4">Nos Bières</h1>
      
      {/* Search and Filter Section */}
      <Row className="mb-4">
        <Col md={6}>
          <Form.Group>
            <Form.Control 
              type="text" 
              placeholder="Rechercher une bière..." 
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Select 
              value={selectedBrewery} 
              onChange={handleBreweryFilterChange}
            >
              <option value="">Toutes les brasseries</option>
              {breweries.map((brewery) => (
                <option key={brewery.id} value={brewery.id}>
                  {brewery.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Link to="/beers/add">
            <Button variant="success" className="w-100">Ajouter une bière</Button>
          </Link>
        </Col>
      </Row>
      
      {/* Beers List */}
      <Row>
        {filteredBeers.length > 0 ? (
          filteredBeers.map((beer) => (
            <Col lg={3} md={4} sm={6} key={beer.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src={beer.imageUrl || 'https://via.placeholder.com/300x200?text=Bière'} 
                  alt={beer.beer}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{beer.beer}</Card.Title>
                  <Card.Text>
                    Prix: {beer.price} €
                  </Card.Text>
                  {breweries.find(b => b.id === beer.brewery_id) && (
                    <Card.Text>
                      Brasserie: {breweries.find(b => b.id === beer.brewery_id).name}
                    </Card.Text>
                  )}
                  <div className="mt-auto">
                    <Link to={`/beers/${beer.id}`}>
                      <Button variant="primary" className="w-100 mb-2">Voir détails</Button>
                    </Link>
                    <Button 
                      variant="outline-success" 
                      className="w-100"
                      onClick={() => {
                        // Here you would add to cart functionality
                        alert(`Ajout de ${beer.beer} au panier`);
                      }}
                    >
                      Ajouter au panier
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col className="text-center">
            <p>Aucune bière ne correspond à vos critères de recherche.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default BeersPage;
