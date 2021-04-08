const inputTaskContainer = document.getElementById("input-task-container");
const addTaskButton = document.getElementById("add-task-button");
const addTaskInput = document.getElementById("add-task-input");
const form = document.getElementById("task-form");
const taskslistContainer = document.getElementById("tasks-list-container");
const pageContainer = document.getElementById("page-container")
const welcomeH1 = document.getElementById("welcome-h1");
const submitButton = $("#submit-button");
let tasks = [];

// updates and display Welcome Message
function displayWelcomeMessage() {
    
    welcomeH1.innerHTML = `<h1 class="welcome-h1">Bem vindo ${getLocalStorageUsername()}</h1>`
}

// gets input value and saves it task to an array 
function createTask(e) {
    e.preventDefault();
    const taskValue = addTaskInput.value;

    //store input value on an array and then in localStorage
    tasks.push(taskValue);
    setLocalStorage(tasks);

    // creates a new input field while user doesn't submit
    renderTask(taskValue);
    
    //clear input field
    addTaskInput.value="";
}

function renderTask(taskValue) {

    // create task-container and add
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    // sets input value to paragraph
    taskContainer.innerHTML = `<p class="task">${taskValue}</p>`
    appendRemoveButton(taskContainer);    

    // append task container to task list container
    taskslistContainer.appendChild(taskContainer);
}

function refreshTasks() {

    taskslistContainer.innerHTML = '<div id="tasks-list-container"><div>';
    location.reload();
}

// user can remove task before submitting tasks list
function removeTask(e) {

    const elementValue = e.target.parentNode.getElementsByTagName("p")[0].innerHTML;
    console.log(elementValue);
    
    const tasksArray = Array.from(getLocalStorageTasks());

    tasksArray.forEach(task => {
        if (task == elementValue) {
            const filteredArray = tasksArray.filter(item => item != elementValue);
            
            setLocalStorage(filteredArray);
            refreshTasks();
        }
    })
}

// make sure application has persistence on browser
function setLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// get persisted information from localStorage
function getLocalStorageTasks() {

    const store = JSON.parse(localStorage.getItem("tasks"));

    // turn object into array to use foreach function and display tasks
    if (store !== null) {
        Array.from(store).forEach(elem => renderTask(elem));
    }

    return store;
}

// get persisted information from localStorage
function getLocalStorageUsername() {

    const username = JSON.parse(localStorage.getItem("username"));
    // turn object into array to use foreach function and display tasks

    return username;
}

// append a remove button on each task before user decide to submit
function appendRemoveButton(element) {
    
    const button = document.createElement("button");
    button.classList.add("remove-button");
    const buttonText = document.createTextNode("cancel");
    button.appendChild(buttonText);
    
    button.addEventListener("click", (e) => removeTask(e));

    element.appendChild(button);
}

function handleSubmit(e) {
    e.preventDefault();

    window.location.replace("http://localhost:5500/views/claudia.html");
}

// event listeners
addTaskButton.addEventListener("click", createTask);
submitButton.click(handleSubmit);

window.onload = function() {
    
    if(getLocalStorageUsername() != undefined || getLocalStorageUsername() != null) {

        tasks = getLocalStorageTasks();
        displayWelcomeMessage();
    } else {
        window.location.replace("http://localhost:5500/views/login.html");
    }

}