import React from "react";
import TodoListItem from "./TodoListItem";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./../../store/actions/actions";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state)
  //===================================================================
  return (
    <div className="todo__list">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id}></TodoListItem>
      ))}
      
    </div>
  )
}
export default TodoList;
