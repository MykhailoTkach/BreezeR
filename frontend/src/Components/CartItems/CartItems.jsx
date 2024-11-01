import React, { useContext } from "react";
import style from "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

export const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <div className={style.cartitems}>
      <div className={style.cartitemsFormatMain}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className= {`${style.cartitemsFormat} ${style.cartitemsFormatMain}`}>
                <img src={e.image} alt="" className={style.carticonProductIcon} />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className={style.cartitemsQuantity}>
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className={style.cartitemsRemoveIcon}
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt="Remove"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className={style.cartitemsDown}>
        <div className={style.cartitemsTotal}>
          <h1>Cart Totals</h1>
          <div>
            <div className={style.cartitemsTotalItem}>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className={style.cartitemsTotalItem}>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className={style.cartitemsTotalItem}>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className={style.cartitemsPromocode}>
          <p>If you have a promo code, enter it here</p>
          <div className={style.cartitemsPromobox}>
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
