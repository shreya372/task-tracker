const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === ""){
    alert("Please enter a task!");
    return;
  }
  const li = document.createElement("li");

 
  const textSpan = document.createElement("span");
  textSpan.textContent = taskText;
  textSpan.classList.add("task-text"); 
  li.appendChild(textSpan);

  
  const status = document.createElement("span");
  status.textContent = "(Pending)";
  status.className = "status-pending";
  li.appendChild(status);

  
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Mark Completed";
  
  
  completeBtn.onclick = () => {
    
    textSpan.classList.add("task-done");
    
    
    status.textContent = "(Completed)";
    status.className = "status-completed";
    
   
    completeBtn.disabled = true;
    completeBtn.textContent = "Done";
  };

  li.appendChild(completeBtn);
  taskList.appendChild(li);

 
  taskInput.value = ""; 
}


addTaskBtn.addEventListener("click", addTask);


taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});