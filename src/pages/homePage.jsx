import React, { useContext } from "react";
import Header from "../layout/header";
import ActionBar from "./../layout/actionBar";
import Body from "./../layout/body";
import TaskListCard from "../components/taskListCard/taskListCard";
import ListsContext from "../contexts/listsContext";

const HomePage = () => {
  const lists = useContext(ListsContext);
  console.log(lists);
  return (
    <React.Fragment>
      <Header title="Home Page" />
      <ActionBar />
      <Body></Body>
    </React.Fragment>
  );
};

export default HomePage;
