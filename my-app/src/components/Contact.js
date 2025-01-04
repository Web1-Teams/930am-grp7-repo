import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import'./design/contact.css';
const Contact = () => {
  return (
    <div className="contact">
      <header>
        <h1>Contact Us</h1>
      </header>
      <div className="cards-container">
        <div className="card">
          <FontAwesomeIcon icon={faFacebook} className="fa-icon" />
          <p>Facebook</p>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faInstagram} className="fa-icon" />
          <p>Instagram</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
