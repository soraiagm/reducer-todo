import React from 'react'
import Todo from './Todo.js';

const Todos = (props) => {

    return (
        <div>
            {props.state.map((todo) => {
                return <Todo 
                            key={todo.id} 
                            item={todo}  
                            toggleTodo={props.toggleTodo} />
            })}
        </div>
    )
}

export default Todos;