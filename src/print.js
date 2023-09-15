import Spiral from "./images/spiral.jpg";
import Edit from "./images/edit.png";
// <a href="https://www.flaticon.com/free-icons/delete" title="delete icons">Delete icons created by Ilham Fitrotul Hayat - Flaticon</a>
import Delete from "./images/delete.png";
// <a href="https://www.flaticon.com/free-icons/plus" title="plus icons">Plus icons created by dmitri13 - Flaticon</a>
import Add from "./images/add.png";

const allTasks = [];
let allProjects = [];

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

function printAll(idName) {
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
  allButton.setAttribute(`id`, `allButton`);
  allButton.classList.add("listButton");
  allButton.textContent = "All";
  allList.appendChild(allButton);
  const projectList = document.createElement("li");
  projectList.classList.add("projectList");
  list.appendChild(projectList);
  const projectButton = document.createElement("BUTTON");
  projectButton.setAttribute(`id`, `projectButton`);
  projectButton.classList.add("listButton");
  projectButton.textContent = "Project";
  projectList.appendChild(projectButton);
  const projects = document.createElement("ul");
  projects.classList.add("projects");
  list.appendChild(projects);
  makeProjectList();
  let j = 0;
  for (const project of allProjects) {
    const newListItem = document.createElement("li");
    newListItem.classList.add(`${project}`);
    projects.appendChild(newListItem);
    const newProjectButton = document.createElement("BUTTON");
    newProjectButton.setAttribute(`id`, `${project}`);
    newProjectButton.classList.add("listButton");
    newProjectButton.textContent = `${project}`;
    newListItem.appendChild(newProjectButton);
    j++;
  }
  const buttons = list.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      changeProject(button.id);
    });
  });
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
  let currentArray = [];
  if (idName == "allButton") {
    currentArray = allTasks;
  } else if (idName == "projectButton") {
    currentArray = allTasks;
  } else {
    const idFilter = allTasks.filter((task) => task.project == idName);
    currentArray = idFilter;
  }
  let i = 0;
  for (const task of currentArray) {
    const index = i;
    document.querySelector(".taskBox");
    const newDiv = document.createElement("div");
    newDiv.classList.add("task");
    newDiv.setAttribute(`id`, `task${i}`);
    if (task.priority == "High") {
      newDiv.style.borderColor = "red";
    }
    if (task.priority == "Medium") {
      newDiv.style.borderColor = "darkOrange";
    }
    if (task.priority == "Low") {
      newDiv.style.borderColor = "gold";
    }
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
    taskButton.addEventListener("click", () => {
      displayModal(`task${index}Button`, `info`, currentArray, index);
    });
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
    deleteButtonBox.addEventListener("click", () => {
      allTasks.splice(index, 1);
      removeElementsByClass("container");
      printAll();
    });
    newDiv.appendChild(deleteButtonBox);
    const deleteButtonImg = document.createElement("img");
    deleteButtonImg.src = Delete;
    deleteButtonImg.classList.add("deleteButton");
    deleteButtonBox.appendChild(deleteButtonImg);
    i++;
  }
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

function makeProjectList() {
  allProjects = [];
  let i = 0;
  for (const task of allTasks) {
    let value = task.project;
    if (allProjects.includes(value)) {
      i++;
    } else {
      allProjects.push(value);
      i++;
    }
  }
  allProjects = allProjects.sort();
}

function changeProject(idName) {
  removeElementsByClass("container");
  printAll(idName);
}

function displayModal(idName, typeOfModal, currentArray, index) {
  //Creates the Modal
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-content");
  modal.appendChild(modalContainer);
  const modalSpan = document.createElement("span");
  modalSpan.classList.add("close");
  modalSpan.innerHTML = "X";
  modalContainer.appendChild(modalSpan);
  const modalSection = document.createElement("div");
  modalSection.classList.add("modal-section");
  modalContainer.appendChild(modalSection);
  const modalTitle = document.createElement("p");
  modalTitle.classList.add("modal-title");
  modalTitle.textContent = `Title:`;
  modalSection.appendChild(modalTitle);
  const modalTitleText = document.createElement("p");
  modalTitleText.classList.add("modal-title-text");
  modalTitleText.textContent = `${currentArray[index].title}`;
  modalSection.appendChild(modalTitleText);
  const modalProject = document.createElement("p");
  modalProject.classList.add("modal-project");
  modalProject.textContent = `Project:`;
  modalSection.appendChild(modalProject);
  const modalProjectText = document.createElement("p");
  modalProjectText.classList.add("modal-project-text");
  modalProjectText.textContent = `${currentArray[index].project}`;
  modalSection.appendChild(modalProjectText);
  const modalPriority = document.createElement("p");
  modalPriority.classList.add("modal-priority");
  modalPriority.textContent = `Priority:`;
  modalSection.appendChild(modalPriority);
  const modalPriorityText = document.createElement("p");
  modalPriorityText.classList.add("modal-priority-text");
  modalPriorityText.textContent = `${currentArray[index].priority}`;
  modalSection.appendChild(modalPriorityText);
  const modalDueDate = document.createElement("p");
  modalDueDate.classList.add("modal-due-date");
  modalDueDate.textContent = `Due Date:`;
  modalSection.appendChild(modalDueDate);
  const modalDueDateText = document.createElement("p");
  modalDueDateText.classList.add("modal-due-date-text");
  modalDueDateText.textContent = `${currentArray[index].dueDate}`;
  modalSection.appendChild(modalDueDateText);
  const modalDescription = document.createElement("p");
  modalDescription.classList.add("modal-description");
  modalDescription.textContent = `Description:`;
  modalSection.appendChild(modalDescription);
  const modalDescriptionText = document.createElement("p");
  modalDescriptionText.classList.add("modal-description-text");
  modalDescriptionText.textContent = `${currentArray[index].description}`;
  modalSection.appendChild(modalDescriptionText);

  // Get the button that opens the modal
  const btn = document.getElementById(`${idName}`);

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
    removeElementsByClass("modal-content");
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      removeElementsByClass("modal-content");
    }
  };
}

export {
  task,
  addTaskToArray,
  allTasks,
  removeElementsByClass,
  printAll,
  makeProjectList,
  changeProject,
};
