import React from "react";
import TopHeader from "./TopBar";
import NavBar from "./NavBar";
import style from "./Header.module.scss";

const index = () => {
  return (
    <header className={style.header}>
      <TopHeader />
      <NavBar />
    </header>
  );
};

export default index;
