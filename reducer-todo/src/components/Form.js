import React, { useState } from 'react';

const Form = ({ dispatch }) => {
    const [newTodo, setNewTodo] = useState('');
    
    
    const handleChanges = e => {
        e.preventDefault();
        setNewTodo(e.target.value);
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TODO',
            payload: newTodo
        });
        setNewTodo('');
    }


    const deleteTodo = e => {
        e.preventDefault();
        dispatch({
            type: 'DELETE_TODO',
        })
    }

    
    return (
        <form onSubmit={handleSubmit}>
            <input
                className="title-input"
                type="text"
                name="todo"
                id="todo"
                value={newTodo}
                onChange={handleChanges}/>
            <button
                className="add-button"
                type="submit">
                Add new todo
            </button>
            <button
                className="delete-button"
                type="submit"
                onClick={deleteTodo}>
                Delete todo
            </button>
        </form>
    )
}

export default Form;