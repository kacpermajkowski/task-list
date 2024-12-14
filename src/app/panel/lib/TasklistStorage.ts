"use client";

import { useEffect } from "react";
import TaskListData from "./TaskListData";

export default class TasklistStorage {
    private static tasklists: TaskListData[] = [];
    
    static getTasklists(): TaskListData[] {
        return [...this.tasklists];
    }

    static getTasklistByName(name: string): TaskListData | undefined {
        return this.tasklists.find(tasklist => tasklist.getName() === name);
    }

    static updateTasklistByName(name: string, updatedTasklist: TaskListData): boolean {
        const index = this.tasklists.findIndex(tasklist => tasklist.getName() === name);
        if (index === -1) {
            return false;
        }
        this.tasklists[index] = updatedTasklist;
        return true;
    }

    static addTasklist(tasklist: TaskListData): boolean {
        if(this.tasklists.includes(tasklist)){
            return false;
        }
        if(this.tasklists.some(tl => tl.getName() === tasklist.getName())){
            return false;
        }

        this.tasklists.push(tasklist);
        return true;
    }

    static removeTasklist(tasklist: TaskListData): boolean {
        let index = this.tasklists.indexOf(tasklist);
        if(index === -1){
            return false;
        }

        this.tasklists.splice(index, 1);
        return true;
    }

    static loadFromLocalStorage(): void {
        let tasklistsJson = localStorage.getItem('tasklists');
        if(tasklistsJson != null){
            let parsedTasklists = JSON.parse(tasklistsJson) as TaskListData[];
            if(parsedTasklists != null){
                this.tasklists = parsedTasklists;
            }
        } 
    }

    static saveToLocalStorage(): void {
        localStorage.setItem('tasklists', JSON.stringify(this.tasklists));
    }
}