import React from "react";
import layout from "./layout.module.scss";

const Body = ({ children }) => {
  return <main className={layout["layout-body"]}>{children}</main>;
};

export default Body;
