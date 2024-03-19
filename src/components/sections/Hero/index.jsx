import PropTypes from "prop-types";
// import Slide from "@/components/custom/Slide";
import style from "./index.module.scss";
import SliderSwiper from "@/components/custom/Slider/swiper";

const sliderItems = [
  {
    id: 0,
    title: "Швидше. Вище. Сильніше.",
    subtitle: "Разом із Nike",
    offer: {
      title: "Знижки до 40%",
      subtitle: "Залишився лише тиждень",
    },
    image: "./images/hero/slider.jpg",
  },
  {
    id: 1,
    title: "Швидше. Вище. Сильніше.",
    subtitle: "Разом із Nike",
    offer: {
      title: "Знижки до 40%",
      subtitle: "Залишився лише тиждень",
    },
    image: "./images/hero/slider.jpg",
  },
  {
    id: 2,
    title: "Швидше. Вище. Сильніше.",
    subtitle: "Разом із Nike",
    offer: {
      title: "Знижки до 40%",
      subtitle: "Залишився лише тиждень",
    },
    image: "./images/hero/slider.jpg",
  },
  {
    id: 3,
    title: "Швидше. Вище. Сильніше.",
    subtitle: "Разом із Nike",
    offer: {
      title: "Знижки до 40%",
      subtitle: "Залишився лише тиждень",
    },
    image: "./images/hero/slider.jpg",
  },
];

const Hero = () => {
  return (
    <section className={style.ctaSection}>
      {/* <Slider items={sliderItems} /> */}
      <SliderSwiper items={sliderItems} />
    </section>
  );
};

Hero.propTypes = {
  sliderItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      offer: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
      }).isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Hero;
