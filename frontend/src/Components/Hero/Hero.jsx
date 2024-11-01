import React from "react";
import style from "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

export const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.heroLeft}>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className={style.heroHandIcon}>
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className={style.heroLatestBtn}>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className={style.heroRight}>
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};
