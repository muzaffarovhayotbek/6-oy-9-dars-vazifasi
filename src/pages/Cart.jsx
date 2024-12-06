import React from 'react';
import './Cart.css';

function Cart() {
  return (
    <div className="container">
      <h2 className="cart-title">Shopping Cart</h2>
      <hr />
      <div className="card-section">
        <img
          src="https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600"
          width={128}
          alt=""
        />
        <div className="card-main">
          <h3 className="card-main-title">Avant-Garde Lamp</h3>

          <h6 className="card-main-desc">Amount</h6>
          <p className="card-main-price">$179.99</p>
          <form className="form">
            <p className="flex justify-between border-b p-2">
              <span className='card-main-title-title'>Subtotal</span>
              <span className="font-medium">$359.98</span>
            </p>
            <p className="flex justify-between border-b p-2">
              <span className='card-main-title-title'>Shipping</span>
              <span className="font-medium">$5.00</span>
            </p>
            <p className="flex justify-between border-b p-2">
              <span className='card-main-title-title'>Tax</span>
              <span className="font-medium">$36.00</span>
            </p>
            <p className="flex justify-between border-b p-2">
              <span className='card-main-title-title'>Order Total</span>
              <span className="font-medium">$400.98</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cart;
