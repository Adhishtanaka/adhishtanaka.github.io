import { useState } from "react";

type Achievement = {
  title: string;
  date: string;
  description: string;
  participant_info: string;
  borderColor: string;
  hoverColor: string;
};

export default function Achievements() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const achievements: Achievement[] = [
    {
      title: "TechSpire 2025",
      date: "Best Achievers' Award",
      description: "Team TetraNeurons won the Best Achievers' Award at TechSpire 2025, the inaugural flagship excellence awards ceremony of NSBM Faculty of Computing.",
      participant_info: "Excellence Awards / NSBM",
      borderColor: "border-accent",
      hoverColor: "group-hover:text-accent-light"
    },
    {
      title: "Innovate with Ballerina",
      date: "Oct 2025",
      description: "Top performer among 500+ competing teams in WSO2 Integration Studio & Ballerina hackathon.",
      participant_info: "Competition / Enterprise Integration",
      borderColor: "border-navy-light",
      hoverColor: "group-hover:text-accent"
    },
    {
      title: "NSBM GreenEXE 3.0",
      date: "1st Runner Up",
      description: "Placed 2nd among 50+ teams competing in NSBM's premier software engineering competition.",
      participant_info: "Software Engineering / Oct 2025",
      borderColor: "border-navy",
      hoverColor: "group-hover:text-accent-light"
    },
    {
      title: "InteliHack 5.0",
      date: "2nd Runner Up",
      description: "UCSC Datathon competition focused on data science and ML model optimization.",
      participant_info: "Data Science / June 2025",
      borderColor: "border-accent",
      hoverColor: "group-hover:text-accent"
    }
  ];

  return (
    <section id="achievements" className="relative min-h-[60vh] mb-32">
      <div className="flex flex-col md:block gap-6 md:h-[60vh]">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className={`achievement-card w-full md:w-[400px] md:absolute bg-navy-dark border-3 ${achievement.borderColor} p-6 md:p-8 shadow-[10px_10px_0px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-pointer group ${activeIndex === index ? 'z-[100] scale-105 shadow-[20px_20px_0px_#4a90d9]' : 'z-10 hover:shadow-[20px_20px_0px_#4a90d9] hover:scale-105'}`}
            style={{ zIndex: activeIndex === index ? 100 : undefined }}
          >
            <div className={`text-xl md:text-2xl font-bold mb-2 uppercase ${achievement.hoverColor} transition-colors`}>
              {achievement.title}
            </div>
            <div className="text-base mb-4 opacity-80">{achievement.date}</div>
            <p className="text-sm md:text-base mb-4">{achievement.description}</p>
            <div className="text-xs border-t-2 border-current pt-2 mt-4 opacity-70 uppercase">
              {achievement.participant_info}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
