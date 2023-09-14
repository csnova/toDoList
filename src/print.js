import Spiral from "./images/spiral.jpg";
import Paper from "./images/notebookPaper.jpg";
// <a href="https://www.flaticon.com/free-icons/edit" title="edit icons">Edit icons created by Pixel perfect - Flaticon</a>
import Edit from "./images/edit.png";
// <a href="https://www.flaticon.com/free-icons/delete" title="delete icons">Delete icons created by Ilham Fitrotul Hayat - Flaticon</a>
import Delete from "./images/delete.png";
// <a href="https://www.flaticon.com/free-icons/plus" title="plus icons">Plus icons created by dmitri13 - Flaticon</a>
import Add from "./images/edit.png";

const allTasks = [];

function printMe() {
  console.log("I get called from print.js!");
}

class task {
  constructor(project, title, description, priority, dueDate) {
    this.project = project;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
  }
  taskInfo() {
    let info = `Project: ${project} Title: ${title} Description: ${description} Priority: ${priority} Due Date: ${dueDate}`;
    return info;
  }
}

function addTaskToArray(project, title, description, priority, dueDate) {
  const newTask = new task(project, title, description, priority, dueDate);
  allTasks.push(newTask);
}

function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

export { task, printMe, addTaskToArray, allTasks, removeElementsByClass };
