const inputTaskContainer = document.getElementById("input-task-container");
const addTaskButton = document.getElementById("add-task-button");
const addTaskInput = document.getElementById("add-task-input");
const form = document.getElementById("task-form");
const taskslistContainer = document.getElementById("tasks-list-container");
const pageContainer = document.getElementById("page-container")
const tasks = [];

function createTask(e) {
    e.preventDefault();
    const taskValue = addTaskInput.value;

    console.log(taskValue);

    // creates a new input field while user doesn't submit
    renderTask(taskValue);
    //clear input field
    addTaskInput.value="";
}

function renderTask(taskValue) {

    // create paragraph
    const p = document.createElement("p")
    
    // sets input value to paragraph
    p.innerHTML = `<p class="task">${taskValue}</p>`

    // create task-container and add
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    // append paragraph to 
    taskContainer.appendChild(p);

    // append task container to task list container
    taskslistContainer.appendChild(taskContainer);
    
    //store input value somewhere else
    tasks.push(taskValue);

    setLocalStorage(tasks);
}

// make sure application has persistence on browser
function setLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// get persisted information from localStorage
function getLocalStorage() {

    const store = JSON.parse(localStorage.getItem("tasks"));
    // turn object into array to use foreach function and display tasks
    Array.from(store).forEach(elem => renderTask(elem));
}

// event listeners
addTaskButton.addEventListener("click", createTask);

window.onload = function() {
    getLocalStorage();
}