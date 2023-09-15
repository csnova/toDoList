import "./style.css";
import { compareAsc, format } from "date-fns";
import {
  addTaskToArray,
  task,
  allTasks,
  removeElementsByClass,
  printAll,
} from "./print.js";

addTaskToArray("none", "Shopping", "Need Milk and Eggs", "Low", "12/12/12");
addTaskToArray("none", "Gym", "Go Lift!", "High", "11/11/11");
addTaskToArray("none", "Clean House", "Do Laundry and Dishes", "Medium", "10/10/10");
addTaskToArray("none", "Car Wash", "Go to that Brown Bear", "Low", "09/09/09");
console.table(allTasks);

printAll();
