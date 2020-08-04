import React, { useState } from "react";
import "./tabs.css";

const Tabs = ({ tabs, onTabChange }) => {
  const [tabsItems, setTabsItems] = useState(tabs);

  const handleTabClicked = (item) => {
    for (let item of tabsItems) item.isActive = false;

    const index = tabsItems.indexOf(item);
    tabsItems[index].isActive = true;

    onTabChange(item.filterKey);
  };

  return (
    <ul className="tabs-container">
      {tabsItems.map((item) => (
        <li
          key={item.id}
          className={
            item.isActive ? "tabs-items pointer active" : "tabs-items pointer"
          }
          onClick={() => handleTabClicked(item)}
        >
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
