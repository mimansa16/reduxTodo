import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})  
// now we'll deal with addTodo and removeTodo seperately as addTodo se we can send data to the state while through removeTodo we are accessing the new todo state
