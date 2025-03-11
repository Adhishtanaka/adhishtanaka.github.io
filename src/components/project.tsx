import { motion } from "framer-motion";
import { useDarkModeStore } from "../utils/useDarkModeStore";

export default function Projects() {
  const { darkMode } = useDarkModeStore();
  

  const themeColors = {
    bg: darkMode ? "bg-slate-900" : "bg-slate-50",
    text: darkMode ? "text-slate-100" : "text-slate-900",
    heading: darkMode ? "text-[#a0b8d8]" : "text-[#1e3a5f]",
    subheading: darkMode ? "text-[#81a4c7]" : "text-[#2c5282]",
    accent: darkMode ? "text-[#64b5f6]" : "text-[#1976d2]",
    subtle: darkMode ? "bg-[#1e293b]" : "bg-blue-50",
    muted: darkMode ? "text-[#90caf9]" : "text-[#2196f3]",
    skillCard: darkMode ? "bg-[#1e3a5f]" : "bg-blue-100",
    card: darkMode ? "bg-slate-800" : "bg-white",
    border: darkMode ? "border-slate-700" : "border-slate-300",
    button: darkMode
      ? "bg-[#2196f3] hover:bg-[#1976d2]"
      : "bg-[#1976d2] hover:bg-[#1565c0]",
    secondaryButton: darkMode
      ? "bg-slate-700 hover:bg-slate-600"
      : "bg-slate-200 hover:bg-slate-300",
  };
  
  
  const projects = [
    { 
      name: "AANA", 
      desc: "An AI-powered search engine with real-time smart responses.", 
      icon: "🔍", 
      link: "https://github.com/Adhishtanaka/aana",
      tags: ["AI", "Search", "React"] 
    },
    { 
      name: "Month Extension", 
      desc: "A VS Code extension for tracking daily work and GitHub commits.", 
      icon: "📅", 
      link: "https://github.com/Adhishtanaka/Month-Extension",
      tags: ["VS Code", "Productivity", "GitHub"] 
    },
    { 
      name: "YourApp", 
      desc: "An AI-powered mobile IDE for generating functional apps.", 
      icon: "📱", 
      link: "/yourapp",
      tags: ["Mobile", "AI", "Development"] 
    },
    { 
      name: "avtxt", 
      desc: "A Node.js library for generating customizable SVG avatars.", 
      icon: "🎨", 
      link: "https://github.com/Adhishtanaka/avtxt",
      tags: ["Node.js", "SVG", "Library"] 
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      y: -8,
      boxShadow: darkMode 
        ? "0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.4)" 
        : "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <motion.section
      key="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.7 }}
      className="max-w-4xl mx-auto pt-4 pb-16 px-4"
    >
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className={`text-3xl font-bold mb-4 ${themeColors.heading}`}>
           # My Projects
          </h2>
          <p className={`max-w-2xl mx-auto ${themeColors.text} opacity-80`}>
            Here are some of my featured projects that showcase my skills and passion for development.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(({ name, desc, icon, link, tags }, i) => (
          <motion.a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            custom={i}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
          >
            <div 
              className={`${themeColors.card} rounded-xl overflow-hidden shadow-lg ${themeColors.border} border h-full flex flex-col`}
            >
              <div 
                className={`p-6 ${themeColors.card} 
                flex items-center justify-between border-b ${themeColors.border}`}
              >
                <div className="flex items-center">
                  <div className={`text-4xl mr-4 ${darkMode ? "text-blue-300" : "text-blue-600"}`}>
                    {icon}
                  </div>
                  <h3 className={`text-xl font-bold ${themeColors.heading}`}>{name}</h3>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${themeColors.accent} bg-opacity-20`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              
              <div className="p-6 flex-grow">
                <p className={`${themeColors.text} opacity-80 mb-4 text-sm`}>{desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {tags.map((tag) => (
                    <span 
                      key={tag} 
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        darkMode ? "bg-blue-900/30 text-blue-300" : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}