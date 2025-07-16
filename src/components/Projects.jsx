import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink, HiCode, HiFilter } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "Fuel Indeed",
      description: "Fuel booking system with real-time availability and admin control. Users can book fuel, view history. Admins can manage bookings and view analytics.",
      image: "/profileimg/Fuel.jpg",
      technologies: ["Java", "Spring", "JSP", "Servlets", "MySQL", "JavaScript", "HTML", "CSS"],
      category: "Full Stack",
      github: "https://github.com/bhavesh11230/Fuel_Indeed-Fuel_Booking_Web_Application.git",
      demo: "#",
      featured: true
    },
    {
      title: "InvenTrack",
      description: "Spring-based tool for inventory handling with CRUD operations support.",
      image: "/profileimg/Inventory.jpeg",
      technologies: ["Java", "Spring", "JSP", "Servlets", "MySQL", "JavaScript", "HTML", "CSS"],
      category: "Full Stack",
      github: "https://github.com/bhavesh11230/Inventory_Management_System.git",
      demo: "#",
      featured: true
    },
    {
      title: "QuickBank ",
      description: "Banking app with customer portal, fund transfers, and account management. Includes admin dashboard for user management and transaction history.",
      image: "/profileimg/Bank.webp",
      technologies: ["Java", "JDBC", "JSP", "Servlets", "MySQL"],
      category: "Full Stack",
      github: "https://github.com/bhavesh11230/Banking_Web_Application.git",
      demo: "#",
      featured: false
    },
    {
      title: "Practical Manager",
      description: "Role-based backend for managing users, subjects, and practicals securely.",
      image: "/profileimg/Practical.webp",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "RBAC", "REST API"],
      category: "Backend",
      github: "https://github.com/bhavesh11230/Practical_Management_System.git",
      demo: "#",
      featured: false
    },
    {
      title: "T&P Review",
      description: "Students share placement reviews; admins moderate via role-based panel.",
      image: "/profileimg/Review.webp",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "RBAC", "REST API"],
      category: "Backend",
      github: "https://github.com/bhavesh11230/T_and_P_ReviewSystem.git",
      demo: "#",
      featured: true
    },
    // sample project for frontend
    // {
    //   title: "Mobile App Backend",
    //   description: "Scalable backend infrastructure for a mobile application with real-time messaging and push notifications.",
    //   image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   technologies: ["Node.js", "Socket.io", "Redis", "AWS", "MongoDB"],
    //   category: "Backend",
    //   github: "#",
    //   demo: "#",
    //   featured: false
    // }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2 bg-white dark:bg-gray-900 p-2 rounded-full shadow-lg">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiFilter className="inline mr-2" />
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="relative group h-full"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full min-h-[480px]">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={16} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <HiExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 mt-auto">
                    <motion.a
                      href={project.github}
                      className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <HiCode size={16} />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <HiExternalLink size={16} />
                      <span>Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
