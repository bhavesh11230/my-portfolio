import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiLocationMarker } from 'react-icons/hi';
import { FaCoffee, FaMugHot  } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[500px]">
          {/* Text Column */}
          <div className="order-2 lg:order-1 flex flex-col justify-center h-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Hello! I'm Bhavesh, a passionate and self-taught Computer Engineering student aspiring to become a full-stack developer.
                  I'm dedicated to building innovative solutions that make a real difference in people's lives. With a strong interest in
                  web development, I continuously work on improving my skills while practicing data structures and algorithms to sharpen
                  my problem-solving abilities.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm committed to excellence and believe in staying up to date with the latest technologies to keep growing as a developer.
                  I'm currently seeking opportunities where I can contribute meaningfully, collaborate with like-minded individuals, and make
                  a lasting impact in the field of software engineering.
                </p>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {/* Education Card */}
                  <motion.div
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <HiAcademicCap className="text-2xl text-blue-600" />
                      <h3 className="font-semibold text-gray-900 dark:text-white">Education</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      B.Tech in Computer Engineering<br />
                      [R. C. Patel Institute of Technology, Shirpur]
                    </p>
                  </motion.div>

                  {/* Location Card */}
                  <motion.div
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <HiLocationMarker className="text-2xl text-purple-600" />
                      <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Shirpur, MH.<br />
                      Open to Remote Work
                    </p>
                  </motion.div>
                </div>

                {/* Coffee Line */}
                <motion.div
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 mt-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <FaMugHot className="text-xl text-amber-600" />
                  <p>Fueled by tea and curiosity</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2 flex justify-center items-center h-full">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <motion.div
                  className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/profileimg/Profile.jpg" 
                    // src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Bhavesh"
                    className="w-full h-full object-cover rounded-full p-2"
                  />
                </motion.div>

                {/* Spinning Coffee Icon */}
                {/* <motion.div
                  className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <FaMugHot className="text-2xl text-amber-600" />
                </motion.div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
