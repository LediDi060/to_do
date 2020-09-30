import { ADD_TODO } from "../constants/constantsTodo";

export const addTodo = (text) => ({
  type: ADD_TODO,
  data: new Date().toISOString().length,
  text,
});
export const numberPage = (numberPage) => ({
  type: "NUMBER_PAGE",
  numberPage,
});

export const CHANGE_TODO = (text) => ({
  type: "CHANGE_TODO",
  text,
});
export const ON_REDACT = (onRedact) => ({
  type: "ON_REDACT",
  onRedact,
});
//==================================================================
export const setTodos = (todos) => ({
  type: "SET_TODOS",
  todos,
});
export function getTodos(numberPage) {
  return (dispatch) => {
    const userid = localStorage.getItem("userid") || "";

    fetch("http://10.1.1.20:4001/api/task?page=" + numberPage, {
      method: "GET",
      headers: { "Content-Type": "application/json", userid },
    })
      // .then(response => )
      .then(async (response) => {
        if (!userid) {
          localStorage.setItem("userid", response.headers.get("userid"));
        }
        const data = await response.json();
        console.log(data);
        dispatch(setTodos(data.data.result));
      })

      .catch((err) => console.log(err));
  };
}
//===================================================================
// export const setTodo = todo => ({
//     type: 'SET_TODO',
//     todo
// })
// export function todoPost(todo) {
//     return dispatch => {
//         fetch('http://10.1.1.20:4001/api/task',
//             {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json', userid: localStorage.getItem("userid") },
//                 body: JSON.stringify(todo)
//             });
//         dispatch(setTodo(todo))
//     }
// }
// //===================================================================
export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  id,
});
export function deleteTodoPost(id) {
  return async (dispatch) => {
    let response = await fetch("http://10.1.1.20:4001/api/task/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        userid: localStorage.getItem("userid"),
      },
    });
    response = await response.json();
    dispatch(deleteTodo(id));
  };
}
//=====================================================
export const updateTask = (id,text) => {
  updateTaskFetch()
  return{ type: "UPDATE_TASK",
  id,
  text,}
};

export const updateStar = (id)=>{
  updateTaskFetch()
  return {
    type: "UPDATE_STAR",
    id,
    
  }
}

export const updateCompleted = (id)=>{
  updateTaskFetch()
  return {
    type: "UPDATE_COMPLETED",
    id,
    
  }
}

export function updateTaskFetch(id,todo) {
  return async () => {
    let response = await fetch("http://10.1.1.20:4001/api/task/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          userid: localStorage.getItem("userid"),
        },
        body: JSON.stringify(todo),
      });
    response = await response.json();
  };
}
