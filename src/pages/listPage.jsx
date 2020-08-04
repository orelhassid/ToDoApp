import React, { useContext } from "react";
import { Header, Body, Actionbar } from "./layout";
import InputForm from "../components/form/inputForm";
import FAB from "../components/buttons/fab";
import TaskCard from "./../components/cards/taskCard";
import { TodoContext } from "./../contexts/todoContext";

const ListPage = ({ match, history }) => {
  const { getList, dispatch } = useContext(TodoContext);

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
      listId,
    };
    dispatch({ type: "addTask", list, task });
  };

  const onTaskChange = (task) => {
    task.isChecked ? (task.status = "Completed") : (task.status = "To-Do");

    if (task.name === "") {
      return dispatch({ type: "removeTask", list, task });
      // setTimeout((list, task) => {
      // }, 1000);
    } else dispatch({ type: "updateTask", list, task });
  };
  console.log(list.desc);
  return (
    <React.Fragment>
      <Header title={list.name} desc={list.desc} />
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
