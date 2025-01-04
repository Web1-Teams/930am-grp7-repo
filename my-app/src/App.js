import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Amal from './components/Amal';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Categories />
                <FeaturedProducts cartItems={cartItems} setCartItems={setCartItems} />
              </>
            }
          />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Amal" element={<Amal />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
