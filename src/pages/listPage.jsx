import React from "react";
import Header from "./layout/header";
import Actionbar from "./layout/actionbar";
import Body from "./layout/body";
import { getSingleList } from "../services/todoService";
import InputForm from "../components/form/inputForm";
import FAB from "../components/buttons/fab";
import TaskCard from "./../components/cards/taskCard";

const ListPage = ({ match, history }) => {
  const listId = match.params.id;
  console.log("List Not!");
  const list = getSingleList(listId);
  if (!list) {
    console.log("List Not Found!");
    history.replace("/notfound");
    return null;
  }
  return (
    <React.Fragment>
      <Header title={list.name} />
      <Actionbar>
        <InputForm placeholder="My new task is..." />
      </Actionbar>
      <Body>
        <TaskCard />
      </Body>
      <FAB />
    </React.Fragment>
  );
};

export default ListPage;
