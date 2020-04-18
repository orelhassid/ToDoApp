/**
import { getTasksLists } from './tasksLists';
 * Manage Tasks List
 * Get Tasks Lists from Inventory
 */
import uuid from "uuid/v1";

export function getTasksLists() {
  return [
    { id: uuid(), name: "Shopping", description: "This is awesome Task List" },
    { id: uuid(), name: "React", description: "This is awesome Task List" },
  ];
}

export function createTaskList(list) {}

export default {
  getTasksLists,
};
