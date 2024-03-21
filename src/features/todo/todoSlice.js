import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload, //payload is an object inside action
      };
      state.todos.push(todo); //updating the state
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload); // coz jo id user hume dev rha hai to remove can be
      // accessed through the action, action me bhi jo payload hai usme se we can take the value of id given by th user(to be removed)
    },
  },
});


export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer