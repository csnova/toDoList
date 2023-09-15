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

function printAll() {
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

  let i = 0;
  for (const task of allTasks) {
    // Creates a new div for each book to be displayed it
    document.querySelector(".taskBox");
    const newDiv = document.createElement("div");
    newDiv.classList.add("task");
    newDiv.setAttribute(`id`, `task${i}`);
    taskBox.appendChild(newDiv);
    const taskCheck = document.createElement("INPUT");
    taskCheck.classList.add("checkbox");
    taskCheck.setAttribute("type", "checkbox");
    taskCheck.setAttribute(`id`, `completedTask${i}`);
    newDiv.appendChild(taskCheck);
    const taskTitle = document.createElement("h2");
    taskTitle.classList.add(`task${i}Title`);
    taskTitle.textContent = `${task.title}`;
    newDiv.appendChild(taskTitle);
    const taskButton = document.createElement("BUTTON");
    taskButton.classList.add("taskButton");
    taskButton.setAttribute(`id`, `task${i}Button`);
    taskButton.textContent = "Info";
    newDiv.appendChild(taskButton);
    const editButtonBox = document.createElement("BUTTON");
    editButtonBox.classList.add("taskButton");
    newDiv.appendChild(editButtonBox);
    const editButtonImg = document.createElement("img");
    editButtonImg.src = Edit;
    editButtonImg.classList.add("editButton");
    editButtonBox.appendChild(editButtonImg);
    const deleteButtonBox = document.createElement("BUTTON");
    deleteButtonBox.classList.add("taskButton");
    newDiv.appendChild(deleteButtonBox);
    const deleteButtonImg = document.createElement("img");
    deleteButtonImg.src = Delete;
    deleteButtonImg.classList.add("deleteButton");
    deleteButtonBox.appendChild(deleteButtonImg);
    i++;
  }
}

export {
  task,
  printMe,
  addTaskToArray,
  allTasks,
  removeElementsByClass,
  printAll,
};
