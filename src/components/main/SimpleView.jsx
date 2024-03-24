import "../styles/SimpleView.css";
import SimpleViewAddTask from "./SimpleViewAddTask";
import SimpleViewTaskItem from "./SimpleViewTaskItem";
import { useState } from "react";

function SimpleView() {
    const [tasks, setTasks] = useState([]);

    function addTask(task) {
        setTasks([...tasks, task]);
    }

    function completeTask(id) {
        let completedTask = tasks.filter(task => task.id === id)[0];
        const newTasks = tasks.filter(task => task !== completedTask);
        completedTask.isCompleted = !completedTask.isCompleted;
        if (completedTask.isCompleted) {
            setTasks([...newTasks, completedTask]);
        } else {
            setTasks([completedTask, ...newTasks]);
        }
    }

    return (
        <div>
            <div className="input-area">
                <h1>Todo List</h1>
                <SimpleViewAddTask onAdd={addTask} nextId={tasks.length}/>
                <div className="scroll-list">
                    {tasks.map((task, index) => (
                        <SimpleViewTaskItem
                            key={task.id}
                            content={task.content}
                            isCompleted={task.isCompleted}
                            id={task.id}
                            onComplete={completeTask}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SimpleView;