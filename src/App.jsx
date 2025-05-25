import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/MainPage'
import AllProjects from './component/AllProjects.jsx';
import AdminDashboard from './pages/Admin.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/admin" element={<AdminDashboard />}/>
      </Routes>
    </Router>
  );
}

export default App;