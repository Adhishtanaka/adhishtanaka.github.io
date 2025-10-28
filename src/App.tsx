import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/about";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

type GHUser = {
  name: string | null;
  login: string;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  location: string | null;
  public_repos: number;
};

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


const GITHUB_USERNAME = "Adhishtanaka";

const SKIP_REPOS: string[] = ["Intellihack_TetraNeurons_3", "SE-to-ML", "TetraNeurons", "todo-mcp-server", "todo-flutter-app", "git-test", "dwnld", "Adhishtanaka", "dwnld-extension", "sllib", "gemilib"];

export default function App() {
  const [user, setUser] = useState<GHUser | null>(null);
  const [repos, setRepos] = useState<GHRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const CACHE_KEY = "github_data";
    const CACHE_EXPIRY = 24 * 60 * 60 * 1000;

    async function load() {
      try {
        setLoading(true);

        // Check cache
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { timestamp, user: cachedUser, repos: cachedRepos } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_EXPIRY) {
            setUser(cachedUser);
            setRepos(cachedRepos);
            setLoading(false);
            return;
          }
        }

        // Fetch from GitHub API
        const [uRes, rRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
            headers: { "Accept": "application/vnd.github+json" },
          }),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
            { headers: { "Accept": "application/vnd.github+json" } }
          ),
        ]);

        if (!uRes.ok || !rRes.ok) throw new Error("Failed to load GitHub data");

        const u = (await uRes.json()) as GHUser;
        const r = (await rRes.json()) as GHRepo[];

        if (!isMounted) return;


        const filteredRepos = r
          .filter(
            (repo) =>
              !repo.name.endsWith(".github.io") &&
              !SKIP_REPOS.includes(repo.name)
          )
          .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
          .slice(0, 9);

        setUser(u);
        setRepos(filteredRepos);

        // Save to cache
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ timestamp: Date.now(), user: u, repos: filteredRepos })
        );
      } catch (e: any) {
        if (!isMounted) return;
        setError(e?.message ?? "Something went wrong");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  const displayName = user?.name || "Adhishtanaka Kulasooriya";
  const displayBio =
    user?.bio ||
    "I am a passionate Computer Science student with a strong foundation in AI integration for software development.";

  const nav = useMemo(
    () => [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#achievements", label: "Achievements" },
      { href: "#contact", label: "Contact" },
    ],
    []
  );

  return (
    <div
      id="home"
      className="relative min-h-screen bg-gray-900 text-gray-100 overflow-hidden"
    >
      {/* Low opacity gif background overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "url('./noice.gif')",
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          backgroundPosition: 'center',
          opacity: 0.06,
        }}
      />
      <div className="relative z-10">
        <Header nav={nav} githubUrl={user?.html_url} />
        <Hero
          name={displayName}
          bio={displayBio}
          avatarUrl={user?.avatar_url}
          location={user?.location ?? undefined}
          repoCount={user?.public_repos}
          followers={user?.followers}
          following={user?.following}
          cvUrl="./CV.pdf"
        />
        <About />
        <Projects repos={repos} loading={loading} error={error} />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
