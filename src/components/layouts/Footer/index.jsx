import MainMenu from "@/components/custom/Navigation/MainMenu";
import style from "./index.module.scss";

const menu = [
  { id: 0, title: "новинки", url: "/" },
  { id: 1, title: "чоловіки", url: "/" },
  { id: 2, title: "жінки", url: "/" },
  { id: 3, title: "аксесуари", url: "/" },
  { id: 4, title: "акції", url: "/" },
];

const Footer = () => {
  return (
    <footer>
      <section className={style.main}>
        <div className={style.container}>
          <div className={style.contacts}>
            <div className={style.info}>
              <h3 className={style.title}>Контакт - центр</h3>
              <address className={style.contactsList}>
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
            <h3 className={style.title}>Покупцям</h3>
            <ul className={style.menuList}>
              <li className={style.menuItem}>
                <a href="/">Оплата і доставка</a>
              </li>
              <li className={style.menuItem}>
                <a href="/">Повернення</a>
              </li>
              <li className={style.menuItem}>
                <a href="/">Питання та відповіді</a>
              </li>
            </ul>
          </div>

          <div className={style.menu}>
            <h3 className={style.title}>Особистий кабінет</h3>
            <ul className={style.menuList}>
              <li className={style.menuItem}>
                <a href="/">Мої дані</a>
              </li>
              <li className={style.menuItem}>
                <a href="/">Історія замовлень</a>
              </li>
              <li className={style.menuItem}>
                <a href="/">Улюблені</a>
              </li>
              <li className={style.menuItem}>
                <a href="/">Розсилки</a>
              </li>
            </ul>
          </div>

          <div className={style.menu}>
            <h3 className={style.title}>Про компанію</h3>
            <ul className={style.menuList}>
              <li className={style.menuItem}>
                <a href="/">Про нас</a>
              </li>
              <li className={style.menuItem}>
                <a href="/">Новини</a>
              </li>
              <li className={style.menuItem}>
                <a href="/">Стати партнером</a>
              </li>
              <li className={style.menuItem}>
                <a href="/">Угода користувача</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={style.bottom}>
        <div className={style.container}>
          <nav className={style.mainMenu}>
            <MainMenu menu={menu} />
          </nav>

          <div className={style.copyright}>
            © 2022 — 2023 IGNAT. Усі права захищені.
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
