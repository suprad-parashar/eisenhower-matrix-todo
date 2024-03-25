import "../styles/MinimalView.css";
import AddTask from "./AddTask";
import Heading from "./Heading";
import { useState } from "react";
import ScrollList from "./ScrollList";

function MinimalView() {
    const [tasks, setTasks] = useState([]);

    function getScore(value) {
        switch(value) {
            case "Low":
                return 1;
            case "Medium":
                return 2;
            case "High":
                return 3;
            case "Very High":
                return 4;
            default:
                return 0;
        }
    }

    function sortTasks(taskList) {
        taskList.sort((a, b) => {
            const scoreA = getScore(a.importance.trim().split(" ")[0]) * 2 + getScore(a.urgency.trim().split(" ")[0]);
            const scoreB = getScore(b.importance.trim().split(" ")[0]) * 2 + getScore(b.urgency.trim().split(" ")[0]);
            return scoreB - scoreA;
        });
        return taskList;
    }

    function updateTaskList(taskList) {
        const incompleteTasks = sortTasks(taskList.filter(task => !task.isCompleted));
        const completedTasks = sortTasks(taskList.filter(task => task.isCompleted));
        setTasks([...incompleteTasks, ...completedTasks]);
    }

    function addTask(task) {
        updateTaskList([...tasks, task]);
    }

    function completeTask(id) {
        let completedTask = tasks.filter(task => task.id === id)[0];
        const newTasks = tasks.filter(task => task !== completedTask);
        completedTask.isCompleted = !completedTask.isCompleted;
        updateTaskList([...newTasks, completedTask])
    }

    function getAction(task) {
        let importanceFactor = getScore(task.importance.trim().split(" ")[0]);
        let urgencyFactor = getScore(task.urgency.trim().split(" ")[0]);
        if (importanceFactor >= 3 && urgencyFactor >= 3) {
            return "Do it now!";
        } else if (importanceFactor >= 3 && urgencyFactor < 3) {
            return "Schedule it for later!";
        } else if (importanceFactor < 3 && urgencyFactor >= 3) {
            return "Delegate it! Ask someone else to do it! (if possible)";
        } else {
            return "Don't do it! It's not worth your time!";
        }
    }

    return (
        <div className="container">
            <div className="main-area">
                <h1>{(tasks[0] && !tasks[0].isCompleted) ? tasks[0].content : "Nothing to Display!"}</h1>
                {tasks[0] && !tasks[0].isCompleted && <p id="information">{`This task has a ${tasks[0].importance} and a ${tasks[0].urgency}!`}</p>}
                {tasks[0] && !tasks[0].isCompleted && <p id="action">{getAction(tasks[0])}</p>}
                {tasks[0] && !tasks[0].isCompleted && <button onClick={() => completeTask(tasks[0].id)}>Complete</button>}
            </div>
            <div className="side-area">
                <Heading />
                <AddTask onAdd={addTask}/>
                <ScrollList tasks={tasks} onComplete={completeTask}/>
            </div>
        </div>
    );
}

export default MinimalView;