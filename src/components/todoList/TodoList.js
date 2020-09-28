import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todos, setTodos }) {
 
  //===================================================================
  return (
    <div className="todo__list">
      {todos.map(todo => <TodoListItem
        todo={todo}
        key={todo.id}
        setTodos={setTodos}
        todos={todos}
      >
      </TodoListItem>)}
    </div>
  )
}
export default TodoList