import React, { useState } from 'react'
import './../../App'
import {useSelector, useDispatch} from 'react-redux'
import {addTodo, todoPost} from '../../store/actions/actions'
// import ButtonMenu from '../../components/todoAdd/ButtonMenu'
import { getTodos } from './../../store/actions/actions'


function AddTodoForm({todos}) {

  const dispatch = useDispatch()
  // const todos = useSelector(state => state)

  const [title, setTitle] = useState('')
  // const addTask = dispatch(todoPost())

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
      const newTodos = [ ...todos,todo];
      // if (addTask(todo)) {
      //   dispatch(getTodos(newTodos))
      // } else {
      //   console.log('Туду не добавленно');
      // }
      setTitle('')
    }
  dispatch(addTodo('text1'))
  }
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