import { configureStore } from "@reduxjs/toolkit";
import bookReducer from '../features/book/bookSlice'
import postReducer from "../features/Posts/postSlice"
const store = configureStore({
    reducer: {
      booksR: bookReducer,
      posts: postReducer
    }
})

export default store;