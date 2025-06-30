import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import UserService from '../services/user.service';

const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = UserService.isAuthenticated();

  const handleLogout = () => {
    UserService.logout();
    navigate('/login');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          {/* Logo en base64 pour éviter les problèmes de chargement */}
          <svg 
            width="30" 
            height="30" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="d-inline-block align-top me-2"
          >
            <path d="M6 15C5.44772 15 5 15.4477 5 16V19C5 19.5523 5.44772 20 6 20C6.55228 20 7 19.5523 7 19V16C7 15.4477 6.55228 15 6 15Z" fill="#f39c12"/>
            <path d="M18 15C17.4477 15 17 15.4477 17 16V19C17 19.5523 17.4477 20 18 20C18.5523 20 19 19.5523 19 19V16C19 15.4477 18.5523 15 18 15Z" fill="#f39c12"/>
            <path d="M7 13C4.79086 13 3 14.7909 3 17V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V17C21 14.7909 19.2091 13 17 13H7Z" fill="#f39c12"/>
            <path d="M12 2C9.23858 2 7 4.23858 7 7V13H17V7C17 4.23858 14.7614 2 12 2Z" fill="#e67e22"/>
            <path d="M15 7.5C15 9.15685 13.6569 10.5 12 10.5C10.3431 10.5 9 9.15685 9 7.5C9 5.84315 10.3431 4.5 12 4.5C13.6569 4.5 15 5.84315 15 7.5Z" fill="#fde5d2"/>
          </svg>
          UBeer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/beers">Bières</Nav.Link>
            <Nav.Link as={Link} to="/breweries">Brasseries</Nav.Link>
            <Nav.Link as={Link} to="/api-test">Test API</Nav.Link>
            <Nav.Link as={Link} to="/test">🧪 Test</Nav.Link>
            <Nav.Link as={Link} to="/cart">🛒 Panier</Nav.Link>
          </Nav>
          <Nav>
            {isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/cart">Panier</Nav.Link>
                <Nav.Link as={Link} to="/profile">Profil</Nav.Link>
                <Button variant="outline-light" onClick={handleLogout}>Déconnexion</Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Connexion</Nav.Link>
                <Nav.Link as={Link} to="/register">Inscription</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
