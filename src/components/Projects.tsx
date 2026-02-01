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

export default function Projects({ repos, loading, error }: { repos: GHRepo[]; loading: boolean; error: string | null }) {
  return (
    <section id="projects" className="relative mb-32">
      <div className="font-sans text-6xl md:text-8xl text-transparent mb-8 md:absolute md:top-[-100px] md:left-0 z-0 select-none" style={{ WebkitTextStroke: '1px #ffffff' }}>
        PROJECTS
      </div>

      {/* HORIZONTAL SCROLL CONTAINER */}
      <div className="projects-track flex gap-6 overflow-x-auto no-scrollbar md:sticky md:top-[20vh] p-4 md:h-[60vh] items-center snap-x snap-mandatory">
        {loading && (
          <div className="text-fg opacity-70">Loading repositories...</div>
        )}
        {error && (
          <div className="text-accent">{error}</div>
        )}
        
        {/* GitHub repos as cards */}
        {!loading && !error && repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="project-card flex-none w-[85vw] md:w-[400px] bg-navy border-3 border-white p-6 md:p-8 relative transition-all duration-300 hover:border-accent hover:shadow-[0_0_30px_rgba(74,144,217,0.3)] snap-center block no-underline"
          >
            <div className="absolute top-[-15px] left-5 bg-navy px-3 text-accent text-2xl">◈</div>
            <div className="inline-block bg-white text-navy-dark px-2 py-1 text-xs font-bold mb-4 uppercase">
              {repo.language ?? "Code"}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-accent-light uppercase leading-tight">
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
