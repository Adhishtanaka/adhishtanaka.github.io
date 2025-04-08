import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="about"
      className="py-12 border-t border-gray-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2 className="text-2xl font-bold mb-6" variants={itemVariants}>
        About Me
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div variants={itemVariants}>
        <p className="text-gray-700 mb-4">
  I am a Computer Science student specializing in <strong>AI integration for software development</strong>. 
  My focus is on creating tools that empower other developers to build better applications, rather than just building consumer products.
</p>

<p className="text-gray-700 mb-4">
  I’m committed to designing clean, efficient user interfaces and developing scalable, high-performance applications. 
  I’m also passionate about exploring new technologies in <strong>AI, web, and mobile development</strong>.
</p>

<p className="text-gray-700">
  Driven by a desire to innovate and optimize, I am constantly looking for ways to push the boundaries of software development. 🚀
</p>


        </motion.div>
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-medium mb-3">Education</h3>
          <div className="mb-6">
            <h4 className="font-medium">Bachelor of Computer Science</h4>
            <p className="text-gray-600">NSBM Green University</p>
            <p className="text-gray-600">2022 - Present</p>
          </div>
          <p className="text-gray-700 text-sm">
            I hold a BSc (Honours) in Computer Science from NSBM Green
            University Town, a UGC-approved degree-awarding institution. The
            programme provides a broad computing perspective in the first year,
            focuses on the core Computer Science body of knowledge in the second
            and third years, includes compulsory industry training in the third
            year, and offers advanced subject knowledge in the fourth year.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
