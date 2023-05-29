import React, { useContext } from "react";
import { context } from "./Context";
import CartProducts from "./CartProducts";

export default function Cart() {
  const { items, getTotalCost } = useContext(context);
  const totalCost = getTotalCost()
  return (
    <div className="cart">
      <div className="cart__text">
        <h3>{totalCost <= 0 ? "Your cart is empty" : "Your cart items"}</h3>
        <h4>{totalCost > 0 && `Total cost: $${totalCost}`}</h4>
      </div>

      {items.map(
        (cartItem) =>
          cartItem.amount !== 0 && (
            <CartProducts
              id={cartItem.id}
              amount={cartItem.amount}
              key={cartItem.id}
            />
          )
      )}
    </div>
  );
}
