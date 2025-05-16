import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>UBeer</h5>
            <p>Votre plateforme de découverte et d'achat de bières artisanales</p>
          </Col>
          <Col md={4}>
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Accueil</a></li>
              <li><a href="/beers" className="text-light">Nos bières</a></li>
              <li><a href="/breweries" className="text-light">Nos brasseries</a></li>
              <li><a href="/about" className="text-light">À propos</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <address>
              <p>Email: contact@ubeer.com</p>
              <p>Téléphone: +33 1 23 45 67 89</p>
              <p>Adresse: 123 Avenue de la Bière, 75000 Paris</p>
            </address>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} UBeer. Tous droits réservés.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
