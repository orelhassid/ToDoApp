import React from "react";
import "./taskListCard.css";
import Icon from "../icon";

const TaskListCard = ({ name, desc }) => {
  return (
    <div className="taskList">
      <div className="border"></div>

      <div className="text">
        <h5 className="text-title">{name}</h5>
        <p className="text-description">{desc}</p>
      </div>

      <div className="info">
        <div className="info-icon">
          <Icon />
        </div>
        <p className="info-tasks">5/20</p>
      </div>
    </div>
  );
};

export default TaskListCard;
