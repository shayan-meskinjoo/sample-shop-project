import React, { createContext, useState } from "react";
import { products } from "../products";

export const context = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 1; i < products.length + 1; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };

const getDefaultCart = () => {
  let cart = {};
  const ids = products.map((product) => product.id);
  for (let i = 0; i < ids.length; i++) {
    const key = ids[i];
    cart[key] = 0;
  }
  return cart;
};

export default function ContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  //(prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })

  const addToCart = (itemId) => {
    setCartItems({ ...cartItems, [itemId]: cartItems[itemId] + 1 });
  };

  const removeFromCart = (itemId) => {
    setCartItems({ ...cartItems, [itemId]: cartItems[itemId] - 1 });
  };

  const updatedInput = (newAmount, itemId) => {
    setCartItems({ ...cartItems, [itemId]: newAmount });
  };

  return (
    <context.Provider
      value={{ cartItems, addToCart, removeFromCart, updatedInput }}
    >
      {children}
    </context.Provider>
  );
}
