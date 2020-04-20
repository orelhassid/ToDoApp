import React from "react";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as AvatarLion } from "../../assets/icons/avatar-lion.svg";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <header className="page-header">
      <div className="page-top">
        <div className="icon icon-menu">
          <MenuIcon />
        </div>
        <Link to="/me" className="avatar">
          <AvatarLion />
        </Link>
      </div>
      <div className="page-title">
        <h5>{title}</h5>
      </div>
    </header>
  );
};

export default Header;
