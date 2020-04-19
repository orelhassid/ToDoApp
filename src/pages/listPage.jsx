import React, { useContext } from "react";
import Header from "./layout/header";
import Actionbar from "./layout/actionbar";
import Body from "./layout/body";
import { getSingleList } from "../services/todoService";
import { TodoContext } from "./../contexts/todoContext";

const ListPage = ({ match }) => {
  const listId = match.params.id;
  const list = getSingleList(listId);
  console.log("list", list);
  //   console.log(match.params.id);
  return (
    <React.Fragment>
      <Header title={list.name} />
      <Actionbar></Actionbar>
      <Body></Body>
    </React.Fragment>
  );
};

export default ListPage;
