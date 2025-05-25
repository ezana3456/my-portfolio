import { useState, useEffect } from 'react';
import { FaSignOutAlt, FaPlus, FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';
import { FiHome, FiBriefcase, FiSettings, FiUsers } from 'react-icons/fi';

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Force dark mode on component mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);

  // Load sample projects
  useEffect(() => {
    const sampleProjects = [
      {
        id: 1,
        title: "E-commerce Platform",
        description: "Full-featured online store with payment processing",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        status: "Published",
        imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df"
      },
      {
        id: 2,
        title: "Task Management App",
        description: "Kanban-style productivity application with real-time updates",
        tags: ["Vue.js", "Firebase", "Tailwind CSS"],
        status: "Published",
        imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3"
      },
      {
        id: 3,
        title: "Weather Dashboard",
        description: "Real-time weather forecasts with interactive maps",
        tags: ["JavaScript", "API", "Chart.js"],
        status: "Draft",
        imageUrl: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b"
      }
    ];
    setProjects(sampleProjects);
  }, []);

  const handleDelete = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  const handleEdit = (project) => {
    setIsEditing(true);
    setCurrentProject(project);
  };

  const handleSave = () => {
    if (!currentProject) return;
    setProjects(projects.map(p => 
      p.id === currentProject.id ? currentProject : p
    ));
    setIsEditing(false);
    setCurrentProject(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProject({
      ...currentProject,
      [name]: name === 'tags' ? value.split(',') : value
    });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full">
          <h2 className="text-2xl font-bold text-white mb-6">Admin Login</h2>
          <button 
            onClick={() => setIsLoggedIn(true)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Sign In (Demo)
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-900 text-gray-200">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-gray-800 p-4 border-r border-gray-700 flex flex-col">
        <h1 className="text-2xl font-bold text-white mb-8">Portfolio Admin</h1>
        
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700 text-gray-300 hover:text-white">
                <FiHome className="mr-3" /> Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 rounded bg-gray-700 text-white">
                <FiBriefcase className="mr-3" /> Projects
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700 text-gray-300 hover:text-white">
                <FiUsers className="mr-3" /> Users
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700 text-gray-300 hover:text-white">
                <FiSettings className="mr-3" /> Settings
              </a>
            </li>
          </ul>
        </nav>

        <button 
          onClick={() => setIsLoggedIn(false)}
          className="mt-auto flex items-center p-2 text-gray-400 hover:text-white"
        >
          <FaSignOutAlt className="mr-3" /> Logout
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">Project Management</h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center">
            <FaPlus className="mr-2" /> Add Project
          </button>
        </div>

        {isEditing ? (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Edit Project</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={currentProject.title}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Status</label>
                <select
                  name="status"
                  value={currentProject.status}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
                >
                  <option value="Published">Published</option>
                  <option value="Draft">Draft</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
                <textarea
                  name="description"
                  value={currentProject.description}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-400 mb-1">Tags (comma separated)</label>
                <input
                  type="text"
                  name="tags"
                  value={currentProject.tags.join(',')}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-400 mb-1">Image URL</label>
                <input
                  type="text"
                  name="imageUrl"
                  value={currentProject.imageUrl}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg flex items-center"
              >
                <FaTimes className="mr-2" /> Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg flex items-center"
              >
                <FaSave className="mr-2" /> Save Changes
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Project</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Technologies</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-gray-900 divide-y divide-gray-800">
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-md object-cover" src={project.imageUrl} alt={project.title} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-white">{project.title}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-400 max-w-xs truncate">{project.description}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        project.status === 'Published' 
                          ? 'bg-green-900 text-green-300' 
                          : project.status === 'Draft' 
                            ? 'bg-yellow-900 text-yellow-300' 
                            : 'bg-gray-700 text-gray-300'
                      }`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleEdit(project)}
                        className="text-blue-400 hover:text-blue-300 mr-4"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;