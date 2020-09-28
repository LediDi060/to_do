import React, { useState } from 'react';
import './App.css';
import TodoList from './components/todoList/TodoList';
import AddTodoForm from './components/todoAdd/AddTodoForm';
// import 'antd/dist/antd.css'; 

function App() {
  let [numberPage, setNumberPage] = useState(1);
  const [todos, setTodos] = useState([]);
  let limit = 5;
  const [arrlenght, setArrLenght] = useState()
  React.useEffect(() => {
    const handler = async () => {
      try {
        const userid = localStorage.getItem("userid") || '';
        console.log(userid)
        let response = await fetch('http://10.1.1.20:4001/api/task?page=' + numberPage,
          {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', userid },
          });
        if (!userid) {
          localStorage.setItem("userid", response.headers.get('userid'))
        }
        response = await response.json()

        if (response.success) {
          return ({
            arr: response.data.result,
            arrlength: response.data.items
          })
        }
        else {
          console.error(response)
        }
      } catch (e) {
        console.log(e)
      }
    }
    handler().then(res => {
      setTodos(res.arr)
      setArrLenght(res.arrlength)
    })

  }, [setTodos, numberPage])

  //========================================
  return (
    <div className="App_todo">
      <AddTodoForm
        todos={todos}
        setTodos={setTodos}
      />
        <TodoList
          todos={todos}
          setTodos={setTodos}
        />
        <div className='pages'>
          {(numberPage > 1) ? <button className='page' onClick={() => setNumberPage(--numberPage)}>
            ◄ </button>
            :
            <div className='pageNet'/>}
          <div className='numberPage'>{numberPage} страница</div>
          {(numberPage < Math.ceil(arrlenght / limit)) ?
            <button className='page' onClick={() => setNumberPage(++numberPage)}>
              ►
            </button>
            :
            <div className='pageNet'/>
          }
        </div>
    </div>
  );
}
export default App;