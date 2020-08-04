import React from "react";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
// import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";

const Dropbox = ({ onDelete, onEdit }) => {
  const items = [
    { id: 1, label: "Delete", event: onDelete, icon: <TrashIcon /> },
    // { id: 2, label: "Edit", event: onEdit, icon: <EditIcon /> },
  ];

  return (
    <div className="dropbox">
      <ul className="dropbox-list">
        {items.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};
const ListItem = ({ item }) => {
  return (
    <li className="dropbox-item" key={item.id} onClick={() => item.event()}>
      <span>{item.icon}</span>
      <span>{item.label}</span>
    </li>
  );
};

export default Dropbox;
