import React, { useState, useEffect, useRef } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt,
  FaFigma, FaDatabase
} from 'react-icons/fa';
import { SiTypescript, SiRedux, SiNextdotjs, SiTailwindcss, SiMongodb } from 'react-icons/si';

const Skills = () => {
  const skills = {
    technical: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Node.js', level: 80 },
    ],
    professional: [
      { name: 'Communication', level: 90 },
      { name: 'Team Collaboration', level: 85 },
      { name: 'Project Management', level: 80 },
      { name: 'Problem Solving', level: 95 },
      { name: 'Creativity', level: 90 },
      { name: 'Adaptability', level: 85 },
    ],
     tools: [
      { name: 'HTML5', icon: <FaHtml5 size={32} />, color: 'text-orange-500' },
      { name: 'CSS3', icon: <FaCss3Alt size={32} />, color: 'text-blue-500' },
      { name: 'JavaScript', icon: <FaJs size={32} />, color: 'text-yellow-400' },
      { name: 'React', icon: <FaReact size={32} />, color: 'text-blue-400' },
      { name: 'Redux', icon: <SiRedux size={32} />, color: 'text-purple-500' },
      { name: 'Next.js', icon: <SiNextdotjs size={32} />, color: 'text-black dark:text-white' },
      { name: 'Node.js', icon: <FaNodeJs size={32} />, color: 'text-green-500' },
      { name: 'Tailwind', icon: <SiTailwindcss size={32} />, color: 'text-cyan-400' },
      { name: 'Git', icon: <FaGitAlt size={32} />, color: 'text-orange-600' },
      { name: 'Figma', icon: <FaFigma size={32} />, color: 'text-purple-500' },
      { name: 'MongoDB', icon: <SiMongodb size={32} />, color: 'text-green-600' },
      { name: 'SQL', icon: <FaDatabase size={32} />, color: 'text-blue-600' },
    ]
  };

  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);
  const requestRef = useRef();
  const animationSpeed = 30; // pixels per frame (lower = slower)

  useEffect(() => {
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const totalWidth = (skills.tools.length * 80) + containerWidth; // 80px per item + container width
    
    const animate = () => {
      setOffset(prevOffset => {
        const newOffset = prevOffset + 0.5; // Very small increment for smoothness
        if (newOffset >= totalWidth) {
          return 0;
        }
        return newOffset;
      });
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-red-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.technical.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                    <div
                      className="bg-red-500 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Professional Skills
            </h3>
            <div className="space-y-6">
              {skills.professional.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                    <div
                      className="bg-red-500 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Technologies - Continuous Smooth Slider */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            Tools & Technologies
          </h3>
          <div 
            ref={containerRef}
            className="relative overflow-hidden py-2"
          >
            <div className="flex items-center">
              <div 
                className="flex whitespace-nowrap"
                style={{ 
                  transform: `translateX(-${offset}px)`,
                  transition: 'transform 0.05s linear' // Very fast transition for smoothness
                }}
              >
                {/* Render the tools twice for seamless looping */}
                {[...skills.tools, ...skills.tools,...skills.tools,...skills.tools].map((tool, index) => (
                  <div 
                    key={index}
                    className="inline-flex flex-col items-center mx-3" // Reduced margin between items
                    style={{ minWidth: '60px' }} // Smaller fixed width for each item
                  >
                    <div className={`text-2xl mb-1 ${tool.color}`}>
                      {tool.icon}
                    </div>
                    <span className="text-xs text-gray-700 dark:text-gray-300">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;