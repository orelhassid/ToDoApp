// import { v4 as uuidv4 } from "uuid";

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
    {
      id: 4,
      name: "List name4",
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
