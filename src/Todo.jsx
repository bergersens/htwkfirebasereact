import React from "react";

export const Todo = ({ todo, index, completeTodo, removeTodo })=>{
    return (
        <div
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>{todo.isCompleted? 'Uncomplete' : 'Complete'}</button>
                <button onClick={() => removeTodo(index)}>x</button>
            </div>
        </div>
    );
}