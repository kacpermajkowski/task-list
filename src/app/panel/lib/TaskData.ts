"use client";

import Label from "./Label";
import Labelable from "./Labelable";

export class TaskData extends Labelable{
    private done: boolean = false;

    private name: string;
    private description: string | undefined;
    // 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English.';

    private timeOfCreation: Date = new Date();
    private creatorId: number;

    private assigneeId: number | undefined;

    private dueDate: Date | undefined;

    constructor(
        name: string,
        creatorId: number,
        description?: string,
        assigneeId?: number,
        dueDate?: Date,
    ) {
        super();
        this.name = name;
        this.description = description;
        this.creatorId = creatorId;
        this.assigneeId = assigneeId;
        this.dueDate = dueDate;
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

    static fromJson(json: string): TaskData {
        const obj = JSON.parse(json);

        if(!obj.name || !obj.creatorId){
            throw new Error('Invalid JSON for Task');
        }

        const task = new TaskData(
            obj.name,
            obj.creatorId,
            obj.description,
            obj.assigneeId,
            obj.dueDate ? new Date(obj.dueDate) : undefined,
        );
        task.setDone(obj.done || false);
        task.timeOfCreation = new Date(obj.timeOfCreation);
        if (obj.labels) {
            obj.labels.forEach((label: Label) => task.addLabel(label));
        }
        return task;
    }
}