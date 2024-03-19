import React from "react";
import PropTypes from "prop-types";
import style from "./index.module.scss";

const Slider = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  const currentItem = items[0];

  if (!currentItem) {
    return null;
  }

  const { title, subtitle, offer, image } = currentItem;

  return (
    <div className={style.slider}>
      <div className="slide">
        <div className={style.container}>
          <div className={style.titleBlock}>
            <h1 className={style.title}>{title}</h1>
            <p className={style.subtitle}>{subtitle}</p>
          </div>
          {offer && (
            <div className={style.offerBlock}>
              <p className={style.title}>{offer.title}</p>
              <p className={style.subtitle}>{offer.subtitle}</p>
            </div>
          )}
        </div>
      </div>

      <div className={style.pagination}>-</div>
      {image && <img className={style.slideImage} src={image} alt="" />}
    </div>
  );
};

Slider.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      offer: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
      }),
      image: PropTypes.string,
    })
  ),
};

export default Slider;
