import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Unlock Exclusive Deals!</h1>
        <h1>Top-Rated Picks, Just for You.</h1>
        <p>ONLY ON OUR MOST-LOVED BEST SELLERS</p>
        <button>SHOP NOW & SAVE BIG!</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
