import style from "./index.module.scss";

const CallToAction = () => {
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
          <button>До каталогу</button>
        </div>
        <div className={style.image}>
          <img src="./images/cta/image.jpeg" alt="cta" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
