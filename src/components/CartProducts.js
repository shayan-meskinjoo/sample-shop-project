import React, { useContext } from "react";
import { context } from "./Context";

export default function CartProducts(props) {
  const { id, img, name, price } = props.data;
  const { cartItems, addToCart, removeFromCart, updatedInput } =
    useContext(context);

  const productAmountPrice = cartItems[id] * price;

  return (
    <div className="cart-product">
      <img src={img} className="cart-product__img"></img>
      <div className="cart-product__info">
        <h4>{name}</h4>
        <h5>
          Total: ${productAmountPrice} <p>(${price})</p>
        </h5>
        <div className="cart-product__amount">
          <button
            className="cart-product__amount--btn"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <input
            className="cart-product__amount--input"
            value={cartItems[id]}
            onChange={(e) => updatedInput(e.target.value, id)}
          ></input>
          <button
            className="cart-product__amount--btn"
            onClick={() => addToCart(id)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
