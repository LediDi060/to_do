import React, { useState } from 'react';
import './App.css';
import TodoList from './components/todoList/TodoList';
import AddTodoForm from './components/todoAdd/AddTodoForm';



function App() {
  const [todos, setTodos] = useState([]);

  
   
  return (
    <div className="App_todo">
      <AddTodoForm
        todos={todos}
        setTodos={setTodos} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
