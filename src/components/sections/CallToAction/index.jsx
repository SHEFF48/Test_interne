import PropTypes from "prop-types";
import Button from "@/components/ui/Button";
import style from "./index.module.scss";

const CallToAction = () => {
  const clickHandler = () => {
    console.log("CTA Button click");
  };

  return (
    <section className={style.ctaSection}>
      <div className={style.container}>
        <div className={style.information}>
          <div className={style.content}>
            <h2 className={style.title}>{`Ми знаємо, що сподобається 
вашим “великим” друзям!`}</h2>
            <p className={style.description}>
              {`
            Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію
            термобілизни “Big warm”`}
            </p>
          </div>
          <Button className={style.button} handleClick={clickHandler}>
            До каталогу
          </Button>
        </div>
        <div className={style.image}>
          <img src="./images/cta/image.jpeg" alt="cta" />
        </div>
      </div>
    </section>
  );
};

CallToAction.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default CallToAction;
