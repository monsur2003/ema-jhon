import React from "react";
import "./Product.css";
import personal from "../../images/1664630452428.jpg";
const Product = (props) => {
  const { img, name, seller, price, ratings } = props.product;
  console.log(name, seller, price);
  return (
    <div>
      <div className="card-container">
        <img src={img ? img : personal} alt="" />
        <div className="card-text">
          <h5>{name.slice(0, 20)}</h5>
          <p>Price:$ {price}</p>
          <div className="sr">
            <p>Seller: {seller}</p>
            <p>Rating: {ratings} star</p>
          </div>
        </div>
        <button className="cart-btn">Add To cart</button>
      </div>
    </div>
  );
};

export default Product;
