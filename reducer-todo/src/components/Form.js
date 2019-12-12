import React, { useState } from 'react';

const Form = (props) => {
    const [newTodo, setNewTodo] = useState('');

    const handleChanges = e => {
        e.preventDefault();
        setNewTodo(e.target.value);
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        props.addTodo(newTodo);
        setNewTodo('');
    }
            
    
   return(
    <form onSubmit={handleSubmit}>
             <input
                className="title-input"
                type="text"
                name="todo"
                id="todo"
                value={newTodo}
                onChange={handleChanges}/>
        <button type='submit'>Add Todo</button>
        <button type='submit' onClick={(e) => {
            e.preventDefault()
            props.clearTodo()
      }}>Clear Todo</button>
    </form>
   )
} 

export default Form;