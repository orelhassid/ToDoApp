import React, { useState, useContext } from "react";
import "./cards.css";
import { useHistory } from "react-router-dom";
import { TextCaption } from "../typography/typography";
import { Headline6 } from "./../typography/typography";
import { ReactComponent as More } from "../../assets/icons/more_horiz.svg";
import Dropbox from "../form/dropbox";
import { TodoContext } from "../../contexts/todoContext";

import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";

const ListCard = ({ list }) => {
  const { name, desc, id } = list;
  const history = useHistory();
  const [dropbox, setDropbox] = useState(false);
  const { dispatch } = useContext(TodoContext);
  const items = [
    { id: 1, label: "Delete", event: "onDelete", icon: <TrashIcon /> },
    { id: 2, label: "Edit", event: "onEdit", icon: <EditIcon /> },
  ];

  const handleTaskListIcon = (e) => {
    e.stopPropagation();
    setDropbox(!dropbox);
  };

  const handleListActions = (e, action) => {
    e.stopPropagation();
    setDropbox(!dropbox);
    //Remove the list
    dispatch({ type: "remove", list });
  };
  return (
    <div className="card-tasklist pointer">
      <div
        className="surface hover"
        onClick={() => history.push(`/lists/${id}`)}
      >
        <div className="tasklist-text">
          <Headline6 text={name} />
          <TextCaption text={desc} />
        </div>
      </div>
      <div
        className="taskList-icon pointer"
        onClick={(e) => handleTaskListIcon(e)}
      >
        <More />
      </div>
      {dropbox && (
        <Dropbox
          onClick={handleListActions}
          items={items}
          onDelete={console.log("Delete")}
          onEdit={console.log("Edit")}
        />
      )}
    </div>
  );
};

export default ListCard;
