import React, { useState, useEffect } from "react";
import "./tabs.css";
import { Link, NavLink } from "react-router-dom";

const Tabs = ({ tabs, filterKey, onTabChange }) => {
  const [tabsItems, setTabsItems] = useState([]);
  useEffect(() => {
    setTabsItems(tabs);
  });
  return (
    <ul className="tabs-container" onClick={() => onTabChange()}>
      {tabsItems.map((item) => (
        <TabsItem key={item.id} item={item} filterKey={filterKey} />
      ))}
    </ul>
  );
};

const TabsItem = ({ item, onClick, filterKey }) => {
  return (
    <NavLink
      to={`/tasks?f=${item.filter}`}
      className="tabs-items"
      isActive={(match, location) => {
        if (item.filter === filterKey) return true;
      }}
    >
      <span>{item.label}</span>
    </NavLink>
  );
};
export default Tabs;
