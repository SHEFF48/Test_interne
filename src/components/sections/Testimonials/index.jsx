// import React from "react";

// import PropTypes from "prop-types";

// import { testimonials } from "@/data/testimonials/testimonials";

// import style from "./index.module.scss";
// import { CardsList } from "@/components/custom/Testimonials";

// const Testimonials = () => {
//   console.log("testimonials::", testimonials);
//   return (
//     <div className={style.container}>
//       <div className={style.top}>
//         <h3 className={style.title}>Відгуги наших клієнтів</h3>
//         <div className={style.navigation}>
//           <div className={style.pagesCount}>
//             <span>01</span>/<span>03</span>
//           </div>
//           <div className={style.controls}>
//             <span>left</span>
//             <span>right</span>
//           </div>
//         </div>
//       </div>
//       <CardsList testimonials={testimonials} />
//     </div>
//   );
// };

// Testimonials.propTypes = {
//   testimonials: PropTypes.array.isRequired,
// };

// export default Testimonials;

import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./index.module.scss";
import { CardsList } from "@/components/custom/Testimonials";
import { testimonials } from "@/data/testimonials/testimonials";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonialsPerPage = 4;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalPages - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalPages - 1 : prevSlide - 1
    );
  };

  const startIndex = currentSlide * testimonialsPerPage;
  const endIndex = startIndex + testimonialsPerPage;
  const displayedTestimonials = testimonials.slice(startIndex, endIndex);

  return (
    <div className={style.container}>
      <div className={style.top}>
        <h3 className={style.title}>Відгуги наших клієнтів</h3>
        <div className={style.navigation}>
          <div className={style.pagesCount}>
            <span>{currentSlide + 1}</span>/<span>{totalPages}</span>
          </div>
          <div className={style.controls}>
            <span onClick={prevSlide}>left</span>
            <span onClick={nextSlide}>right</span>
          </div>
        </div>
      </div>
      <div className={style.slide}>
        <CardsList testimonials={displayedTestimonials} />
      </div>
    </div>
  );
};

Testimonials.propTypes = {
  testimonials: PropTypes.array.isRequired,
};

export default Testimonials;
