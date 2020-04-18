import React from "react";
import "./layout.css";
import Avatar from "../avatar";
import Icon from "../icon";
const Header = ({ title }) => {
  return (
    <header className="layout-header">
      <div className="header-icons">
        <Icon icon="menu" />
        <Avatar />
      </div>
      <h5 className="page-title">{title}</h5>
    </header>
  );
};

export default Header;
