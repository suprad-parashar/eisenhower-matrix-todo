import "../styles/SimpleViewTaskItem.css";
import { useState } from "react";

function SimpleViewTaskItem(props) {
    const [isCompleted, setIsCompleted] = useState(false);

    function handleClick() {
        setIsCompleted(!isCompleted);
        props.onComplete(props.id);
    }

    const completedStyle = {
        textDecoration: "line-through",
        color: "#aaaaaa",
    }

    return (
        <div className="task-item">
            <input type="checkbox" checked={props.isCompleted} onChange={handleClick} name="check-item"/>
            <label htmlFor="check-item" style={props.isCompleted ? completedStyle : null}>{props.content}</label>
        </div>
    );
}

export default SimpleViewTaskItem;