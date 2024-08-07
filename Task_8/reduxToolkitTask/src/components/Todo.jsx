import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../Feature/Todo/todoSlice'

const Todo = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <>
            <div className='my-3 '>
                <h2 className='text-3xl text-bold text-white text-center'>Todos</h2>
                {
                    todos.map((todo) => (
                        <li className='list-none bg-slate-600 w-full flex justify-between items-center p-4 rounded-xl my-3 text-white' key={todo.id}>
                            {todo.text}
                            <span>
                                <button className='bg-red-800 py-3 px-10 text-md rounded-lg mx-3' onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                                <button className='bg-green-800 py-3 px-7 text-md rounded-lg' onClick={() => dispatch(updateTodo(todo.id))}>Update</button>
                            </span>
                        </li>
                    ))
                }
            </div>
        </>
    )
}

export default Todo;