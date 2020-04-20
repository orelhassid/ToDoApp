import React from "react";

const Button = ({ value, onClick, ...rest }) => {
  return (
    <button {...rest} className="btn btn-primary" onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
