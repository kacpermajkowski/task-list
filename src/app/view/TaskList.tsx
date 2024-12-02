"use client";

import { ChangeEvent, FormEvent, MouseEvent, use, useEffect, useState } from 'react';
import {Task} from '../models/Task';

export default function TaskList() {
    const [tasklist, setTasklist] = useState<Task[]>([]);
    const [newTaskName, setNewTaskName] = useState('');

    useEffect(() => {
        let tasklistJson = localStorage.getItem('tasklist');
        if(tasklistJson != null){
            let parsedTasklist = JSON.parse(tasklistJson) as Task[];
            if(parsedTasklist != null){
                setTasklist(parsedTasklist);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasklist', JSON.stringify(tasklist));
    });

    let content = <ul className="tasklist-list"> {tasklist.map((task, index) =>
         <li className="task" key={index}>
            <div className="task-delete" onClick={() => {
                let newTasklist = [...tasklist];
                newTasklist.splice(index, 1);
                setTasklist(newTasklist);
            }}>X</div>
            <div className="task-content">{task.name}</div>
        </li>
    )} </ul>;

    let [inputValue, setInputValue] = useState('');

    content = tasklist.length > 0 ? content : <p className='tasklist-list'>Time to put in some tasks and get to work!</p>;

    const onFormSubmit = (e: FormEvent) => {
        e.preventDefault();

        let newTasklist = [...tasklist];
        newTasklist.push(new Task(newTaskName));
        setTasklist(newTasklist);
        setInputValue("");
    };

    const onNewTaskNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskName(e.target.value);
        setInputValue(e.target.value);
    }

    return (
        <div className="tasklist-container">
            <h1 className="title">Task List</h1>

            <hr className="divider-solid" />

            {content}
            
            <hr className="divider-solid" />

            <div className="task-form-container">
                <h2 className="title">Add new task</h2>
                <form className="task-form" method="POST" onSubmit={onFormSubmit}>
                    <input type="text" name="task-name" className="task-form-input" value={inputValue} onChange={onNewTaskNameChange}/>
                    <button type="submit" className="task-form-submit">Add</button>
                </form>
            </div>
        </div>
    );
}