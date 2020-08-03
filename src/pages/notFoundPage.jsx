import React from "react";
import Button from "../components/buttons/button";
import { Body } from "./layout";
import Bug from "../components/Icons/Bug";

const NotFoundPage = (props) => {
  const handleClick = () => {
    props.history.push("/");
    console.log("CLicked");
  };
  return (
    <React.Fragment>
      <Body className="page-center">
        <div className="text-center page-notfound">
          <h3 className="text-center">404 Not Found</h3>
          <p>Return to Home</p>
          <Button value="Home" onClick={handleClick} />
        </div>
      </Body>
    </React.Fragment>
  );
};

export default NotFoundPage;
