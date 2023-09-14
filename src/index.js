import "./style.css";
import { addTaskToArray, printMe, task, allTasks } from "./print.js";
import { compareAsc, format } from "date-fns";

printMe();

addTaskToArray("none", "Shopping", "Need Milk and Eggs", "Low", "12/12/12");
console.table(allTasks);
