import React, { useContext } from "react";
import style from "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className={style.productdisplay}>
      <div className={style.productdisplayLeft}>
        <div className={style.productdisplayImgList}>
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className={style.productdisplayImg}>
          <img className={style.productdisplayMainImg} src={product.image} alt="" />
        </div>
      </div>
      <div className={style.productdisplayRight}>
        <h1>{product.name}</h1>
        <div className={style.productdisplayRightStar}>
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className={style.productdisplayRightPrices}>
          <div className={style.productdisplayRightPriceOld}>
            ${product.old_price}
          </div>
          <div className={style.productdisplayRightPriceNew}>
            ${product.new_price}
          </div>
        </div>
        <div className={style.productdisplayRightDescription}>
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt .
        </div>
        <div className={style.productdisplayRightSize}>
          <h1>Select Size</h1>
          <div className={style.productdisplayRightSizes}>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className={style.productdisplayRightCategory}>
          <span>Category :</span>Women, T-shirt, Crop top
        </p>
        <p className={style.productdisplayRightCategory}>
          <span>Tags :</span>Modern, latest
        </p>
      </div>
    </div>
  );
};
