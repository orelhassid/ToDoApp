import React, { useState, useContext } from "react";
import { Header, Body, Actionbar } from "./layout/layout";
import { TodoContext } from "../contexts/todoContext";
import TaskCard from "../components/cards/taskCard";

const TasksPage = () => {
  const { tasks, lists, getList, dispatch } = useContext(TodoContext);

  //   console.log({ tasks });
  //   console.log({ lists });

  const onTaskChange = (task) => {
    const list = getList(task.listId);
    if (task.name === "") {
      setTimeout((list, task) => {
        return dispatch({ type: "removeTask", list, task });
      }, 1000);
    } else dispatch({ type: "updateTask", list, task });
  };

  return (
    <React.Fragment>
      <Header title="All Tasks" />
      <Actionbar>
        <h2>TABS</h2>
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
