import React from "react";
import style from "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerLogo}>
        <img src={footer_logo} alt="" />
        <p>BREEZER</p>
      </div>
      <ul className={style.footerLinks}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={style.footerSocialIcon}>
        <div className={style.footerIconsContainer}>
          <img src={instagram_icon} alt="" />
        </div>
        <div className={style.footerIconsContainer}>
          <img src={pintester_icon} alt="" />
        </div>
        <div className={style.footerIconsContainer}>
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className={style.footerCopyright}>
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};
