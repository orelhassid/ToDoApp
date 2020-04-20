import React from "react";
import Body from "./layout/body";
import Header from "./layout/header";
import Avatar from "../assets/avatars/avatar-lion.png";

const UserPage = () => {
  return (
    <React.Fragment>
      <Header title="Profile Page" />
      <Body>
        <div className="icon-controller">
          <img src={Avatar} alt="" />
        </div>
      </Body>
    </React.Fragment>
  );
};

export default UserPage;
