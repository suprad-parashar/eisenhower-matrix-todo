import "../styles/SimpleView.css";
import AddTask from "./AddTask";
import Heading from "./Heading";
import ScrollList from "./ScrollList";
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
        <div className="simpleview-container">
            <div className="input-area">
                <Heading />
                <AddTask onAdd={addTask} />
                <ScrollList tasks={tasks} onComplete={completeTask} />
            </div>
        </div>
    );
}

export default SimpleView;