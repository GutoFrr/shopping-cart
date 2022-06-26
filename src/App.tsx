import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import About from './pages/About'
import Home from './pages/Home'
import Store from './pages/Store'

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
