import Slider from "@/components/custom/Slider";
import style from "./index.module.scss";

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
];

const Hero = () => {
  return (
    <section className={style.ctaSection}>
      <Slider items={sliderItems} />
    </section>
  );
};

export default Hero;
