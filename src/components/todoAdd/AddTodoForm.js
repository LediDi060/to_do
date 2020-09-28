import React, { useState } from 'react'
import './../../App'
// import ButtonMenu from '../../components/todoAdd/ButtonMenu'


function AddTodoForm({ todos, setTodos, handler }) {
  const [title, setTitle] = useState('')
  const addTask = async (todo) => {
    try {
      await fetch('http://10.1.1.20:4001/api/task',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', userid: localStorage.getItem("userid") },
          body: JSON.stringify(todo)
        });
      return true
    } catch (error) {
      throw error
    }
  }

  function submit(e) {
    e.preventDefault()
    if (title.trim()) {
      const date = new Date().toISOString();
      const todo = {
        text: title,
        isTagged: false,
        isPerfomed: false,
        date: date
      }
      const newTodos = [ ...todos,todo];  //newTodos.push(todo);
      if (addTask(todo)) {
        setTodos(newTodos)
      } else {
        console.log('Туду не добавленно');
      }
      setTitle('')
    }}
  // React.useEffect(()=>handler,[setTodos])
//==========================================================================================
  return (
    <form className="todo__add-new" onSubmit={(e) => submit(e)}>
      {/* <ButtonMenu className='menu' /> */}
      <input type="text" value={title} onChange={({ target }) => setTitle(target.value)} />
      <button className='add' type='submit'>add</button>
    </form>
  )
}
export default AddTodoForm