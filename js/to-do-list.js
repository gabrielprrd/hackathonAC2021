const ul = document.getElementById("myUL");

window.onload = function () {

  if(getLocalStorageUsername() != undefined || getLocalStorageUsername() != null) {
    displayWelcomeMessage();
    renderTasks();
  } else {
    window.location.replace("http://localhost:5500/views/login.html");
  }
}

// get persisted information from localStorage
function getLocalStorageTasks() {

  const store = JSON.parse(localStorage.getItem("tasks"));
  // turn object into array to use foreach function and display tasks
  Array.from(store).forEach(elem => renderTask(elem));

  return store;
}

function renderTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks"));

  if (tasks != null) {
    Array.from(tasks).forEach(element => renderTask(element));
  } 
}

function renderTask(taskValue) {

  // creates list item and append the task value
  const li = document.createElement("li");
  const text = document.createTextNode(taskValue);
  const p = document.createElement("p");
  p.appendChild(text);
  li.appendChild(p);
  ul.appendChild(li);
  
  // sets input value to every list item
  appendRemoveButton(li);
}

/*// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Put item in done tasks list when clicked
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    //Put in her the condition to put done item in 2nd list
    didTask(ev);
  }
}, false);*/

// make sure application has persistence on browser
function setLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function completeTask(ev) {
  var doneTask = ev.target;

  // sets to localStorage
  //localStorage.setItem("done-tasks", JSON.stringify(doneTasks))

  //document.getElementById("myDoneTasks").appendChild(doneTask);
}

// updates and display Welcome Message
function displayWelcomeMessage() {
  
  const username = getLocalStorageUsername()
  welcomeH1.innerHTML = `<h1 class="welcome-h1">Hey, ${username}! Here's your todo list for today.</h1>
  <h3>The goal is to prevent the rainbow bar to get empty by completing you daily tasks.</h3>
  <h3>No one can stop you!</h3>`
}

function displayCongratulations() {
  ul.innerHTML = `<div id="congrats-container"><img id="congrats-image" src="../resources/images/congratulations.svg" width="400px" height="400px"><p>Congratulations! All tasks are done!</p></div>`
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
  const buttonText = document.createTextNode("done");
  button.appendChild(buttonText);
  
  button.addEventListener("click", (e) => removeTask(e));

  element.appendChild(button);
}

// user can remove task before submitting tasks list
function removeTask(e) {

  const elementValue = e.target.parentNode.getElementsByTagName("p")[0].innerHTML;
  
  const tasksArray = Array.from(getLocalStorageTasks());

  tasksArray.forEach(task => {
      if (task == elementValue) {
          const filteredArray = tasksArray.filter(item => item != elementValue);
          
          setLocalStorage(filteredArray);

          // we need to fetch done tasks from local storage
          // then copy the elements + add the completed one
          // set new array to localStorage complete tasks
          //setCompleteTasksLocalStorage()
          refreshTasks();
      }
  })
}

function refreshTasks() {

  ul.innerHTML = '<ul id="myUL">';
  location.reload();
}