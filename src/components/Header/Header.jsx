import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <img src={logo} alt="" />
        <div className="link">
          <a href="/Order">Order</a>
          <a href="/Order Review">Order Review</a>
          <a href="/Manage inventory">Manage inventory</a>
          <a href="/log in">Log in</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
