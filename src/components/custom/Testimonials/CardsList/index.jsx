import React from "react";
import ProductCard from "../Card";
import style from "./index.module.scss";
// import { hotProducts } from "data/products/products";

const CardsList = ({ products = [] }) => {
  return (
    <ul className={style.list}>
      {products?.map((product) => (
        <li key={product.id} className={style.item}>
          <ProductCard {...product} />
        </li>
      ))}
    </ul>
  );
};

export default CardsList;
