import "./style.css";
import { printMe, task } from "./print.js";
import { compareAsc, format } from "date-fns";

// Global Variables
const allTasks = [];

printMe();
console.table(allTasks);
