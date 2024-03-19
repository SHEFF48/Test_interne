import React from "react";
import PropTypes from "prop-types";
import style from "./LogoMain.module.scss";

const LogoMain = ({ text, link }) => {
  return (
    <div className={style.logo}>
      <a href={link}>{text}</a>
    </div>
  );
};

LogoMain.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default LogoMain;
