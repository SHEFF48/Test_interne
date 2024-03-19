import style from "./index.module.scss";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className={style.container}>
          <div className={style.contacts}>
            <div className="info">
              <h3 className="title">Контакт - центр</h3>
              <address>
                <a href="tel:+">098 900 09 09 </a>
                <p>Пн - Пт 09:00 - 21:00</p>
                <p>Пн - Пт 09:00 - 21:00</p>
              </address>
            </div>

            <div className={style.socialIcons}>
              <span>icon</span>
              <span>icon</span>
              <span>icon</span>
            </div>
          </div>

          <div className={style.menu}>
            <h3 className="title">Покупцям</h3>
            <ul className="menuList">
              <li className="menuItem">
                <a href="/">Оплата і доставка</a>
              </li>
              <li className="menuItem">
                <a href="/">Повернення</a>
              </li>
              <li className="menuItem">
                <a href="/">Питання та відповіді</a>
              </li>
            </ul>
          </div>

          <div className={style.menu}>
            <h3 className="title">Особистий кабінет</h3>
            <ul className="menuList">
              <li className="menuItem">
                <a href="/">Мої дані</a>
              </li>
              <li className="menuItem">
                <a href="/">Історія замовлень</a>
              </li>
              <li className="menuItem">
                <a href="/">Улюблені</a>
              </li>
              <li className="menuItem">
                <a href="/">Розсилки</a>
              </li>
            </ul>
          </div>

          <div className={style.menu}>
            <h3 className="title">Про компанію</h3>
            <ul className="menuList">
              <li className="menuItem">
                <a href="/">Про нас</a>
              </li>
              <li className="menuItem">
                <a href="/">Новини</a>
              </li>
              <li className="menuItem">
                <a href="/">Стати партнером</a>
              </li>
              <li className="menuItem">
                <a href="/">Угода користувача</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section></section>
    </footer>
  );
};

export default Footer;
