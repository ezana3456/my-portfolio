import { FaDownload, FaMapMarkerAlt, FaEnvelope, FaPhone, FaUserTie } from 'react-icons/fa';
import photo from '../assets/photo2.jpg'

const About = () => {
  const personalInfo = [
    { icon: <FaUserTie className="text-red-500" />, label: "Name", value: "Ezedin Gulte" },
    { icon: <FaEnvelope className="text-red-500" />, label: "Email", value: "ezedin@example.com" },
    { icon: <FaMapMarkerAlt className="text-red-500" />, label: "From", value: "Addis Ababa, Ethiopia" },
    { icon: <FaPhone className="text-red-500" />, label: "Freelance", value: "Available" }
  ];

  const skills = [
    { name: "Frontend Development", level: 90 },
    { name: "Backend Development", level: 80 },
    { name: "UI/UX Design", level: 75 },
    { name: "Mobile Development", level: 70 }
  ];

  return (
    <section id="about" className="py-20 from-gray-100 to-gray-300 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About <span className="text-red-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-xl overflow-hidden shadow-2xl group">
              <img 
                src={photo}
                alt="Ezedin Gulte" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:w-2/3">
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
              Full-Stack Developer
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate developer with expertise in creating responsive and user-friendly web applications. 
              I specialize in JavaScript frameworks like React and Next.js, and I love transforming complex problems 
              into elegant, intuitive solutions.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or enjoying outdoor activities. I believe in continuous learning and pushing the boundaries of what's 
              possible with code.
            </p>
            
            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {personalInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-200">{item.label}</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Skills Progress Bars */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">My Skills</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-red-500 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Download CV Button */}
            <a 
              href="/path/to/cv.pdf" 
              download
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <FaDownload /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;