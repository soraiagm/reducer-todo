import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../reducers/todoReducer';

import Todo from './Todo.js';

const Todos = () => {
    const [todosState, dispatch] = useReducer(reducer, initialState);
    console.log(todosState);

    return (
        <div className="todos">
            {todosState.todos.map(todo => (
                <Todo key={todo.id} todo={todo.item}/>
            ))}
        </div>
    )
}



export default Todos;