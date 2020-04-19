import React from "react";
import "./form.css";

const Input = ({ name, value, placeholder, onChange }) => {
  return (
    <input
      className="input"
      name={name}
      value={value}
      onChange={onChange}
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Input;
