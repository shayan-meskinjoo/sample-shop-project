import React, { useContext } from "react";
import { context } from "./Context";

export default function CartProducts(props) {
  const {
    addToCart,
    removeFromCart,
    deleteFromCart,
    updatedInputAmount,
    getProduct,
  } = useContext(context);

  const id = props.id;
  const amount = props.amount;

  const product = getProduct(id);

  const { img, name, price } = product;

  return (
    <div className="cart-product">
      <img src={img} className="cart-product__img"></img>
      <div className="cart-product__info">
        <h4>{name}</h4>
        <h5>
          Total: ${price * amount} <p>(${price})</p>
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
            value={amount}
            onChange={(e) => updatedInputAmount(e.target.value, id)}
          ></input>
          <button
            className="cart-product__amount--btn"
            onClick={() => addToCart(id)}
          >
            +
          </button>
          <button
            className="cart-product__amount--del-btn"
            onClick={() => deleteFromCart(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
