import React from "react";
import PropTypes from "prop-types";
import style from "./index.module.scss";

const Subscription = () => {
  return (
    <section className={style.subscription}>
      <div className={style.container}>
        <h2 className={style.title}>Subscription title</h2>
        <p>description</p>
        <div className={style.form}>
          <input type={style.text} />
          <button>Subscripbe</button>
        </div>
      </div>
    </section>
  );
};

Subscription.propTypes = {};

export default Subscription;
