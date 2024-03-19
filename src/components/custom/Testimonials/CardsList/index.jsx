import React from "react";
import style from "./index.module.scss";
import TestimonialsCard from "../Card";

const CardsList = ({ testimonials = [] }) => {
  console.log("testimonials: ", testimonials);
  return (
    <ul className={style.list}>
      {testimonials?.map((testimonial) => (
        <li key={testimonial.id} className={style.item}>
          <TestimonialsCard {...testimonial} />
        </li>
      ))}
    </ul>
  );
};

export default CardsList;
