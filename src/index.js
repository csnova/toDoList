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
  "2018-07-22",
  false
);
addTaskToArray("Exercise", "Gym", "Go Lift!", "High", "2018-07-22", false);
addTaskToArray(
  "Chores",
  "Clean House",
  "Do Laundry and Dishes",
  "Medium",
  "2018-07-22",
  true
);
addTaskToArray(
  "Errands",
  "Car Wash",
  "Go to that Brown Bear",
  "Low",
  "2018-07-22",
  false
);

printAll("None");
