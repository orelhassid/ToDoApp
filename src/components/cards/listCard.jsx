import React, { useState, useContext } from "react";
import "./cards.css";
import { Link, useHistory } from "react-router-dom";
import { TextCaption } from "../typography/typography";
import { Headline6 } from "./../typography/typography";
import { ReactComponent as More } from "../../assets/icons/more_horiz.svg";
import Dropbox from "../form/dropbox";
import { TodoContext } from "./../../contexts/todoContext";

const ListCard = ({ name, desc, id }) => {
  const history = useHistory();
  const { dispatch } = useContext(TodoContext);
  const [dropbox, setDropbox] = useState(false);

  const handleTaskListIcon = (e) => {
    e.stopPropagation();
    setDropbox(!dropbox);
    console.log("Button Clicked!");
  };

  const handleListActions = (e, action) => {
    e.stopPropagation();
    switch (action) {
      case "delete":
        dispatch({ type: "REMOVE_LIST", id });
      default:
        return null;
    }
    setDropbox(!dropbox);
    console.log(action);
  };
  return (
    <div className="card-tasklist" onClick={() => history.push(`/lists/${id}`)}>
      <div className="tasklist-text">
        <Headline6 text={name} />
        <TextCaption text={desc} />
      </div>
      <div
        className="taskList-icon pointer"
        onClick={(e) => handleTaskListIcon(e)}
      >
        <More />
      </div>
      {dropbox && <Dropbox onClick={handleListActions} />}
    </div>
  );
};

export default ListCard;
