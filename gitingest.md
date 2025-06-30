================================================
FILE: README.md
================================================

https://ubeerv2.netlify.app



# UBeer - Application de gestion de bières artisanales

UBeer est une application frontend React qui consomme l'API UBeer pour permettre aux utilisateurs de découvrir, acheter et gérer des biè



================================================
FILE: netlify.toml
================================================
[build]
  command = "npm run build"
  publish = "build"

# Règle de redirection pour React Router (SPA)
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Configuration des en-têtes pour gérer CORS
[[headers]]
  for = "/*"
    [headers.values]
    Access-Control-Allow-Origin = "*"
    Access-Control-Allow-Methods = "GET, POST, PUT, DELETE, OPTIONS"
    Access-Control-Allow-Headers = "Origin, X-Requested-With, Content-Type, Accept"



================================================
FILE: package.json
================================================
{
  "name": "ubeer",
  "version": "0.1.0",
  "private": true,
  "proxy": "https://ubeer-mpkw.onrender.com",
  "dependencies": {
    "@testing-library/dom": "^10.4.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.3.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.9.0",
    "bootstrap": "^5.3.6",
    "http-proxy-middleware": "^3.0.5",
    "react": "^19.1.0",
    "react-bootstrap": "^2.10.10",
    "react-dom": "^19.1.0",
    "react-router-dom": "^7.6.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}



================================================
FILE: TASK_MANAGER.md
================================================
# TASK MANAGER - Projet UBeer

## Tâches à réaliser

### Configuration initiale
- [x] Initialiser le projet React
- [x] Installer les dépendances (axios, react-router-dom, bootstrap, react-bootstrap)
- [ ] Configurer le routage de l'application
- [ ] Configurer le service API avec axios

### Interfaces utilisateur
- [ ] Créer le composant Header (navigation)
- [ ] Créer le composant Footer
- [ ] Créer une page d'accueil
- [ ] Implémenter le design responsive

### Fonctionnalités des bières (Beers)
- [ ] Créer la page de liste des bières
- [ ] Créer la page de détail d'une bière
- [ ] Implémenter le formulaire d'ajout de bière
- [ ] Implémenter le formulaire de modification de bière
- [ ] Ajouter la fonctionnalité de suppression de bière

### Fonctionnalités des brasseries (Brewery)
- [ ] Créer la page de liste des brasseries
- [ ] Créer la page de détail d'une brasserie
- [ ] Implémenter le formulaire d'ajout de brasserie
- [ ] Implémenter le formulaire de modification de brasserie
- [ ] Ajouter la fonctionnalité de suppression de brasserie

### Fonctionnalités utilisateurs (Users)
- [ ] Créer la page d'inscription
- [ ] Créer la page de connexion
- [ ] Créer la page de profil utilisateur
- [ ] Implémenter le formulaire de modification de profil
- [ ] Gérer les différents rôles (USER, ADMIN)

### Fonctionnalités du panier (Cart)
- [ ] Créer la page du panier
- [ ] Implémenter l'ajout au panier
- [ ] Implémenter la modification de la quantité
- [ ] Implémenter la suppression d'articles
- [ ] Ajouter le calcul du total

### Tests et déploiement
- [ ] Écrire des tests unitaires pour les composants principaux
- [ ] Tester l'application sur différents navigateurs
- [ ] Optimiser les performances
- [ ] Préparer le build de production
- [ ] Déployer l'application



================================================
FILE: windsurf_deployment.yaml
================================================
# Windsurf Deploys Configuration (Beta)
# This is an auto-generated file used to store your app deployment configuration. Do not modify.
# The ID of the project (different from project name) on the provider's system. This is populated as a way to update existing deployments.
project_id: ef7cf6ee-ecdf-434c-b03d-c66261e929e4
# The framework of the web application (examples: nextjs, react, vue, etc.)
framework: create-react-app



================================================
FILE: public/index.html
================================================
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>



================================================
FILE: public/manifest.json
================================================
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}



================================================
FILE: public/robots.txt
================================================
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:



================================================
FILE: public/images/beer-logo.txt
================================================
[Binary file]


================================================
FILE: src/App.css
================================================
/* UBeer Custom CSS */

/* General Styles */
body {
  font-family: 'Roboto', sans-serif;
  color: #333;
}

/* Header Styles */
.navbar-brand {
  font-weight: 700;
  letter-spacing: 1px;
}

/* Hero Section */
.hero-section {
  background-color: #f8f9fa;
  padding: 80px 0;
  margin-bottom: 40px;
}

/* Card Styles */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 20px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

/* Beer Details Page */
.beer-details {
  margin-top: 40px;
}

.beer-price {
  font-size: 24px;
  font-weight: 700;
  color: #28a745;
  margin-bottom: 20px;
}

/* Cart Styles */
.cart-item {
  border-bottom: 1px solid #eee;
  padding: 15px 0;
}

.cart-item:last-child {
  border-bottom: none;
}

.quantity-control {
  display: flex;
  align-items: center;
  max-width: 120px;
}

/* Footer Styles */
footer {
  background-color: #343a40;
  color: white;
  padding: 40px 0 20px;
  margin-top: 60px;
}

footer a {
  color: #f8f9fa;
  text-decoration: none;
}

footer a:hover {
  color: #17a2b8;
  text-decoration: underline;
}

/* Custom Button Colors */
.btn-beer-primary {
  background-color: #f39c12;
  border-color: #f39c12;
  color: white;
}

.btn-beer-primary:hover {
  background-color: #e67e22;
  border-color: #e67e22;
  color: white;
}

/* Form Styles */
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

/* Animation for Alerts */
.alert {
  animation: fadeIn 0.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}



================================================
FILE: src/App.js
================================================
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import BeersPage from './pages/BeersPage';
import BeerDetailsPage from './pages/BeerDetailsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';
import ApiTestPage from './pages/ApiTestPage';

// Auth related
import UserService from './services/user.service';

// Protected route component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = UserService.isAuthenticated();
  
  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        
        <main className="flex-grow-1">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<BeersPage />} />
            <Route path="/beers/:id" element={<BeerDetailsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/api-test" element={<ApiTestPage />} />
            
            {/* Protected routes */}
            <Route 
              path="/cart" 
              element={
                <ProtectedRoute>
                  <CartPage />
                </ProtectedRoute>
              } 
            />
            
            {/* Catch all - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;



================================================
FILE: src/App.test.js
================================================
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



================================================
FILE: src/index.css
================================================
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}



================================================
FILE: src/index.js
================================================
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



================================================
FILE: src/reportWebVitals.js
================================================
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;



================================================
FILE: src/setupProxy.js
================================================
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://ubeer-mpkw.onrender.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/' // Enlève le préfixe '/api' des requêtes
      },
      onProxyRes: function(proxyRes, req, res) {
        // Ajouter des logs pour faciliter le débogage
        console.log('Proxy Response:', req.method, req.path, proxyRes.statusCode);
      },
      onError: function(err, req, res) {
        console.error('Proxy Error:', err);
        res.writeHead(500, {
          'Content-Type': 'text/plain'
        });
        res.end(`Erreur de proxy: ${err.message}`);
      }
    })
  );
};



================================================
FILE: src/setupTests.js
================================================
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';



================================================
FILE: src/components/Footer.js
================================================
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



================================================
FILE: src/components/Header.js
================================================
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



================================================
FILE: src/models/types.js
================================================
/**
 * @typedef {Object} Beer
 * @property {number} id - Beer ID
 * @property {string} beer - Beer name
 * @property {number} price - Beer price
 * @property {number} brewery_id - ID of the brewery
 * @property {string} imageUrl - URL to beer image
 */

/**
 * @typedef {Object} Brewery
 * @property {number} id - Brewery ID
 * @property {string} name - Brewery name
 */

/**
 * @typedef {Object} User
 * @property {number} id - User ID
 * @property {string} name - User's full name
 * @property {string} email - User's email
 * @property {string} role - User's role (USER or ADMIN)
 */

/**
 * @typedef {Object} CartItem
 * @property {number} id - Cart item ID
 * @property {number} user_id - User ID
 * @property {number} beer_id - Beer ID
 * @property {number} quantity - Quantity of beers
 */

export {}; // This is a type definition file only, no actual exports



================================================
FILE: src/pages/ApiTestPage.js
================================================
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Alert, Accordion, Badge } from 'react-bootstrap';
import BeerApiTest from '../utils/apiTests/BeerApiTest';
import BreweryApiTest from '../utils/apiTests/BreweryApiTest';
import UserApiTest from '../utils/apiTests/UserApiTest';
import CartApiTest from '../utils/apiTests/CartApiTest';

const ApiTestPage = () => {
  const [testResults, setTestResults] = useState({
    beer: null,
    brewery: null,
    user: null,
    cart: null
  });
  
  const [isLoading, setIsLoading] = useState({
    beer: false,
    brewery: false,
    user: false,
    cart: false
  });
  
  const [testLog, setTestLog] = useState([]);
  
  // Intercepte les logs de la console pendant les tests
  const captureConsoleLogs = (callback) => {
    const originalConsoleLog = console.log;
    const originalConsoleError = console.error;
    
    const logs = [];
    
    // Override console.log
    console.log = (...args) => {
      logs.push({ type: 'log', message: args.join(' ') });
      originalConsoleLog(...args);
    };
    
    // Override console.error
    console.error = (...args) => {
      logs.push({ type: 'error', message: args.join(' ') });
      originalConsoleError(...args);
    };
    
    // Exécute le callback
    const result = callback();
    
    // Restore original console methods
    console.log = originalConsoleLog;
    console.error = originalConsoleError;
    
    return { result, logs };
  };

  const runBeerTests = async () => {
    setIsLoading({ ...isLoading, beer: true });
    
    const { logs } = captureConsoleLogs(() => {
      const beerTests = new BeerApiTest();
      return beerTests.runAllTests();
    });
    
    setTestLog(logs);
    
    try {
      const beerTests = new BeerApiTest();
      const results = await beerTests.runAllTests();
      
      setTestResults({
        ...testResults,
        beer: results
      });
    } catch (error) {
      console.error('Erreur lors de l\'exécution des tests de bière:', error);
    } finally {
      setIsLoading({ ...isLoading, beer: false });
    }
  };
  
  const runBreweryTests = async () => {
    setIsLoading({ ...isLoading, brewery: true });
    
    const { logs } = captureConsoleLogs(() => {
      const breweryTests = new BreweryApiTest();
      return breweryTests.runAllTests();
    });
    
    setTestLog(logs);
    
    try {
      const breweryTests = new BreweryApiTest();
      const results = await breweryTests.runAllTests();
      
      setTestResults({
        ...testResults,
        brewery: results
      });
    } catch (error) {
      console.error('Erreur lors de l\'exécution des tests de brasserie:', error);
    } finally {
      setIsLoading({ ...isLoading, brewery: false });
    }
  };
  
  const runUserTests = async () => {
    setIsLoading({ ...isLoading, user: true });
    
    const { logs } = captureConsoleLogs(() => {
      const userTests = new UserApiTest();
      return userTests.runAllTests();
    });
    
    setTestLog(logs);
    
    try {
      const userTests = new UserApiTest();
      const results = await userTests.runAllTests();
      
      setTestResults({
        ...testResults,
        user: results
      });
    } catch (error) {
      console.error('Erreur lors de l\'exécution des tests d\'utilisateur:', error);
    } finally {
      setIsLoading({ ...isLoading, user: false });
    }
  };
  
  const runCartTests = async () => {
    setIsLoading({ ...isLoading, cart: true });
    
    const { logs } = captureConsoleLogs(() => {
      const cartTests = new CartApiTest();
      
      // Si nous avons des résultats de tests utilisateur et de bière, utilisons ces IDs
      if (testResults.user && testResults.beer) {
        const userId = testResults.user.createUser?.data?.id || 1;
        const beerId = testResults.beer.createBeer?.data?.id || 1;
        cartTests.setTestIds(userId, beerId);
      }
      
      return cartTests.runAllTests();
    });
    
    setTestLog(logs);
    
    try {
      const cartTests = new CartApiTest();
      
      // Si nous avons des résultats de tests utilisateur et de bière, utilisons ces IDs
      if (testResults.user && testResults.beer) {
        const userId = testResults.user.createUser?.data?.id || 1;
        const beerId = testResults.beer.createBeer?.data?.id || 1;
        cartTests.setTestIds(userId, beerId);
      }
      
      const results = await cartTests.runAllTests();
      
      setTestResults({
        ...testResults,
        cart: results
      });
    } catch (error) {
      console.error('Erreur lors de l\'exécution des tests de panier:', error);
    } finally {
      setIsLoading({ ...isLoading, cart: false });
    }
  };
  
  const runAllTests = async () => {
    await runBeerTests();
    await runBreweryTests();
    await runUserTests();
    await runCartTests();
  };
  
  const renderStatusBadge = (status) => {
    let variant = 'secondary';
    if (status === 'success') variant = 'success';
    if (status === 'failed') variant = 'danger';
    if (status === 'skipped') variant = 'warning';
    
    return <Badge bg={variant}>{status}</Badge>;
  };

  const renderTestResults = (results, title) => {
    if (!results) return null;
    
    return (
      <Accordion.Item eventKey={title.toLowerCase()}>
        <Accordion.Header>
          {title} - Tests CRUD
        </Accordion.Header>
        <Accordion.Body>
          <div className="mb-3">
            {Object.entries(results).map(([testName, result]) => (
              <div key={testName} className="mb-2">
                <h6>
                  {testName} {renderStatusBadge(result.status)}
                </h6>
                {result.error && (
                  <Alert variant="danger" className="p-2 mt-1">
                    <small>{result.error}</small>
                  </Alert>
                )}
              </div>
            ))}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    );
  };

  return (
    <Container className="my-5">
      <h1 className="mb-4">Tests API CRUD</h1>
      <p>Cette page permet de tester les opérations CRUD (Create, Read, Update, Delete) sur l'API UBeer.</p>
      
      <Row className="mt-4 mb-4">
        <Col>
          <Card>
            <Card.Body>
              <h5 className="mb-3">Exécuter les tests</h5>
              <div className="d-flex gap-2 flex-wrap">
                <Button 
                  variant="primary" 
                  onClick={runBeerTests}
                  disabled={isLoading.beer}
                >
                  {isLoading.beer ? 'Test en cours...' : 'Tester les bières'}
                </Button>
                <Button 
                  variant="primary" 
                  onClick={runBreweryTests}
                  disabled={isLoading.brewery}
                >
                  {isLoading.brewery ? 'Test en cours...' : 'Tester les brasseries'}
                </Button>
                <Button 
                  variant="primary" 
                  onClick={runUserTests}
                  disabled={isLoading.user}
                >
                  {isLoading.user ? 'Test en cours...' : 'Tester les utilisateurs'}
                </Button>
                <Button 
                  variant="primary" 
                  onClick={runCartTests}
                  disabled={isLoading.cart}
                >
                  {isLoading.cart ? 'Test en cours...' : 'Tester le panier'}
                </Button>
                <Button 
                  variant="success" 
                  onClick={runAllTests}
                  disabled={Object.values(isLoading).some(Boolean)}
                >
                  Tester tout
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="mt-4">
        <Col lg={6}>
          <h4>Résultats des tests</h4>
          <Accordion className="mt-3">
            {renderTestResults(testResults.beer, 'Bières')}
            {renderTestResults(testResults.brewery, 'Brasseries')}
            {renderTestResults(testResults.user, 'Utilisateurs')}
            {renderTestResults(testResults.cart, 'Panier')}
          </Accordion>
        </Col>
        
        <Col lg={6}>
          <h4>Logs des tests</h4>
          <Card className="mt-3" style={{ height: '500px', overflowY: 'auto' }}>
            <Card.Body>
              {testLog.length === 0 ? (
                <p className="text-muted">Aucun log disponible. Exécutez un test pour voir les logs.</p>
              ) : (
                testLog.map((log, index) => (
                  <div 
                    key={index} 
                    className={`log-line ${log.type === 'error' ? 'text-danger' : ''}`}
                    style={{ 
                      fontFamily: 'monospace', 
                      fontSize: '0.9rem',
                      marginBottom: '0.2rem',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word'
                    }}
                  >
                    {log.message}
                  </div>
                ))
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ApiTestPage;



================================================
FILE: src/pages/BeerDetailsPage.js
================================================
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image, Card, Spinner, Alert, Form } from 'react-bootstrap';
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
  const [addingToCart, setAddingToCart] = useState(false);
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
    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      navigate('/login', { state: { from: `/beers/${id}` } });
      return;
    }

    try {
      setAddingToCart(true);
      // In a real application, you'd get the user ID from the auth state
      const userId = 1; // Placeholder
      
      await CartService.addToCart({
        user_id: userId,
        beer_id: parseInt(id),
        quantity: quantity
      });
      
      setAddingToCart(false);
      alert(`${beer.beer} a été ajouté à votre panier !`);
    } catch (err) {
      setError('Une erreur est survenue lors de l\'ajout au panier.');
      setAddingToCart(false);
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
                disabled={addingToCart}
              >
                {addingToCart ? (
                  <>
                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                    <span className="ms-2">Ajout en cours...</span>
                  </>
                ) : (
                  'Ajouter au panier'
                )}
              </Button>
              
              <p className="text-muted mb-0">
                {isAuthenticated ? 'Livraison gratuite à partir de 50€' : 'Connectez-vous pour ajouter au panier'}
              </p>
            </Card.Body>
          </Card>
          
          {/* Admin actions */}
          {isAuthenticated && (
            <div className="d-flex mt-4">
              <Link to={`/beers/edit/${beer.id}`} className="me-2">
                <Button variant="outline-primary">Modifier</Button>
              </Link>
              <Button variant="outline-danger" onClick={handleDeleteBeer}>
                Supprimer
              </Button>
            </div>
          )}
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



================================================
FILE: src/pages/BeersPage.js
================================================
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



================================================
FILE: src/pages/CartPage.js
================================================
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



================================================
FILE: src/pages/HomePage.js
================================================
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



================================================
FILE: src/pages/LoginPage.js
================================================
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import UserService from '../services/user.service';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear field error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    
    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    try {
      setIsLoading(true);
      setLoginError(null);
      
      // Call the login service
      // Note: In a real implementation, you would connect this to your authentication endpoint
      await UserService.login({
        email: formData.email,
        password: formData.password
      });
      
      // Redirect to the page the user was trying to access or to the home page
      navigate(from);
    } catch (error) {
      setLoginError(
        error.response?.data?.message || 
        'Une erreur est survenue lors de la connexion. Veuillez vérifier vos identifiants.'
      );
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow">
            <Card.Body className="p-4">
              <h2 className="text-center mb-4">Connexion</h2>
              
              {loginError && (
                <Alert variant="danger">{loginError}</Alert>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    placeholder="votre@email.com"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                    placeholder="Votre mot de passe"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="Se souvenir de moi"
                  />
                </Form.Group>
                
                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100" 
                  disabled={isLoading}
                >
                  {isLoading ? 'Connexion en cours...' : 'Se connecter'}
                </Button>
              </Form>
              
              <div className="text-center mt-3">
                <p>
                  Vous n'avez pas de compte ? {' '}
                  <Link to="/register">S'inscrire</Link>
                </p>
                <p>
                  <Link to="/forgot-password">Mot de passe oublié ?</Link>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;



================================================
FILE: src/pages/RegisterPage.js
================================================
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../services/user.service';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'USER'
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [registerError, setRegisterError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear field error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    
    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    try {
      setIsLoading(true);
      setRegisterError(null);
      
      // Call the registration service
      await UserService.registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role
      });
      
      // Set success message and clear form
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'USER'
      });
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      setRegisterError(
        error.response?.data?.message || 
        'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.'
      );
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow">
            <Card.Body className="p-4">
              <h2 className="text-center mb-4">Inscription</h2>
              
              {registerError && (
                <Alert variant="danger">{registerError}</Alert>
              )}
              
              {success && (
                <Alert variant="success">
                  Inscription réussie ! Vous allez être redirigé vers la page de connexion...
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nom complet</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                    placeholder="Votre nom complet"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    placeholder="votre@email.com"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                    placeholder="Votre mot de passe"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                  <Form.Text className="text-muted">
                    Le mot de passe doit contenir au moins 6 caractères.
                  </Form.Text>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Confirmer le mot de passe</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    isInvalid={!!errors.confirmPassword}
                    placeholder="Confirmez votre mot de passe"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100" 
                  disabled={isLoading || success}
                >
                  {isLoading ? 'Inscription en cours...' : 'S\'inscrire'}
                </Button>
              </Form>
              
              <div className="text-center mt-3">
                <p>
                  Vous avez déjà un compte ? {' '}
                  <Link to="/login">Se connecter</Link>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;



================================================
FILE: src/services/api.service.js
================================================
import axios from 'axios';

// URL directe de l'API UBeer
const API_URL = 'https://ubeer-mpkw.onrender.com';

// Configuration de l'API client utilisant l'URL directe
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to handle authentication
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle errors globally
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle 401 Unauthorized errors (expired token, etc.)
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      // Redirect to login page if not already there
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    
    // Log des erreurs réseau pour faciliter le debugging
    if (error.message === 'Network Error') {
      console.error('Network Error detected - Verify that the proxy is correctly configured.');
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;



================================================
FILE: src/services/beer.service.js
================================================
import apiClient from './api.service';

// Données de secours au cas où l'API n'est pas accessible (problèmes CORS, etc.)
const FALLBACK_BEERS = [
  {
    id: 1,
    beer: 'IPA Blonde',
    price: 4.5,
    brewery_id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    beer: 'Stout Chocolat',
    price: 5.2,
    brewery_id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1523567830207-96731740fa71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    beer: 'Pale Ale Agrumes',
    price: 3.8,
    brewery_id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1518099074172-2e47ee6cfdc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    beer: 'Blanche de Blé',
    price: 4.0,
    brewery_id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const BeerService = {
  // Get all beers
  getAllBeers: async () => {
    try {
      const response = await apiClient.get('/beers');
      // Vérifie que la réponse est bien un tableau
      if (Array.isArray(response.data)) {
        return response.data;
      } else {
        console.error('API response is not an array:', response.data);
        return FALLBACK_BEERS;
      }
    } catch (error) {
      console.error('Error fetching beers:', error);
      // En cas d'erreur (CORS ou autre), on utilise les données de secours
      console.log('Utilisation des données de secours pour les bières');
      return FALLBACK_BEERS;
    }
  },

  // Get a specific beer by ID
  getBeerById: async (id) => {
    try {
      const response = await apiClient.get(`/beers/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching beer with ID ${id}:`, error);
      // En cas d'erreur, on cherche la bière dans les données de secours
      const fallbackBeer = FALLBACK_BEERS.find(beer => beer.id === parseInt(id));
      if (fallbackBeer) {
        console.log('Utilisation des données de secours pour la bière', id);
        return fallbackBeer;
      }
      throw error;
    }
  },

  // Create a new beer
  createBeer: async (beerData) => {
    try {
      const response = await apiClient.post('/beers', beerData);
      return response.data;
    } catch (error) {
      console.error('Error creating beer:', error);
      throw error;
    }
  },

  // Update an existing beer
  updateBeer: async (id, beerData) => {
    try {
      const response = await apiClient.put(`/beers/${id}`, beerData);
      return response.data;
    } catch (error) {
      console.error(`Error updating beer with ID ${id}:`, error);
      throw error;
    }
  },

  // Delete a beer
  deleteBeer: async (id) => {
    try {
      const response = await apiClient.delete(`/beers/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting beer with ID ${id}:`, error);
      throw error;
    }
  }
};

export default BeerService;



================================================
FILE: src/services/brewery.service.js
================================================
import apiClient from './api.service';

const FALLBACK_BREWERIES = [];

const BreweryService = {
  // Get all breweries
  getAllBreweries: async () => {
    try {
      const response = await apiClient.get('/brewery');
      // Vérifie que la réponse est bien un tableau
      if (Array.isArray(response.data)) {
        return response.data;
      } else {
        console.error('API response is not an array:', response.data);
        return FALLBACK_BREWERIES;
      }
    } catch (error) {
      console.error('Error fetching breweries:', error);
      return FALLBACK_BREWERIES;
    }
  },

  // Get a specific brewery by ID
  getBreweryById: async (id) => {
    try {
      const response = await apiClient.get(`/brewery/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching brewery with ID ${id}:`, error);
      throw error;
    }
  },

  // Create a new brewery
  createBrewery: async (breweryData) => {
    try {
      const response = await apiClient.post('/brewery', breweryData);
      return response.data;
    } catch (error) {
      console.error('Error creating brewery:', error);
      throw error;
    }
  },

  // Update an existing brewery
  updateBrewery: async (id, breweryData) => {
    try {
      const response = await apiClient.put(`/brewery/${id}`, breweryData);
      return response.data;
    } catch (error) {
      console.error(`Error updating brewery with ID ${id}:`, error);
      throw error;
    }
  },

  // Delete a brewery
  deleteBrewery: async (id) => {
    try {
      const response = await apiClient.delete(`/brewery/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting brewery with ID ${id}:`, error);
      throw error;
    }
  }
};

export default BreweryService;



================================================
FILE: src/services/cart.service.js
================================================
import apiClient from './api.service';

const CartService = {
  // Get all cart items
  getAllCartItems: async () => {
    try {
      const response = await apiClient.get('/cart');
      return response.data;
    } catch (error) {
      console.error('Error fetching cart items:', error);
      throw error;
    }
  },

  // Get a specific cart item by ID
  getCartItemById: async (id) => {
    try {
      const response = await apiClient.get(`/cart/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching cart item with ID ${id}:`, error);
      throw error;
    }
  },

  // Add item to cart
  addToCart: async (cartData) => {
    try {
      const response = await apiClient.post('/cart', cartData);
      return response.data;
    } catch (error) {
      console.error('Error adding item to cart:', error);
      throw error;
    }
  },

  // Update cart item
  updateCartItem: async (id, cartData) => {
    try {
      const response = await apiClient.patch(`/cart/${id}`, cartData);
      return response.data;
    } catch (error) {
      console.error(`Error updating cart item with ID ${id}:`, error);
      throw error;
    }
  },

  // Remove item from cart
  removeFromCart: async (id) => {
    try {
      const response = await apiClient.delete(`/cart/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error removing cart item with ID ${id}:`, error);
      throw error;
    }
  }
};

export default CartService;



================================================
FILE: src/services/stripe.service.js
================================================

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



================================================
FILE: src/services/user.service.js
================================================
import apiClient from './api.service';

const UserService = {
  // Get all users
  getAllUsers: async () => {
    try {
      const response = await apiClient.get('/users');
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },

  // Get a specific user by ID
  getUserById: async (id) => {
    try {
      const response = await apiClient.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user with ID ${id}:`, error);
      throw error;
    }
  },

  // Register a new user
  registerUser: async (userData) => {
    try {
      const response = await apiClient.post('/users', userData);
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  },

  // Update a user
  updateUser: async (id, userData) => {
    try {
      const response = await apiClient.patch(`/users/${id}`, userData);
      return response.data;
    } catch (error) {
      console.error(`Error updating user with ID ${id}:`, error);
      throw error;
    }
  },

  // Delete a user
  deleteUser: async (id) => {
    try {
      const response = await apiClient.delete(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting user with ID ${id}:`, error);
      throw error;
    }
  },

  // Login (this would need to be connected to your authentication endpoint if available)
  login: async (credentials) => {
    try {
      // This is a placeholder - you would connect to your actual login endpoint
      const response = await apiClient.post('/login', credentials);
      // Store the token in localStorage
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      return response.data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  },

  // Logout
  logout: () => {
    localStorage.removeItem('token');
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return localStorage.getItem('token') !== null;
  }
};

export default UserService;



================================================
FILE: src/utils/apiTests/BeerApiTest.js
================================================
import BeerService from '../../services/beer.service';

/**
 * Utilitaire de test pour vérifier les opérations CRUD sur les bières
 */
class BeerApiTest {
  constructor() {
    this.testResults = {
      getAllBeers: { status: 'pending', data: null, error: null },
      getBeerById: { status: 'pending', data: null, error: null },
      createBeer: { status: 'pending', data: null, error: null },
      updateBeer: { status: 'pending', data: null, error: null },
      deleteBeer: { status: 'pending', data: null, error: null }
    };
    
    this.testBeer = {
      beer: "Test IPA " + new Date().getTime(),
      price: 4.5,
      brewery_id: 1,
      imageUrl: "https://example.com/test-beer.webp"
    };
    
    this.createdBeerId = null;
  }

  /**
   * Exécute tous les tests CRUD sur les bières
   */
  async runAllTests() {
    console.log('---- Démarrage des tests API pour les bières ----');
    
    try {
      // Étape 1: Récupérer toutes les bières
      await this.testGetAllBeers();
      
      // Étape 2: Créer une nouvelle bière
      await this.testCreateBeer();
      
      // Étape 3: Récupérer la bière par ID
      if (this.createdBeerId) {
        await this.testGetBeerById(this.createdBeerId);
      } else {
        this.testResults.getBeerById.status = 'skipped';
        this.testResults.getBeerById.error = 'Impossible de tester: aucune bière créée';
      }
      
      // Étape 4: Mettre à jour la bière
      if (this.createdBeerId) {
        await this.testUpdateBeer(this.createdBeerId);
      } else {
        this.testResults.updateBeer.status = 'skipped';
        this.testResults.updateBeer.error = 'Impossible de tester: aucune bière créée';
      }
      
      // Étape 5: Supprimer la bière
      if (this.createdBeerId) {
        await this.testDeleteBeer(this.createdBeerId);
      } else {
        this.testResults.deleteBeer.status = 'skipped';
        this.testResults.deleteBeer.error = 'Impossible de tester: aucune bière créée';
      }
    } catch (error) {
      console.error('Erreur lors de l\'exécution des tests:', error);
    }
    
    // Afficher les résultats
    this.displayResults();
    
    return this.testResults;
  }

  /**
   * Teste la récupération de toutes les bières
   */
  async testGetAllBeers() {
    console.log('Test: Récupération de toutes les bières');
    try {
      const beers = await BeerService.getAllBeers();
      this.testResults.getAllBeers.status = 'success';
      this.testResults.getAllBeers.data = `${beers.length} bières récupérées`;
      console.log(`✅ Succès: ${beers.length} bières récupérées`);
      return beers;
    } catch (error) {
      this.testResults.getAllBeers.status = 'failed';
      this.testResults.getAllBeers.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la création d'une bière
   */
  async testCreateBeer() {
    console.log('Test: Création d\'une bière');
    try {
      const newBeer = await BeerService.createBeer(this.testBeer);
      this.createdBeerId = newBeer.id;
      this.testResults.createBeer.status = 'success';
      this.testResults.createBeer.data = newBeer;
      console.log(`✅ Succès: Bière créée avec l'ID ${newBeer.id}`);
      return newBeer;
    } catch (error) {
      this.testResults.createBeer.status = 'failed';
      this.testResults.createBeer.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la récupération d'une bière par ID
   */
  async testGetBeerById(id) {
    console.log(`Test: Récupération de la bière avec l'ID ${id}`);
    try {
      const beer = await BeerService.getBeerById(id);
      this.testResults.getBeerById.status = 'success';
      this.testResults.getBeerById.data = beer;
      console.log(`✅ Succès: Bière "${beer.beer}" récupérée`);
      return beer;
    } catch (error) {
      this.testResults.getBeerById.status = 'failed';
      this.testResults.getBeerById.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la mise à jour d'une bière
   */
  async testUpdateBeer(id) {
    console.log(`Test: Mise à jour de la bière avec l'ID ${id}`);
    try {
      const updatedData = {
        ...this.testBeer,
        beer: this.testBeer.beer + " (Modifiée)",
        price: this.testBeer.price + 1
      };
      
      const updatedBeer = await BeerService.updateBeer(id, updatedData);
      this.testResults.updateBeer.status = 'success';
      this.testResults.updateBeer.data = updatedBeer;
      console.log(`✅ Succès: Bière modifiée en "${updatedBeer.beer}"`);
      return updatedBeer;
    } catch (error) {
      this.testResults.updateBeer.status = 'failed';
      this.testResults.updateBeer.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la suppression d'une bière
   */
  async testDeleteBeer(id) {
    console.log(`Test: Suppression de la bière avec l'ID ${id}`);
    try {
      const result = await BeerService.deleteBeer(id);
      this.testResults.deleteBeer.status = 'success';
      this.testResults.deleteBeer.data = result;
      console.log('✅ Succès: Bière supprimée');
      return result;
    } catch (error) {
      this.testResults.deleteBeer.status = 'failed';
      this.testResults.deleteBeer.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Affiche les résultats des tests
   */
  displayResults() {
    console.log('\n---- Résultats des tests API pour les bières ----');
    Object.entries(this.testResults).forEach(([testName, result]) => {
      const emoji = result.status === 'success' ? '✅' : result.status === 'pending' ? '⏳' : '❌';
      console.log(`${emoji} ${testName}: ${result.status}`);
      if (result.status === 'failed' && result.error) {
        console.log(`   Erreur: ${result.error}`);
      }
    });
    console.log('------------------------------------------------\n');
  }
}

export default BeerApiTest;



================================================
FILE: src/utils/apiTests/BreweryApiTest.js
================================================
import BreweryService from '../../services/brewery.service';

/**
 * Utilitaire de test pour vérifier les opérations CRUD sur les brasseries
 */
class BreweryApiTest {
  constructor() {
    this.testResults = {
      getAllBreweries: { status: 'pending', data: null, error: null },
      getBreweryById: { status: 'pending', data: null, error: null },
      createBrewery: { status: 'pending', data: null, error: null },
      updateBrewery: { status: 'pending', data: null, error: null },
      deleteBrewery: { status: 'pending', data: null, error: null }
    };
    
    this.testBrewery = {
      name: "Brasserie Test " + new Date().getTime()
    };
    
    this.createdBreweryId = null;
  }

  /**
   * Exécute tous les tests CRUD sur les brasseries
   */
  async runAllTests() {
    console.log('---- Démarrage des tests API pour les brasseries ----');
    
    try {
      // Étape 1: Récupérer toutes les brasseries
      await this.testGetAllBreweries();
      
      // Étape 2: Créer une nouvelle brasserie
      await this.testCreateBrewery();
      
      // Étape 3: Récupérer la brasserie par ID
      if (this.createdBreweryId) {
        await this.testGetBreweryById(this.createdBreweryId);
      } else {
        this.testResults.getBreweryById.status = 'skipped';
        this.testResults.getBreweryById.error = 'Impossible de tester: aucune brasserie créée';
      }
      
      // Étape 4: Mettre à jour la brasserie
      if (this.createdBreweryId) {
        await this.testUpdateBrewery(this.createdBreweryId);
      } else {
        this.testResults.updateBrewery.status = 'skipped';
        this.testResults.updateBrewery.error = 'Impossible de tester: aucune brasserie créée';
      }
      
      // Étape 5: Supprimer la brasserie
      if (this.createdBreweryId) {
        await this.testDeleteBrewery(this.createdBreweryId);
      } else {
        this.testResults.deleteBrewery.status = 'skipped';
        this.testResults.deleteBrewery.error = 'Impossible de tester: aucune brasserie créée';
      }
    } catch (error) {
      console.error('Erreur lors de l\'exécution des tests:', error);
    }
    
    // Afficher les résultats
    this.displayResults();
    
    return this.testResults;
  }

  /**
   * Teste la récupération de toutes les brasseries
   */
  async testGetAllBreweries() {
    console.log('Test: Récupération de toutes les brasseries');
    try {
      const breweries = await BreweryService.getAllBreweries();
      this.testResults.getAllBreweries.status = 'success';
      this.testResults.getAllBreweries.data = `${breweries.length} brasseries récupérées`;
      console.log(`✅ Succès: ${breweries.length} brasseries récupérées`);
      return breweries;
    } catch (error) {
      this.testResults.getAllBreweries.status = 'failed';
      this.testResults.getAllBreweries.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la création d'une brasserie
   */
  async testCreateBrewery() {
    console.log('Test: Création d\'une brasserie');
    try {
      const newBrewery = await BreweryService.createBrewery(this.testBrewery);
      this.createdBreweryId = newBrewery.id;
      this.testResults.createBrewery.status = 'success';
      this.testResults.createBrewery.data = newBrewery;
      console.log(`✅ Succès: Brasserie créée avec l'ID ${newBrewery.id}`);
      return newBrewery;
    } catch (error) {
      this.testResults.createBrewery.status = 'failed';
      this.testResults.createBrewery.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la récupération d'une brasserie par ID
   */
  async testGetBreweryById(id) {
    console.log(`Test: Récupération de la brasserie avec l'ID ${id}`);
    try {
      const brewery = await BreweryService.getBreweryById(id);
      this.testResults.getBreweryById.status = 'success';
      this.testResults.getBreweryById.data = brewery;
      console.log(`✅ Succès: Brasserie "${brewery.name}" récupérée`);
      return brewery;
    } catch (error) {
      this.testResults.getBreweryById.status = 'failed';
      this.testResults.getBreweryById.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la mise à jour d'une brasserie
   */
  async testUpdateBrewery(id) {
    console.log(`Test: Mise à jour de la brasserie avec l'ID ${id}`);
    try {
      const updatedData = {
        name: this.testBrewery.name + " (Modifiée)"
      };
      
      const updatedBrewery = await BreweryService.updateBrewery(id, updatedData);
      this.testResults.updateBrewery.status = 'success';
      this.testResults.updateBrewery.data = updatedBrewery;
      console.log(`✅ Succès: Brasserie modifiée en "${updatedBrewery.name}"`);
      return updatedBrewery;
    } catch (error) {
      this.testResults.updateBrewery.status = 'failed';
      this.testResults.updateBrewery.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la suppression d'une brasserie
   */
  async testDeleteBrewery(id) {
    console.log(`Test: Suppression de la brasserie avec l'ID ${id}`);
    try {
      const result = await BreweryService.deleteBrewery(id);
      this.testResults.deleteBrewery.status = 'success';
      this.testResults.deleteBrewery.data = result;
      console.log('✅ Succès: Brasserie supprimée');
      return result;
    } catch (error) {
      this.testResults.deleteBrewery.status = 'failed';
      this.testResults.deleteBrewery.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Affiche les résultats des tests
   */
  displayResults() {
    console.log('\n---- Résultats des tests API pour les brasseries ----');
    Object.entries(this.testResults).forEach(([testName, result]) => {
      const emoji = result.status === 'success' ? '✅' : result.status === 'pending' ? '⏳' : '❌';
      console.log(`${emoji} ${testName}: ${result.status}`);
      if (result.status === 'failed' && result.error) {
        console.log(`   Erreur: ${result.error}`);
      }
    });
    console.log('------------------------------------------------\n');
  }
}

export default BreweryApiTest;



================================================
FILE: src/utils/apiTests/CartApiTest.js
================================================
import CartService from '../../services/cart.service';

/**
 * Utilitaire de test pour vérifier les opérations CRUD sur le panier
 */
class CartApiTest {
  constructor() {
    this.testResults = {
      getAllCartItems: { status: 'pending', data: null, error: null },
      getCartItemById: { status: 'pending', data: null, error: null },
      createCartItem: { status: 'pending', data: null, error: null },
      updateCartItem: { status: 'pending', data: null, error: null },
      deleteCartItem: { status: 'pending', data: null, error: null }
    };
    
    // Pour les tests du panier, nous avons besoin d'IDs d'utilisateur et de bière valides
    this.testCartItem = {
      user_id: 1, // Remplacer par un ID utilisateur valide
      beer_id: 1, // Remplacer par un ID de bière valide
      quantity: 2
    };
    
    this.createdCartItemId = null;
  }

  /**
   * Permet de définir les IDs d'utilisateur et de bière à utiliser pour les tests
   * @param {number} userId - ID de l'utilisateur
   * @param {number} beerId - ID de la bière
   */
  setTestIds(userId, beerId) {
    this.testCartItem.user_id = userId;
    this.testCartItem.beer_id = beerId;
    console.log(`Test configuré avec user_id=${userId} et beer_id=${beerId}`);
  }

  /**
   * Exécute tous les tests CRUD sur le panier
   */
  async runAllTests() {
    console.log('---- Démarrage des tests API pour le panier ----');
    
    try {
      // Étape 1: Récupérer tous les éléments du panier
      await this.testGetAllCartItems();
      
      // Étape 2: Créer un nouvel élément dans le panier
      await this.testCreateCartItem();
      
      // Étape 3: Récupérer l'élément du panier par ID
      if (this.createdCartItemId) {
        await this.testGetCartItemById(this.createdCartItemId);
      } else {
        this.testResults.getCartItemById.status = 'skipped';
        this.testResults.getCartItemById.error = 'Impossible de tester: aucun élément de panier créé';
      }
      
      // Étape 4: Mettre à jour l'élément du panier
      if (this.createdCartItemId) {
        await this.testUpdateCartItem(this.createdCartItemId);
      } else {
        this.testResults.updateCartItem.status = 'skipped';
        this.testResults.updateCartItem.error = 'Impossible de tester: aucun élément de panier créé';
      }
      
      // Étape 5: Supprimer l'élément du panier
      if (this.createdCartItemId) {
        await this.testDeleteCartItem(this.createdCartItemId);
      } else {
        this.testResults.deleteCartItem.status = 'skipped';
        this.testResults.deleteCartItem.error = 'Impossible de tester: aucun élément de panier créé';
      }
    } catch (error) {
      console.error('Erreur lors de l\'exécution des tests:', error);
    }
    
    // Afficher les résultats
    this.displayResults();
    
    return this.testResults;
  }

  /**
   * Teste la récupération de tous les éléments du panier
   */
  async testGetAllCartItems() {
    console.log('Test: Récupération de tous les éléments du panier');
    try {
      const cartItems = await CartService.getAllCartItems();
      this.testResults.getAllCartItems.status = 'success';
      this.testResults.getAllCartItems.data = `${cartItems.length} éléments de panier récupérés`;
      console.log(`✅ Succès: ${cartItems.length} éléments de panier récupérés`);
      return cartItems;
    } catch (error) {
      this.testResults.getAllCartItems.status = 'failed';
      this.testResults.getAllCartItems.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la création d'un élément dans le panier
   */
  async testCreateCartItem() {
    console.log('Test: Création d\'un élément dans le panier');
    try {
      const newCartItem = await CartService.addToCart(this.testCartItem);
      this.createdCartItemId = newCartItem.id;
      this.testResults.createCartItem.status = 'success';
      this.testResults.createCartItem.data = newCartItem;
      console.log(`✅ Succès: Élément ajouté au panier avec l'ID ${newCartItem.id}`);
      return newCartItem;
    } catch (error) {
      this.testResults.createCartItem.status = 'failed';
      this.testResults.createCartItem.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la récupération d'un élément du panier par ID
   */
  async testGetCartItemById(id) {
    console.log(`Test: Récupération de l'élément du panier avec l'ID ${id}`);
    try {
      const cartItem = await CartService.getCartItemById(id);
      this.testResults.getCartItemById.status = 'success';
      this.testResults.getCartItemById.data = cartItem;
      console.log(`✅ Succès: Élément du panier récupéré (quantité: ${cartItem.quantity})`);
      return cartItem;
    } catch (error) {
      this.testResults.getCartItemById.status = 'failed';
      this.testResults.getCartItemById.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la mise à jour d'un élément du panier
   */
  async testUpdateCartItem(id) {
    console.log(`Test: Mise à jour de l'élément du panier avec l'ID ${id}`);
    try {
      const updatedData = {
        user_id: this.testCartItem.user_id,
        beer_id: this.testCartItem.beer_id,
        quantity: this.testCartItem.quantity + 1
      };
      
      const updatedCartItem = await CartService.updateCartItem(id, updatedData);
      this.testResults.updateCartItem.status = 'success';
      this.testResults.updateCartItem.data = updatedCartItem;
      console.log(`✅ Succès: Élément du panier mis à jour avec la quantité ${updatedCartItem.quantity}`);
      return updatedCartItem;
    } catch (error) {
      this.testResults.updateCartItem.status = 'failed';
      this.testResults.updateCartItem.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la suppression d'un élément du panier
   */
  async testDeleteCartItem(id) {
    console.log(`Test: Suppression de l'élément du panier avec l'ID ${id}`);
    try {
      const result = await CartService.removeFromCart(id);
      this.testResults.deleteCartItem.status = 'success';
      this.testResults.deleteCartItem.data = result;
      console.log('✅ Succès: Élément du panier supprimé');
      return result;
    } catch (error) {
      this.testResults.deleteCartItem.status = 'failed';
      this.testResults.deleteCartItem.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Affiche les résultats des tests
   */
  displayResults() {
    console.log('\n---- Résultats des tests API pour le panier ----');
    Object.entries(this.testResults).forEach(([testName, result]) => {
      const emoji = result.status === 'success' ? '✅' : result.status === 'pending' ? '⏳' : '❌';
      console.log(`${emoji} ${testName}: ${result.status}`);
      if (result.status === 'failed' && result.error) {
        console.log(`   Erreur: ${result.error}`);
      }
    });
    console.log('------------------------------------------------\n');
  }
}

export default CartApiTest;



================================================
FILE: src/utils/apiTests/UserApiTest.js
================================================
import UserService from '../../services/user.service';

/**
 * Utilitaire de test pour vérifier les opérations CRUD sur les utilisateurs
 */
class UserApiTest {
  constructor() {
    this.testResults = {
      getAllUsers: { status: 'pending', data: null, error: null },
      getUserById: { status: 'pending', data: null, error: null },
      createUser: { status: 'pending', data: null, error: null },
      updateUser: { status: 'pending', data: null, error: null },
      deleteUser: { status: 'pending', data: null, error: null }
    };
    
    // Créons un email unique pour éviter les conflits
    const timestamp = new Date().getTime();
    this.testUser = {
      name: "Utilisateur Test",
      email: `test.user.${timestamp}@example.com`,
      password: "TestPassword123",
      role: "USER"
    };
    
    this.createdUserId = null;
  }

  /**
   * Exécute tous les tests CRUD sur les utilisateurs
   */
  async runAllTests() {
    console.log('---- Démarrage des tests API pour les utilisateurs ----');
    
    try {
      // Étape 1: Récupérer tous les utilisateurs
      await this.testGetAllUsers();
      
      // Étape 2: Créer un nouvel utilisateur
      await this.testCreateUser();
      
      // Étape 3: Récupérer l'utilisateur par ID
      if (this.createdUserId) {
        await this.testGetUserById(this.createdUserId);
      } else {
        this.testResults.getUserById.status = 'skipped';
        this.testResults.getUserById.error = 'Impossible de tester: aucun utilisateur créé';
      }
      
      // Étape 4: Mettre à jour l'utilisateur
      if (this.createdUserId) {
        await this.testUpdateUser(this.createdUserId);
      } else {
        this.testResults.updateUser.status = 'skipped';
        this.testResults.updateUser.error = 'Impossible de tester: aucun utilisateur créé';
      }
      
      // Étape 5: Supprimer l'utilisateur
      if (this.createdUserId) {
        await this.testDeleteUser(this.createdUserId);
      } else {
        this.testResults.deleteUser.status = 'skipped';
        this.testResults.deleteUser.error = 'Impossible de tester: aucun utilisateur créé';
      }
    } catch (error) {
      console.error('Erreur lors de l\'exécution des tests:', error);
    }
    
    // Afficher les résultats
    this.displayResults();
    
    return this.testResults;
  }

  /**
   * Teste la récupération de tous les utilisateurs
   */
  async testGetAllUsers() {
    console.log('Test: Récupération de tous les utilisateurs');
    try {
      const users = await UserService.getAllUsers();
      this.testResults.getAllUsers.status = 'success';
      this.testResults.getAllUsers.data = `${users.length} utilisateurs récupérés`;
      console.log(`✅ Succès: ${users.length} utilisateurs récupérés`);
      return users;
    } catch (error) {
      this.testResults.getAllUsers.status = 'failed';
      this.testResults.getAllUsers.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la création d'un utilisateur
   */
  async testCreateUser() {
    console.log('Test: Création d\'un utilisateur');
    try {
      const newUser = await UserService.registerUser(this.testUser);
      this.createdUserId = newUser.id;
      this.testResults.createUser.status = 'success';
      this.testResults.createUser.data = newUser;
      console.log(`✅ Succès: Utilisateur créé avec l'ID ${newUser.id}`);
      return newUser;
    } catch (error) {
      this.testResults.createUser.status = 'failed';
      this.testResults.createUser.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la récupération d'un utilisateur par ID
   */
  async testGetUserById(id) {
    console.log(`Test: Récupération de l'utilisateur avec l'ID ${id}`);
    try {
      const user = await UserService.getUserById(id);
      this.testResults.getUserById.status = 'success';
      this.testResults.getUserById.data = user;
      console.log(`✅ Succès: Utilisateur "${user.name}" récupéré`);
      return user;
    } catch (error) {
      this.testResults.getUserById.status = 'failed';
      this.testResults.getUserById.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la mise à jour d'un utilisateur
   */
  async testUpdateUser(id) {
    console.log(`Test: Mise à jour de l'utilisateur avec l'ID ${id}`);
    try {
      const updatedData = {
        name: this.testUser.name + " (Modifié)"
      };
      
      const updatedUser = await UserService.updateUser(id, updatedData);
      this.testResults.updateUser.status = 'success';
      this.testResults.updateUser.data = updatedUser;
      console.log(`✅ Succès: Utilisateur modifié en "${updatedUser.name}"`);
      return updatedUser;
    } catch (error) {
      this.testResults.updateUser.status = 'failed';
      this.testResults.updateUser.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Teste la suppression d'un utilisateur
   */
  async testDeleteUser(id) {
    console.log(`Test: Suppression de l'utilisateur avec l'ID ${id}`);
    try {
      const result = await UserService.deleteUser(id);
      this.testResults.deleteUser.status = 'success';
      this.testResults.deleteUser.data = result;
      console.log('✅ Succès: Utilisateur supprimé');
      return result;
    } catch (error) {
      this.testResults.deleteUser.status = 'failed';
      this.testResults.deleteUser.error = error.message;
      console.error('❌ Échec:', error.message);
      throw error;
    }
  }

  /**
   * Affiche les résultats des tests
   */
  displayResults() {
    console.log('\n---- Résultats des tests API pour les utilisateurs ----');
    Object.entries(this.testResults).forEach(([testName, result]) => {
      const emoji = result.status === 'success' ? '✅' : result.status === 'pending' ? '⏳' : '❌';
      console.log(`${emoji} ${testName}: ${result.status}`);
      if (result.status === 'failed' && result.error) {
        console.log(`   Erreur: ${result.error}`);
      }
    });
    console.log('------------------------------------------------\n');
  }
}

export default UserApiTest;


