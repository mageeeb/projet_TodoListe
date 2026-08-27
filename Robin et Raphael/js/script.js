const TodoInput = $("#todoInput").val.trim;

const Message = $("#message");
const Todolist = $("#todoList");
const Compteur = $("#count");
// const All = $('.filter').A() { 
//  return $(this).data("selected") == true 
// });
// const Todo = var $previous = $('.navlink').filter(function() { 
//  return $(this).data("selected") == true 
// });
// const Done = var $previous = $('.navlink').filter(function() { 
//  return $(this).data("selected") == true 
// });
//
$('#add').on("click", function(){
	if (TodoInput !== ''){
	$("#todoList").text(TodoInput);
	}
})
