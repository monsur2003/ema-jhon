import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  console.log(cart);
  let price = 0;
  let sipping = 0;
  for (const product of cart) {
    price = price + product.price;
    sipping = sipping + product.shipping;
    // return total;
  }
  const tax = (price * 7) / 100;
  const grandTotal = price + sipping + tax;

  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <div className="cart-text">
        <p>Items: {cart.length}</p>
        <p>Total Price: ${price}</p>
        <p>Total Shipping Charge: ${sipping}</p>
        <p>Tax: {tax}</p>
        <h6>Grand Total: {grandTotal}</h6>
      </div>
    </div>
  );
};

export default Cart;
