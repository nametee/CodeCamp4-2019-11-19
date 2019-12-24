import React from "react"; 
import styles from "./Todo.module.css";

function Todo (props) {
    const { name, isChecked, onTick, onDelete } = props
    return (
        <div className = { styles.Root }> 
            <input 
                type = 'checkbox'  
                checked = { isChecked } 
                onChange = { onTick } 
            />
            <span 
                className = { styles.Text }
                style =  {{ textDecoration :  (isChecked ? "line-through" : "none") }} 
                onClick = { onTick }
            >
                { name }
            </span>
            <button 
                type = 'button' 
                className = { styles.Button } 
                onClick = { onDelete }
            >
                x
            </button>
        </div>
    )
}

export default Todo