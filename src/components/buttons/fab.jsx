import React from "react";
import "./buttons.css";
import { ReactComponent as Add } from "../../assets/icons/add.svg";

const FAB = ({ icon, onClick }) => {
  return (
    <button className="btn btn-rounded btn-fab bg-red" onClick={onClick}>
      {icon}
    </button>
  );
};

FAB.defaultProps = {
  icon: <Add />,
};
export default FAB;
