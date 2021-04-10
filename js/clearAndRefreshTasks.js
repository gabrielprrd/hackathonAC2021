export default function clearAndRefreshTasks(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  location.reload();
}
