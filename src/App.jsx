import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-6">
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App