const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', function() {
  const taskValue = taskInput.value;

  // Create a new list item for the task
  const listItem = document.createElement('li');
  listItem.textContent = taskValue;

  // Add a checkbox to mark the task as completed
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  listItem.appendChild(checkBox);

  // Add a button to delete the task
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  listItem.appendChild(deleteButton);

  // Add event listener for delete button click
  deleteButton.addEventListener('click', function() {
    taskList.removeChild(listItem);
  });

  // Add event listener for checkbox click (optional)
  checkBox.addEventListener('click', function() {
    // Toggle completed styling (using CSS)
    listItem.classList.toggle('completed');
  });

  taskList.appendChild(listItem);
  taskInput.value = ''; // Clear input field after adding task
});
