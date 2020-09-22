import React, { useState, useEffect } from 'react'
import './TodoList'



function TodoListItem({ todo, array, todos, setTodos }) {
    const [text, settext] = useState(todo.text);
    const [onRedact, setonRedact] = useState(false);
    const [isPerformed, setisPerformed] = useState(todo.isPerformed);
    const [isTagged, setIsTagged] = useState(todo.isTagged);

    function deleteDo() { setTodos(array = array.filter(el => el.id !== todo.id)); console.log(todo.id); deleteTask() }
    const deleteTask = async () => {
        try {
            let response = await fetch('http://10.1.1.20:4001/api/task/' + todo.id,
                {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json', userid: localStorage.getItem("userid") },

                }
            );
            response = await response.json()
            console.log(response)
        }
        catch (error) {
            throw error
        }
    }

    const updateTask = async () => {
        try {
            let response = await fetch('http://10.1.1.20:4001/api/task/' + todo.id,
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json', userid: localStorage.getItem("userid") },
                    body: JSON.stringify(todo)
                }
            );
            response = await response.json()
            console.log(response)
        }
        catch (error) {
            throw error
        }
    }


    function save(e) {
        e.preventDefault()
        if (text.trim()) {

            const newTodos = [...todos];

            const index = newTodos.findIndex((elem) => elem.id === todo.id)
            newTodos[index].text = text

            setTodos(newTodos)
            settext('')
            setonRedact(!onRedact)

        }
    }

    function markItem(todoId){
        const newTodos = [...todos];
            const updatedItem = newTodos.find((elem) => elem.id === todoId);
            updatedItem.isTagged= !updatedItem.isTagged;
             setTodos(newTodos)
             updateTask()
    }
    function markItemSecond(todoId){
        const newTodos = [...todos];
            const updatedItem = newTodos.find((elem) => elem.id === todoId);
            updatedItem.isPerformed= !updatedItem.isPerformed;
             setTodos(newTodos)
             updateTask()
    }

   
    
//============================================================================================================
    return (
        <>


            {!onRedact ? <div className="todo__item">
                <input type="checkbox" className='chek' checked={todo.isPerformed} onChange={() => markItemSecond(todo.id)} />
                <div className='text'> {todo.text}</div>
                    <button className='star' onClick={() => markItem(todo.id)}>
                        {!todo.isTagged ? '☆' : '★' }
                     </button>
                <button className='edit' onClick={() => setonRedact(!onRedact)}>
                    ✎
                </button>
                <button className='delete' onClick={deleteDo}>✖</button>
            </div> :
                <form className='onRedact'
                    onSubmit={(e) => { save(e); updateTask() }}>
                    <input className='inputChange' type="text" value={text} onChange={(e) => settext(e.target.value)} />
                    <button className='save' type='submit' >✔</button>
                    <button className='cansel' onClick={() => { setonRedact(!onRedact) }}>✖</button>

                </form>}
        </>
    )
}
export default TodoListItem
