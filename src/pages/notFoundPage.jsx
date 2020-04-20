import React from "react";
import Header from "./layout/header";
import Button from "../components/buttons/button";
import Body from "./layout/body";

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
