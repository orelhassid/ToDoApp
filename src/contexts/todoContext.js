import React, { createContext, useState, useReducer } from "react";
import TodoReducer from "./todoReducer.js";
export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [lists, dispatch] = useReducer(TodoReducer, [], () => {
    const localData = localStorage.getItem("lists");
    return localData ? JSON.parse(localData) : [];
  });
  return (
    <TodoContext.Provider value={{ lists, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
