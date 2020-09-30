import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import TodoList from "./components/todoList/TodoList";
import AddTodoForm from "./components/todoAdd/AddTodoForm";
import { getTodos } from "./store/actions/actions";

const App = () => {
  // let [numberPage, setNumberPage] = useState(1);
  const [arrlenght, setArrLenght] = useState();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);
  let numberPage = 1;
  
  useEffect(() => {
    dispatch(getTodos(numberPage));
  }, []);

  //========================================
  return (
    <div className="App_todo">
      <AddTodoForm
        // todos={todos}
        //setTodos={setTodos}
      />
      <TodoList
        todos={todos}
        //setTodos={setTodos}
      />
      <div className="pages">
        {numberPage > 1 ? (
          <button className="page" onClick={() => (numberPage = --numberPage)}>
            ◄{" "}
          </button>
        ) : (
          <div className="pageNet" />
        )}
        <div className="numberPage">{numberPage} страница</div>
        {numberPage < Math.ceil(arrlenght / 5) ? (
          <button className="page" onClick={() => (numberPage = ++numberPage)}>
            ►
          </button>
        ) : (
          <div className="pageNet" />
        )}
      </div>
    </div>
  );
};
export default App;
