import React from "react";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as AvatarLion } from "../../assets/icons/avatar-lion.svg";
import { Link } from "react-router-dom";

export const Header = ({ title }) => {
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

export const Actionbar = ({ children }) => {
  return <div className="page-actionbar">{children}</div>;
};

export const Body = ({ children, className }) => {
  return <div className={className ? className : "page-body"}>{children}</div>;
};

export default {
  Header,
  Body,
  Actionbar,
};
