export function getDomElements() {
  const myul = document.getElementById('myUL');
  const loginButton = document.getElementById('login-button');
  const input = document.getElementById('input-login');
  const inputTaskContainer = document.getElementById('input-task-container');
  const addTaskButton = document.getElementById('add-task-button');
  const addTaskInput = document.getElementById('add-task-input');
  const taskForm = document.getElementById('task-form');
  const taskslistContainer = document.getElementById('tasks-list-container');
  const pageContainer = document.getElementById('page-container');
  const welcomeH1 = document.getElementById('welcome-h1');
  const submitButton = document.getElementById('submit-button');
  const tilesWrapper = document.getElementById('tilesWrapper');

  const bar = document.getElementById('myBar');

  return {
    myul,
    loginButton,
    input,
    inputTaskContainer,
    addTaskButton,
    addTaskInput,
    taskForm,
    taskslistContainer,
    pageContainer,
    welcomeH1,
    submitButton,
    tilesWrapper,
  };
}
