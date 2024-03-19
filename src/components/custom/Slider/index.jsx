import React from "react";
import style from "./index.module.scss";

const Slider = ({ items }) => {
  return (
    <div className={style.slider}>
      <div className={style.container}>
        <div className={style.titleBlock}>
          <h1 className={style.title}>{items[0]?.title}</h1>
          <p className={style.subtitle}>{items[0]?.subtitle}</p>
        </div>
        <div className={style.offerBlock}>
          <p className={style.title}>{items[0]?.offer?.title}</p>
          <p className={style.subtitle}>{items[0]?.offer?.subtitle}</p>
        </div>
      </div>

      <img className={style.slideImage} src={items[0]?.image} alt="" />
    </div>
  );
};

export default Slider;
