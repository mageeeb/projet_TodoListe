const form=document.getElementById("todoForm");
const input=document.getElementById("todoInput");
const list=document.getElementById("todoList");
const count=document.getElementById("count");




function addTask(e){
e.preventDefault();
	let task=document.createElement("p");
	console.log(task);	
	task.textContent=input.value;
	list.appendChild(task);
	input.value=" "

}
form.addEventListener("submit",addTask);
