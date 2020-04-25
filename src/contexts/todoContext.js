import React, { createContext, useEffect, useState } from "react";
import TodoReducer, { TasksReducer } from "./todoReducer";
import { useImmerReducer } from "use-immer";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [lists, dispatch] = useImmerReducer(TodoReducer, [], () => {
    const localData = localStorage.getItem("lists");
    return localData ? JSON.parse(localData) : [];
  });

  const [tasks, setTasks] = useState(() => {
    let newTasks = [];
    for (let list of lists) for (let task of list.tasks) newTasks.push(task);
    return newTasks;
  });

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  const getList = (listId) => {
    return lists.find((list) => list.id === listId);
  };

  const filterTasks = (filterKey) => {
    console.log("Filter Tasks", filterKey);
    if (filterKey === "all") return;
    let filtered = [...tasks];
    filtered = filtered.filter((task) => task.status === filterKey);
    setTasks(filtered);
  };

  return (
    <TodoContext.Provider
      value={{ lists, tasks, setTasks, filterTasks, getList, dispatch }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
