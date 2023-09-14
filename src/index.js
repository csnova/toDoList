import "./style.css";
import { compareAsc, format } from "date-fns";
import {
  addTaskToArray,
  printMe,
  task,
  allTasks,
  removeElementsByClass,
} from "./print.js";

printMe();

addTaskToArray("none", "Shopping", "Need Milk and Eggs", "Low", "12/12/12");
addTaskToArray("none", "Shopping", "Need Milk and Eggs", "Low", "12/12/12");
addTaskToArray("none", "Shopping", "Need Milk and Eggs", "Low", "12/12/12");
addTaskToArray("none", "Shopping", "Need Milk and Eggs", "Low", "12/12/12");
console.table(allTasks);
