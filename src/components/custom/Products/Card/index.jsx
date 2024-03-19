import React from "react";
import PropTypes from "prop-types";
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

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  attributes: PropTypes.shape({
    destiny: PropTypes.string.isRequired,
    colorsCount: PropTypes.number.isRequired,
  }).isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCard;
