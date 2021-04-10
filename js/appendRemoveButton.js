import removeTask from './removeTask.js';

export default function appendRemoveButton(target, element) {
  const button = document.createElement('button');
  button.classList.add('remove-button');
  const buttonText = document.createTextNode('done');
  button.appendChild(buttonText);

  button.addEventListener('click', (e) => removeTask(e, element));

  target.appendChild(button);
}
