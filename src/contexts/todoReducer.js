import { v4 as uuid } from "uuid";

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return [
        ...state,
        {
          id: uuid(),
          name: action.name,
          desc: action.desc,
        },
      ];
    case "REMOVE_LIST":
      return state.filter((list) => list.id !== action.id);
    default:
      return state;
  }
};

export default TodoReducer;
