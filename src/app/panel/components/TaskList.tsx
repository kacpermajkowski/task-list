"use client";

import { useEffect, useState } from 'react';
import {TaskData} from '../lib/TaskData';

import TasklistStorage from '../lib/TasklistStorage';
import TaskListData from '../lib/TaskListData';

import "./TaskList.css";
import Task from './TaskList/Task';
import NewTaskForm from './TaskList/NewTaskForm';

export default function TaskList({ name }: { name: string }) {
    const [tasklist, setTasklist] = useState<TaskListData>(new TaskListData(name));

    useEffect(() => {
        let tasklistData = TasklistStorage.getTasklistByName(name);
        if(tasklistData){
            setTasklist(tasklistData);
        }
    }, []);

    useEffect(() => {
        TasklistStorage.updateTasklistByName(name, tasklist);
    }, [tasklist]);

    return (
        <div className="tasklist-container">
            {tasklist.getTasks().map((task: TaskData) => 
                <Task taskData={task} key={task.getTimeOfCreation().getTime()} />
            )}
            <NewTaskForm />
        </div>
    );
}