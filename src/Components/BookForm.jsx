import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../features/book/bookSlice';
const BookForm = ({bookToEdit,onCancel}) => {
    const dispatch =useDispatch()
    const [book, setBook] = useState({
        title:'',
        author: '',
        price: '',
        quantity: '',
    })

   useEffect(()=>{
    if(bookToEdit){
        setBook(bookToEdit)
    }
   },[bookToEdit])

    const handleChange= (e)=>{
    const {name ,value} = e.target;
    setBook((prevBook)=> ({...prevBook, [name]: value}));

    }

    const handleSubmit = (e)=>{
        e.preventDefault();
       if (bookToEdit){
          dispatch(updateBook(book))
       }
       else{
         dispatch(addBook({...book, id:nanoid()}))
       }
       setBook({
         title:'',
        author: '',
        price: '',
        quantity: '',
       })
    }

    
    return (
        <div className='text-center'>
            <h1 className='text-5xl mt-10 text-black font-bold mb-5'>Book Form</h1>
           <form onSubmit={handleSubmit}>

             <input className='p-2 rounded-full bg-slate-200 mr-2' type="text" name="title" value={book.title} onChange={handleChange} placeholder='enter title' required/>
            <input className='p-2 rounded-full bg-slate-200 mr-2' type="text" name="author" value={book.author} onChange={handleChange} placeholder='enter author' required/>
            <input className='p-2 rounded-full bg-slate-200 mr-2' type="text" name="price" value={book.price} onChange={handleChange} placeholder='enter price' required/>
            <input className='p-2 rounded-full bg-slate-200 mr-2' type="text" name="quantity" value={book.quantity} onChange={handleChange} placeholder='enter quantity' required/>
            <button type='submit' className='bg-red-400 text-white rounded-full p-2 ml-2 px-4'>{bookToEdit ? "Update Book":"Add Book"}</button>
            {
                bookToEdit && <button onClick={()=>onCancel()} className='bg-red-400 text-white rounded-full p-2 ml-2 px-4'>Cancel</button>
            }
           </form>



        </div>
    );
};

export default BookForm;