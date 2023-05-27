import React, { useContext } from "react";
import { context } from "./Context";
import { products } from "../products";
import CartProducts from "./CartProducts";

export default function Cart() {
  const { cartItems } = useContext(context);

  return (
    <div className="cart">
      {products.map((product) => {
        if (cartItems[product.id] !== 0) {
          return <CartProducts data={product} />;
        }
      })}
    </div>
  );
}
