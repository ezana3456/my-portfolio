import { FaGithub, FaExternalLinkAlt, FaCode, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiMongodb, SiVuedotjs, SiFirebase, SiTailwindcss, SiJavascript, SiBootstrap } from 'react-icons/si';
import { Link } from 'react-router-dom';

const AllProjects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A fully responsive e-commerce platform with product listings, cart functionality, and secure checkout process.",
      longDescription: "This e-commerce platform was built with a modern tech stack to provide a seamless shopping experience. Features include user authentication, product search and filtering, shopping cart persistence, and Stripe integration for payments. The admin dashboard allows for inventory management and order tracking.",
      tags: [
        { name: "React", icon: <SiReact className="text-blue-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "Redux", icon: <SiReact className="text-purple-500" /> },
        { name: "Stripe", icon: <FaCode className="text-blue-500" /> }
      ],
      features: [
        "User authentication and authorization",
        "Product search and filtering",
        "Shopping cart functionality",
        "Stripe payment integration",
        "Admin dashboard"
      ],
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Kanban-style productivity app with drag-and-drop functionality and real-time updates.",
      longDescription: "A collaborative task management application inspired by Trello. Users can create boards, lists, and cards to organize their work. The drag-and-drop interface makes it easy to prioritize tasks. Real-time updates are powered by Firebase, allowing teams to collaborate effectively. Additional features include task assignments, due dates, and activity logging.",
      tags: [
        { name: "Vue.js", icon: <SiVuedotjs className="text-green-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Vuex", icon: <SiVuedotjs className="text-green-300" /> },
        { name: "Drag & Drop", icon: <FaCode className="text-gray-500" /> }
      ],
      features: [
        "Kanban-style task management",
        "Drag-and-drop interface",
        "Real-time collaboration",
        "Task assignments and due dates",
        "Activity history"
      ],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather information with 5-day forecast, location search, and interactive maps.",
      longDescription: "A weather application that provides current conditions and 5-day forecasts for any location worldwide. The app integrates with the OpenWeatherMap API to fetch real-time data. Users can search by city name or use geolocation to get weather for their current position. The dashboard includes interactive charts showing temperature trends and precipitation probability.",
      tags: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "API", icon: <FaCode className="text-gray-500" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
        { name: "Chart.js", icon: <FaCode className="text-red-500" /> },
        { name: "Geolocation", icon: <FaCode className="text-blue-500" /> }
      ],
      features: [
        "Current weather conditions",
        "5-day forecast",
        "Location search",
        "Interactive weather maps",
        "Temperature trend charts"
      ],
      image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      github: "https://github.com/ezana3456/weatherDasboard",
      demo: "https://weatherdasboard.onrender.com"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            to="#my-portfolio" 
            className="inline-flex items-center text-red-500 hover:text-red-600 font-medium transition-colors duration-300"
          >
            <FaArrowLeft className="mr-2" /> Back to Home
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-red-500">Projects</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here's a collection of my recent work. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{project.longDescription}</p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full flex items-center gap-1 text-sm"
                      >
                        {tag.icon} {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-300"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> View Code
                  </a>
                  <a 
                    href={project.demo} 
                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-300"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;