import React from 'react';
import TodoListItem from './TodoListItem';



function TodoList({ todos, setTodos }) {

  
   
    return (
        <div className="todo__list">
            {todos.map((todo, index, array) => <TodoListItem
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