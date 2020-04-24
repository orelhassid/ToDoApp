import React, { useContext } from "react";
import Header from "./layout/header";
import Actionbar from "./layout/actionbar";
import Body from "./layout/body";
import InputForm from "../components/form/inputForm";
import FAB from "../components/buttons/fab";
import TaskCard from "./../components/cards/taskCard";
import { TodoContext } from "./../contexts/todoContext";

const ListPage = ({ match, history }) => {
  const { lists, getList, dispatch } = useContext(TodoContext);

  const listId = match.params.id;
  const list = getList(listId);

  if (!list) {
    console.log("List Not Found!");
    history.replace("/notfound");
    return null;
  }

  const handleAddTask = (taskName) => {
    if (taskName === "") return;
    const task = {
      name: taskName,
      status: "To-Do",
    };
    dispatch({ type: "addTask", list, task });
  };

  const onTaskChange = (task) => {
    dispatch({ type: "updateTask", list, task });
  };
  return (
    <React.Fragment>
      <Header title={list.name} />
      <Actionbar>
        <InputForm placeholder="My new task is..." onSubmit={handleAddTask} />
      </Actionbar>
      <Body>
        <ul className="cards-container">
          {list.tasks.map((task) => (
            <TaskCard key={task.id} task={task} onChange={onTaskChange} />
          ))}
        </ul>
      </Body>
      <FAB />
    </React.Fragment>
  );
};

export default ListPage;
