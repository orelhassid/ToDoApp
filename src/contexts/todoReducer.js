import { v4 as uuid } from "uuid";

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return [
        ...state,
        {
          id: uuid(),
          name: action.title,
        },
      ];
    case "REMOVE_LIST":
      return state.filter((list) => list.id !== action.id);
    default:
      return state;
  }
};

export default TodoReducer;
