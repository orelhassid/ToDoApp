import React, { useContext, useState } from "react";
import { Header, Body, Actionbar } from "./layout";
import { TodoContext } from "../contexts/todoContext";
import TaskCard from "../components/cards/taskCard";
import Tabs from "../components/tabs/tabs";
import Button from "../components/buttons/button";
import { Link } from "react-router-dom";

const TasksPage = () => {
  const { tasks, getList, dispatch } = useContext(TodoContext);

  const [tasksList, setTasksList] = useState(tasks);

  const tabs = [
    { id: 1, label: "All", filterKey: "all", isActive: true },
    { id: 2, label: "Completed", filterKey: "completed", isActive: false },
    { id: 3, label: "To-Do", filterKey: "todo", isActive: false },
  ];

  const onTaskChange = (task) => {
    const list = getList(task.listId);

    dispatch({ type: "updateTask", list, task });
  };

  const onTabChange = (filterKey) => {
    if (filterKey === "all") return setTasksList(tasks);
    setTasksList(tasks.filter((task) => task.status === filterKey));
  };
  return (
    <React.Fragment>
      <Header title="All Tasks" />

      <Actionbar>
        <Tabs tabs={tabs} onTabChange={onTabChange} />
      </Actionbar>

      <Body>
        <ul className="cards-container">
          {tasksList.map((task) => (
            <TaskCard key={task.id} task={task} onChange={onTaskChange} />
          ))}
        </ul>
        {!tasksList && <NoTasksPage />}
      </Body>
    </React.Fragment>
  );
};

const NoTasksPage = () => {
  return (
    <section className="text-center">
      <h3>No Tasks yet</h3>
      <p>Start to create</p>
      <br />
      <Link to="/">
        <Button value="Tasks Page" />
      </Link>
    </section>
  );
};
export default TasksPage;
