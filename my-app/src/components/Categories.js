// src/components/Categories.js
import '@fortawesome/fontawesome-free/css/all.min.css';

import React, { useState } from 'react';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { icon: 'fas fa-pills', name: 'Medicines' },
    { icon: 'fas fa-user-md', name: 'Personal Care' },
    { icon: 'fas fa-capsules', name: 'Supplements' },
    { icon: 'fas fa-spa', name: 'Skin Care' },
  ];

  return (
    <section className="categories">
      <h2>Product Categories</h2>
      <div className="category-list">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`category ${selectedCategory === category.name ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.name)}
          >
            <i className={category.icon}></i>
            <span>{category.name}</span>
          </div>
        ))}
      </div>
      {selectedCategory && (
        <p className="selected-message">You selected: {selectedCategory}</p>
      )}
    </section>
  );
};

export default Categories;
