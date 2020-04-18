import React from "react";
import { ReactComponent as Menu } from "../assets/icons/menu.svg";

const Icon = ({ icon }) => {
  const renderIcon = (icon) => {
    switch (icon) {
      case "menu":
        return <Menu />;
      default:
        return <Menu />;
    }
  };

  return <span>{renderIcon(icon)}</span>;
};

Icon.defaultProps = {
  icon: "menu",
};

export default Icon;
