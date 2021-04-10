import {
  getLocalStorageUsername,
  setLocalStorageTasks,
  getLocalStorageTasks,
} from './storage.js';

import { getDomElements } from './dom.js';

import appendRemoveButton from './appendRemoveButton.js';
const domElements = getDomElements();

const {
  inputTaskContainer,
  addTaskButton,
  addTaskInput,
  taskForm,
  taskslistContainer,
  welcomeH1,
  submitButton,
  tilesWrapper,
} = domElements;

let tasks = [];

window.onload = function () {
  // setLocalStorageTasks(tasks);
  addTaskButton.addEventListener('click', createTask);

  if (
    getLocalStorageUsername() != undefined ||
    getLocalStorageUsername() != null
  ) {
    tasks = getLocalStorageTasks();
    // turn object into array to use foreach function and display tasks
    if (tasks !== null) {
      Array.from(tasks).forEach((elem) => renderTask(elem, tilesWrapper));
      taskslistContainer.appendChild(tilesWrapper);
    }
    displayWelcomeMessage();
  } else {
    window.location.replace('http://localhost:5500/views/login.html');
  }
};

// updates and display Welcome Message
function displayWelcomeMessage() {
  welcomeH1.innerHTML = `<h1 class="welcome-h1">Welcome, ${getLocalStorageUsername()}</h1>`;
}

// gets input value and saves it task to an array
function createTask(e) {
  e.preventDefault();
  const taskValue = addTaskInput.value;
  var validRegex = /^[a-zA-Z0-9\s]+$/;
  if (!taskValue.match(validRegex)) {
    alert('Insert only letters or numbers in the task name...');
    return;
  }
  //store input value on an array and then in localStorage
  tasks.push(taskValue);
  setLocalStorageTasks(tasks);

  // creates a new input field while user doesn't submit
  renderTask(taskValue);
  taskslistContainer.appendChild(tilesWrapper);

  //clear input field
  addTaskInput.value = '';
}

function renderTask(taskValue) {
  // create task-container and add a ul with li

  const li = document.createElement('li');
  const text = document.createTextNode(taskValue);
  const p = document.createElement('p');
  p.appendChild(text);
  li.appendChild(p);
  tilesWrapper.appendChild(li);

  appendRemoveButton(li, taskslistContainer);

  // append task container to task list container
  taskslistContainer.appendChild(tilesWrapper);
}

function handleSubmit(e) {
  e.preventDefault();

  window.location.replace('http://localhost:5500/views/todolist.html');
}

submitButton.addEventListener('click', (e) => handleSubmit(e));
