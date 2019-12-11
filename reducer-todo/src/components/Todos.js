import React, { useReducer } from 'react';
import { reducer, initialState } from '../reducers/todoReducer';

import Form from './Form.js';
import Todo from './Todo.js';

const Todos = () => {
    const [todosState, dispatch] = useReducer(reducer, initialState);
    console.log(todosState);

    

    return (
        <div className="todos">
            <Form dispatch={dispatch}/>
            {todosState.todos.map(todo => (
            <Todo
                dispatch={dispatch}
                key={todo.id} 
                todo={todo.item}
                 />
            ))}
        </div>
    )
}



export default Todos;