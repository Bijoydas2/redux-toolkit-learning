import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increaseByAmount, increment, reset } from './counterSlice';

const CounterView = () => {
    const count = useSelector(state => state.counter.count);
    console.log(count)
    const dispatch =useDispatch();
    return (
        <div className='text-center'>
            <h2>Count : {count}</h2>
            <button onClick={()=>dispatch(increment())} className='bg-blue-400 text-white mr-2 rounded-full p-2 px-4'>Increment</button>
            <button onClick={()=>dispatch(decrement())} className='bg-green-400 text-white mr-2 rounded-full p-2 px-4'>Decrement</button>
            <button onClick={()=>dispatch(reset())} className='bg-red-400 text-white rounded-full p-2 px-4'>Reset</button>
            <button onClick={()=>dispatch(increaseByAmount(5))} className='bg-red-400 text-white rounded-full p-2 px-4'>IncreseBy5</button>
        </div>
    );
};

export default CounterView;