import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import personal from "../../images/1664630452428.jpg";
const Product = (props) => {
  const { img, name, seller, price, ratings } = props.product;
  const addToCart = props.addToCart;
  //   console.log(name, seller, price);
  //   const id = props.id;

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
        <button onClick={() => addToCart(props.product)} className="cart-btn">
          Add To cart
          <span>
            <FontAwesomeIcon icon={faShoppingCart} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Product;
