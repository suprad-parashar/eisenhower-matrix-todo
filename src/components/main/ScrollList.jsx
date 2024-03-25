import "../styles/ScrollList.css";
import TaskItem from "./TaskItem";

function ScrollList(props) {
    return (
        <div className="scroll-list">
            {props.tasks.map(task => (
                <TaskItem
                    key={task.id}
                    content={task.content}
                    isCompleted={task.isCompleted}
                    id={task.id}
                    onComplete={props.onComplete}/>
            ))}
        </div>
    )
}

export default ScrollList;