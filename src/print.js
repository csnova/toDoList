import { format, addDays } from "date-fns";
import Spiral from "./images/spiral.jpg";
import Edit from "./images/edit.png";
// <a href="https://www.flaticon.com/free-icons/delete" title="delete icons">Delete icons created by Ilham Fitrotul Hayat - Flaticon</a>
import Delete from "./images/delete.png";
// <a href="https://www.flaticon.com/free-icons/plus" title="plus icons">Plus icons created by dmitri13 - Flaticon</a>
import Add from "./images/add.png";
import { changeAllTasks, allTasks } from "./starUp";
import {
  newProject,
  newTask,
  editTask,
  makeProjectList,
  removeElementsByClass,
} from "./logic";

function strikeThrough(text) {
  return text
    .split("")
    .map((char) => char + "\u0336")
    .join("");
}

function printAll(idName) {
  let currentMenu = idName;
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
  allButton.setAttribute(`id`, `None`);
  allButton.classList.add("listButton");
  allButton.textContent = "All";
  allList.appendChild(allButton);
  const projectList = document.createElement("li");
  projectList.classList.add("projectList");
  list.appendChild(projectList);
  const projectButton = document.createElement("BUTTON");
  projectButton.setAttribute(`id`, `None`);
  projectButton.classList.add("listButton");
  projectButton.textContent = "Project";
  projectList.appendChild(projectButton);
  const projects = document.createElement("ul");
  projects.classList.add("projects");
  list.appendChild(projects);
  let allProjects = makeProjectList();
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
  newProject.addEventListener("click", () => {
    displayModal(`newProject`, `project`, currentArray, idName);
  });
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
  if (idName == "None") {
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
      newDiv.style.backgroundColor = "LightCoral";
    }
    if (task.priority == "Medium") {
      newDiv.style.borderColor = "darkOrange";
      newDiv.style.backgroundColor = "PeachPuff";
    }
    if (task.priority == "Low") {
      newDiv.style.borderColor = "gold";
      newDiv.style.backgroundColor = "LemonChiffon";
    }
    taskBox.appendChild(newDiv);
    const taskCheck = document.createElement("INPUT");
    taskCheck.classList.add("checkbox");
    taskCheck.setAttribute("type", "checkbox");
    taskCheck.setAttribute(`id`, `completedTask${i}`);
    taskCheck.addEventListener("change", (event) => {
      if (event.currentTarget.checked) {
        task.checked = true;
        changeAllTasks();
      } else {
        task.checked = false;
        changeAllTasks();
      }
      removeElementsByClass("container");
      printAll(currentMenu);
    });
    newDiv.appendChild(taskCheck);
    const taskTitle = document.createElement("h2");
    taskTitle.classList.add(`task${i}Title`);
    if (task.checked) {
      const text = strikeThrough(`${task.title}`);
      taskTitle.textContent = text;
      taskCheck.checked = true;
    } else {
      taskTitle.textContent = `${task.title}`;
      taskCheck.checked = false;
    }
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
    editButtonBox.addEventListener("click", () => {
      const currentSpot = allTasks.findIndex(
        (task) => task.spot === currentArray[index].spot
      );
      displayModal(`edit${index}Button`, `edit`, currentArray, currentSpot);
    });
    newDiv.appendChild(editButtonBox);
    const editButtonImg = document.createElement("img");
    editButtonImg.src = Edit;
    editButtonImg.classList.add("editButton");
    editButtonBox.appendChild(editButtonImg);
    const deleteButtonBox = document.createElement("BUTTON");
    deleteButtonBox.classList.add("taskButton");

    deleteButtonBox.addEventListener("click", () => {
      const currentSpot = allTasks.findIndex(
        (task) => task.spot === currentArray[index].spot
      );
      allTasks.splice(currentSpot, 1);
      changeAllTasks();
      removeElementsByClass("container");
      printAll(currentMenu);
    });

    newDiv.appendChild(deleteButtonBox);
    const deleteButtonImg = document.createElement("img");
    deleteButtonImg.src = Delete;
    deleteButtonImg.classList.add("deleteButton");
    deleteButtonBox.appendChild(deleteButtonImg);
    i++;
  }
  if (idName !== "None") {
    const newTask = document.createElement("BUTTON");
    newTask.classList.add("addButton");
    newTask.setAttribute(`id`, `newTask`);
    newTask.textContent = "New Task";
    newTask.addEventListener("click", () => {
      const currentIdName = idName;
      displayModal(`newTask`, `task`, currentArray, currentIdName);
    });
    infoBox.appendChild(newTask);
    const addButton2 = document.createElement("img");
    addButton2.src = Add;
    addButton2.classList.add("addButton2");
    newTask.appendChild(addButton2);
  }
}

