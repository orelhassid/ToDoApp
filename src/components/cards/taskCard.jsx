import React, { useState, useEffect } from "react";
import "./cards.css";

const TaskCard = (props) => {
  const { id, name, status, isChecked } = props.task;
  let [task, setTask] = useState({
    id,
    name,
    status,
    isChecked,
  });

  useEffect(() => {
    // setTask(props.task);
  });

  const handleClick = () => {
    // newTask.isChecked = !newTask.isChecked;
  };

  const handleChange = ({ currentTarget: input }) => {
    const newTask = { ...task };
    newTask[input.name] = input.value;
    setTask(newTask);
    props.onChange(task);
    console.log(newTask);
  };
  return (
    <div className="taskcard" onClick={handleClick}>
      <div className="taskcard-input">
        <span className="input-radio">
          <input
            name="check"
            type="checkbox"
            onChange={handleChange}
            checked={task.isChecked}
          />
        </span>
        <span className="input-label">
          <input
            name="name"
            type="text"
            value={task.name}
            onChange={handleChange}
          />
        </span>
      </div>

      <div className="taskcard-status status-todo">{task.status}</div>
    </div>
  );
};

export default TaskCard;
