import { ADD_TODO } from "../constants/constantsTodo";

const initialState = [];
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          date: action.date,
        },
      ];
    case "SET_TODOS":
      return action.todos;
    case "SET_TODO":
      return action.todo;
    case "DELETE_TODO":
      return state.filter((el) => el.id !== action.id);
    case "UPDATE_TASK":
      let newTodos = [...state];
      const index = newTodos.findIndex((elem) => elem.id === action.id);
      newTodos[index].text = action.text;
      state = newTodos;
      return state;
    case "UPDATE_STAR":
      return state.map((item) => {
        return item.id === action.id
          ? { ...item, isTagged: !item.isTagged }
          : item;
      });
    case "UPDATE_COMPLETED":
      return state.map((item) => {
        return item.id === action.id
          ? { ...item, isPerformed: !item.isPerformed }
          : item;
      });
    default:
      return state;
  }
};
export default todos;