function changeProject(idName) {
  removeElementsByClass("container");
  printAll(idName);
}

function getToday() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd;
  return today;
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
  if (typeOfModal == `info`) {
    const modalTitleText = document.createElement("p");
    modalTitleText.classList.add("modal-title-text-info");
    modalTitleText.textContent = `${currentArray[index].title}`;
    modalSection.appendChild(modalTitleText);
    const underLine = document.createElement("div");
    underLine.classList.add("underLine-info");
    modalSection.appendChild(underLine);
    const modalProject = document.createElement("p");
    modalProject.classList.add("modal-project-info");
    modalProject.textContent = `Project:`;
    modalSection.appendChild(modalProject);
    const modalProjectText = document.createElement("p");
    modalProjectText.classList.add("modal-project-text-info");
    modalProjectText.textContent = `${currentArray[index].project}`;
    modalSection.appendChild(modalProjectText);
    const modalPriority = document.createElement("p");
    modalPriority.classList.add("modal-priority-info");
    modalPriority.textContent = `Priority:`;
    modalSection.appendChild(modalPriority);
    const modalPriorityText = document.createElement("p");
    modalPriorityText.classList.add("modal-priority-text-info");
    modalPriorityText.textContent = `${currentArray[index].priority}`;
    modalSection.appendChild(modalPriorityText);
    const modalDueDate = document.createElement("p");
    modalDueDate.classList.add("modal-due-date-info");
    modalDueDate.textContent = `Due Date:`;
    modalSection.appendChild(modalDueDate);
    const modalDueDateText = document.createElement("p");
    modalDueDateText.classList.add("modal-due-date-text-info");
    const dueDate = currentArray[index].dueDate;
    const result = addDays(new Date(dueDate), 1);
    const day = format(new Date(result), "do");
    const year = format(new Date(dueDate), "y");
    const month = format(new Date(dueDate), "MMM");
    modalDueDateText.textContent = `${month} ${day} ${year}`;
    modalSection.appendChild(modalDueDateText);
    const modalDescription = document.createElement("p");
    modalDescription.classList.add("modal-description-info");
    modalDescription.textContent = `Description:`;
    modalSection.appendChild(modalDescription);
    const modalDescriptionText = document.createElement("p");
    modalDescriptionText.classList.add("modal-description-text-info");
    modalDescriptionText.textContent = `${currentArray[index].description}`;
    modalSection.appendChild(modalDescriptionText);
  }
  if (typeOfModal == `project`) {
    const modalTitle = document.createElement("p");
    modalTitle.classList.add("modal-title-project");
    modalTitle.textContent = `Create a New Project`;
    modalSection.appendChild(modalTitle);
    const underLine = document.createElement("div");
    underLine.classList.add("underLine-project");
    modalSection.appendChild(underLine);
    const form = document.createElement("FORM");
    form.setAttribute("id", "newProjectForm");
    modalSection.appendChild(form);
    const modalProject = document.createElement("p");
    modalProject.classList.add("modal-project-project");
    modalProject.textContent = `New Project Name:`;
    form.appendChild(modalProject);
    const modalProjectInput = document.createElement("INPUT");
    modalProjectInput.setAttribute("type", "text");
    modalProjectInput.required = true;
    modalProjectInput.setAttribute("maxlength", "10");
    modalProjectInput.setAttribute("onkeypress", "return event.charCode != 32");
    modalProjectInput.classList.add("modal-project-input-project");
    form.appendChild(modalProjectInput);
    const ProjectInformation = document.createElement("p");
    ProjectInformation.classList.add("project-information-project");
    ProjectInformation.textContent = `Projects have to have atleast 1 task to be displayed`;
    form.appendChild(ProjectInformation);
    const modalTaskTitle = document.createElement("p");
    modalTaskTitle.classList.add("modal-task-title-project");
    modalTaskTitle.textContent = `Task Title:`;
    form.appendChild(modalTaskTitle);
    const modalTaskTitleInput = document.createElement("INPUT");
    modalTaskTitleInput.setAttribute("type", "text");
    modalTaskTitleInput.required = true;
    modalTaskTitleInput.classList.add("modal-title-input-project");
    modalTaskTitleInput.setAttribute("maxlength", "25");
    form.appendChild(modalTaskTitleInput);
    const modalTaskDueDate = document.createElement("p");
    modalTaskDueDate.classList.add("modal-due-date-project");
    modalTaskDueDate.textContent = `Task Due Date: `;
    form.appendChild(modalTaskDueDate);
    const modalTaskDueDateInput = document.createElement("INPUT");
    modalTaskDueDateInput.setAttribute("type", "date");
    const date = getToday();
    modalTaskDueDateInput.setAttribute("value", `${date}`);
    modalTaskDueDateInput.classList.add("modal-due-date-input-project");
    form.appendChild(modalTaskDueDateInput);
    const modalTaskPriority = document.createElement("p");
    modalTaskPriority.classList.add("modal-priority-project");
    modalTaskPriority.textContent = `Task Priority: `;
    form.appendChild(modalTaskPriority);
    const modalPriorityOptions = document.createElement("div");
    modalPriorityOptions.classList.add("modal-priority-options");
    form.appendChild(modalPriorityOptions);
    const lowPriorityDiv = document.createElement("div");
    lowPriorityDiv.classList.add("low-priority-div");
    modalPriorityOptions.appendChild(lowPriorityDiv);
    const lowPriorityInput = document.createElement("INPUT");
    lowPriorityInput.classList.add("low-priority-input");
    lowPriorityInput.setAttribute("type", "radio");
    lowPriorityInput.setAttribute("name", "priority-type-project");
    lowPriorityInput.setAttribute("id", "lowPriorityProject");
    lowPriorityInput.setAttribute("value", "Low");
    lowPriorityInput.setAttribute("checked", "checked");
    lowPriorityDiv.appendChild(lowPriorityInput);
    const lowPriorityLabel = document.createElement("LABEL");
    lowPriorityLabel.setAttribute("for", "lowPriority");
    lowPriorityDiv.appendChild(lowPriorityLabel);
    const lowPriorityNode = document.createTextNode("Low");
    lowPriorityLabel.setAttribute("for", "lowPriority");
    lowPriorityLabel.appendChild(lowPriorityNode);
    const mediumPriorityDiv = document.createElement("div");
    mediumPriorityDiv.classList.add("medium-priority-div");
    modalPriorityOptions.appendChild(mediumPriorityDiv);
    const mediumPriorityInput = document.createElement("INPUT");
    mediumPriorityInput.classList.add("medium-priority-input");
    mediumPriorityInput.setAttribute("type", "radio");
    mediumPriorityInput.setAttribute("name", "priority-type-project");
    mediumPriorityInput.setAttribute("id", "mediumPriorityProject");
    mediumPriorityInput.setAttribute("value", "Medium");
    mediumPriorityDiv.appendChild(mediumPriorityInput);
    const mediumPriorityLabel = document.createElement("LABEL");
    mediumPriorityLabel.setAttribute("for", "mediumPriority");
    mediumPriorityDiv.appendChild(mediumPriorityLabel);
    const mediumPriorityNode = document.createTextNode("Medium");
    mediumPriorityLabel.setAttribute("for", "mediumPriority");
    mediumPriorityLabel.appendChild(mediumPriorityNode);
    const highPriorityDiv = document.createElement("div");
    highPriorityDiv.classList.add("high-priority-div");
    modalPriorityOptions.appendChild(highPriorityDiv);
    const highPriorityInput = document.createElement("INPUT");
    highPriorityInput.classList.add("high-priority-input");
    highPriorityInput.setAttribute("type", "radio");
    highPriorityInput.setAttribute("name", "priority-type-project");
    highPriorityInput.setAttribute("id", "highPriorityProject");
    highPriorityInput.setAttribute("value", "High");
    highPriorityDiv.appendChild(highPriorityInput);
    const highPriorityLabel = document.createElement("LABEL");
    highPriorityLabel.setAttribute("for", "highPriority");
    highPriorityDiv.appendChild(highPriorityLabel);
    const highPriorityNode = document.createTextNode("High");
    highPriorityLabel.setAttribute("for", "highPriority");
    highPriorityLabel.appendChild(highPriorityNode);
    const modalTaskDescription = document.createElement("p");
    modalTaskDescription.classList.add("modal-task-description-project");
    modalTaskDescription.textContent = `Task Description:`;
    form.appendChild(modalTaskDescription);
    const modalTaskDescriptionInput = document.createElement("TEXTAREA");
    modalTaskDescriptionInput.setAttribute("type", "text");
    modalTaskDescriptionInput.required = true;
    modalTaskDescriptionInput.classList.add("modal-description-input-project");
    modalTaskDescriptionInput.setAttribute("maxlength", "81");
    form.appendChild(modalTaskDescriptionInput);
    const submitButton = document.createElement("BUTTON");
    submitButton.classList.add("submitButton");
    submitButton.setAttribute(`id`, `ProjectSubmitButton`);
    submitButton.setAttribute(`type`, `submit`);
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);
    newProject();
  }
  if (typeOfModal == `task`) {
    const modalTitle = document.createElement("p");
    modalTitle.classList.add("modal-title-project");
    modalTitle.textContent = `Create a New Task`;
    modalSection.appendChild(modalTitle);
    const underLine = document.createElement("div");
    underLine.classList.add("underLine-project");
    modalSection.appendChild(underLine);
    const form = document.createElement("FORM");
    form.setAttribute("id", "newTaskForm");
    modalSection.appendChild(form);
    const modalProject = document.createElement("p");
    modalProject.classList.add("modal-project-task");
    modalProject.textContent = `Project Name: `;
    form.appendChild(modalProject);
    const modalProjectInput = document.createElement("p");
    modalProjectInput.classList.add("modal-project-input-task");
    modalProjectInput.textContent = `${index}`;
    form.appendChild(modalProjectInput);
    const modalTaskTitle = document.createElement("p");
    modalTaskTitle.classList.add("modal-task-title-task");
    modalTaskTitle.textContent = `Task Title:`;
    form.appendChild(modalTaskTitle);
    const modalTaskTitleInput = document.createElement("INPUT");
    modalTaskTitleInput.setAttribute("type", "text");
    modalTaskTitleInput.classList.add("modal-title-input-task");
    modalTaskTitleInput.setAttribute("maxlength", "25");
    modalTaskTitleInput.required = true;
    form.appendChild(modalTaskTitleInput);
    const modalTaskDueDate = document.createElement("p");
    modalTaskDueDate.classList.add("modal-due-date-task");
    modalTaskDueDate.textContent = `Task Due Date: `;
    form.appendChild(modalTaskDueDate);
    const modalTaskDueDateInput = document.createElement("INPUT");
    modalTaskDueDateInput.setAttribute("type", "date");
    modalTaskDueDateInput.classList.add("modal-due-date-input-task");
    const date = getToday();
    modalTaskDueDateInput.setAttribute("value", `${date}`);
    form.appendChild(modalTaskDueDateInput);
    const modalTaskPriority = document.createElement("p");
    modalTaskPriority.classList.add("modal-priority-task");
    modalTaskPriority.textContent = `Task Priority: `;
    form.appendChild(modalTaskPriority);
    const modalPriorityOptions = document.createElement("div");
    modalPriorityOptions.classList.add("modal-priority-options-task");
    form.appendChild(modalPriorityOptions);
    const lowPriorityDiv = document.createElement("div");
    lowPriorityDiv.classList.add("low-priority-div");
    modalPriorityOptions.appendChild(lowPriorityDiv);
    const lowPriorityInput = document.createElement("INPUT");
    lowPriorityInput.classList.add("low-priority-input");
    lowPriorityInput.setAttribute("type", "radio");
    lowPriorityInput.setAttribute("name", "priority-type-task");
    lowPriorityInput.setAttribute("id", "lowPriorityTask");
    lowPriorityInput.setAttribute("value", "Low");
    lowPriorityInput.setAttribute("checked", "checked");
    lowPriorityDiv.appendChild(lowPriorityInput);
    const lowPriorityLabel = document.createElement("LABEL");
    lowPriorityLabel.setAttribute("for", "lowPriority");
    lowPriorityDiv.appendChild(lowPriorityLabel);
    const lowPriorityNode = document.createTextNode("Low");
    lowPriorityLabel.setAttribute("for", "lowPriority");
    lowPriorityLabel.appendChild(lowPriorityNode);
    const mediumPriorityDiv = document.createElement("div");
    mediumPriorityDiv.classList.add("medium-priority-div");
    modalPriorityOptions.appendChild(mediumPriorityDiv);
    const mediumPriorityInput = document.createElement("INPUT");
    mediumPriorityInput.classList.add("medium-priority-input");
    mediumPriorityInput.setAttribute("type", "radio");
    mediumPriorityInput.setAttribute("name", "priority-type-task");
    mediumPriorityInput.setAttribute("id", "mediumPriorityTask");
    mediumPriorityInput.setAttribute("value", "Medium");
    mediumPriorityDiv.appendChild(mediumPriorityInput);
    const mediumPriorityLabel = document.createElement("LABEL");
    mediumPriorityLabel.setAttribute("for", "mediumPriority");
    mediumPriorityDiv.appendChild(mediumPriorityLabel);
    const mediumPriorityNode = document.createTextNode("Medium");
    mediumPriorityLabel.setAttribute("for", "mediumPriority");
    mediumPriorityLabel.appendChild(mediumPriorityNode);
    const highPriorityDiv = document.createElement("div");
    highPriorityDiv.classList.add("high-priority-div");
    modalPriorityOptions.appendChild(highPriorityDiv);
    const highPriorityInput = document.createElement("INPUT");
    highPriorityInput.classList.add("high-priority-input");
    highPriorityInput.setAttribute("type", "radio");
    highPriorityInput.setAttribute("name", "priority-type-task");
    highPriorityInput.setAttribute("id", "highPriorityTask");
    highPriorityInput.setAttribute("value", "High");
    highPriorityDiv.appendChild(highPriorityInput);
    const highPriorityLabel = document.createElement("LABEL");
    highPriorityLabel.setAttribute("for", "highPriority");
    highPriorityDiv.appendChild(highPriorityLabel);
    const highPriorityNode = document.createTextNode("High");
    highPriorityLabel.setAttribute("for", "highPriority");
    highPriorityLabel.appendChild(highPriorityNode);
    const modalTaskDescription = document.createElement("p");
    modalTaskDescription.classList.add("modal-description-task");
    modalTaskDescription.textContent = `Task Description:`;
    form.appendChild(modalTaskDescription);
    const modalTaskDescriptionInput = document.createElement("TEXTAREA");
    modalTaskDescriptionInput.setAttribute("type", "text");
    modalTaskDescriptionInput.classList.add("modal-description-input-task");
    modalTaskDescriptionInput.setAttribute("maxlength", "81");
    modalTaskDescriptionInput.required = true;
    form.appendChild(modalTaskDescriptionInput);
    const submitButton = document.createElement("BUTTON");
    submitButton.classList.add("submitButtonTask");
    submitButton.setAttribute(`id`, `submitButtonTask`);
    submitButton.setAttribute(`type`, `submit`);
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);
    newTask(`${index}`);
  }
  if (typeOfModal == `edit`) {
    const modalTitle = document.createElement("p");
    modalTitle.classList.add("modal-title-project");
    modalTitle.textContent = `Edit Task`;
    modalSection.appendChild(modalTitle);
    const underLine = document.createElement("div");
    underLine.classList.add("underLine-project");
    modalSection.appendChild(underLine);
    const form = document.createElement("FORM");
    form.setAttribute("id", "editForm");
    modalSection.appendChild(form);
    const modalProject = document.createElement("p");
    modalProject.classList.add("modal-project-edit");
    modalProject.textContent = `Project Name: `;
    form.appendChild(modalProject);
    const modalProjectInput = document.createElement("p");
    modalProjectInput.classList.add("modal-project-input-edit");
    modalProjectInput.textContent = `${allTasks[index].project}`;
    form.appendChild(modalProjectInput);
    const modalTaskTitle = document.createElement("p");
    modalTaskTitle.classList.add("modal-task-title-edit");
    modalTaskTitle.textContent = `Task Title:`;
    form.appendChild(modalTaskTitle);
    const modalTaskTitleInput = document.createElement("INPUT");
    modalTaskTitleInput.setAttribute("type", "text");
    modalTaskTitleInput.setAttribute("value", `${allTasks[index].title}`);
    modalTaskTitleInput.classList.add("modal-title-input-edit");
    modalTaskTitleInput.setAttribute("maxlength", "25");
    form.appendChild(modalTaskTitleInput);
    const modalTaskDueDate = document.createElement("p");
    modalTaskDueDate.classList.add("modal-due-date-edit");
    modalTaskDueDate.textContent = `Task Due Date: `;
    form.appendChild(modalTaskDueDate);
    const modalTaskDueDateInput = document.createElement("INPUT");
    modalTaskDueDateInput.setAttribute("type", "date");
    modalTaskDueDateInput.setAttribute("value", `${allTasks[index].dueDate}`);
    modalTaskDueDateInput.classList.add("modal-due-date-input-edit");
    form.appendChild(modalTaskDueDateInput);
    const modalTaskPriority = document.createElement("p");
    modalTaskPriority.classList.add("modal-priority-edit");
    modalTaskPriority.textContent = `Task Priority: `;
    form.appendChild(modalTaskPriority);
    const modalPriorityOptions = document.createElement("div");
    modalPriorityOptions.classList.add("modal-priority-options-edit");
    form.appendChild(modalPriorityOptions);
    const lowPriorityDiv = document.createElement("div");
    lowPriorityDiv.classList.add("low-priority-div");
    modalPriorityOptions.appendChild(lowPriorityDiv);
    const lowPriorityInput = document.createElement("INPUT");
    lowPriorityInput.classList.add("low-priority-input");
    lowPriorityInput.setAttribute("type", "radio");
    lowPriorityInput.setAttribute("name", "priority-type-edit");
    lowPriorityInput.setAttribute("id", "lowPriorityEdit");
    lowPriorityInput.setAttribute("value", "Low");
    if (allTasks[index].priority == "Low") {
      lowPriorityInput.setAttribute("checked", "checked");
    }
    lowPriorityDiv.appendChild(lowPriorityInput);
    const lowPriorityLabel = document.createElement("LABEL");
    lowPriorityLabel.setAttribute("for", "lowPriority");
    lowPriorityDiv.appendChild(lowPriorityLabel);
    const lowPriorityNode = document.createTextNode("Low");
    lowPriorityLabel.setAttribute("for", "lowPriority");
    lowPriorityLabel.appendChild(lowPriorityNode);
    const mediumPriorityDiv = document.createElement("div");
    mediumPriorityDiv.classList.add("medium-priority-div");
    modalPriorityOptions.appendChild(mediumPriorityDiv);
    const mediumPriorityInput = document.createElement("INPUT");
    mediumPriorityInput.classList.add("medium-priority-input");
    mediumPriorityInput.setAttribute("type", "radio");
    mediumPriorityInput.setAttribute("name", "priority-type-edit");
    mediumPriorityInput.setAttribute("id", "mediumPriorityEdit");
    mediumPriorityInput.setAttribute("value", "Medium");
    if (allTasks[index].priority == "Medium") {
      mediumPriorityInput.setAttribute("checked", "checked");
    }
    mediumPriorityDiv.appendChild(mediumPriorityInput);
    const mediumPriorityLabel = document.createElement("LABEL");
    mediumPriorityLabel.setAttribute("for", "mediumPriority");
    mediumPriorityDiv.appendChild(mediumPriorityLabel);
    const mediumPriorityNode = document.createTextNode("Medium");
    mediumPriorityLabel.setAttribute("for", "mediumPriority");
    mediumPriorityLabel.appendChild(mediumPriorityNode);
    const highPriorityDiv = document.createElement("div");
    highPriorityDiv.classList.add("high-priority-div");
    modalPriorityOptions.appendChild(highPriorityDiv);
    const highPriorityInput = document.createElement("INPUT");
    highPriorityInput.classList.add("high-priority-input");
    highPriorityInput.setAttribute("type", "radio");
    highPriorityInput.setAttribute("name", "priority-type-edit");
    highPriorityInput.setAttribute("id", "highPriorityEdit");
    highPriorityInput.setAttribute("value", "High");
    if (allTasks[index].priority == "High") {
      highPriorityInput.setAttribute("checked", "checked");
    }
    highPriorityDiv.appendChild(highPriorityInput);
    const highPriorityLabel = document.createElement("LABEL");
    highPriorityLabel.setAttribute("for", "highPriority");
    highPriorityDiv.appendChild(highPriorityLabel);
    const highPriorityNode = document.createTextNode("High");
    highPriorityLabel.setAttribute("for", "highPriority");
    highPriorityLabel.appendChild(highPriorityNode);
    const modalTaskDescription = document.createElement("p");
    modalTaskDescription.classList.add("modal-description-edit");
    modalTaskDescription.textContent = `Task Description:`;
    form.appendChild(modalTaskDescription);
    const modalTaskDescriptionInput = document.createElement("TEXTAREA");
    modalTaskDescriptionInput.setAttribute("type", "text");
    modalTaskDescriptionInput.setAttribute("id", "edit-task-description");
    modalTaskDescriptionInput.classList.add("modal-description-input-edit");
    modalTaskDescriptionInput.setAttribute("maxlength", "81");
    modalTaskDescriptionInput.value = `${allTasks[index].description}`;
    form.appendChild(modalTaskDescriptionInput);
    const submitButton = document.createElement("BUTTON");
    submitButton.classList.add("submitButtonEdit");
    submitButton.setAttribute(`id`, `submitButtonEdit`);
    submitButton.setAttribute(`type`, `submit`);
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);
    editTask(index, currentArray);
  }

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

export { printAll };
