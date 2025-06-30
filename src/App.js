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
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import ApiTestPage from './pages/ApiTestPage';
import TestPage from './pages/TestPage';

// Auth related
import UserService from './services/user.service';

// Context
import { CartProvider } from './context/CartContext';

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
    <CartProvider>
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
            <Route path="/test" element={<TestPage />} />
            <Route path="/payment/success" element={<PaymentSuccessPage />} />
            
            {/* Cart route - temporairement public pour les tests */}
            <Route path="/cart" element={<CartPage />} />
            
            {/* Catch all - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
      </Router>
    </CartProvider>
  );
}

export default App;
