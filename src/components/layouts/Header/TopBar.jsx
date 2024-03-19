import React from "react";
import style from "./TopBar.module.scss";

const TopBar = () => {
  return (
    <section className={style.topBar}>
      <div className={style.container}>
        <div className={style.contacts}>
          <a href="tel:+">098 900 09 09</a>
          <a href="help" target="_blank" rel="noopener noreferrer">
            Допомога
          </a>
        </div>
        <div className={style.user}>
          <a href="login">Увійти</a>/<a href="register">Зареєструватися</a>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
