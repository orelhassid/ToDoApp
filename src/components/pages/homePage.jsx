import React, { useContext } from "react";
import Header from "../layout/header";
import ActionBar from "./../layout/actionBar";
import Body from "./../layout/body";
import TaskListCard from "../taskListCard/taskListCard";
import { getTasksLists } from "../../services/tasksListsService";
import Input from "./../input";
import FAB from "../fab";

const HomePage = () => {
  const tasksLists = getTasksLists();
  console.log(tasksLists);
  return (
    <React.Fragment>
      <Header title="Home Page" />
      <ActionBar>
        <Input />
      </ActionBar>
      <Body>
        {tasksLists.map((list) => (
          <TaskListCard
            key={list.id}
            name={list.name}
            desc={list.description}
          />
        ))}
      </Body>
      <FAB />
    </React.Fragment>
  );
};

export default HomePage;
