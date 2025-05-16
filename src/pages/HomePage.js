import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, 
  // eslint-disable-next-line no-unused-vars
  Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BeerService from '../services/beer.service';
import BreweryService from '../services/brewery.service';

const HomePage = () => {
  const [featuredBeers, setFeaturedBeers] = useState([]);
  const [breweries, setBreweries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Fetch beers and take first 4 for featured display
        const beers = await BeerService.getAllBeers();
        setFeaturedBeers(beers.slice(0, 4));
        
        // Fetch breweries
        const breweryData = await BreweryService.getAllBreweries();
        setBreweries(breweryData.slice(0, 3));
        
        setIsLoading(false);
      } catch (err) {
        setError('Une erreur est survenue lors du chargement des données.');
        setIsLoading(false);
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <Container className="text-center my-5">
        <h2>Chargement en cours...</h2>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center my-5">
        <h2>Erreur</h2>
        <p>{error}</p>
        <Button onClick={() => window.location.reload()}>Réessayer</Button>
      </Container>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-dark text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4">Bienvenue sur UBeer</h1>
              <p className="lead">
                Découvrez une sélection exclusive de bières artisanales provenant des meilleures brasseries.
              </p>
              <Link to="/beers">
                <Button variant="warning" size="lg">Découvrir nos bières</Button>
              </Link>
            </Col>
            <Col md={6}>
              <img
                src="/beer-hero.jpg"
                alt="Collection de bières artisanales"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Featured Beers Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Nos bières à l'honneur</h2>
        <Row>
          {featuredBeers.map((beer) => (
            <Col md={3} sm={6} key={beer.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={beer.imageUrl || 'https://via.placeholder.com/300x200?text=Bière'}
                  alt={beer.beer}
                />
                <Card.Body>
                  <Card.Title>{beer.beer}</Card.Title>
                  <Card.Text>{beer.price} €</Card.Text>
                  <Link to={`/beers/${beer.id}`}>
                    <Button variant="outline-primary" className="w-100">Voir détails</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Link to="/beers">
            <Button variant="primary">Voir toutes nos bières</Button>
          </Link>
        </div>
      </Container>

      {/* Breweries Section */}
      <div className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-4">Nos brasseries partenaires</h2>
          <Row>
            {breweries.map((brewery) => (
              <Col md={4} key={brewery.id} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Body className="text-center">
                    <Card.Title>{brewery.name}</Card.Title>
                    <Card.Text>
                      Découvrez toutes les bières de cette brasserie artisanale.
                    </Card.Text>
                    <Link to={`/breweries/${brewery.id}`}>
                      <Button variant="outline-secondary">Découvrir</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* About Section */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h2>À propos d'UBeer</h2>
            <p>
              UBeer est une plateforme dédiée aux amateurs de bière artisanale. 
              Notre mission est de vous faire découvrir les meilleures bières artisanales 
              et de soutenir les brasseries locales.
            </p>
            <p>
              Parcourez notre sélection, créez votre compte et commandez vos bières préférées en quelques clics !
            </p>
            <Link to="/about">
              <Button variant="outline-dark">En savoir plus</Button>
            </Link>
          </Col>
          <Col md={6}>
            <img
              src="/about-image.jpg"
              alt="À propos d'UBeer"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
