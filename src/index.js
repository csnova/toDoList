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

addTaskToArray(
  "Errands",
  "Shopping",
  "Need Milk and Eggs",
  "Low",
  "1991-07-09",
  false
);
addTaskToArray("Exercise", "Gym", "Go Lift!", "High", "1991-07-09", false);
addTaskToArray(
  "Chores",
  "Clean House",
  "Do Laundry and Dishes",
  "Medium",
  "1991-07-09",
  true
);
addTaskToArray(
  "Errands",
  "Car Wash",
  "Go to that Brown Bear",
  "Low",
  "1991-07-09",
  false
);

printAll("None");
