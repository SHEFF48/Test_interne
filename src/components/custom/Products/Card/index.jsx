import React from "react";
import style from "./index.module.scss";

const ProductCard = ({ id, title, attributes, price, image }) => {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={image} alt={title} />
      </div>
      <div className={style.info}>
        <h4 className={style.title}>{title}</h4>
        <div className={style.attributes}>
          <p className={style.attribute}>{attributes?.destiny}</p>
          <p className={style.attribute}>{attributes?.colorsCount}</p>
        </div>
        <p className={style.productPrice}>{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
