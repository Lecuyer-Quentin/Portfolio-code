import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Public from './pages/Public'
import Project from './pages/Project'
import Error404 from './pages/Error404'
import ProjectsList from './pages/ProjectsList'

function App() {

  return (
      <Routes>
      <Route path="/" element={<Home />} >
        {/* Public Route */}
        <Route index element={<Public />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/projects/:id" element={<Project />} />
        </Route>
        {/* Private Route */}
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route path="*" element={<Error404 />} />      
      </Routes>

  )
}

export default App
