import React from "react";

const Body = ({ children, className }) => {
  return <div className={className ? className : "page-body"}>{children}</div>;
};

export default Body;
