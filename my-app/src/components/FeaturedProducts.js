// src/components/FeaturedProducts.js
import React from 'react';

const FeaturedProducts = () => {
  const products = [
    { name: 'Antihistamines', description: ' Relieve allergy symptoms by blocking histamine action', img: 'download (1).jpeg' },
    { name: 'Ibuprofen', description: 'Non-steroidal anti-inflammatory drug (NSAID) for pain ', img: 'download.jpeg' },
    { name: 'Morphine', description: 'Strong opioid pain reliever for severe pain', img: '222222.jpeg' },
    { name: 'Paracetamol', description: 'Common pain reliever and fever reducer', img: 'ndn.jpeg' },
    { name: 'Penicillin', description: 'Antibiotic to treat bacterial infections', img: 'P93500-25.0.jpg' },
    { name: 'Smallpoxvaccine', description: 'Prevents smallpox by building immunity', img: 'ghjk.jpeg' },
    { name: 'Acamprosate calcium', description: 'Helps maintain alcohol abstinence', img: '1722577611_133531_0.png' },
    { name: 'Amlodipine', description: 'Treats high blood pressure and chest pain (angina)', img: '5610EBFC-6B96-48E2-AA7E-8891C8B7D70B_1445x.webp' },
    { name: 'Antibiotics', description: 'Broad category of drugs for bacterial infections', img: 'optibac_probiotics_for_those_on_antibiotics10_ps_web_front_panel_eu.webp' },
    { name: 'Atorvastatin', description: 'Lowers cholesterol and prevents cardiovascular disease', img: 'atorvastatin-tablets-80mg-90-count-17.jpg' },
    { name: 'Insulin', description: 'Hormone therapy for diabetes, regulates blood sugar', img: 'insulin-faqs-2.jpg' },
    { name: 'Levothyroxine', description: 'Treats hypothyroidism by replacing thyroid hormone', img: 'empower-pharmacy-commercial-levothyroxine-sodium-tablets-75-mcg-294x490.jpg' },





  ];

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
