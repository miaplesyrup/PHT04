const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const addTaskList = document.getElementById("taskList");

loadTasks();

addTaskButton.addEventListener("click", handleSubmit);

function handleSubmit() {
  const task = taskInput.value.trim();
  if (task === "") {
    alert("Please enter a task");
    return;
  } else {
    const taskItem = document.createElement("li");
    taskItem.textContent = task;
    taskItem.classList.add("task-item");

    // const taskContainer = document.createElement('div');
    // taskContainer.classList.add('task-container');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('checkbox');
    checkBox.addEventListener('change', function(){
      if (checkBox.checked) {
        taskItem.classList.add('checked');
        } else {
          taskItem.classList.remove('checked');
        }
    });
    taskItem.appendChild(checkBox);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      taskItem.remove();
      saveTasks();
    })
    taskItem.appendChild(deleteButton);
    addTaskList.appendChild(taskItem);
    taskInput.value = ""; 

    saveTasks();
  }
}

function saveTasks() {
  const taskItems = addTaskList.querySelectorAll(".task-item");

  const tasks = [];
  for (const item of taskItems) {
    tasks.push(item.textContent.slice(0,-6));
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  if (!tasks) return;
  for (const task of tasks) {
    const taskItem = document.createElement("li");
    taskItem.textContent = task;
    taskItem.classList.add("task-item");

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('checkbox');
    checkBox.addEventListener('change', function(){
      if (checkBox.checked) {
        taskItem.classList.add('checked');
        } else {
          taskItem.classList.remove('checked');
        }
    });
    taskItem.appendChild(checkBox);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      taskItem.remove();
      saveTasks();
    })
    taskItem.appendChild(deleteButton);
    addTaskList.appendChild(taskItem);
  }
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