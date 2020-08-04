import React, { useState, useContext, useEffect } from "react";
import { TodoContext } from "../../contexts/todoContext";

import "./cards.css";

const TaskCard = (props) => {
  const { getList, dispatch } = useContext(TodoContext);

  let [task, setTask] = useState(props.task);
  const { name, status, isChecked } = task;

  const handleChange = ({ currentTarget: input }) => {
    const newTask = { ...task };
    newTask[input.name] = input.value;
    setTask(newTask);

    const list = getList(newTask.listId);

    if (newTask.name === "")
      return dispatch({ type: "removeTask", list, task });

    dispatch({ type: "updateTask", list, task });
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
