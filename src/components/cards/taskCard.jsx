import React, { useState, useEffect } from "react";
import "./cards.css";

const TaskCard = ({ status, name, isChecked }) => {
  const [checked, setChecked] = useState(isChecked);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(name);
    setChecked(isChecked);
  });
  const handleClick = () => {
    setChecked(!checked);
  };

  const handleNameChange = ({ currentTarget: input }) => {
    isChecked = false;
    setInputValue(input.value);
  };
  return (
    <div className="taskcard" onClick={handleClick}>
      <div className="taskcard-input">
        <span className="input-radio">
          <input type="checkbox" checked={isChecked} />
        </span>
        <span className="input-label">
          <input type="text" value={inputValue} onChange={handleNameChange} />
        </span>
      </div>

      <div className="taskcard-status status-todo">{status}</div>
    </div>
  );
};

export default TaskCard;
