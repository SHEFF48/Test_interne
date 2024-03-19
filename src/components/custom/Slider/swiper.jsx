import React from "react";
import PropTypes from "prop-types";
import style from "./index.module.scss";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

const SliderSwiper = ({ items }) => {
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
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        {items &&
          items.map(({ title, subtitle, offer, image }, index) => (
            <SwiperSlide key={index}>
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
              {image && <img className={style.slideImage} src={image} alt="" />}
            </SwiperSlide>
          ))}
      </Swiper>

      <div className={style.pagination}>-</div>
    </div>
  );
};

SliderSwiper.propTypes = {
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

export default SliderSwiper;
