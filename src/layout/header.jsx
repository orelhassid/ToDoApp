import React from "react";
import "./layout.module.scss";

const Header = ({ title }) => {
  return (
    <header className="layout-header">
      <h5>{title}</h5>
    </header>
  );
};

export default Header;
