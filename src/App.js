import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/todoList/TodoList';
import AddTodoForm from './components/todoAdd/AddTodoForm';



function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function readTask(userid) {

      let response = await fetch('http://10.1.1.20:4001/api/task',
        {
          headers: { 'Content-Type': 'application/json', userid }, 
        });

      if (!userid) {
        localStorage.setItem("userid", response.headers.get('userid'))
      }

      response = await response.json()
      if (response.success) {
        setTodos(response.data)
      }
      else {
        console.error(response)
      }
    }
    const userid = localStorage.getItem("userid") || '';
    readTask(userid)

  }, [])
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
