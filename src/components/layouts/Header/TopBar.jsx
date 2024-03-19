import React from "react";
import PropTypes from "prop-types";
import style from "./TopBar.module.scss";
import { formatPhoneNumber } from "@/libs/helpers";

const TopBar = () => {
  const phoneNumber = "0989000909";
  const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

  return (
    <section className={style.topBar}>
      <div className={style.container}>
        <div className={style.contacts}>
          <a href={`tel:${phoneNumber}`}>{formattedPhoneNumber}</a>
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

TopBar.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
};

export default TopBar;
