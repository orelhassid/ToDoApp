import { v4 as uuid } from "uuid";
export const TodoReducer = (state, action) => {
  /**
   * Interface:
   * State = lists array
   * Action = list, task
   */
  const list = state.find((list) => list.id === action.list.id);
  const index = state.indexOf(list);

  if (action.task) {
    const task = list.tasks.find((task) => task.id === action.task.id);
    const tasks = state[index].tasks;
    const taskIndex = tasks.indexOf(task);

    switch (action.type) {
      case "addTask":
        const taskModel = {
          id: uuid(),
          isChecked: false,
          ...action.task,
        };
        state[index].tasks.push(taskModel);

        return;

      case "removeTask":
        state[index].tasks = tasks.filter((task) => task.id !== action.task.id);
        return;

      case "updateTask":
        state[index].tasks[taskIndex] = action.task;
        return;
      default:
        throw new Error();
    }
  }

  switch (action.type) {
    case "add":
      if (action.list.name === "") return;
      state.push({
        id: uuid(),
        name: action.list.name,
        desc: action.list.desc,
        tasks: [],
      });
      return;

    case "remove":
      return state.filter((list) => list.id !== action.list.id);

    case "update":
      // lists[index] = action.list;
      return;
    default:
      throw new Error();
  }
};

export default TodoReducer;
