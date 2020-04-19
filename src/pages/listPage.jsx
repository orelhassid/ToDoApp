import React from "react";
import Header from "./layout/header";
import Actionbar from "./layout/actionbar";
import Body from "./layout/body";
import { getSingleList } from "../services/todoService";

const ListPage = ({ match }) => {
  const list = getSingleList(match.params.id);
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
