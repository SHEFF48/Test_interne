import React from "react";
import PropTypes from "prop-types";
import style from "./MainMenu.module.scss";

const MainMenu = ({ menu }) => {
  return (
    <ul className={style.menuList}>
      {menu.map((menuItem) => (
        <li key={menuItem.id} className={style.menuListItem}>
          <a href={menuItem.url}>{menuItem.title}</a>
        </li>
      ))}
    </ul>
  );
};

MainMenu.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MainMenu;
