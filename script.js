const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click" , function(){
const taskText = taskInput.value.trim();

if(taskText === "") {
  alert("please enter task");
  return;
}

const li = document.createElement("li");
li.textContent = taskText;

li.addEventListener("click" , function(){
  li.classList.toggle("done");
});


const delBtn = document.createElement("button");
delBtn.textContent = "Delete";
delBtn.style.marginLeft = "10px";

delBtn.addEventListener("click" , function(){
  li.remove();
});
li.appendChild(delBtn);
taskList.appendChild(li);

taskInput.value = "";

});
