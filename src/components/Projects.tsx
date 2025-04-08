import React from 'react';
import {
  ArrowRight,
  Search,
  Calendar,
  Smartphone,
  Download,
  BarChart,
  CircleUser
} from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: 'AANA',
      description: 'An AI-powered search engine with real-time smart responses.',
      tags: ['AI', 'Search', 'React'],
      icon: <Search size={24} />,
      link: 'https://github.com/Adhishtanaka/aana.'
    },
    {
      id: 2,
      name: 'Month Extension',
      description: 'A VS Code extension for tracking daily work and GitHub commits.',
      tags: ['VS Code', 'Productivity', 'GitHub'],
      icon: <Calendar size={24} />,
      link: 'https://github.com/Adhishtanaka/month-extension'
    },
    {
      id: 3,
      name: 'YourApp',
      description: 'An AI-powered mobile IDE for generating functional apps.',
      tags: ['Mobile', 'AI', 'Development'],
      icon: <Smartphone size={24} />,
      link: 'https://github.com/Adhishtanaka/yourapp'
    },
    {
      id: 4,
      name: 'avtxt',
      description: 'A Node.js library for generating customizable SVG avatars.',
      tags: ['Node.js', 'SVG', 'Library'],
      icon: <CircleUser size={24} />,
      link: 'https://github.com/Adhishtanaka/avtxt'
    },
    {
      id: 5,
      name: 'dwnld',
      description: 'A fast and lightweight cross-platform download manager, offering a powerful alternative to IDM.',
      tags: ['Java', 'JavaFX', 'Download Manager'],
      icon: <Download size={24} />,
      link: 'https://github.com/Adhishtanaka/dwnld'
    },
    {
      id: 6,
      name: 'SysGen',
      description: 'A CLI tool for generating AI-powered synthetic datasets from Markdown files.',
      tags: ['AI', 'Data Science', 'CLI'],
      icon: <BarChart size={24} />,
      link: 'https://github.com/Adhishtanaka/sysgen'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section
      id="projects"
      className="py-12 border-t border-gray-200 dark:border-gray-800 transition-colors"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="flex justify-between items-center mb-8">
        <motion.h2 className="text-2xl font-bold" variants={itemVariants}>
          Featured Projects
        </motion.h2>
        <motion.a
          href="https://github.com/Adhishtanaka?tab=repositories"
          className="group flex items-center text-sm font-medium hover:underline"
          variants={itemVariants}
          whileHover={{ x: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          View all projects
          <ArrowRight className="ml-1" size={16} />
        </motion.a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white/80 backdrop-blur-sm"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-4">
              <motion.div
                className="bg-gray-100 p-2 rounded-lg mr-3"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {project.icon}
              </motion.div>
              <h3 className="text-lg font-medium">{project.name}</h3>
            </div>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <motion.span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center text-sm font-medium hover:underline"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              View project
              <ArrowRight className="ml-1" size={16} />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
