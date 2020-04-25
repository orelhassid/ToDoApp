import React, { useContext } from "react";
import { Header, Body, Actionbar } from "./layout";
import { TodoContext } from "../contexts/todoContext";

const LabPage = () => {
  const { lists, dispatch } = useContext(TodoContext);

  const addList = () => {
    const list = {
      name: "Name",
      desc: "Description here",
    };
    dispatch({ type: "add", list });
  };

  const removeList = (list) => {
    dispatch({ type: "remove", list });
  };

  const updateList = (list) => {
    list.name = "New List Name";
    dispatch({ type: "update", list });
  };

  const addTask = (list) => {
    const task = {
      name: "My TAsk",
    };
    dispatch({ type: "addTask", list, task });
  };

  const removeTask = (list, task) => {
    dispatch({ type: "removeTask", list, task });
  };

  const updateTask = (list, task) => {
    task.name = "New Task Name";
    console.log("LAB - Task", task);
    dispatch({ type: "updateTask", list, task });
  };

  return (
    <React.Fragment>
      <Header title="LAB" />
      <Actionbar></Actionbar>
      <Body>
        <Button label="Add list" onClick={() => addList()} />
        <br />
        <br />

        <ul>
          {lists.map((list) => (
            <li key={list.id} style={{ marginBottom: "50px" }}>
              {list.name} <br /> {list.desc} <br />
              <Button label="Update" onClick={() => updateList(list)} />
              <Button label="Remove" onClick={() => removeList(list)} />
              <Button label="Add Task" onClick={() => addTask(list)} />
              <ul>
                {list.tasks.map((task) => (
                  <li key={task.id}>
                    {task.name}
                    <Button
                      label="Update Task"
                      onClick={() => updateTask(list, task)}
                    />
                    <Button
                      label="Remove Task"
                      onClick={() => removeTask(list, task)}
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Body>
    </React.Fragment>
  );
};

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        color: "#000",
        marginRight: "10px",
      }}
    >
      {label}
    </button>
  );
};

export default LabPage;
