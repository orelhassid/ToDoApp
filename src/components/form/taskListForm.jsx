import React from "react";
import Input from "./input";
import { Headline6 } from "./../typography/typography";

const TaskListForm = () => {
  return (
    <form className="form form-floating">
      <Headline6 text="Create new Task List" border="bottom" />
      <Input placeholder="list name" name="name" />
      <Input placeholder="list name" name="name" />
    </form>
  );
};

export default TaskListForm;
