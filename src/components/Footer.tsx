import React from 'react';
import { Mail, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { type: "spring", stiffness: 400, damping: 10 } }
  };

  return (
    <motion.footer 
      id="contact" 
      className="bg-white dark:bg-[#272727] border-t border-gray-200 dark:border-gray-800 py-12 transition-colors"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
          <h3 className="text-xl font-bold mb-4 dark:text-white transition-colors">Let's connect</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors">
              I'm always open to interesting conversations, collaborations, and new opportunities.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="mailto:kulasoooriyaa@gmail.com" 
                target='_blank' 
                 className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                variants={iconVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail size={24} />
              </motion.a>
              <motion.a 
                href="https://github.com/adhishtanaka"
                target='_blank' 
                 className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                variants={iconVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/adhishtanaka"
                target='_blank' 
                 className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                variants={iconVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a 
                href="https://x.com/adhishtanaka"
                target="_blank" 
                 className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                variants={iconVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Twitter size={24} />
              </motion.a>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
          <h3 className="text-xl font-bold mb-4 dark:text-white transition-colors">I am thrilled to answer to your next project</h3>
            <motion.a 
              href="mailto:kulasoooriyaa@gmail.com" 
              className="group flex items-center text-lg font-medium hover:underline dark:text-white"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              kulasoooriyaa@gmail.com
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="ml-2" size={20} />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <p className="text-gray-500 mb-4 md:mb-0">© 2025 Adhishtanaka Thiramithu Kulasooriya. All rights reserved.</p>
         
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;