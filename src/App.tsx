import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Projects from "./components/project";
import About from "./components/about";
import { useDarkModeStore } from "./utils/useDarkModeStore";

export default function App() {
  const { darkMode, toggleDarkMode } = useDarkModeStore();
  const [activeTab, setActiveTab] = useState<string>("about");

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
    navBg: darkMode ? "bg-slate-900/95" : "bg-white/95",
    shadow: darkMode ? "" : "shadow-lg",
  };
  
  return (
    <div
      className={`min-h-screen ${themeColors.bg} ${themeColors.text} transition-colors duration-300`}
    >
      {/* Navigation */}
      <nav
        className={`fixed w-full z-10 ${themeColors.navBg} backdrop-blur-md py-4 ${themeColors.shadow}`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl"
          >
            <span className={`${themeColors.accent} font-serif text-2xl`}>A</span>
          </motion.div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => setActiveTab("about")}
                className={`px-3 py-1 rounded-md transition-colors font-medium ${
                  activeTab === "about" 
                    ? `${themeColors.accent} border-b-2 border-cyan-500` 
                    : `hover:${themeColors.muted}`
                }`}
              >
                About
              </button>
              <button
                onClick={() => setActiveTab("projects")}
                className={`px-3 py-1 rounded-md transition-colors font-medium ${
                  activeTab === "projects" 
                    ? `${themeColors.accent} border-b-2 border-cyan-500` 
                    : `hover:${themeColors.muted}`
                }`}
              >
                Projects
              </button>
            </div>

            <button
              onClick={() => toggleDarkMode()}
              className={`p-2 rounded-full ${themeColors.secondaryButton} transition-colors duration-200`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-28 pb-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className={themeColors.accent}>Adhishtanaka</span> Thiramithu
            <span className="block mt-2">Kulasooriya</span>
          </motion.h1>
          <motion.p
            className={`text-lg ${themeColors.muted} max-w-2xl mx-auto`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Computer Science Student • AI Enthusiast • Software Developer
          </motion.p>
        </motion.section>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-center mb-10">
          <div
            className={`flex rounded-lg ${themeColors.card} ${themeColors.border} border p-1 ${themeColors.shadow}`}
          >
            <button
              onClick={() => setActiveTab("about")}
              className={`px-4 py-2 rounded-md transition-colors font-medium ${
                activeTab === "about" ? themeColors.button : ""
              }`}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-4 py-2 rounded-md transition-colors font-medium ${
                activeTab === "projects" ? themeColors.button : ""
              }`}
            >
              Projects
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "about" && About()}
          {activeTab === "projects" && Projects()}
        </AnimatePresence>
      </main>

      <footer className={`py-8 ${themeColors.border} border-t`}>
        <div className="container mx-auto px-6 text-center">
          <p className={`${themeColors.muted} text-sm`}>
            © {new Date().getFullYear()} Adhishtanaka Thiramithu Kulasooriya.
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
