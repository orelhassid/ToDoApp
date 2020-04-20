import React, { createContext, useReducer, useEffect } from "react";
import TodoReducer from "./todoReducer.js";
export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [lists, dispatch] = useReducer(TodoReducer, [], () => {
    const localData = localStorage.getItem("lists");
    if (localData === {}) return [localData];
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  });
  return (
    <TodoContext.Provider value={{ lists, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
