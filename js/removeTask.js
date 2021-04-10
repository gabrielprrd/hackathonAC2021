import { getLocalStorageTasks, setLocalStorageTasks } from './storage.js';
import clearAndRefreshTasks from './clearAndRefreshTasks.js';
// user can remove task before submitting tasks list
export default function removeTask(e, element) {
  const elementValue = e.target.parentNode.getElementsByTagName('p')[0]
    .innerHTML;

  console.log(elementValue);

  const tasksArray = Array.from(getLocalStorageTasks());
  console.log(tasksArray);

  tasksArray.forEach((task) => {
    if (task == elementValue) {
      const filteredArray = tasksArray.filter((item) => item != elementValue);

      setLocalStorageTasks(filteredArray);
      clearAndRefreshTasks(element);
    }
  });
}
