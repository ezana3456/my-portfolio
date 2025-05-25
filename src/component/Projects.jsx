import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiMongodb, SiVuedotjs, SiFirebase, SiTailwindcss, SiJavascript, SiBootstrap } from 'react-icons/si';

const Projects = () => {
  const projects = [
{
  id: 1,
  title: "merchDeliver Platform",
  description: "A platform connecting merchandise delivery service providers with customers, offering seamless delivery solutions and real-time tracking.",
  tags: [
    { name: "React", icon: <SiReact className="text-blue-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> }
  ],
  image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
  github: "https://github.com/Haileamlak-bekele/MerchDelivery1",
  demo: "#"
}
,
    {
      id: 2,
      title: "Task Management App",
      description: "Kanban-style productivity app with drag-and-drop functionality and real-time updates.",
      tags: [
        { name: "Vue.js", icon: <SiVuedotjs className="text-green-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> }
      ],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather information with 5-day forecast, location search, and interactive maps.",
      tags: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "API", icon: <FaCode className="text-gray-500" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> }
      ],
      image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      github: "https://github.com/ezana3456/weatherDasboard",
  
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
          >
            My <span className="text-red-500">Projects</span>
          </motion.h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {projects.map(project => (
            <motion.div 
              key={project.id}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex space-x-3">
                    <a 
                      href={project.github} 
                      className="bg-white text-gray-800 px-3 py-1 rounded-md text-sm font-medium flex items-center gap-1 hover:bg-gray-100"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> Code
                    </a>
                    <a 
                      href={project.demo} 
                      className="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-medium flex items-center gap-1 hover:bg-red-600"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full flex items-center gap-1"
                    >
                      {tag.icon} {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <a 
            href="#projects " 
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View All Projects <FaExternalLinkAlt />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;