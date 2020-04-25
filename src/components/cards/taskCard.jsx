import React, { useState } from "react";
import "./cards.css";

const TaskCard = (props) => {
  const { id, listId, name, status, isChecked } = props.task;
  let [task, setTask] = useState({
    id,
    name,
    listId,
    status,
    isChecked,
  });

  const handleChange = ({ currentTarget: input }) => {
    const newTask = { ...task };
    newTask[input.name] = input.value;
    if (input.name === "isChecked") {
      input.value === "true"
        ? (newTask.isChecked = false)
        : (newTask.isChecked = true);
    }
    setTask(newTask);
    console.log("Heelo");
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
            value={task.isChecked}
            checked={task.isChecked}
          />
        </span>
        <span className="input-label">
          <input
            name="name"
            type="text"
            value={task.name}
            onChange={handleChange}
            autoComplete="off"
          />
        </span>
      </div>

      <div className={`taskcard-status`}>
        <span
          className={`status-indicator status-${task.status.toLowerCase()}`}
        ></span>
        <span className="status-label">{task.status}</span>
      </div>
    </div>
  );
};

export default TaskCard;
