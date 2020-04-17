import React from "react";
import Header from "../layout/header";
import ActionBar from "./../layout/actionBar";
import Body from "./../layout/body";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header title="Home Page" />
      <ActionBar />
      <Body>Home Page Content</Body>
    </React.Fragment>
  );
};

export default HomePage;
