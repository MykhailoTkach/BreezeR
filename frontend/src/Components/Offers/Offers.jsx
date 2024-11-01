import React from "react";
import style from "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";

export const Offers = () => {
  return (
    <div className={style.offers}>
      <div className={style.offersLeft}>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className={style.offersRight}>
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};
