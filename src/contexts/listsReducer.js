import React, { useReducer } from "react";

export const ListsReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_LIST":
      return [
        ...state,
        {
          id: 1,
          name: "List Name",
          desc: "List Description",
        },
      ];
  }
};
