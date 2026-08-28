import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Demos from './Demos'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/demos">Demos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/demos" element={<Demos />} />
      </Routes>
    </div>
  )
}

export default App

