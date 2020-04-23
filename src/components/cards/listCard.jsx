import React, { useState, useContext } from "react";
import "./cards.css";
import { useHistory } from "react-router-dom";
import { TextCaption } from "../typography/typography";
import { Headline6 } from "./../typography/typography";
import { ReactComponent as More } from "../../assets/icons/more_horiz.svg";
import Dropbox from "../form/dropbox";
import { TodoContext } from "../../contexts/todoContext";

const ListCard = ({ name, desc, listId }) => {
  const history = useHistory();
  const [dropbox, setDropbox] = useState(false);
  const { dispatch } = useContext(TodoContext);

  const handleTaskListIcon = (e) => {
    e.stopPropagation();
    setDropbox(!dropbox);
  };

  const handleListActions = (e, action) => {
    e.stopPropagation();
    setDropbox(!dropbox);
    //Remove the list
    dispatch({ type: "remove", listId });
  };
  return (
    <div
      className="card-tasklist pointer hover"
      onClick={() => history.push(`/lists/${listId}`)}
    >
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
