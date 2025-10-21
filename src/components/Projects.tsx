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
        <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
            <div className="mb-8 flex items-end justify-between gap-4">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-100">Recently Updated Projects</h2>
                <div className="h-px flex-1 bg-gray-700" />
            </div>
            {loading && (
                <p className="text-gray-400">Loading repositories…</p>
            )}
            {error && (
                <p className="text-red-400">{error}</p>
            )}
            {!loading && !error && (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {repos.map((repo) => (
                        <a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="group relative rounded-xl border border-gray-700 bg-gray-800/60 p-5 transition hover:border-blue-500 hover:shadow-md"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="font-semibold tracking-tight text-gray-100 group-hover:text-blue-400">
                                    {repo.name}
                                </h3>
                                <span className="text-xs text-gray-500">
                                    {repo.language ?? "Code"}
                                </span>
                            </div>
                            {repo.description && (
                                <p className="mt-2 line-clamp-3 text-sm text-gray-400">{repo.description}</p>
                            )}
                            <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                                <span>★ {repo.stargazers_count}</span>
                                <span>⫂ {repo.forks_count}</span>
                                <span className="ml-auto">Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </section>
    );
}
