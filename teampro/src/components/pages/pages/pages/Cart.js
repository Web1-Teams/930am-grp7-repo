import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css'

const Cart = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  const handleRemoveFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index); 
    setCartItems(updatedCart); 
  };

  return (
    <div className="cart-container">
      <header className="cart-header">
        <h1>Shopping Cart</h1>
      </header>
      
      <div className="cart-title">
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <button 
                  type="button" 
                  className="btn btn-danger" 
                  onClick={() => handleRemoveFromCart(index)} 
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="empty-cart">Cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;