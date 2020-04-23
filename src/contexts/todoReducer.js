import { v4 as uuid } from "uuid";

export const TodoReducer = (state, action) => {
  let lists = [...state]; // Making a new reference from state
  const index = lists.indexOf(action.list); // Use it for change list directly
  const list = { ...state[index] };
  let tasks, task, taskModel;

  switch (action.type) {
    case "add":
      console.log(action.list);
      return [
        ...lists,
        {
          id: uuid(),
          name: action.list.name,
          desc: action.list.desc,
          tasks: [],
        },
      ];
    case "remove":
      return lists.filter((list) => list.id !== action.listId);

    case "update":
      lists[index] = action.list;
      return lists;

    case "addTask":
      tasks = [...state[index].tasks];
      const { name, status } = action.task;
      taskModel = {
        id: uuid(),
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
      tasks = [...state[index].tasks];
      task = tasks.find((task) => task.id === action.task.id);
      taskModel = {
        id: task.id,
        name: action.name || task.name,
        status: action.status || task.status,
        isChecked: task.isChecked,
      };
      const taskIndex = tasks.indexOf(task);
      tasks[taskIndex] = task;
      list.tasks = tasks;
      lists[index] = list;
      return lists;

    default:
      throw new Error();
  }
};

export default TodoReducer;
