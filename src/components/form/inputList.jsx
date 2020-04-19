import React, { useState } from "react";
import "./form.css";
import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";
import { addList } from "./../../services/todoService";

const InputList = ({ placeholder }) => {
  const [listName, setListName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!e.currentTarget.value) return;
    setListName("");
    addList(listName);
    console.log("Submited");
  };
  return (
    <form className="form form-single" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setListName(e.target.value)}
        className="input input-single"
        value={listName}
        type="text"
        placeholder={placeholder}
      ></input>
      {listName && (
        <button type="submit" className="btn-input btn-icon pointer success">
          <AddIcon className="success" />
        </button>
      )}
    </form>
  );
};

export default InputList;
