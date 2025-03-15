import { motion } from "framer-motion";
import { useDarkModeStore } from "../utils/useDarkModeStore";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const { darkMode } = useDarkModeStore();

  const themeColors = {
    bg: darkMode ? "bg-slate-900" : "bg-slate-50",
    text: darkMode ? "text-slate-100" : "text-slate-900",
    heading: darkMode ? "text-black-400" : "text-black-700",
    subheading: darkMode ? "text-black-300" : "text-black-600",
    accent: darkMode ? "text-cyan-400" : "text-cyan-600",
    subtle: darkMode ? "bg-slate-800/50" : "bg-black-50",
    muted: darkMode ? "text-slate-400" : "text-slate-500",
    skillCard: darkMode ? "bg-slate-800" : "bg-white",
    card: darkMode ? "bg-slate-800" : "bg-white",
    border: darkMode ? "border-slate-700" : "border-slate-200",
    button: darkMode
      ? "bg-cyan-500 hover:bg-cyan-600"
      : "bg-cyan-600 hover:bg-cyan-700",
    secondaryButton: darkMode
      ? "bg-slate-700 hover:bg-slate-600"
      : "bg-white hover:bg-slate-100",
    shadow: darkMode ? "" : "shadow-md",
    cardHover: darkMode ? "hover:border-cyan-500" : "hover:border-cyan-500",
    tag: darkMode
      ? "bg-slate-700 text-cyan-300"
      : "bg-black-100 text-black-600",
    iconBg: darkMode ? "bg-slate-700" : "bg-black-100",
  };

  const projects = [
    {
      name: "AANA",
      desc: "An AI-powered search engine with real-time smart responses.",
      icon: "🔍",
      link: "https://github.com/Adhishtanaka/aana",
      tags: ["AI", "Search", "React"],
    },
    {
      name: "Month Extension",
      desc: "A VS Code extension for tracking daily work and GitHub commits.",
      icon: "📅",
      link: "https://github.com/Adhishtanaka/Month-Extension",
      tags: ["VS Code", "Productivity", "GitHub"],
    },
    {
      name: "YourApp",
      desc: "An AI-powered mobile IDE for generating functional apps.",
      icon: "📱",
      link: "/yourapp",
      tags: ["Mobile", "AI", "Development"],
    },
    {
      name: "avtxt",
      desc: "A Node.js library for generating customizable SVG avatars.",
      icon: "🎨",
      link: "https://github.com/Adhishtanaka/avtxt",
      tags: ["Node.js", "SVG", "Library"],
    },
    {
      name: "dwnld",
      desc: "A fast and lightweight cross-platform download manager, offering a powerful alternative to IDM.",
      icon: "📥",
      link: "https://github.com/Adhishtanaka/dwnld",
      tags: ["Java", "JavaFX", "Download Manager"],
    },
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
        stiffness: 100,
      },
    }),
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <motion.section
      key="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto pt-4 pb-16"
    >
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2
            className={`text-3xl font-bold mb-4 ${themeColors.heading} flex items-center justify-center`}
          >
            <span className="w-8 h-1 bg-cyan-500 mr-3 hidden md:block"></span>
            Featured Projects
            <span className="w-8 h-1 bg-cyan-500 ml-3 hidden md:block"></span>
          </h2>
          <p className={`max-w-2xl mx-auto ${themeColors.text} opacity-80`}>
            Here are some of my featured projects that showcase my skills and
            passion for development.
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
            className="focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-xl"
          >
            <div
              className={`${themeColors.card} rounded-xl overflow-hidden ${themeColors.shadow} ${themeColors.border} border h-full flex flex-col ${themeColors.cardHover} transition-all duration-300`}
            >
              <div
                className={`p-6 ${themeColors.card} 
                flex items-center justify-between border-b ${themeColors.border}`}
              >
                <div className="flex items-center">
                  <div
                    className={`text-3xl mr-4 ${themeColors.iconBg} w-12 h-12 flex items-center justify-center rounded-lg`}
                  >
                    {icon}
                  </div>
                  <h3 className={`text-xl font-bold ${themeColors.heading}`}>
                    {name}
                  </h3>
                </div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${themeColors.subtle} ${themeColors.accent} transition-transform duration-300 group-hover:translate-x-1`}
                >
                  <ExternalLink size={16} />
                </div>
              </div>

              <div className="p-6 flex-grow">
                <p className={`${themeColors.text} mb-4 leading-relaxed`}>
                  {desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${themeColors.tag}`}
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

      {/* Additional Projects/Open Source Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-16"
      >
        <div
          className={`p-8 rounded-lg ${themeColors.subtle} ${themeColors.border} border text-center`}
        >
          <h3 className={`text-xl font-bold mb-4 ${themeColors.heading}`}>
            More Projects on GitHub
          </h3>
          <p className={`${themeColors.text} mb-6`}>
            Explore more of my work including open source contributions and
            experimental projects.
          </p>
          <a
            href="https://github.com/Adhishtanaka"
            target="_blank"
            rel="noopener noreferrer"
            className={`${themeColors.button} text-white px-6 py-2 rounded-md font-medium inline-flex items-center transition-colors duration-300`}
          >
            <span>View GitHub Profile</span>
            <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </motion.div>

      {/* Skills & Technologies Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-16"
      >
        <h2
          className={`text-2xl font-bold mb-8 ${themeColors.heading} flex items-center before:content-[''] before:block before:w-8 before:h-1 before:bg-cyan-500 before:mr-3`}
        >
          Technologies Used
        </h2>

        <div
          className={`p-6 rounded-lg ${themeColors.card} ${themeColors.border} border`}
        >
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {[
              "Flutter",
              "React",
              "Express",
              "Next.js",
              "TailwindCSS",
              "Langchain",
              "Tensorflow",
              "SkitLearn",
              "FastAPI",
              "JavaFX",
              "Spring Boot",
              "ASP.NET",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { delay: 0.7 + index * 0.05, duration: 0.3 },
                }}
                className={`px-4 py-2 rounded-md text-sm font-medium ${themeColors.tag} ${themeColors.shadow}`}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
