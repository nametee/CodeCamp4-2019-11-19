import React from "react"; 
import styles from "./NewTodo.module.css";

function NewTodo (props) {
    const { textTodo, onTextChange, onAdd, onEnter } = props
    return (
        <span>
            <input   
                placeholder = "Enter Todo"
                value = { textTodo }
                onChange = { onTextChange }
                onKeyPress = { onEnter }
            /> 
            <button 
                type='button'
                onClick = { onAdd } 
            > 
                ADD 
            </button>
        </span>
    )
}

export default NewTodo