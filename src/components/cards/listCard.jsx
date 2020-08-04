import React, { useState, useContext } from "react";
import "./cards.css";
import { useHistory } from "react-router-dom";
import { TextCaption } from "../typography/typography";
import { Headline6 } from "./../typography/typography";
import { ReactComponent as More } from "../../assets/icons/more_horiz.svg";
import Dropbox from "../form/dropbox";
import { TodoContext } from "../../contexts/todoContext";

const ListCard = ({ list }) => {
  const { name, desc, id } = list;
  const history = useHistory();
  const { dispatch } = useContext(TodoContext);

  const [dropdown, setDropdown] = useState(false);

  const handleListActions = (e, action) => {
    e.stopPropagation();
    setDropdown(!dropdown);
    //Remove the list
    // dispatch({ type: "remove", list });
  };
  const showDropdown = (e) => {
    e.stopPropagation();
    setDropdown(!dropdown);
  };
  const onDeleteList = () => {
    console.log("Delete", list);
    dispatch({ type: "remove", list });
  };

  const onEditList = () => {
    console.log("Edit", list);
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
      <div className="taskList-icon pointer" onClick={(e) => showDropdown(e)}>
        <More />
      </div>
      {dropdown && (
        <Dropbox
          onClick={handleListActions}
          onDelete={onDeleteList}
          onEdit={onEditList}
        />
      )}
    </div>
  );
};

export default ListCard;
