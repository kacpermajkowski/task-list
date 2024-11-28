
let task_list_object = document.getElementsByClassName("task-list")[0];
let task_template = '<li class="task"><div class="task-delete">X</div> %s</li>';

loadTasks();

// Handling new task being submitted via form
let task_form_object = document.getElementsByClassName("add-task-form")[0];
task_form_object.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask(document.getElementById("add-task-input").value);
    document.getElementById("add-task-input").value = "";
});

function loadTasks(){
    if(localStorage.task_array == null) return;
    let task_array = JSON.parse(localStorage.task_array);
    
    for(task_id in task_array){
        addTask(task_array[task_id])
    }
}

function saveTasks(){
    let task_list = task_list_object.getElementsByClassName("task");
    let task_array = Array.from(task_list).map(
            (task_object) => task_object.getElementsByClassName("task-content")[0].innerHTML
        );

    localStorage.task_array = JSON.stringify(task_array);
}

function addTask(task_content){
    if(!task_content) return;
    if(!task_list_object.getElementsByClassName("task").length){
        task_list_object.innerHTML = "";
    }
    let task_object = document.createElement("li");
    task_object.className = "task";

    let delete_button = document.createElement("div");
    delete_button.className = "task-delete"
    delete_button.innerHTML = "X";

    let task_content_object = document.createElement("div");
    task_content_object.className = "task-content";
    task_content_object.innerHTML = task_content;

    task_object.appendChild(delete_button);
    task_object.appendChild(task_content_object);
    task_list_object.appendChild(task_object);

    task_object.getElementsByClassName("task-delete")[0].onclick = function() {
        removeTask(task_object);
    };

    saveTasks();
}

function removeTask(task_object){
    task_list_object.removeChild(task_object);
    if(!task_list_object.getElementsByClassName("task").length){
        task_list_object.innerHTML = "You've completed all tasks! Well done."
    }
    saveTasks();
}