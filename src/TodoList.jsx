import { useState } from 'react';



function TodoList() 

{
const [todos, setTodos] = useState([])
const [inputValue, setInputValue] = useState('')
    return (
        <div>
            <h1>Todo List</h1>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => {setTodos([...todos, inputValue]); setInputValue('')}}>Add Todo</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => setTodos(todos.filter((t,i) => i !== index))}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;