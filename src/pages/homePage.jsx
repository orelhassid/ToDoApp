import React, { useState, useContext } from "react";
import { Header, Body, Actionbar } from "./layout/layout";

import ListCard from "./../components/cards/listCard";
import InputForm from "../components/form/inputForm";
import FAB from "../components/buttons/fab";
import TaskListForm from "../components/form/taskListForm";
import { TodoContext } from "./../contexts/todoContext";

const HomePage = () => {
  const { lists, dispatch } = useContext(TodoContext);
  const [isFormOpen, setFormDisplay] = useState(false);

  const handleTaskList = () => {
    document.body.style.pointerEvents = "none";
    setFormDisplay(!isFormOpen);
  };

  const handleForm = (list) => {
    setFormDisplay(!isFormOpen);
    document.body.style.pointerEvents = "all";
    dispatch({ type: "add", list });
  };

  const addListName = (listName) => {
    console.log({ listName });
    const list = {
      name: listName,
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
            <ListCard
              key={list.id}
              listId={list.id}
              name={list.name}
              desc={list.desc}
            />
          ))}
        </ul>
      </Body>
      <FAB onClick={handleTaskList} />
      {isFormOpen && <TaskListForm onSubmit={handleForm} />}
    </React.Fragment>
  );
};

export default HomePage;
