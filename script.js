let tasks = [];
let input;

$(".addNew").click(function() {
    input=$(".newToDo").val();
    tasks.push(input);
    $(".ToDoList").append("<li>"+input+"</li>");
    $(".numTasks").text(tasks.length);
   
});