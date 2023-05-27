import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export default function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((product) => product.id == id);

  const location = useLocation();
  const search = location.state?.search || "";

  return (
    <div>
      <div className="back-link">
        <Link to={`..${search}`} relative="path">back to products</Link>
      </div>
      <div className="product-detail">
        <img src={product.img} className="product-detail__img"></img>

        <div className="product-detail__info">
          <h2>{product.name}</h2>
          <p>{product.desc}</p>
          <h4> Price: $ {product.price}</h4>
          <button className="product-detail__info--btn">
            <h6>Add to Cart</h6>
          </button>
        </div>
      </div>
    </div>
  );
}
