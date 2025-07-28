import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
import ModalComponent from './problems/ModalComponent/ModalComponent'
import TodoApp from './problems/TodoApp/TodoApp'
import TabForm from './problems/TabFormBuild/TabForm'
import Pagination from './problems/Pagination/Pagination'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectDetails />} />
          <Route path="/projects/modalcomponent" element={<ModalComponent />} />
          <Route path="/projects/todoapp" element={<TodoApp />} />
          <Route path="/projects/tabformbuild" element={<TabForm />} />
          <Route path="/projects/pagination" element={<Pagination />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App