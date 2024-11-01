import React from "react";
import style from "./Item.css";
import { Link } from "react-router-dom";

export const Item = (props) => {
  return (
    <div className={style.item}>
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className={style.itemPrices}>
        <div className={style.itemPriceNew}>${props.new_price}</div>
        <div className={style.itemPriceOld}>${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
