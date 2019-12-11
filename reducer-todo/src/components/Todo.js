import React from 'react';

const Todo = ({ todo, dispatch }) => {
    
    const toggleTodo = e => {
        dispatch({
            type: 'TOGGLE_TODO',
            payload: todo.id
        })
    } 


    return (
        <div className="todo" 
             onClick={toggleTodo}>
            <h3>{todo}</h3>
        </div>
    )
}

export default Todo;