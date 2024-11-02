import React, { useContext } from "react";
import style from "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className={style.shopCategory} data-testid="shop-category">
      <img
        className={style.shopcategoryBanner}
        src={props.banner}
        alt=""
        data-testid="category-banner"
      />
      <div className={style.shopcategoryIndexSort} data-testid="index-sort">
        <p>
          <span>Showing 1-12 </span> out of 36 products
        </p>
        <div className={style.shopcategorySort} data-testid="sort-dropdown">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className={style.shopcategoryProducts} data-testid="products-list">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                data-testid={`product-item-${item.id}`}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className={style.shopcategoryLoadmore} data-testid="load-more">
        Explore more
      </div>
    </div>
  );
};
