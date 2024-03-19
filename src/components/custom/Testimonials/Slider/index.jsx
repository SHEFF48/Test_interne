import React from "react";
import style from "./index.module.scss";
import ProductCard from "../Card";

const ProductsSlider = ({ products }) => {
  return (
    <section className="slider">
      <div className="topBar"></div>
      <div className="content">
        {products?.map((product) => {
          <ProductCard key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default ProductsSlider;
