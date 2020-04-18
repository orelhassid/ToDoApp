import React from "react";
import "./cards.css";
import { Link } from "react-router-dom";
import { TextCaption } from "../typography/typography";
import { Headline6 } from "./../typography/typography";
import { ReactComponent as More } from "../../assets/icons/more_horiz.svg";

const ListCard = ({ name, desc, id }) => {
  return (
    <Link to={`/lists/${id}`} className="card-tasklist">
      <div className="tasklist-text">
        <Headline6 text={name} />
        <TextCaption text={desc} />
      </div>
      <div className="taskList-icon">
        <More />
      </div>
    </Link>
  );
};

export default ListCard;
