import React, { useReducer } from 'react';
import { todoReducer, initialState } from './reducers/todoReducer';
import Todos from './components/Todos.js';
import Form from './components/Form.js';
import './App.css';

function App() {

  const [todosState, dispatch] = useReducer(todoReducer, initialState)
  

  const addTodo = (todoName) => {
    const newTodo = {
      todo: todoName,
      completed: false,
      id: Date.now()
    }
      dispatch(
        {type: "ADD_TODO", 
        payload: newTodo})
    }

  const toggleTodo = (id) => {
    dispatch({
        type:"TOGGLE_TODO", 
        payload: id})
  }

  const clearTodo = () => {
    dispatch({type: "CLEAR_TODO"})
  }


  return (
    <div className="App">
      <h1>Todo List</h1>
      <Todos state={todosState} toggleTodo={toggleTodo} />
      <Form addTodo={addTodo} clearTodo={clearTodo}/>
    </div>
  );
}

export default App;
