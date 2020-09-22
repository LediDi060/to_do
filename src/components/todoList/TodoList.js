import React,{useEffect} from 'react';
import TodoListItem from './TodoListItem';




function TodoList({ todos, setTodos }) {
    useEffect(() => {
    async function readTask(userid) {

        let response = await fetch('http://10.1.1.20:4001/api/task',
          { 
            method: 'GET',
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
  
    }, )
   
    return (
        <div className="todo__list">
            {todos.map((todo, id, array) => <TodoListItem
                todo={todo}
                key={todo.id} 
                array = {array}
                setTodos={setTodos}
                todos={todos}
                
                >
            </TodoListItem>)}
        </div>
    )

}
export default TodoList