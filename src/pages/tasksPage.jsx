import React, { useContext, useEffect } from "react";
import { Header, Body, Actionbar } from "./layout";
import { TodoContext } from "../contexts/todoContext";
import TaskCard from "../components/cards/taskCard";
import Tabs from "../components/tabs/tabs";
import queryString from "query-string";

const TasksPage = ({ location }) => {
  const { tasks, getList, dispatch, filterTasks } = useContext(TodoContext);
  let { f: filterKey } = queryString.parse(location.search);
  if (!filterKey) filterKey = "all";
  const tabs = [
    { id: 1, label: "All", filter: "all" },
    { id: 2, label: "Completed", filter: "completed" },
    { id: 3, label: "To-Do", filter: "todo" },
  ];

  const onTaskChange = (taskObj) => {
    const list = getList(taskObj.listId);
    let task = { ...taskObj };
    task.isChecked ? (task.status = "Completed") : (task.status = "To-Do");

    if (task.name === "") {
      return dispatch({ type: "removeTask", list, task });
    } else dispatch({ type: "updateTask", list, task });
  };
  return (
    <React.Fragment>
      <Header title="All Tasks" />
      <Actionbar>
        <Tabs
          tabs={tabs}
          filterKey={filterKey}
          onTabChange={() => filterTasks(filterKey)}
        />
      </Actionbar>
      <Body>
        <ul className="cards-container">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} onChange={onTaskChange} />
          ))}
        </ul>
      </Body>
    </React.Fragment>
  );
};

export default TasksPage;
