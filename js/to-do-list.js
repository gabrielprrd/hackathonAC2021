import { getLocalStorageTasks, getLocalStorageUsername } from './storage.js';

import appendRemoveButton from './appendRemoveButton.js';

import { getDomElements } from './dom.js';
const { myul } = getDomElements();

window.onload = function () {
  if (
    getLocalStorageUsername() != undefined ||
    getLocalStorageUsername() != null
  ) {
    displayWelcomeMessage();
    renderTasks();
  } else {
    window.location.replace('http://localhost:5500/views/login.html');
  }
};

function renderTasks() {
  const tasks = getLocalStorageTasks();

  if (tasks != null) {
    Array.from(tasks).forEach((element) => renderTask(element));
  }
}

function renderTask(taskValue) {
  // creates list item and append the task value
  const li = document.createElement('li');
  const text = document.createTextNode(taskValue);
  const p = document.createElement('p');
  p.appendChild(text);
  li.appendChild(p);
  myul.appendChild(li);

  // sets input value to every list item
  appendRemoveButton(li, myul);
}

// updates and display Welcome Message
function displayWelcomeMessage() {
  const username = getLocalStorageUsername();
  welcomeH1.innerHTML = `<h1 class="welcome-h1">Hey, ${username}! Here's your todo list for today.</h1>
  <h3>The goal is to prevent the rainbow bar to get empty by completing you daily tasks.</h3>
  <h3>No one can stop you!</h3>`;
}

function displayCongratulations() {
  myul.innerHTML = `<div id="congrats-container"><img id="congrats-image" src="../resources/images/congratulations.svg" width="400px" height="400px"><p>Congratulations! All tasks are done!</p></div>`;
}
