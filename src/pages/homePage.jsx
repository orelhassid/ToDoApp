import React, { useContext, useState } from "react";
import Header from "./layout/header";
import Actionbar from "./layout/actionbar";
import Body from "./layout/body";
import ListCard from "./../components/cards/listCard";
import InputForm from "../components/form/inputForm";
import { TodoContext } from "../contexts/todoContext";
import FAB from "../components/buttons/fab";
import TaskListForm from "../components/form/taskListForm";
import Dropbox from "../components/form/dropbox";

const HomePage = () => {
  const [isFormOpen, setFormDisplay] = useState(false);

  const handleTaskList = () => {
    document.body.style.pointerEvents = "none";
    setFormDisplay(!isFormOpen);
    console.log("Clicked!");
  };

  const handleForm = () => {
    setFormDisplay(!isFormOpen);
    document.body.style.pointerEvents = "all";
  };

  return (
    <React.Fragment>
      <Header title="Home Page" />

      <Actionbar>
        <InputForm placeholder="Create new task..." />
      </Actionbar>
      <Body>
        <TasksLists />
      </Body>
      <FAB onClick={handleTaskList} />
      {isFormOpen && <TaskListForm onSubmit={() => handleForm()} />}
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
