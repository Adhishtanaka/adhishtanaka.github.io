type GHRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics?: string[];
  updated_at: string;
};

const projectData = [
  {
    tech: "Dart / Flutter / Gemini API",
    title: "YourApp",
    description: "AI-powered mobile IDE. Generate fully functional applications from natural language prompts. Features two-step prompt refinement and single-file HTML output rendering via WebView.",
    tag: "// MOBILE_IDE",
    version: "v1.0.0"
  },
  {
    tech: "TypeScript / Next.js 14 / Prisma",
    title: "Todo_Notes_Suite",
    description: "Full-stack productivity platform with JWT auth, markdown support, and real-time updates. Includes cross-platform Flutter mobile client with offline sync capabilities.",
    tag: "// FULL_STACK",
    version: "PRODUCTION"
  },
  {
    tech: "Java / JavaFX / OkHttp",
    title: "dwnld_manager",
    description: "Cross-platform download manager with multi-threading, pause/resume, and bandwidth limiting. Built as lightweight IDM alternative with Transit Theme UI.",
    tag: "// DESKTOP_APP",
    version: "JAVA_FX"
  },
  {
    tech: "Node.js / SVG / NPM",
    title: "AvTXT_Generator",
    description: "NPM package for generating customizable SVG avatars from user initials. Supports random color generation, case types, and React component integration.",
    tag: "// PACKAGE",
    version: "64 DL/WK"
  },
  {
    tech: "Python / LLaMA / Jupyter",
    title: "SQL_LLM_Engine",
    description: "Fine-tuned 1B parameter LLaMA model for natural language to SQL translation. Includes synthetic dataset generator using Gemini API for training data augmentation.",
    tag: "// AI_ML",
    version: "RESEARCH"
  },
  {
    tech: "JavaScript / CLI / Node",
    title: "vdwn_cli",
    description: "Interactive CLI tool for media downloading. Auto-dependency resolution and user-friendly terminal interface with progress bars and format selection.",
    tag: "// CLI_TOOL",
    version: "OPEN_SOURCE"
  }
];

export default function Projects({ repos, loading, error }: { repos: GHRepo[]; loading: boolean; error: string | null }) {
  return (
    <section id="projects" className="relative mb-32">
      <div className="font-sans text-6xl md:text-8xl text-transparent mb-8 md:absolute md:top-[-100px] md:left-0 z-0 select-none" style={{ WebkitTextStroke: '1px #e6e6e6' }}>
        PROJECTS
      </div>

      {/* HORIZONTAL SCROLL CONTAINER */}
      <div className="projects-track flex gap-6 overflow-x-auto no-scrollbar md:sticky md:top-[20vh] p-4 md:h-[60vh] items-center snap-x snap-mandatory">
        {loading && (
          <div className="text-fg opacity-70">Loading repositories...</div>
        )}
        {error && (
          <div className="text-alert">{error}</div>
        )}
        
        {!loading && !error && projectData.map((project, index) => (
          <article 
            key={index}
            className="project-card flex-none w-[85vw] md:w-[400px] bg-bg border-3 border-fg p-6 md:p-8 relative transition-all duration-300 hover:border-matrix hover:shadow-[0_0_30px_rgba(0,255,65,0.2)] snap-center"
          >
            <div className="absolute top-[-15px] left-5 bg-bg px-3 text-matrix text-2xl">◈</div>
            <div className="inline-block bg-fg text-bg px-2 py-1 text-xs font-bold mb-4 uppercase">
              {project.tech}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-amber uppercase leading-tight">
              {project.title}
            </h3>
            <p className="text-sm md:text-base mb-6 opacity-90 leading-relaxed">
              {project.description}
            </p>
            <div className="flex justify-between border-t-2 border-white/10 pt-4 text-xs uppercase">
              <span>{project.tag}</span>
              <span>{project.version}</span>
            </div>
          </article>
        ))}
        
        {/* GitHub repos as additional cards */}
        {!loading && !error && repos.slice(0, 3).map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="project-card flex-none w-[85vw] md:w-[400px] bg-bg border-3 border-fg p-6 md:p-8 relative transition-all duration-300 hover:border-matrix hover:shadow-[0_0_30px_rgba(0,255,65,0.2)] snap-center block no-underline"
          >
            <div className="absolute top-[-15px] left-5 bg-bg px-3 text-matrix text-2xl">◈</div>
            <div className="inline-block bg-fg text-bg px-2 py-1 text-xs font-bold mb-4 uppercase">
              {repo.language ?? "Code"}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-amber uppercase leading-tight">
              {repo.name}
            </h3>
            <p className="text-sm md:text-base mb-6 opacity-90 leading-relaxed line-clamp-3">
              {repo.description || "No description available"}
            </p>
            <div className="flex justify-between border-t-2 border-white/10 pt-4 text-xs uppercase">
              <span>★ {repo.stargazers_count} ⫂ {repo.forks_count}</span>
              <span>GITHUB</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
