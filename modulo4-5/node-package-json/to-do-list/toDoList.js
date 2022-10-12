import { list } from "./myList.js";
//To be able to use the import method:  put   "type": "module", in the json, and put the extension .js

const task = process.argv[2]

if(!task) {
    console.log("Please provide a task name!");
} else {
    console.log("Task added successfully!");
    console.table([...list, task]);
}
