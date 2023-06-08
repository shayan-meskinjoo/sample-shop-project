import React from "react";
import { products } from "../products";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");
  const usageFilter = searchParams.get("usage");

  const filteredProducts =
    typeFilter || usageFilter
      ? products.filter(
          (product) =>
            product.type == typeFilter || product.usage == usageFilter
        )
      : products;

  function searchParamsHandler(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className="home">
      <div className="home__filter-btns">
        <button
          onClick={() => searchParamsHandler("type", "hair")}
          className={`home__filter--btn ${
            typeFilter === "hair" ? "selected" : ""
          }`}
        >
          hair
        </button>

        <button
          onClick={() => searchParamsHandler("type", "skin")}
          className={`home__filter--btn ${
            typeFilter === "skin" ? "selected" : ""
          }`}
        >
          skin
        </button>

        <button
          onClick={() => searchParamsHandler("usage", "women")}
          className={`home__filter--btn ${
            usageFilter === "women" ? "selected" : ""
          }`}
        >
          women
        </button>

        <button
          onClick={() => searchParamsHandler("usage", "men")}
          className={`home__filter--btn ${
            usageFilter === "men" ? "selected" : ""
          }`}
        >
          men
        </button>

        {typeFilter || usageFilter ? (
          <button
            onClick={() =>
              searchParamsHandler(`${typeFilter ? "type" : "usage"}`, null)
            }
            className="home__filter--btn"
          >
            clear
          </button>
        ) : null}
      </div>

      <div className="home__products-list">
        {filteredProducts.map((product) => (
          <ProductCard data={product} key={product.id} searchParams={searchParams}/>
        ))}
      </div>
    </div>
  );
}
