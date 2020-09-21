import React, { useState } from 'react'
import './TodoList'


function TodoListItem({ todo, array, todos, setTodos }) {
    const [text, settext] = useState(todo.text)
    const [onRedact, setonRedact] = useState(false)
    const [isTagged, setisTagged] = useState(todo.isTagged)

    function deleteDo() { setTodos(array = array.filter(el => el.id !== todo.id)) }
    function save(e) {
        e.preventDefault()
        if (text.trim()) {
            
            const newTodos = [...todos];

           const index = newTodos.findIndex((elem)=>elem.id===todo.id)
           newTodos[index].text=text

            setTodos(newTodos)
            settext('')
            setonRedact(!onRedact)
            
        }
    }

    return (
        <>
            <div className="todo__item">
                <input type="checkbox" className='chek' checked={isTagged} onChange={() => setisTagged(!isTagged)} />
               <div className='text'> {todo.text}</div>
                <button className='edit'onClick={() => {
                    setonRedact(!onRedact)
                }}>
                  ✎
                </button>
                <button className='delete'onClick={() => { deleteDo() }}>✖</button>
            </div>

            {!onRedact ? '' : <form className='onRedact'
            onSubmit={(e) => save(e)}>
                <input type="text" value={text} onChange={(e) => settext(e.target.value)} />
                <button className='save' type='submit' >+</button>
                <button className='cansel' onClick={() => { setonRedact(!onRedact) }}>X</button>

            </form>}
        </>
    )
}
export default TodoListItem
