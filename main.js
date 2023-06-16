// Selecting elements
let addButton = document.querySelector(".row button");
let taskInput = document.querySelector(".row input");
let taskList = document.getElementById("list-container");

// Function to check for duplicate tasks
function checkDuplicateTasks() {
  let taskText = taskInput.value.trim();
  let existingTasks = taskList.getElementsByTagName("li");
  
  for (let i = 0; i < existingTasks.length; i++) {
    if (existingTasks[i].textContent === taskText) {
      return true; // Duplicate task found
    }
  }
  
  return false; // No duplicate task found
}

// Show error and display alert for duplicate tasks
addButton.addEventListener("click", function showError() {
  if (taskInput.value.trim() === "") {
    taskInput.parentElement.classList.add("error");
  } else {
    taskInput.parentElement.classList.remove("error");
    
    if (checkDuplicateTasks()) {
      alert("That task already exists.");
    } else {
      addNewTask();
    }
  }
});

// Add a new task
function addNewTask() {
  let taskText = taskInput.value;
  
  if (taskText !== "") {
    let newTask = document.createElement("li");
    newTask.textContent = taskText;
    taskList.appendChild(newTask);
    
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    newTask.appendChild(span);
    
    span.addEventListener("click", () => {
      newTask.remove();
    });
    
    taskInput.value = "";
  }
}

// Add task in a different way (Enter key)
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (taskInput.value.trim() === "") {
      taskInput.parentElement.classList.add("error");
    } else {
      taskInput.parentElement.classList.remove("error");
      
      if (checkDuplicateTasks()) {
        alert("That task already exists.");
      } else {
        addNewTask();
      }
    }
  }
});

// Remove a task
taskList.addEventListener("click", (event) => {
  // Check if the clicked element is an <li> within the <ul>
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
});
