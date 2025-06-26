import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJsSquare, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaAws,
  FaDocker,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql, 
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiGraphql,
  SiRedis
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: FaReact, level: 95, color: "text-blue-500" },
        { name: "JavaScript", icon: FaJsSquare, level: 92, color: "text-yellow-500" },
        // { name: "TypeScript", icon: SiTypescript, level: 88, color: "text-blue-600" },
        // { name: "Next.js", icon: SiNextdotjs, level: 85, color: "text-gray-900 dark:text-white" },
        { name: "HTML5", icon: FaHtml5, level: 95, color: "text-orange-500" },
        { name: "CSS3", icon: FaCss3Alt, level: 90, color: "text-blue-500" },
        { name: "Tailwind", icon: SiTailwindcss, level: 92, color: "text-cyan-500" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: 90, color: "text-green-500" },
        // { name: "Python", icon: FaPython, level: 85, color: "text-blue-500" },
        { name: "Express", icon: SiExpress, level: 88, color: "text-gray-700 dark:text-gray-300" },
        // { name: "GraphQL", icon: SiGraphql, level: 80, color: "text-pink-500" },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", icon: SiMongodb, level: 87, color: "text-green-500" },
        { name: "PostgreSQL", icon: SiPostgresql, level: 83, color: "text-blue-600" },
        // { name: "Redis", icon: SiRedis, level: 78, color: "text-red-500" },
        { name: "Git", icon: FaGitAlt, level: 92, color: "text-orange-500" },
        // { name: "AWS", icon: FaAws, level: 75, color: "text-orange-400" },
        // { name: "Docker", icon: FaDocker, level: 80, color: "text-blue-500" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are the technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <skill.icon className={`text-2xl ${skill.color}`} />
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Quick Skills Overview
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skillCategories.flatMap(category => category.skills).map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex items-center space-x-2 bg-white dark:bg-gray-900 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <skill.icon className={`text-lg ${skill.color}`} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;