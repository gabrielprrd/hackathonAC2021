const inputTaskContainer = document.getElementById("input-task-container");
const addTaskButton = document.getElementById("add-task-button");
const addTaskInput = document.getElementById("add-task-input");
const form = document.getElementById("task-form");
const taskslistContainer = document.getElementById("tasks-list-container");
const pageContainer = document.getElementById("page-container")
const tasks = [];

// gets input value and saves it task to an array 
function createTask(e) {
    e.preventDefault();
    const taskValue = addTaskInput.value;
    var validRegex = /^[a-zA-Z0-9]+$/
    if(!taskValue.match(validRegex)){
        alert("Insert a only letters or numbers in the task name...")
        return;
    }
    //store input value on an array and then in localStorage
    tasks.push(taskValue);
    setLocalStorage(tasks);

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
    appendRemoveButton(p);

    // create task-container and add
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    // append paragraph to task-container
    taskContainer.appendChild(p);

    // append task container to task list container
    taskslistContainer.appendChild(taskContainer);
}

// user can remove task before submitting tasks list
function removeTask() {

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

// append a remove button on each task before user decide to submit
function appendRemoveButton(element) {
    
    const button = document.createElement("button");
    button.classList.add("remove-button");
    const buttonText = document.createTextNode("cancel");
    button.appendChild(buttonText);
    button.addEventListener("click", removeTask);

    element.appendChild(button);
}

// event listeners
addTaskButton.addEventListener("click", createTask);

window.onload = function() {
    getLocalStorage();
}