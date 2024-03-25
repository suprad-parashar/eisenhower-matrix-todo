import "../styles/SimpleViewAddTaskSelector.css";

function MetadataSelector(props) {
    return (
        <select name={props.label.toLowerCase()} onChange={props.onSelect} defaultValue={`Select ${props.label}`}>
            <option value={`Select ${props.label}`} disabled hidden>Select {props.label}</option>
            {props.options.map((option, index) => (
                <option key={index} value={option + " " + props.label}>{option + " " + props.label}</option>
            ))}
        </select>
    );
}

export default MetadataSelector;