import React from "react";
import { ReactComponent as AvatarDog } from "../assets/icons/avatar-dog.svg";

const Avatar = ({ icon }) => {
  return (
    <span className="icon">
      <AvatarDog />
    </span>
  );
};

export default Avatar;
