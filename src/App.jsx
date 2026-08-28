import { useState } from 'react'
import Greet from './Greeting'
import {useEffect} from 'react'
import Farewell from './Farewell'
import TodoList from './TodoList'

function App() {
  const [count, setCount] = useState(0)
  const names = ["Dan", "Alex", "Sam"]
  const [showMessage, setMessage] = useState(false)
  const [name , setName] = useState("");
  const [age, setAge] = useState(0);
  const [joke, setJoke] = useState(null)

  useEffect(() => {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then((response) => response.json())
    .then((data) => setJoke(data))
}, [])

  return (
    <div>
      <h1>My First React App</h1>
      <button onClick={() => setCount(count + 1)}>
        Count is {count}
      </button>

      <p>This is a test</p>

      {names.map((name) => (
        <Greet key={name} name={name} />
      ))}

      <button onClick={() => setMessage(!showMessage)}>
        Toggle Message
      </button>
      {showMessage && <p>This is a toggled message</p>}

      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}</p>

      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      <p>You are {age} years old</p>

      {joke && <p>{joke.setup} — {joke.punchline}</p>}

      <Farewell name="Dan" />
      <TodoList />

    </div>
  
  )
}

export default App
