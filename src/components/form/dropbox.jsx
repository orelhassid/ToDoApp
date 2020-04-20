import React from "react";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";

const Dropbox = ({ items, onClick }) => {
  return (
    <div className="dropbox">
      <ul className="dropbox-list">
        {items.map((item) => (
          <li
            className="dropbox-item"
            key={item.id}
            onClick={(e) => onClick(e, item.event)}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Dropbox.defaultProps = {
  items: [
    { id: 1, label: "Delete", event: "delete", icon: <TrashIcon /> },
    { id: 2, label: "Edit", event: "edit", icon: <EditIcon /> },
  ],
};

export default Dropbox;
