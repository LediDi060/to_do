import React, { useState } from "react";
import "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoPost, updateTaskFetch , updateTask, updateStar, updateCompleted} from "../../store/actions/actions";

function TodoListItem({ todo, setTodos }) {
  const [text, settext] = useState(todo.text);
  const [onRedact, setonRedact] = useState(false);
const dispatch = useDispatch();
 let todos = useSelector((state) => state);

  const deleteTodo = () => {
    dispatch(deleteTodoPost(todo.id));
  };
  
  const updateTasks=  () => {
    dispatch( updateTaskFetch(todo.id,todo))
  };

  function save(e) {
    e.preventDefault();
    if (text.trim()) {
      dispatch(updateTask(todo.id, text))
      settext(todo.text);
      setonRedact(!onRedact);
    }
    
  }

  function markItem(todoId) {
    dispatch(updateStar(todoId))
    updateTasks();
  }

  function markItemSecond(todoId) {
    dispatch(updateCompleted(todoId))
    updateTasks();
  }
  //============================================================================================================
  return (
    <>
      {!onRedact ? (
        <div className="todo__item">
          <input
            type="checkbox"
            className="chek"
            checked={todo.isPerformed}
            onChange={() => markItemSecond(todo.id)}
          />
          <div className="text"> {todo.text}</div>
          <button className="star" onClick={() => markItem(todo.id)}>
            {!todo.isTagged ? "☆" : "★"}
          </button>
          <button className="edit" onClick={() => setonRedact(!onRedact)}>
            ✎
          </button>
          <button className="delete" onClick={deleteTodo}>
            ✖
          </button>
        </div>
      ) : (
        <form
          className="onRedact"
          onSubmit={(e) => {
            save(e);
            updateTasks();
          }}
        >
          <input
            className="inputChange"
            type="text"
            value={text}
            onChange={(e) => settext(e.target.value)}
          />
          <button className="save" type="submit">
            ✔
          </button>
          <button
            className="cansel"
            onClick={() => {
              setonRedact(!onRedact);
            }}
          >
            ✖
          </button>
        </form>
      )}
    </>
  );
}
export default TodoListItem;
