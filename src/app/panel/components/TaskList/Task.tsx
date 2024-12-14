import { TaskData } from "../../lib/TaskData";

interface TaskProps {
    taskData: TaskData;
}

export default function Task(props: TaskProps){
    const taskData = props.taskData;
    return (
        <>
            <div className="task">
                <div className="task-status">
                    {taskData.isDone() ? "✅" : "❌"}
                </div>
                <div className="task-name">
                    {taskData.getName()}
                </div>
                <div className="task-assignee">
                    {taskData.getAssigneeId() ? `Assigned to ${taskData.getAssigneeId()}` : "Unassigned"}
                </div>
                <div className="task-due-date">
                    {taskData.getDueDate() ? `Due on ${taskData.getDueDate()}` : "No due date"}
                </div>
                
            </div>
        </>
    );
}