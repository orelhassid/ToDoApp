import React, { createContext, useEffect, useReducer, useState } from "react";
import TodoReducer from "./todoReducer";
export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [lists, dispatch] = useReducer(TodoReducer, [], () => {
    const localData = localStorage.getItem("lists");
    return localData ? JSON.parse(localData) : [];
  });

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const newTasks = [];
    for (let list of lists) for (let task of list.tasks) newTasks.push(task);
    setTasks(newTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  const getList = (listId) => {
    // let lists = localStorage.getItem("lists");
    // lists = JSON.parse(lists);
    console.log({ listId });
    return lists.find((list) => list.id === listId);
  };

  return (
    <TodoContext.Provider value={{ lists, tasks, getList, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
