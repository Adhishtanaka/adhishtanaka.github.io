import { motion } from "framer-motion";
import { useDarkModeStore } from "../utils/useDarkModeStore";
import { Linkedin, Twitter, Github, Mail, Code, Server, Database, Terminal } from "lucide-react";


export default function About() {
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
    shadow: darkMode ? "shadow-slate-900" : "shadow-md",
  };

  // Social links
  const socialLinks = [
    { 
      icon: Linkedin, 
      url: "https://www.linkedin.com/in/adhishtanaka/",
      label: "LinkedIn"
    },
    { 
      icon: Twitter, 
      url: "https://x.com/adhishtanaka",
      label: "Twitter/X"
    },
    { 
      icon: Github, 
      url: "https://github.com/adhishtanaka",
      label: "GitHub"
    },
    { 
      icon: Mail, 
      url: "mailto:kulasoooriyaa@gmail.com",
      label: "Email"
    }
  ];

  // Skills with icons
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: "TypeScript, Python, Java, C#, Dart",
      icon: Code
    },
    {
      category: "Cloud & Backend Services",
      skills: "Firebase, Supabase, OpenAI, Gemini",
      icon: Server
    },
    {
      category: "Databases",
      skills: "MongoDB, MySQL, Firebase Firestore",
      icon: Database
    },
    {
      category: "DevOps & CI/CD",
      skills: "Docker, GitHub Actions, Postman",
      icon: Terminal
    },
  ];
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * custom,
        duration: 0.5
      }
    })
  };

  return (
    <motion.section
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`${themeColors.bg} min-h-screen w-full`}
    >
      <div className="max-w-4xl mx-auto py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
           
            
            <div className="text-center md:text-left">
              <h2 className={`text-2xl font-bold mb-4 ${themeColors.accent}`}>
                About Me
              </h2>
              <div className={`${themeColors.text} space-y-4 leading-relaxed`}>
                <p>
                  I'm a passionate Computer Science student specializing in{" "}
                  <span className={`${themeColors.accent} font-semibold`}>
                    AI integration for software development
                  </span>
                  . Rather than focusing solely on consumer products, I develop{" "}
                  <span className="font-semibold">
                    robust tools that empower other developers
                  </span>{" "}
                  to create exceptional applications.
                </p>
                
                <p>
                  I prioritize{" "}
                  <span className="font-semibold">
                    clean and efficient UI design
                  </span>{" "}
                  and focus on{" "}
                  <span className="font-semibold">
                    building scalable and high-performance applications
                  </span>
                  . Working primarily in a Windows environment, I continuously explore emerging technologies in{" "}
                  <span className={`${themeColors.accent} font-semibold`}>
                    AI, web, and mobile development
                  </span>
                  .
                </p>
                
                <p>
                  I am always eager to{" "}
                  <span className="font-semibold">
                    innovate, optimize, and push the boundaries of software development
                  </span>
                  . 🚀
                </p>
              </div>
            </div>
          </div>
        </motion.div>


        {/* Additional section - Testimonials or Education */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className={`text-2xl font-bold mb-8 ${themeColors.heading} flex items-center before:content-[''] before:block before:w-8 before:h-1 before:bg-cyan-500 before:mr-3`}>
            Education
          </h2>
          
          <div className={`p-8 rounded-lg ${themeColors.card} ${themeColors.border} border ${themeColors.shadow}`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className={`font-bold text-lg ${themeColors.subheading}`}>Bachelor of Computer Science</h3>
                <p className={`${themeColors.text}`}>NSBM Green University</p>
              </div>
              <div className={`${themeColors.muted} text-sm mt-2 md:mt-0`}>2022 - Present</div>
            </div>
            
            <div className={`${themeColors.muted} mt-4`}>
              <p>I hold a BSc (Honours) in Computer Science from NSBM Green University Town, a UGC-approved degree-awarding institution. The programme provides a broad computing perspective in the first year, focuses on the core Computer Science body of knowledge in the second and third years, includes compulsory industry training in the third year, and offers advanced subject knowledge in the fourth year.</p>
            </div>
          </div>
        </motion.div>
        
        {/* Skills Section - Enhanced with icons and animations */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className={`text-2xl font-bold mb-8 ${themeColors.heading} flex items-center before:content-[''] before:block before:w-8 before:h-1 before:bg-cyan-500 before:mr-3`}>
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((item, index) => (
              <motion.div 
                key={index} 
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className={`p-6 rounded-lg ${themeColors.card} ${themeColors.border} border ${themeColors.shadow} flex flex-col items-center text-center hover:border-cyan-500 transition-all duration-300`}
              >
                <div className={`p-3 rounded-full ${themeColors.subtle} mb-4`}>
                  <item.icon className={`w-6 h-6 ${themeColors.accent}`} />
                </div>
                <div className={`font-bold mb-2 ${themeColors.heading}`}>{item.category}</div>
                <div className={`text-sm ${themeColors.muted}`}>
                  {item.skills}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section - Enhanced with animations and improved design */}
        <motion.div 
          className="mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className={`text-2xl font-bold mb-8 ${themeColors.heading} flex items-center before:content-[''] before:block before:w-8 before:h-1 before:bg-cyan-500 before:mr-3`}>
            Connect With Me
          </h2>
          
          <div className={`p-8 rounded-lg ${themeColors.card} ${themeColors.border} border ${themeColors.shadow}`}>
            <div className="text-center md:text-left mb-8">
              <p className={`${themeColors.text} text-lg`}>
                I'm always open to interesting conversations, collaborations, and new opportunities.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-center gap-8">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.2 + (index * 0.1), duration: 0.5 }
                  }}
                >
                  <div className={`p-4 rounded-full ${themeColors.subtle} hover:bg-cyan-500/20 transition-colors duration-300`}>
                    <link.icon className={`w-6 h-6 ${themeColors.accent}`} />
                  </div>
                  <span className={`mt-2 text-sm font-medium ${themeColors.text}`}>{link.label}</span>
                </motion.a>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className={`inline-flex items-center ${themeColors.muted}`}>
                <div className="h-px w-16 bg-slate-400/30 mr-4"></div>
                <p className="text-sm">Let's build something amazing together</p>
                <div className="h-px w-16 bg-slate-400/30 ml-4"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}