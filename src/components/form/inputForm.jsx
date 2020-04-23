import React, { useState, useContext } from "react";
import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";
import "./form.css";
import { TodoContext } from "./../../contexts/todoContext";

const InputForm = ({ placeholder, onSubmit }) => {
  const [inputValue, setinputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setinputValue("");
    onSubmit(inputValue);
  };
  return (
    <form className="form form-single" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setinputValue(e.target.value)}
        className="input input-single"
        value={inputValue}
        type="text"
        placeholder={placeholder}
      ></input>
      {inputValue && (
        <button type="submit" className="btn-input btn-icon pointer success">
          <AddIcon className="success" />
        </button>
      )}
    </form>
  );
};

export default InputForm;
