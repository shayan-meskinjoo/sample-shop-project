import React, { createContext, useState } from "react";
import { products } from "../products";

export const context = createContext();

export default function ContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const getProduct = (id) => {
    const product = products.find((product) => product.id === id);
    return product;
  };

  const getProductAmount = (id) => {
    const amount = cartProducts.find((product) => product.id === id)?.amount;
    if (amount === undefined) {
      return -1;
    }
    return amount;
  };

  const addToCart = (id) => {
    const amount = getProductAmount(id);

    if (amount === -1) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          amount: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, amount: product.amount + 1 }
            : product
        )
      );
    }
  };

  const removeFromCart = (id) => {
    setCartProducts(
      cartProducts.map((product) =>
        product.id === id ? { ...product, amount: product.amount - 1 } : product
      )
    );
  };

  const deleteFromCart = (id) => {
    setCartProducts(
      cartProducts.map((product) =>
        product.id === id ? { ...product, amount: 0 } : product
      )
    );
  };

  const updatedInputAmount = (inputAmount, id) => {
    setCartProducts(
      cartProducts.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, amount: inputAmount } : cartItem
      )
    );
  };

  const getTotalCost = () => {
    let totalProductCost = 0;
    cartProducts.map((cartProduct) => {
      const productData = getProduct(cartProduct.id);
      totalProductCost += productData.price * cartProduct.amount;
    });
    return totalProductCost;
  };

  return (
    <context.Provider
      value={{
        items: cartProducts,
        getProductAmount,
        addToCart,
        removeFromCart,
        deleteFromCart,
        updatedInputAmount,
        getTotalCost,
        getProduct,
      }}
    >
      {children}
    </context.Provider>
  );
}
