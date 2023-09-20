import {
  changeAllTasks,
  changeLookUp,
  allTasks,
  currentLookUp,
} from "./starUp";
import { printAll } from "./print";

let allProjects = [];

class task {
  constructor(project, title, description, priority, dueDate, checked) {
    this.project = project;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.checked = checked;
    this.spot = currentLookUp;
    changeLookUp();
  }
  taskInfo() {
    let info = `Project: ${project} Title: ${title} Description: ${description} Priority: ${priority} Due Date: ${dueDate} Finished: ${checked}`;
    return info;
  }
}

function addTaskToArray(
  project,
  title,
  description,
  priority,
  dueDate,
  checked
) {
  const newTask = new task(
    project,
    title,
    description,
    priority,
    dueDate,
    checked
  );
  allTasks.push(newTask);
  changeAllTasks();
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
  return allProjects;
}

function newProject() {
  // These use the field Ids to select the correct Input
  const projectField = document.querySelector(".modal-project-input-project");
  const titleField = document.querySelector(".modal-title-input-project");
  const detailField = document.querySelector(
    ".modal-description-input-project"
  );
  const dueDateField = document.querySelector(".modal-due-date-input-project");
  // Adds an event listener to submit button
  const formField = document.querySelector("#newProjectForm");
  formField.addEventListener("submit", (e) => {
    // This goes through each radio button to save the name of the one that is selected
    let selectedPriority;
    if (document.getElementById("lowPriorityProject").checked) {
      selectedPriority = "Low";
    }
    if (document.getElementById("mediumPriorityProject").checked) {
      selectedPriority = "Medium";
    }
    if (document.getElementById("highPriorityProject").checked) {
      selectedPriority = "High";
    }
    e.preventDefault();
    addTaskToArray(
      projectField.value,
      titleField.value,
      detailField.value,
      selectedPriority,
      dueDateField.value,
      false
    );
    // Clears page and reloads with new task in array
    removeElementsByClass("modal-content");
    removeElementsByClass("container");
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
    printAll(`${projectField.value}`);
  });
}

function newTask(project) {
  // These use the field Ids to select the correct Input
  const projectField = project;
  const titleField = document.querySelector(".modal-title-input-task");
  const detailField = document.querySelector(".modal-description-input-task");
  const dueDateField = document.querySelector(".modal-due-date-input-task");
  // Adds an event listener to submit button
  const formField = document.querySelector("#newTaskForm");
  formField.addEventListener("submit", (e) => {
    // This goes through each radio button to save the name of the one that is selected
    let selectedPriority;
    if (document.getElementById("lowPriorityTask").checked) {
      selectedPriority = "Low";
    }
    if (document.getElementById("mediumPriorityTask").checked) {
      selectedPriority = "Medium";
    }
    if (document.getElementById("highPriorityTask").checked) {
      selectedPriority = "High";
    }
    e.preventDefault();
    addTaskToArray(
      projectField,
      titleField.value,
      detailField.value,
      selectedPriority,
      dueDateField.value,
      false
    );
    // Clears page and reloads with new task in array
    removeElementsByClass("modal-content");
    removeElementsByClass("container");
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
    printAll(`${projectField}`);
  });
}

function editTask(index, currentArray) {
  // These use the field Ids to select the correct Input
  const titleField = document.querySelector(".modal-title-input-edit");
  const detailField = document.querySelector(".modal-description-input-edit");
  const dueDateField = document.querySelector(".modal-due-date-input-edit");
  // Adds an event listener to submit button
  const formField = document.querySelector("#editForm");
  formField.addEventListener("submit", (e) => {
    // This goes through each radio button to save the name of the one that is selected
    let selectedPriority;
    if (document.getElementById("lowPriorityEdit").checked) {
      selectedPriority = "Low";
    }
    if (document.getElementById("mediumPriorityEdit").checked) {
      selectedPriority = "Medium";
    }
    if (document.getElementById("highPriorityEdit").checked) {
      selectedPriority = "High";
    }
    e.preventDefault();
    allTasks[index].title = titleField.value;
    allTasks[index].description = detailField.value;
    allTasks[index].priority = selectedPriority;
    allTasks[index].dueDate = dueDateField.value;
    changeAllTasks();
    // Clears page and reloads with new task in array
    removeElementsByClass("modal-content");
    removeElementsByClass("container");
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
    if (currentArray == allTasks) {
      printAll(`None`);
    } else {
      printAll(`${allTasks[index].project}`);
    }
  });
}

function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

export {
  makeProjectList,
  newProject,
  newTask,
  editTask,
  removeElementsByClass,
};
