"use client";

import { randomUUID, UUID } from "crypto";
import Labelable from "./Labelable";

export class Task extends Labelable{
    private done: boolean = false;

    private name: string;
    private description: string | undefined;
    // 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English.';

    private timeOfCreation: Date = new Date();
    private creatorId: number;

    private assigneeId: number | undefined;

    private dueDate: Date | undefined;
    private dependentOn: Task[] = [];

    constructor(
        name: string,
        creatorId: number,
        description?: string,
        assigneeId?: number,
        dueDate?: Date,
        dependentOn?: Task[],
    ) {
        super();
        this.name = name;
        this.description = description;
        this.creatorId = creatorId;
        this.assigneeId = assigneeId;
        this.dueDate = dueDate;
        this.dependentOn = dependentOn || this.dependentOn;
    }

    setName(name: string): void {
        this.name = name;
    }

    setDescription(description: string | undefined): void {
        this.description = description;
    }

    setDone(done: boolean): void {
        this.done = done;
    }

    setAssigneeId(assigneeId: number | undefined): void {
        this.assigneeId = assigneeId;
    }

    setDueDate(dueDate: Date | undefined): void {
        this.dueDate = dueDate;
    }

    addDependentOn(task: Task): void {
        if(this.dependentOn.includes(task)){
            throw new Error('Task is already dependent on given task');
        }

        this.dependentOn.push(task);
    }

    removeDependentOn(task: Task): void {
        let index = this.dependentOn.indexOf(task);
        if(index === -1){
            throw new Error('Task is not dependent on given task');
        }

        this.dependentOn.splice(index, 1);
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string | undefined {
        return this.description;
    }

    isDone(): boolean {
        return this.done;
    }

    getTimeOfCreation(): Date {
        return this.timeOfCreation;
    }

    getCreatorId(): number {
        return this.creatorId;
    }

    getAssigneeId(): number | undefined {
        return this.assigneeId;
    }

    getDueDate(): Date | undefined {
        return this.dueDate;
    }

    getDependentOn(): Task[] {
        return this.dependentOn;
    }
}