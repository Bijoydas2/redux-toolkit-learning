
import { useState } from 'react';
import './App.css'
import BookForm from './Components/BookForm'
import BookList from './Components/BookList'
import PostView from "./features/Posts/postView"

function App() {
 const [bookToEdit, setBookToEdit]=useState(null);
 const handleEdit =(book)=> {
 setBookToEdit(book)
 }

 const hancleCancelEdit=(book)=>{
  setBookToEdit(book)
 }

  return (
    <div className='bg-slate-400 min-h-screen '>
    <BookList onHandleEdit={handleEdit}/>
    <BookForm bookToEdit={bookToEdit} onCancel={hancleCancelEdit}/>
    <PostView/>
    </div>
  )
}

export default App
