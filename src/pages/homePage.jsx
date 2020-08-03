import React, { useState, useContext } from "react";
import { Header, Body, Actionbar } from "./layout";

import ListCard from "./../components/cards/listCard";
import InputForm from "../components/form/inputForm";
import FAB from "../components/buttons/fab";
import TaskListForm from "../components/form/taskListForm";
import { TodoContext } from "./../contexts/todoContext";

const HomePage = () => {
  const { lists, dispatch } = useContext(TodoContext);
  const [isFormOpen, setFormDisplay] = useState(false);

  const handleTaskList = () => {
    document.body.style.pointerEvents = !document.body.style.pointerEvents;
    setFormDisplay(!isFormOpen);
  };

  const handleForm = (list) => {
    setFormDisplay(!isFormOpen);
    document.body.style.pointerEvents = "all";
    dispatch({ type: "add", list });
  };

  const addListName = (listName) => {
    const list = {
      name: listName,
      tasks: [],
    };
    dispatch({ type: "add", list });
  };

  return (
    <React.Fragment>
      <Header title="Home Page" />

      <Actionbar>
        <InputForm placeholder="Create new list..." onSubmit={addListName} />
      </Actionbar>
      <Body>
        <ul className="cards-container">
          {lists.map((list) => (
            <ListCard key={list.id} list={list} />
          ))}
        </ul>
      </Body>
      <FAB onClick={handleTaskList} />
      {isFormOpen && (
        <TaskListForm onSubmit={handleForm} onCloseForm={handleTaskList} />
      )}
    </React.Fragment>
  );
};

export default HomePage;
