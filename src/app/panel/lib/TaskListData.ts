import { TaskData } from "./TaskData";

export default class TaskListData{
    private name: string;
    private readonly tasks: TaskData[];

    constructor(name: string, tasks: TaskData[] = []){
        this.name = name;
        this.tasks = tasks;
    }

    addTask(task: TaskData): void {
        if(this.tasks.includes(task)){
            throw new Error('Task is already in the list');
        }

        this.tasks.push(task);
    }

    removeTask(task: TaskData): void {
        let index = this.tasks.indexOf(task);
        if(index === -1){
            throw new Error('Task is not in the list');
        }

        this.tasks.splice(index, 1);
    }

    getTasks(): TaskData[] {
        return [...this.tasks];
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    static fromJson(json: string): TaskListData {
        let parsed = JSON.parse(json);
        let tasks = parsed.tasks.map((taskJson: string) => TaskData.fromJson(taskJson));
        return new TaskListData(parsed.name, tasks);
    }
}