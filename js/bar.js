const myul = document.getElementById("myUL");

function displayCongratulations() {
  myul.innerHTML = `<div id="congrats-container"><img id="congrats-image" src="../resources/images/congratulations.svg" width="400px" height="400px"><p>Congratulations! All tasks are done!</p></div>`
}
var taskscountintial = JSON.parse(localStorage.getItem('tasks')).length;
var taskscount = JSON.parse(localStorage.getItem('tasks')).length;
var timeStarting = new Date();
var progress=100;
console.log(timeStarting)
function move() {
  var tasksdone =false;
  if (taskscount>0) {
    var elem = document.getElementById("myBar");
    var width = 10;
    var timeThatHavePassedInSeconds=timeStarting.getHours()*60*60+timeStarting.getSeconds()+timeStarting.getMinutes()*60;
    var secondInOneDay = timeThatHavePassedInSeconds+35;
    //var secondInOneDay = 24*60*60;

    var id = setInterval(frame, ((secondInOneDay-timeThatHavePassedInSeconds)/(taskscountintial))*1000);
    function frame() {
      console.log(taskscountintial)
      if (Math.floor(width) <= 0) {
        clearInterval(id);
        progress=progress - 100/taskscountintial 
        width=1;
        elem.style.width = width + "%";
        now = new Date();
        myul.innerHTML="<h1>u lose</h1>";
      }
      else if(tasksdone){
        taskscount--;
        width+=100/taskscountintial;
        elem.style.width = width + "%";
        tasksdone=false;
      }
      else{
        var now = new Date();
        progress=progress - 100/taskscountintial 
        width=progress;
        elem.style.width = width + "%";
        now = new Date();
        if (Math.floor(width) <= 0) {
          clearInterval(id);
          progress=progress - 100/taskscountintial 
          width=1;
          elem.style.width = width + "%";
          now = new Date();
          myul.innerHTML="<h1>u lose</h1>";
        }
        id;
      }
    }
  }
  else{
    clearInterval(id);

    myul.innerHTML="<h1>Congratulations</h1>";;
  }
}
move();
       