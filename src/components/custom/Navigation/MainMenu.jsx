import React from "react";
import style from "./MainMenu.module.scss";

const menu = [
  { id: 0, title: "новинки", url: "/" },
  { id: 1, title: "чоловіки", url: "/" },
  { id: 2, title: "жінки", url: "/" },
  { id: 3, title: "аксесуари", url: "/" },
  { id: 4, title: "акції", url: "/" },
];

const MainMenu = ({}) => {
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

export default MainMenu;
