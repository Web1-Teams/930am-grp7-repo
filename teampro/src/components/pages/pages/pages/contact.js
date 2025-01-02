import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"; 
import "./contact.css"; 

const Contact = () => {
  return (
    <div className="Contact">
        <div className="header">
      <h1>Contact Us</h1>
      </div>
      <div className="cards-container">
        
        <div className="card">
          <div className="icon">
            <FontAwesomeIcon icon={faFacebook} className="fa-icon" />
          </div>
          <p className="contact-text">Facebook</p>
        </div>

       
        <div className="card">
          <div className="icon">
            <FontAwesomeIcon icon={faInstagram} className="fa-icon" />
          </div>
          <p className="contact-text">Instagram</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
