import "./style.css";
import { compareAsc, format } from "date-fns";
import {
  addTaskToArray,
  task,
  allTasks,
  removeElementsByClass,
  printAll,
  makeProjectList,
} from "./print.js";

addTaskToArray("Errands", "Shopping", "Need Milk and Eggs", "Low", "12/12/12");
addTaskToArray("Exercise", "Gym", "Go Lift!", "High", "11/11/11");
addTaskToArray(
  "Chores",
  "Clean House",
  "Do Laundry and Dishes",
  "Medium",
  "10/10/10"
);
addTaskToArray(
  "Errands",
  "Car Wash",
  "Go to that Brown Bear",
  "Low",
  "09/09/09"
);

printAll("allButton");

