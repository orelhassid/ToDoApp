import { v4 as uuid } from "uuid";
import { produce } from "immer";

export const TodoReducer = (state, action) => {
  let lists = [...state]; // Making a new reference from state
  const index = lists.indexOf(action.list); // Use it for change list directly
  const list = { ...state[index] };
  let tasks, task, taskModel;

  switch (action.type) {
    case "add":
      return produce(state, (draftState) => {
        draftState.push({
          id: uuid(),
          name: action.list.name,
          desc: action.list.desc,
          tasks: [],
        });
      });

    case "remove":
      return lists.filter((list) => list.id !== action.listId);

    case "update":
      lists[index] = action.list;
      return lists;

    case "addTask":
      tasks = [...state[index].tasks];
      const { name, status, listId } = action.task;
      taskModel = {
        id: uuid(),
        listId,
        name,
        status,
        isChecked: status === "completed" ? true : false,
      };
      tasks.push(taskModel);
      list.tasks = tasks;
      lists[index] = list;
      return lists;

    case "removeTask":
      tasks = [...state[index].tasks];
      tasks = tasks.filter((task) => task.id !== action.task.id);
      list.tasks = tasks;
      lists[index] = list;
      return lists;

    case "updateTask":
      action.task.isChecked
        ? (action.task.status = "Completed")
        : (action.task.status = "To-Do");
      tasks = [...state[index].tasks];
      task = tasks.find((task) => task.id === action.task.id);
      const taskIndex = tasks.indexOf(task);
      tasks[taskIndex] = action.task;
      list.tasks = tasks;
      lists[index] = list;
      return lists;

    default:
      throw new Error();
  }
};

export default TodoReducer;
