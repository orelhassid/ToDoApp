import { v4 as uuidv4 } from "uuid";

export function getLists() {
  const lists = localStorage.getItem("lists");
  if (!lists) return [];
  return JSON.parse(lists);
}

export function getSingleList(id) {
  let lists = localStorage.getItem("lists");
  lists = JSON.parse(lists);
  return lists.find((list) => list.id === id);
}

export function addList(name) {
  const value = {
    id: uuidv4(),
    name: name,
  };
  localStorage.setItem("lists", JSON.stringify(value));
  // console.log("AddList", getLists());
}

export function addTask(listId, task) {
  const lists = JSON.parse(localStorage.getItem("lists"));
  const list = lists.find((list) => list.id === listId);

  list.tasks.push({
    id: uuidv4(),
    name: task.name,
  });
}
