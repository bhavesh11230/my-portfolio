import React from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase, HiCalendar } from 'react-icons/hi';
import { FaBuilding } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Java Developer Intern",
      company: "R3 SYSTEMS INDIA PVT. LTD.",
      period: "Jul 2024",
      // location: "Shirpur",
      description: [
        "Gained hands-on experience in Java, JDBC, Servlets, and the Spring Framework.",
        "Worked on scalable web applications, enhanced database performance, and collaborated on real-time projects under professional mentorship.",
      ],
      technologies: ["Java", "Spring", "JDBC", "JavaScript"]
    },
    {
      title: "Full Stack Developer",
      company: "Akatsuki Coding Club",
      period: "Sep 2024 – Present",
      location: "Remote",
      description: [
        "Contributed to multiple full stack development projects, handling both frontend and backend tasks.",
        "Involved in designing user interfaces, developing RESTful APIs, and managing database operations.",
        "Played a key role in planning and managing technical operations during coding events and workshops organized by the club."
      ],
      technologies: ["React", "Express.js", "MongoDB", "Git", "Tailwind CSS"]
    },
    // {
    //   title: "Frontend Developer",
    //   company: "StartupXYZ",
    //   period: "2019 - 2020",
    //   location: "New York, NY",
    //   description: [
    //     "Developed user interfaces for a high-traffic e-commerce platform",
    //     "Collaborated with UX designers to implement pixel-perfect designs",
    //     "Optimized website performance and improved loading times by 30%",
    //     "Implemented A/B testing frameworks to improve user engagement"
    //   ],
    //   technologies: ["JavaScript", "React", "CSS3", "HTML5", "Redux"]
    // },
    // {
    //   title: "Junior Web Developer",
    //   company: "Digital Agency Pro",
    //   period: "2018 - 2019",
    //   location: "Los Angeles, CA",
    //   description: [
    //     "Built responsive websites for various clients using HTML, CSS, and JavaScript",
    //     "Learned modern development practices and version control with Git",
    //     "Assisted in maintaining and updating existing client websites",
    //     "Participated in client meetings and project planning sessions"
    //   ],
    //   technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "WordPress"]
    // }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            My journey and the experiences that shaped my career
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

                {/* Content Card */}
                <motion.div
                  className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center space-x-2 mb-3">
                      <HiBriefcase className="text-blue-600 text-xl" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                    </div>

                    <div className="flex items-center space-x-4 mb-3 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center space-x-1">
                        <FaBuilding className="text-sm" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <HiCalendar className="text-sm" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {exp.location}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;