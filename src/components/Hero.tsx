import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="py-12 md:py-20">
    <motion.div 
      className="max-w-3xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Hi I'm Adhishtanaka Thiramithu Kulasooriya.
      </motion.h1>
      <motion.p 
        className="text-lg md:text-xl text-gray-600 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        My work is mainly focused on AI integration for software development, 
        creating robust tools that empower other developers to build exceptional applications.
      </motion.p>
      <motion.div 
        className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <motion.a 
          href="#contact" 
          className="group flex items-center text-lg font-medium hover:underline"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            Connect with me
        
            <motion.span
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowRight className="ml-2" size={20} />
            </motion.span>
          </motion.a>
          <motion.a 
            href="#" 
            className="text-gray-500 hover:text-gray-800"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            View Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;