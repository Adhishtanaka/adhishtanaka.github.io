import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["TypeScript", "Python", "Java", "C#", "Dart"]
    },
    {
      title: "Cloud & Backend Services",
      skills: ["Firebase", "Supabase", "OpenAI", "Gemini"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Firebase Firestore"]
    },
    {
      title: "DevOps & CI/CD",
      skills: ["Docker", "GitHub Actions", "Postman"]
    },
    {
      title: "Technologies",
      skills: ["Flutter", "React", "Express", "Next.js", "TailwindCSS", "Langchain", "Tensorflow", "SkitLearn", "FastAPI", "JavaFX", "Spring Boot", "ASP.NET"]
    }
  ];

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

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1 
      } 
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
  };

  return (
    <motion.section 
      id="skills" 
      className="py-12 border-t border-gray-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h2 
        className="text-2xl font-bold mb-6"
        variants={categoryVariants}
      >
        Technical Skills
      </motion.h2>
      <div className="space-y-6">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            variants={categoryVariants}
          >
            <h3 className="text-lg font-medium mb-2">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span 
                  key={skillIndex} 
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm"
                  variants={skillVariants}
                  whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;