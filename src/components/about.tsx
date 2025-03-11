import { motion } from "framer-motion";
import { useDarkModeStore } from "../utils/useDarkModeStore";
import { Linkedin, Twitter, Github, MailIcon } from "lucide-react";

export default function About() {
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

  // Social links - replace with your actual URLs later
  const socialLinks = [
    { 
      icon: Linkedin, 
      url: "https://www.linkedin.com/in/adhishtanaka/", // Replace with your LinkedIn URL
      label: "LinkedIn"
    },
    { 
      icon: Twitter, 
      url: "https://x.com/adhishtanaka", // Replace with your Twitter/X URL
      label: "Twitter/X"
    },
    { 
      icon: Github, 
      url: "https://github.com/adhishtanaka", // Replace with your GitHub URL
      label: "GitHub"
    },
    { 
      icon: MailIcon, 
      url: "mailto:kulasoooriyaa@gmail.com", // Replace with your email
      label: "Email"
    }
  ];

  // Custom Stack Overflow icon since it's not in Lucide
  const StackOverflowIcon = ({ className, size = 24 }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012z" />
      <path d="M6.111 19.731H16.85v-2.137H6.111v2.137z" />
      <path d="M6.362 14.561l10.258 2.137.444-2.093-10.258-2.138-.444 2.094z" />
      <path d="M7.505 9.952l9.523 4.44.898-1.93-9.524-4.44-.897 1.93z" />
      <path d="M9.761 5.763l8.022 6.682 1.344-1.612-8.022-6.683-1.344 1.613z" />
      <path d="M14.333 0l-1.79 1.335 6.243 8.381 1.79-1.336L14.334 0z" />
    </svg>
  );

  // Add Stack Overflow to social links
  socialLinks.splice(2, 0, {
    icon: ({ className, size }) => <StackOverflowIcon className={className} size={size} />,
    url: "https://stackoverflow.com/users/23522327/adhishtanaka-kulasooriya", 
    label: "Stack Overflow"
  });
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: "TypeScript, Python, Java, C#, Dart",
    },
    {
      category: "Cloud & Backend Services",
      skills: "Firebase, Supabase, OpenAI, Gemini",
    },
    {
      category: "Databases",
      skills: "MongoDB, MySQL, Firebase Firestore",
    },
    {
      category: "DevOps & CI/CD",
      skills: "Docker, GitHub Actions, Postman",
    },
  ];
  
  

  return (
    <motion.section
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`${themeColors.bg} min-h-screen w-full`}
    >
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Profile Section - Responsive design */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            <img 
              src="https://github.com/adhishtanaka.png" 
              alt="Profile" 
              className="w-32 h-32 rounded-full object-cover shadow-md "
            />
            
            <div className="text-center md:text-left">
              <div className={`${themeColors.text} space-y-4`}>
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
        </div>

        {/* Skills Section - Reorganized and responsive */}
        <div className="mb-12">
          <h2 className={`text-2xl font-bold mb-6 ${themeColors.heading} flex items-center`}>
            <span className="mr-2">#</span>Skills
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillCategories.map((item, index) => (
              <div key={index} className={`p-4 rounded-lg ${themeColors.skillCard} text-center hover:shadow-md transition-shadow duration-300`}>
                <div className={`font-bold mb-2 ${themeColors.heading}`}>{item.category}</div>
                <div className={`text-sm ${themeColors.muted}`}>
                  {item.skills}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section - New addition */}
        <div className="mb-5">
          <h2 className={`text-2xl font-bold mb-6 ${themeColors.heading} flex items-center`}>
            <span className="mr-2">#</span>Connect With Me
          </h2>
          
          <div className={`p-6 rounded-lg ${themeColors.subtle} ${themeColors.border} border`}>
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                >
                  <div className={`p-3 rounded-full ${themeColors.card} ${themeColors.border} border hover:scale-110 transition-transform duration-300`}>
                    <link.icon className={`w-6 h-6 ${themeColors.accent}`} size={24} />
                  </div>
                  <span className={`mt-2 text-sm ${themeColors.text}`}>{link.label}</span>
                </a>
              ))}
            </div>
            
            <div className="mt-2 text-center md:text-left">
              <p className={`${themeColors.text} mb-4`}>
                Feel free to reach out for collaborations or just a chat about technology!
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}