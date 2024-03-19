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

        <div className={style.user}>
          <input type="text" />
          <a href="/">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 19.65C10.69 19.65 10.39 19.61 10.14 19.52C6.32 18.21 0.25 13.56 0.25 6.69001C0.25 3.19001 3.08 0.350006 6.56 0.350006C8.25 0.350006 9.83 1.01001 11 2.19001C12.17 1.01001 13.75 0.350006 15.44 0.350006C18.92 0.350006 21.75 3.20001 21.75 6.69001C21.75 13.57 15.68 18.21 11.86 19.52C11.61 19.61 11.31 19.65 11 19.65ZM6.56 1.85001C3.91 1.85001 1.75 4.02001 1.75 6.69001C1.75 13.52 8.32 17.32 10.63 18.11C10.81 18.17 11.2 18.17 11.38 18.11C13.68 17.32 20.26 13.53 20.26 6.69001C20.26 4.02001 18.1 1.85001 15.45 1.85001C13.93 1.85001 12.52 2.56001 11.61 3.79001C11.33 4.17001 10.69 4.17001 10.41 3.79001C9.48 2.55001 8.08 1.85001 6.56 1.85001Z"
                fill="#343434"
              />
            </svg>
          </a>
          <div>cart</div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
