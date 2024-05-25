const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const addTaskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", handleSubmit);

function handleSubmit() {
  const task = taskInput.value.trim();
  if (task === "") {
    alert("Please enter a task");
    return;
  } else {
    const taskItem = document.createElement("li");
    // const taskText = document.createElement("span");
    taskItem.textContent = task;
    taskItem.classList.add("task-item");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      taskItem.remove();
    })
    taskItem.appendChild(deleteButton);
    addTaskList.appendChild(taskItem);
    taskInput.value = ""}; 
}

// const taskInput = document.getElementById("taskInput");
// const addTaskButton = document.getElementById("addTaskButton");
// const addTaskList = document.getElementById("taskList");

// addTaskButton.addEventListener("click", handleSubmit);

// function handleSubmit() {
//   const task = taskInput.value.trim(); // trim to remove whitespace
//   if (task!== "") {
//     const li = document.createElement('li');
//     li.textContent = task;
//     addTaskList.appendChild(li);
//     taskInput.value = '';
//   } else {
//     alert("Please enter a task!"); // or some other error handling
//   }
// }