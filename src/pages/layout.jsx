import React from "react";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import { ReactComponent as AvatarLion } from "../assets/icons/avatar-lion.svg";
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as TasksIcon } from "../assets/icons/tasks.svg";
import { Link } from "react-router-dom";

export const Header = ({ title, desc }) => {
  return (
    <header className="page-header">
      <Navbar>
        <NavItem icon={<HomeIcon />} link="/" />
        <NavItem icon={<TasksIcon />} link="/tasks" />
        <NavItem icon={<AvatarLion />} link="/me" />
      </Navbar>
      <div className="page-title">
        <h5 className="title">{title}</h5>
        <p className="description">{desc}</p>
      </div>
    </header>
  );
};

const Navbar = ({ children }) => {
  return (
    <nav className="page-nanbar">
      <ul className="navbar-nav">{children}</ul>
    </nav>
  );
};

const NavItem = ({ icon, link }) => {
  return (
    <li className="nav-item">
      <Link to={link} className="icon-button">
        {icon}
      </Link>
    </li>
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
