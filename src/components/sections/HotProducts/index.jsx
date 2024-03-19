import React from "react";
import { hotProducts } from "@/data/products/products";
import { CardsList } from "@/components/custom/Products";
import style from "./index.module.scss";

const HotProducts = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <h3 className={style.title}>Найгарячіші товари</h3>
        <div className={style.navigation}>
          <div className={style.pagesCount}>
            <span>01</span>/<span>03</span>
          </div>
          <div className={style.controls}>
            <span>left</span>
            <span>right</span>
          </div>
        </div>
      </div>
      <CardsList products={hotProducts} />
    </div>
  );
};

export default HotProducts;
