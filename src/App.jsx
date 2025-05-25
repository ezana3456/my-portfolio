import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/MainPage';
import AllProjects from './component/AllProjects.jsx';
import AdminDashboard from './pages/Admin.jsx';

function App() {
  return (
    <Router >
      <Routes >
        <Route path="/my-portfolio" element={<Home />} />
        <Route path="/my-portfolio/projects" element={<AllProjects />} />
        <Route path="/my-portfolio/admin" element={<AdminDashboard />}/>
      </Routes>
    </Router>
  );
}

export default App;