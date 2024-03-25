import "../styles/AddTask.css";
import { useState } from "react";
import MetadataSelector from "./MetadataSelector";
import { v4 as uuid } from "uuid";

function AddTask(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [taskState, setTaskState] = useState({
        content: "",
        importance: "",
        urgency: "",
    });

    function handleChange(event) {
        let value = event.target.value;
        setTaskState({
            ...taskState,
            content: value,
        });
    }

    function handleClick() {
        let task = {
            content: taskState.content,
            isCompleted: false,
            id: uuid(),
            importance: taskState.importance,
            urgency: taskState.urgency,
        }
        if (!task.content) {
            setIsExpanded(false);
            return;
        }
        props.onAdd(task);
        setTaskState({
            content: "",
            importance: "",
            urgency: "",
        });
        setIsExpanded(false);
    }

    function handleSelection(event) {
        let {name, value} = event.target;
        setTaskState({
            ...taskState,
            [name]: value,
        });
    }

    function handleFocus() {
        setIsExpanded(true);
    }

    const options = ["Low", "Medium", "High", "Very High"];
    return (
        <div className="add-area">
            <textarea type="text" placeholder="Add a task..." value={taskState.content} onChange={handleChange} rows={isExpanded ? 3 : 1} onClick={handleFocus}/>
            {isExpanded && (<div className="task-metadata">
                <MetadataSelector label="Importance" options={options} onSelect={handleSelection}/>
                <MetadataSelector label="Urgency" options={options} onSelect={handleSelection}/>
            </div>)}
            {isExpanded && <button onClick={handleClick}>{taskState.content ? "Add" : "Close"}</button>}
        </div>
    );
}

export default AddTask;