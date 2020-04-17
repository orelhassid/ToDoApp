import React from "react";
import style from "./navbar.module.scss";
const Navbar = () => {
  return (
    <header className={style.navbar}>
      <a className={style["navbar-brand"]}>Logo</a>
      <nav>
        <ul className={style["navbar-links"]}>
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
        </ul>
      </nav>
      <button className={style["navbar-cta"]}>Contact</button>
    </header>
  );
};

export default Navbar;
