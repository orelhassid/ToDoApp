import React from "react";
import Header from "./layout/header";
import Actionbar from "./layout/actionbar";
import Body from "./layout/body";
import ListCard from "./../components/cards/listCard";
import { getLists } from "../services/listsService";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header title="Home Page" />
      <Actionbar></Actionbar>
      <Body>
        <ul className="cards-container">
          {getLists().map((list) => (
            <ListCard id={list.id} name={list.name} desc={list.desc} />
          ))}
        </ul>
      </Body>
    </React.Fragment>
  );
};

export default HomePage;
