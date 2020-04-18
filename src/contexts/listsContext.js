/**
 * Tasks Lists
 */
import React, { createContext, useState, useEffect, useReducer } from "react";
import { ListsReducer } from "./listsReducer";

export const ListsContext = createContext();

const ListsContextProvider = ({ children }) => {
  const [lists, dispatch] = useReducer(ListsReducer, [
    {
      name: "React",
      description: "learn react concepts",
    },
  ]);

  return (
    <ListsContext.Provider value={{ lists, dispatch }}>
      {children}
    </ListsContext.Provider>
  );
};

export default ListsContextProvider;
