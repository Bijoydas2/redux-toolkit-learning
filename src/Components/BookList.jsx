import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../features/book/bookSlice';

const BookList = ({onHandleEdit}) => {

 const {books}=  useSelector(state=> state.booksR)
 console.log(books)
 const dispatch =useDispatch();

 const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };
 const handleEdit =(book)=> {
onHandleEdit(book)
 }
    return (
        <div className='max-w-7xl mx-auto '>
            <h2 className='text-center text-5xl font-bold mb-10'>List of Books</h2>
          {books && books.length > 0 ? (
              <ul>
                {
                    books.map(book => {
                       return (
                       <li key={book.id} className='text-green-400 text-sm font-sembold text-center mt-5'>{book.title} by {book.author} - ${book.price} - {book.quantity} 
                       <button onClick={() => handleDelete(book.id)}  className='bg-red-400 text-white rounded-full p-2 ml-2 px-4'>Delate</button>
                       <button onClick={() => handleEdit(book)}  className='bg-green-600 text-white rounded-full p-2 ml-2 px-4'>Edit</button>
                       </li>
                        
                       )

                    })
                }
            </ul>
          ): <p> No Book exist</p>}
        </div>
    );
};

export default BookList;