import {Task, TaskList} from './tasklist.js';

let taskForm;
let tasklistList;

let tasklist: TaskList = new TaskList();

function initializeListeners(){
    initializeFormSubmitListener();
    initializeTasklistUpdateListener();
}

function initializeTasklistUpdateListener(){
    document.addEventListener("tasklistUpdate", () => {
        saveTasklistToLocalStorage();
        renderTasklist();
    });
}

function initializeFormSubmitListener(){
    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();
        try {
            tasklist.addTask(createTaskFromTaskForm());
        } catch (e){
            console.error(e);
        }
        
    });
}

function createTaskFromTaskForm(){
    let formData = new FormData(taskForm);
    let taskName = formData.get("task-name") as string;

    if(taskName == null){
        throw new Error("task-name field was not set in a form that was sent");
    }

    return new Task(taskName);
}

function saveTasklistToLocalStorage(){
    localStorage.setItem("tasklist", TaskList.toJson(tasklist));
}

function renderTasklist(){
    tasklistList.replaceChildren();

    if(tasklist.getLength() > 0){
        tasklist.forEach((task, index) => {
            tasklistList.appendChild(createTasklistListElement(task, index));
        });
    } else {
        tasklistList.innerText = "Time to put in some tasks and get to work!"; 
    }
}

function createTasklistListElement(task: Task, index: number){
    let taskElement = document.createElement("li");
    taskElement.className = "task";
    taskElement.setAttribute("taskindex", String(index));

    let deleteButtonElement = document.createElement("div");
    deleteButtonElement.className = "task-delete"
    deleteButtonElement.textContent = "X";

    deleteButtonElement.addEventListener("click", () => {
        let taskIndex = Number(taskElement.getAttribute("taskindex"));

        if(taskIndex == null){
            throw new Error("Cannot delete a task, since it doesn't have taskindex attribute.");
        }

        tasklist.deleteTask(taskIndex);
    });

    let taskContentElement = document.createElement("div");
    taskContentElement.className = "task-content";
    taskContentElement.textContent = task.name;

    taskElement.appendChild(deleteButtonElement);
    taskElement.appendChild(taskContentElement);

    return taskElement;
}

function initializeTasklist(){
    let tasklistJson = localStorage.getItem("tasklist");

    if(tasklistJson != null){
        let tasklistTemp = TaskList.fromJson(tasklistJson);
        if(tasklistTemp != null){
            tasklist = tasklistTemp;
        }
    }
}

onload = () => {
    taskForm = document.querySelector<HTMLFormElement>(".task-form");
    tasklistList = document.querySelector<HTMLUListElement>(".tasklist-list");

    if(taskForm == null || tasklistList == null){
        throw new Error("Could not find HTML elements required for the script to work.");
    }

    initializeTasklist();
    renderTasklist();



    initializeListeners();
}