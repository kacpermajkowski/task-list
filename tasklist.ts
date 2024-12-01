export class Task{
    name: string;
    
    constructor(name: string){
        this.name = name;
    }
}

export class TaskList{
    private tasklist: Task[] = [];

    constructor(){
    }

    addTask(task: Task){
        this.tasklist.push(task);
        this.dispatchUpdateEvent();
    }

    deleteTask(taskindex: number){
        this.tasklist.splice(taskindex, 1);
        this.dispatchUpdateEvent();
    }

    getLength(){
        return this.tasklist.length;
    }

    public static toJson(tasklist: TaskList){
        return JSON.stringify(tasklist.tasklist);
    }

    public static fromJson(json: string){
        let tasklist = new TaskList();
        tasklist.tasklist = JSON.parse(json);
        return tasklist;
    }

    forEach(callback: (task: Task, index: number, tasklist: Task[]) => void) {
        for (let index = 0; index < this.tasklist.length; index++) {
            callback(this.tasklist[index], index, this.tasklist);
        }
    }

    private dispatchUpdateEvent(){
        document.dispatchEvent(new Event("tasklistUpdate"));
    }
}