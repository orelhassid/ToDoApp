import { v4 as uuidv4 } from "uuid";

export function getLists() {
  return [
    {
      id: 1,
      name: "List name1",
      desc: "List desc",
      tasks: [
        { name: "Task name", status: "completed" },
        { name: "Task name", status: "completed" },
        { name: "Task name", status: "completed" },
      ],
    },
    {
      id: 2,
      name: "List name2",
      desc: "List desc",
      tasks: [
        { name: "Task name", status: "completed" },
        { name: "Task name", status: "completed" },
        { name: "Task name", status: "completed" },
      ],
    },
    {
      id: 3,
      name: "List name3",
      desc: "List desc",
      tasks: [
        { name: "Task name", status: "completed" },
        { name: "Task name", status: "completed" },
        { name: "Task name", status: "completed" },
      ],
    },
  ];
}

export function getSingleList(id) {
  id = parseInt(id);
  const list = getLists().find((list) => list.id === id);
  return list;
}

export function addList(name) {
  const lists = getLists();
  lists.push({
    id: uuidv4(),
    name: name,
  });
  console.log("AddList", lists);
}
