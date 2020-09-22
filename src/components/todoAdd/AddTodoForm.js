import React, { useState } from 'react'

function AddTodoForm({ todos, setTodos }) {
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
    } catch (error){
      throw error
    }

  }
  function submit(e) {
    e.preventDefault()
    if (title.trim()) {
      const date = new Date().toISOString();
      const todo = {
        text: title,
        isTagged:false,
        isPerfomed:false,
        date: date
      }
      const newTodos = [...todos];
      newTodos.push(todo);

      if (addTask(todo)) {
        setTodos(newTodos)
      } else {
        console.log('Туду не добавленно');
      }
      setTitle('')

    }
  }


  return (
    <form className="todo__add-new" onSubmit={(e) => submit(e)}>
      <input type="text" value={title} onChange={({ target }) => setTitle(target.value)} />
      <button className='add' type='submit' >add</button>
    </form>
  )
}
export default AddTodoForm