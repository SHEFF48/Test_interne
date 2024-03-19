import LogoMain from "@/components/custom/Logo/LogoMain";
import style from "./NavBar.module.scss";
import MainMenu from "@/components/custom/Navigation/MainMenu";

const menu = [
  { id: 0, title: "новинки", url: "/" },
  { id: 1, title: "чоловіки", url: "/" },
  { id: 2, title: "жінки", url: "/" },
  { id: 3, title: "аксесуари", url: "/" },
  { id: 4, title: "акції", url: "/" },
];

const NavBar = () => {
  return (
    <nav className={style.navBar}>
      <div className={style.container}>
        <LogoMain text="Ignat" link="/" />
        <MainMenu menu={menu} />

        <input type="text" />
        <div>heart</div>
        <div>cart</div>
      </div>
    </nav>
  );
};

export default NavBar;
