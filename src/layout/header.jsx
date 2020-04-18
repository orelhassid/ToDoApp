import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import layout from "./layout.module.scss";
import avatarDog from "../assets/icons/avatar-dog.svg";

const Header = ({ title }) => {
  return (
    <header className={layout["layout-header"]}>
      <div className={layout["header-icons"]}>
        <MenuIcon></MenuIcon>
        <img className={layout.avatar} src={avatarDog} alt="" />
      </div>
      <h5 className={layout["page-title"]}>{title}</h5>
    </header>
  );
};

export default Header;
