type Achievement = {
    title: string;
    date: string;
    description: string;
    participant_info: string;
};

export default function Achievements() {
    const achievements: Achievement[] = [
        {
            title: "Innovate with Ballerina",
            date: "Oct 2025",
            description: "WSO2 Top 10 Finalist",
            participant_info: "from 500+ teams"
        },
        {
            title: "NSBM GreenEXE 3.0",
            date: "Oct 2025",
            description: "NSBM Green University 1st Runner Up",
            participant_info: "from 50+ teams"
        },
        {
            title: "InteliHack 5.0 - Datathon",
            date: "June 2025",
            description: "University of Colombo School of Computing 2nd Runner Up",
            participant_info: "from 100+ teams"
        }
    ];
    return (
        <section id="achievements" className="mx-auto max-w-6xl px-4 py-16">
            <div className="mb-8 flex items-end justify-between gap-4">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900 dark:text-gray-100">Achievements</h2>
                <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-3/4">
                    <div className="mb-8 space-y-4">
                        <p className="text-pretty text-gray-400">
                            Throughout my academic journey, I've had the opportunity to participate in various competitive events
                            and hackathons, showcasing my skills in software development, AI, and problem-solving. These
                            achievements reflect my commitment to excellence and continuous learning in the field of computer science.
                        </p>
                    </div>
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src="/a.png"
                            alt="Achievements showcase"
                            className="w-full h-auto rounded-xl"
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/4 space-y-4">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="group rounded-xl border border-gray-800 bg-gray-900/50 p-4 transition hover:border-blue-500 hover:shadow-md"
                        >
                            <div className="space-y-2">
                                <div className="flex items-start justify-between gap-3">
                                    <h3 className="font-semibold tracking-tight text-gray-200 group-hover:text-blue-400">
                                        {achievement.title}
                                    </h3>
                                    <span className="text-xs text-gray-500">{achievement.date}</span>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">
                                        {achievement.description.includes("Runner Up")
                                            ? achievement.description.split(/(1st|2nd) Runner Up/)[0]
                                            : achievement.description.split("Top 10")[0]}
                                    </p>
                                    <p className="text-sm font-medium text-blue-400">
                                        {achievement.description.includes("Runner Up")
                                            ? achievement.description.match(/(1st|2nd) Runner Up/)?.[0] ?? "Runner Up"
                                            : "Top 10 Finalist"}
                                    </p>
                                </div>
                                <p className="text-xs text-gray-600">{achievement.participant_info}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
