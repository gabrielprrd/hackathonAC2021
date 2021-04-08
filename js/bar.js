var i = 0;
var taskscountintial = localStorage.getItem('tasks').length;
var taskscount = localStorage.getItem('tasks').length;
var timeStarting = new Date();
var progress=100;
console.log(timeStarting)
function move() {
  var tasksdone =false;
  if (taskscount>0) {
    var elem = document.getElementById("myBar");
    var width = 10;
    var timeThatHavePassedInSeconds=timeStarting.getHours()*60*60+timeStarting.getSeconds()+timeStarting.getMinutes()*60;
    var secondInOneDay = 24*60*60;

    console.log('seconds in one day'+secondInOneDay);
    console.log('time '+timeThatHavePassedInSeconds);
    console.log('minutes needed'+(secondInOneDay-timeThatHavePassedInSeconds)/(taskscountintial)/60);
    console.log('tasks'+taskscountintial);
    var id = setInterval(frame, ((secondInOneDay-timeThatHavePassedInSeconds)/(taskscountintial))*1000);
    function frame() {
      console.log(taskscountintial)
      if (width <= 0) {
        clearInterval(id);
      }
      else if(tasksdone){
        taskscount--;
        width+=taskscountintial/100;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
        tasksdone=false;
      }
      else{
        var now = new Date();
        progress=progress - 100/taskscountintial 
        width=progress;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%"; 
        now = new Date();
      }
      move();
    }
  }
  else{
    clearInterval(id);
    console.log('congratulations');
  }
}
move();
       