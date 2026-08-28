import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Demos from './Demos'
import WeatherApp from './Weather'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/demos">Demos</Link> | <Link to="/weather">Weather</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/demos" element={<Demos />} />
        <Route path="/weather" element={<WeatherApp />} />
      </Routes>
    </div>
  )
}

export default App

