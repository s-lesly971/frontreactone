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
