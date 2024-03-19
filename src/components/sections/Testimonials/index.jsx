import React from "react";
// import { hotProducts } from "@/data/products/products";
import { testimonials } from "@/data/testimonials/testimonials";
// import { CardsList } from "@/components/custom/Products";
import style from "./index.module.scss";
import { CardsList } from "@/components/custom/Testimonials";

const Testimonials = () => {
  console.log("testimonials::", testimonials);
  return (
    <div className={style.container}>
      <div className={style.top}>
        <h3 className={style.title}>Відгуги наших клієнтів</h3>
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
      <CardsList testimonials={testimonials} />
    </div>
  );
};

export default Testimonials;
