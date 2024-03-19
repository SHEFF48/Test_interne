import LogoMain from "@/components/custom/Logo/LogoMain";
import style from "./NavBar.module.scss";
import MainMenu from "@/components/custom/Navigation/MainMenu";

const NavBar = () => {
  return (
    <nav className={style.navBar}>
      <div className={style.container}>
        <LogoMain />
        <MainMenu />

        <input type="text" />
        <div>heart</div>
        <div>cart</div>
      </div>
    </nav>
  );
};

export default NavBar;
