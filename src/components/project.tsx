import { motion,} from "framer-motion";
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
        { name: "AANA", desc: "An AI-powered search engine with real-time smart responses.", icon: "🔍", link: "https://github.com/Adhishtanaka/aana." },
        { name: "Month Extension", desc: "A VS Code extension for tracking daily work and GitHub commits.", icon: "📅", link: "https://github.com/Adhishtanaka/Month-Extension" },
        { name: "YourApp", desc: "An AI-powered mobile IDE for generating functional apps.", icon: "📱", link: "/yourapp" },
        { name: "avtxt", desc: "A Node.js library for generating customizable SVG avatars.", icon: "🎨", link: "https://github.com/Adhishtanaka/avtxt" }
      ];
    
      return (
        <motion.section 
          key="projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(({ name, desc, icon, link }) => (
              <a key={name} href={link} target="_blank">
                <motion.div 
                  className={`${themeColors.card} rounded-lg overflow-hidden shadow-lg ${themeColors.border} border cursor-pointer`}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`h-40 ${darkMode ? "bg-blue-900/20" : "bg-blue-100"} flex items-center justify-center`}>
                    <span className="text-4xl">{icon}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{name}</h3>
                    <p className="opacity-80 mb-4">{desc}</p>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </motion.section>
      );
    }
    