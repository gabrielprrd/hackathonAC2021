const ul = document.getElementById("myUL");

window.onload = function () {
  renderTasks();
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

  Array.from(tasks).forEach(element => renderTask(element));
}

function renderTask(taskValue) {

  // creates list item and append the task value
  const li = document.createElement("li");
  const text = document.createTextNode(taskValue);
  li.appendChild(text);
  ul.appendChild(li);
  
  // sets input value to every list item
  // p.innerHTML = `<p class="task">${taskValue}</p>`;
  // appendRemoveButton(p);
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}