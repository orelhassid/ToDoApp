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
      status: "todo",
      listId,
    };
    dispatch({ type: "addTask", list, task });
  };

  const onTaskChange = (task) => {
    task.isChecked ? (task.status = "completed") : (task.status = "todo");

    if (task.name === "") {
      return dispatch({ type: "removeTask", list, task });
      // setTimeout((list, task) => {
      // }, 1000);
    } else dispatch({ type: "updateTask", list, task });
  };

  const inputDescription = () => {
    return (
      <input
        type="text"
        placeholder={list.desc || "Click here to add description"}
        onChange={onListDescChange}
      />
    );
  };

  const onListDescChange = ({ target }) => {
    dispatch({ type: "editListDesc", list, desc: target.value });
  };

  const inputName = () => {
    return (
      <input type="text" placeholder={list.name} onChange={onListNameChange} />
    );
  };
  const onListNameChange = ({ target }) => {
    dispatch({ type: "editListName", list, name: target.value });
  };

  return (
    <React.Fragment>
      <Header title={inputName()} desc={inputDescription()} />
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
      {/* <FAB onClick={() => console.log("Edit List")} /> */}
    </React.Fragment>
  );
};

export default ListPage;
