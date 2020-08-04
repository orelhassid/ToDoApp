import React, { useState } from "react";
import "./cards.css";

const TaskCard = (props) => {
  let [task, setTask] = useState(props.task);
  const { name, status, isChecked } = task;

  const handleChange = ({ currentTarget: input }) => {
    const newTask = { ...task };
    newTask[input.name] = input.value;
    setTask(newTask);
    props.onChange(newTask);
  };
  return (
    <div className={`taskcard`}>
      <div className="taskcard-input">
        <span className="input-radio">
          <input
            name="isChecked"
            type="checkbox"
            onChange={handleChange}
            value={isChecked}
            checked={isChecked}
          />
        </span>
        <span className="input-label">
          <input
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
            autoComplete="off"
          />
        </span>
      </div>

      <div className={`taskcard-status`}>
        <span
          className={`status-indicator status-${status.toLowerCase()}`}
        ></span>
        <span className="status-label">{status}</span>
      </div>
    </div>
  );
};

export default TaskCard;
