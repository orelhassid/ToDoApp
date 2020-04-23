import React, { useState } from "react";
import Input from "./input";
import { Headline6 } from "./../typography/typography";
import Button from "../buttons/button";

const TaskListForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const list = {
      name,
      desc,
    };
    setName("");
    setDesc("");
    onSubmit(list);
  };

  return (
    <form onSubmit={handleSubmit} className="form form-floating slide-top">
      <Headline6 text="Create new Task List" border="bottom" />
      <Input
        placeholder="list name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="list desc"
        name="desc"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <Button type="submit" value="Create List" />
    </form>
  );
};

export default TaskListForm;
