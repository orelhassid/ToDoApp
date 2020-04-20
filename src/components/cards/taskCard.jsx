import React, { useState } from "react";
import { ReactComponent as RadioCheck } from "../../assets/icons/radio_check.svg";
import { ReactComponent as RadioUncheck } from "../../assets/icons/radio_uncheck.svg";
import Input from "./../form/input";

const TaskCard = () => {
  const [checked, setChecked] = useState(false);
  const [taskName, setTaskName] = useState("");

  const handleClick = () => {
    setChecked(!checked);
  };

  const handleNameChange = ({ currentTarget: input }) => {
    setChecked(false);
    setTaskName(input.value);
  };
  return (
    <div className="taskcard" onClick={handleClick}>
      <div className="taskcard-input">
        <span className="input-radio">
          <input type="checkbox" checked={checked} />
        </span>
        <span className="input-label">
          <input type="text" value={taskName} onChange={handleNameChange} />
        </span>
      </div>

      <div className="taskcard-status">Completed</div>
    </div>
  );
};

export default TaskCard;
