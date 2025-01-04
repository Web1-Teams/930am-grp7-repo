import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img
            src="upscaled-upscaled-Screenshot_2024-12-06_133842-removebg-preview.png"
            alt="Logo"
            className="logo-image"
          />
        </div>
        <nav>
          
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/Amal">sign up</Link>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search for products..." />
        </div>
      </div>
    </header>
  );
};

export default Header;