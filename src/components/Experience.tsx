import { useState } from "react";

type Experience = {
  title: string;
  date: string;
  description: string;
  info: string;
  borderColor: string;
  accentColor: string;
};

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const experiences: Experience[] = [
    {
      title: "Junior Software Engineer",
      date: "2026 - Present",
      description: "Currently working at FliAi (Future Life Investments), developing AI-powered solutions and software applications.",
      info: "Employment / Full-time",
      borderColor: "border-accent",
      accentColor: "#4a90d9"
    },
    {
      title: "BSc (Hons) in Computer Science",
      date: "2022 - 2026",
      description: "Pursuing a Bachelor of Science (Honours) degree in Computer Science, focusing on software engineering, AI, and data science.",
      info: "Education / Undergraduate",
      borderColor: "border-navy-light",
      accentColor: "#2d5a87"
    }
  ];

  return (
    <section id="experience" className="relative mb-32">
      <div className="max-w-3xl mx-auto">
        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-white/20"></div>
          
          {experiences.map((exp, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className={`relative pl-12 md:pl-20 pb-8 last:pb-0 cursor-pointer group transition-all duration-300 ${activeIndex === index ? 'scale-[1.02]' : ''}`}
            >
              {/* Timeline dot */}
              <div 
                className={`absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full border-2 ${exp.borderColor} transition-all duration-300 ${activeIndex === index ? 'scale-150' : 'group-hover:scale-125'}`}
                style={{ 
                  backgroundColor: exp.accentColor,
                  boxShadow: activeIndex === index ? `0 0 10px ${exp.accentColor}` : undefined 
                }}
              ></div>
              
              {/* Content card */}
              <div 
                className={`bg-navy border-l-4 ${exp.borderColor} p-5 transition-all duration-300 ${activeIndex === index ? 'translate-x-2' : 'group-hover:translate-x-1'}`}
                style={{ 
                  boxShadow: activeIndex === index ? '10px 10px 0px rgba(0,0,0,0.3)' : '5px 5px 0px rgba(0,0,0,0.2)',
                }}
                onMouseEnter={(e) => {
                  if (activeIndex !== index) {
                    e.currentTarget.style.boxShadow = '8px 8px 0px rgba(0,0,0,0.25)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeIndex !== index) {
                    e.currentTarget.style.boxShadow = '5px 5px 0px rgba(0,0,0,0.2)';
                  }
                }}
              >
                {/* Date badge */}
                <div 
                  className={`inline-block px-3 py-1 text-xs font-mono mb-3 border ${exp.borderColor}`}
                  style={{ backgroundColor: `${exp.accentColor}33` }}
                >
                  {exp.date}
                </div>
                
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-2 uppercase">
                  {exp.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm md:text-base mb-3 opacity-90">
                  {exp.description}
                </p>
                
                {/* Info tag */}
                <div className="text-xs opacity-70 uppercase font-mono">
                  [{exp.info}]
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
