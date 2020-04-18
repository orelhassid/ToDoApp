import React from "react";
import "./taskListCard.css";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

const TaskListCard = () => {
  return (
    <div className="taskList">
      <div className="border"></div>

      <div className="text">
        <h5 className="text-title">Shopping</h5>
        <p className="text-description">List to organize foods</p>
      </div>

      <div className="info">
        <div className="info-icon">
          <AssignmentTurnedInIcon></AssignmentTurnedInIcon>
        </div>
        <p className="info-tasks">5/20</p>
      </div>
    </div>
  );
};

export default TaskListCard;
