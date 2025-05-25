import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import photo from '../assets/photo2.jpg';
import useTyped from '../hook/useTyped'; // Adjust the import path as needed

const Hero = () => {
  const typedText = useTyped(["Front-End Developer","Back-End Developer","Full-Stack Developer", "App Developer","UI/UX Design"], 100, 50, true);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Text Content */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            variants={fadeIn}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
              variants={fadeIn}
            >
              Hi, I'm <span className="text-red-500 dark:text-red-400">Ezedin Gulte</span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl h-4 font-semibold mb-6 text-gray-700 dark:text-gray-300"
              variants={fadeIn}
            >
              {typedText}<span className='text-red-500' >|</span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-400 max-w-lg"
              variants={fadeIn}
            >
              I build exceptional digital experiences that are fast, accessible, and visually appealing.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              variants={fadeIn}
            >
              <a
                href="#contact"
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Hire Me <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                View Work <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            variants={fadeIn}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden border-4 border-gray-300 dark:border-gray-700 shadow-lg group">
              <img
                src={photo}
                alt="Ezedin Gulte"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
