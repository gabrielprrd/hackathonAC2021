// import { loginButton, loginInput } from './dom.js';
import { setLocalStorageUsername } from './storage.js';

const loginButton = document.getElementById('login-button');
const input = document.getElementById('input-login');
loginButton.addEventListener('click', saveName);

function saveName() {
  const username = input.value;
  const validRegex = /^[a-zA-Z0-9_\-]+$/;
  if (!username.match(validRegex)) {
    alert('Username can´t be empty or have white spaces...');
    return;
  }
  setLocalStorageUsername(username);

  window.location.replace('http://localhost:5500/views/tasks.html');
}
