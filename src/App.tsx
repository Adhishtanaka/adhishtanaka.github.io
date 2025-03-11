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
  
  
  

  return (
    <div
      className={`min-h-screen ${themeColors.bg} ${themeColors.text} transition-colors duration-300`}
    >
      {/* Navigation */}
      <nav
        className={`fixed w-full z-10 ${
          darkMode ? "bg-gray-900/90" : "bg-white/90"
        } backdrop-blur-md py-4 ${themeColors.border} border-b`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl"
          >
            <span className={themeColors.accent}>A</span>
          </motion.div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => toggleDarkMode()}
              className={`p-2 rounded-full ${themeColors.secondaryButton}`}
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

            <div className="hidden md:flex space-x-4">
              <button
                onClick={() => setActiveTab("about")}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeTab === "about" ? themeColors.accent : ""
                }`}
              >
                About
              </button>
              <button
                onClick={() => setActiveTab("projects")}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeTab === "projects" ? themeColors.accent : ""
                }`}
              >
                Projects
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className={themeColors.accent}>Adhishtanaka</span> Thiramithu
            Kulasooriya
          </motion.h1>
        </motion.section>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-center mb-10">
          <div
            className={`flex rounded-lg ${themeColors.card} p-1 ${themeColors.border} border`}
          >
            <button
              onClick={() => setActiveTab("about")}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === "about" ? themeColors.button : ""
              }`}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-4 py-2 rounded-md transition-colors ${
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

      <footer className={`py-6 ${themeColors.border} border-t`}>
        <div className="container mx-auto px-4 text-center">
          <p className="opacity-70">
            © {new Date().getFullYear()} Adhishtanaka Thiramithu Kulasooriya.
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
