let allTasks = [];
let currentLookUp;

function checkStorage() {
  if (!localStorage.getItem("lookUp")) {
    setLookUp();
    setAllTasks();
  } else {
    getLookUp();
    getAllTasks();
  }
}

function setLookUp() {
  localStorage.setItem("lookUp", "1");
  getLookUp();
}

function setAllTasks() {
  allTasks = [];
  localStorage.setItem("allTasks", JSON.stringify(allTasks));
  getAllTasks;
}

function changeLookUp() {
  currentLookUp++;
  localStorage.setItem("lookUp", `${currentLookUp}`);
  getLookUp();
}

function changeAllTasks() {
  localStorage.setItem("allTasks", JSON.stringify(allTasks));
  getAllTasks();
}

function getLookUp() {
  currentLookUp = localStorage.getItem("lookUp");
}

function getAllTasks() {
  allTasks = JSON.parse(localStorage.getItem("allTasks"));
}

export { checkStorage, changeAllTasks, changeLookUp, allTasks, currentLookUp };
