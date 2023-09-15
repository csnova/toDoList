import Spiral from "./images/spiral.jpg";
import Paper from "./images/notebookPaper.jpg";
// <a href="https://www.flaticon.com/free-icons/edit" title="edit icons">Edit icons created by Pixel perfect - Flaticon</a>
import Edit from "./images/edit.png";
// <a href="https://www.flaticon.com/free-icons/delete" title="delete icons">Delete icons created by Ilham Fitrotul Hayat - Flaticon</a>
import Delete from "./images/delete.png";
// <a href="https://www.flaticon.com/free-icons/plus" title="plus icons">Plus icons created by dmitri13 - Flaticon</a>
import Add from "./images/add.png";

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

function printDisplay() {
  const website = document.querySelector(`#content`);
  const container = document.createElement("div");
  container.classList.add("container");
  website.appendChild(container);
  const box = document.createElement("div");
  box.classList.add("box");
  container.appendChild(box);

  const spiralBox = document.createElement("div");
  spiralBox.classList.add("spiralBox");
  box.appendChild(spiralBox);
  const spiral = document.createElement("img");
  spiral.src = Spiral;
  spiral.classList.add("spiral");
  spiralBox.appendChild(spiral);

  const header = document.createElement("div");
  header.classList.add("header");
  box.appendChild(header);
  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "To Do List";
  header.appendChild(title);

  const sideBar = document.createElement("div");
  sideBar.classList.add("sideBar");
  box.appendChild(sideBar);
  const sideBarBox = document.createElement("div");
  sideBarBox.classList.add("sideBarBox");
  sideBar.appendChild(sideBarBox);
  const list = document.createElement("ul");
  list.classList.add("list");
  sideBarBox.appendChild(list);
  const allList = document.createElement("li");
  allList.classList.add("allList");
  list.appendChild(allList);
  const allButton = document.createElement("BUTTON");
  allButton.classList.add("allButton");
  allButton.classList.add("listButton");
  allButton.textContent = "All";
  allList.appendChild(allButton);
  const projectList = document.createElement("li");
  projectList.classList.add("projectList");
  list.appendChild(projectList);
  const projectButton = document.createElement("BUTTON");
  projectButton.classList.add("projectButton");
  projectButton.classList.add("listButton");
  projectButton.textContent = "Project";
  projectList.appendChild(projectButton);
  const projects = document.createElement("ul");
  projects.classList.add("projects");
  list.appendChild(projects);
  const work = document.createElement("li");
  work.classList.add("work");
  projects.appendChild(work);
  const workButton = document.createElement("BUTTON");
  workButton.classList.add("workButton");
  workButton.classList.add("listButton");
  workButton.textContent = "Work";
  work.appendChild(workButton);
  const house = document.createElement("li");
  house.classList.add("house");
  projects.appendChild(house);
  const houseButton = document.createElement("BUTTON");
  houseButton.classList.add("houseButton");
  houseButton.classList.add("listButton");
  houseButton.textContent = "House";
  house.appendChild(houseButton);
  const newProject = document.createElement("BUTTON");
  newProject.classList.add("addButton");
  newProject.setAttribute(`id`, `newProject`);
  newProject.textContent = "New Project";
  sideBarBox.appendChild(newProject);
  const addButton1 = document.createElement("img");
  addButton1.src = Add;
  addButton1.classList.add("addButton1");
  newProject.appendChild(addButton1);

  const info = document.createElement("div");
  info.classList.add("info");
  box.appendChild(info);
  const infoBox = document.createElement("div");
  infoBox.classList.add("infoBox");
  info.appendChild(infoBox);
  const taskBox = document.createElement("div");
  taskBox.classList.add("taskBox");
  infoBox.appendChild(taskBox);

  const task1 = document.createElement("div");
  task1.classList.add("task");
  task1.setAttribute(`id`, `task1`);
  taskBox.appendChild(task1);
  const task1Check = document.createElement("INPUT");
  task1Check.classList.add("checkbox");
  task1Check.setAttribute("type", "checkbox");
  task1.setAttribute(`id`, `completedTask1`);
  task1.appendChild(task1Check);
  const task1Title = document.createElement("h2");
  task1Title.classList.add("task1Title");
  task1Title.textContent = "Go Shopping";
  task1.appendChild(task1Title);
  const task1Button = document.createElement("BUTTON");
  task1Button.classList.add("taskButton");
  task1Button.setAttribute(`id`, `task1Button`);
  task1Button.textContent = "Info";
  task1.appendChild(task1Button);
  const editButton1Box = document.createElement("BUTTON");
  editButton1Box.classList.add("taskButton");
  task1.appendChild(editButton1Box);
  const editButton1Img = document.createElement("img");
  editButton1Img.src = Edit;
  editButton1Img.classList.add("editButton");
  editButton1Box.appendChild(editButton1Img);
  const deleteButton1Box = document.createElement("BUTTON");
  deleteButton1Box.classList.add("taskButton");
  task1.appendChild(deleteButton1Box);
  const deleteButton1Img = document.createElement("img");
  deleteButton1Img.src = Delete;
  deleteButton1Img.classList.add("deleteButton");
  deleteButton1Box.appendChild(deleteButton1Img);

  const task2 = document.createElement("div");
  task2.classList.add("task");
  task2.setAttribute(`id`, `task2`);
  taskBox.appendChild(task2);
  const task2Check = document.createElement("INPUT");
  task2Check.classList.add("checkbox");
  task2Check.setAttribute("type", "checkbox");
  task2.setAttribute(`id`, `completedTask2`);
  task2.appendChild(task2Check);
  const task2Title = document.createElement("h2");
  task2Title.classList.add("task2Title");
  task2Title.textContent = "Go Shopping";
  task2.appendChild(task2Title);
  const task2Button = document.createElement("BUTTON");
  task2Button.classList.add("taskButton");
  task2Button.setAttribute(`id`, `task2Button`);
  task2Button.textContent = "Info";
  task2.appendChild(task2Button);
  const editButton2Box = document.createElement("BUTTON");
  editButton2Box.classList.add("taskButton");
  task2.appendChild(editButton2Box);
  const editButton2Img = document.createElement("img");
  editButton2Img.src = Edit;
  editButton2Img.classList.add("editButton");
  editButton2Box.appendChild(editButton2Img);
  const deleteButton2Box = document.createElement("BUTTON");
  deleteButton2Box.classList.add("taskButton");
  task2.appendChild(deleteButton2Box);
  const deleteButton2Img = document.createElement("img");
  deleteButton2Img.src = Delete;
  deleteButton2Img.classList.add("deleteButton");
  deleteButton2Box.appendChild(deleteButton2Img);

  const task3 = document.createElement("div");
  task3.classList.add("task");
  task3.setAttribute(`id`, `task3`);
  taskBox.appendChild(task3);
  const task3Check = document.createElement("INPUT");
  task3Check.classList.add("checkbox");
  task3Check.setAttribute("type", "checkbox");
  task3.setAttribute(`id`, `completedTask3`);
  task3.appendChild(task3Check);
  const task3Title = document.createElement("h2");
  task3Title.classList.add("task3Title");
  task3Title.textContent = "Go Shopping";
  task3.appendChild(task3Title);
  const task3Button = document.createElement("BUTTON");
  task3Button.classList.add("taskButton");
  task3Button.setAttribute(`id`, `task3Button`);
  task3Button.textContent = "Info";
  task3.appendChild(task3Button);
  const editButton3Box = document.createElement("BUTTON");
  editButton3Box.classList.add("taskButton");
  task3.appendChild(editButton3Box);
  const editButton3Img = document.createElement("img");
  editButton3Img.src = Edit;
  editButton3Img.classList.add("editButton");
  editButton3Box.appendChild(editButton3Img);
  const deleteButton3Box = document.createElement("BUTTON");
  deleteButton3Box.classList.add("taskButton");
  task3.appendChild(deleteButton3Box);
  const deleteButton3Img = document.createElement("img");
  deleteButton3Img.src = Delete;
  deleteButton3Img.classList.add("deleteButton");
  deleteButton3Box.appendChild(deleteButton3Img);

  const newTask = document.createElement("BUTTON");
  newTask.classList.add("addButton");
  newTask.setAttribute(`id`, `newTask`);
  newTask.textContent = "New Task";
  infoBox.appendChild(newTask);
  const addButton2 = document.createElement("img");
  addButton2.src = Add;
  addButton2.classList.add("addButton2");
  newTask.appendChild(addButton2);
}

export {
  task,
  printMe,
  addTaskToArray,
  allTasks,
  removeElementsByClass,
  printDisplay,
};
