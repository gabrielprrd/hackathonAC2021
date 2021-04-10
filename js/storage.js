export function setLocalStorageUsername(username) {
  localStorage.setItem('username', JSON.stringify(username));
}

export function getLocalStorageUsername() {
  return JSON.parse(localStorage.getItem('username'));
}

export function setLocalStorageTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function getLocalStorageTasks() {
  return JSON.parse(localStorage.getItem('tasks'));
}
