import React from "react";

const Button = ({ value, ...rest }) => {
  return (
    <button {...rest} className="btn btn-primary">
      {value}
    </button>
  );
};

export default Button;
