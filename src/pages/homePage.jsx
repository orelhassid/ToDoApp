import React, { useContext, useState } from "react";
import Header from "./layout/header";
import Actionbar from "./layout/actionbar";
import Body from "./layout/body";
import ListCard from "./../components/cards/listCard";
import InputList from "../components/form/inputList";
import { TodoContext } from "../contexts/todoContext";
import FAB from "../components/buttons/fab";
import TaskListForm from "../components/form/taskListForm";

const HomePage = () => {
  const [isFormOpen, setFormDisplay] = useState(false);
  const handleTaskList = () => {
    setFormDisplay(!isFormOpen);
    console.log("Clicked!");
  };

  return (
    <React.Fragment>
      <Header title="Home Page" />

      <Actionbar>
        <InputList placeholder="Create new task..." />
      </Actionbar>
      <Body>
        <TasksLists />
      </Body>
      <FAB onClick={handleTaskList} />
      {isFormOpen && (
        <TaskListForm onSubmit={() => setFormDisplay(!isFormOpen)} />
      )}
    </React.Fragment>
  );
};

const TasksLists = () => {
  const { lists } = useContext(TodoContext);
  if (lists) {
    return (
      <ul className="cards-container">
        {lists.map((list) => (
          <ListCard id={list.id} name={list.name} desc={list.desc} />
        ))}
      </ul>
    );
  } else {
    return <p>There is no tasks list yet.</p>;
  }
};

export default HomePage;
