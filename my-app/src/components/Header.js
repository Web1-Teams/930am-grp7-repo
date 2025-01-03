// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
        <img src="upscaled-upscaled-Screenshot_2024-12-06_133842-removebg-preview.png" alt="Logo" className="logo-image" />

        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Categories</a>
          <a href="#">Health Articles</a>
          <a href="#">Account</a>
          <a href="#">Cart</a>
          <a href="#">Contact</a>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search for products..." />
        </div>
      </div>
    </header>
  );
}

export default Header;
