import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "./Context";

export default function ProductCard(props) {
  const { id, img, name, price } = props.data;
  const searchParams = props.searchParams;

  const { addToCart, getProductAmount} = useContext(context);

  const productAmount = getProductAmount(id)

  return (
    <div className="product__card">
      <Link to={`${id}`} state={{ search: `?${searchParams.toString()}` }}>
        <img src={img} className="product__card--img"></img>
      </Link>
      <h5 className="product__card--name">{name}</h5>
      <p className="product__card--price">${price}</p>
      <button className="product__card--btn" onClick={() => addToCart(id)}>
        <h6>Add to Cart {productAmount > 0 && <>({productAmount})</>}</h6>
      </button>
    </div>
  );
}
