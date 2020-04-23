import React, { createContext, useEffect, useReducer } from "react";
import TodoReducer from "./todoReducer";
export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [lists, dispatch] = useReducer(TodoReducer, [], () => {
    const localData = localStorage.getItem("lists");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  const getList = (listId) => {
    // let lists = localStorage.getItem("lists");
    // lists = JSON.parse(lists);
    return lists && lists.find((list) => list.id === listId);
  };

  return (
    <TodoContext.Provider value={{ lists, getList, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
