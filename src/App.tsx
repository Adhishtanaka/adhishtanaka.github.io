 import { useEffect, useState } from "react";
import StatusBar from "./components/StatusBar.tsx";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Terminal from "./components/Terminal.tsx";
import MatrixCanvas from "./components/MatrixCanvas.tsx";
import SideTag from "./components/SideTag.tsx";

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

const SKIP_REPOS: string[] = ["Intellihack_TetraNeurons_3", "SE-to-ML", "TetraNeurons", "todo-mcp-server", "todo-flutter-app", "git-test", "dwnld", "Adhishtanaka", "dwnld-extension", "sllib", "gemilib", "DISA-MICROSERVICE", "android-action-kernel", "avtxt"];

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
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < CACHE_EXPIRY) {
            if (isMounted) {
              setUser(parsed.user);
              setRepos(parsed.repos);
              setLoading(false);
            }
            return;
          }
        }

        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`),
        ]);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error("GitHub API error");
        }

        const userData: GHUser = await userRes.json();
        const reposData: GHRepo[] = await reposRes.json();

        const filteredRepos = reposData.filter(
          (repo) => !SKIP_REPOS.some(skipName => 
            repo.name.toLowerCase().replace(/\s/g, '') === skipName.toLowerCase().replace(/\s/g, '')
          )
        );

        const sortedRepos = filteredRepos.sort(
          (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        ).slice(0, 6);

        if (isMounted) {
          setUser(userData);
          setRepos(sortedRepos);
          setLoading(false);
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ user: userData, repos: sortedRepos, timestamp: Date.now() })
          );
        }
      } catch (e) {
        console.error(e);
        if (isMounted) {
          setError("Failed to load GitHub data");
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Matrix Rain Canvas */}
      <MatrixCanvas />
      
      {/* Side Tag */}
      <SideTag />
      
      {/* Status Bar */}
      <StatusBar />

      {/* Main Container */}
      <div className="ml-0 lg:ml-[15vw] px-6 md:px-12 py-24 md:py-20 relative z-10 min-h-screen">
        {/* Hero Section */}
        <Hero
          name={user?.name || "Adhishtanaka Kulasooriya"}
          bio={user?.bio || "Computer Science Undergraduate & AI Integration Specialist"}
          location={user?.location}
          repoCount={user?.public_repos}
          followers={user?.followers}
          following={user?.following}
          cvUrl="/CV.pdf"
        />

        {/* ASCII Divider */}
        <div className="text-center my-20 text-[10px] md:text-xs text-accent/30 whitespace-pre font-mono overflow-hidden">
╔══════════════════════════════════════════════════════════════════╗
║  CAREER_TIMELINE // EXPERIENCE_LOG // EDUCATION_RECORD             ║
╚══════════════════════════════════════════════════════════════════╝
        </div>

        {/* Experience */}
        <Experience />

        {/* ASCII Divider */}
        <div className="text-center my-20 text-[10px] md:text-xs text-accent/30 whitespace-pre font-mono overflow-hidden">
╔══════════════════════════════════════════════════════════════════╗
║  ACHIEVEMENT_LOG // COMPETITIVE_PROGRAMMING // HACKATHON_DATA    ║
╚══════════════════════════════════════════════════════════════════╝
        </div>

        {/* Achievements */}
        <Achievements />

        {/* ASCII Divider */}
        <div className="text-center my-20 text-[10px] md:text-xs text-accent/30 whitespace-pre font-mono overflow-hidden">
╔══════════════════════════════════════════════════════════════════╗
║  REPOSITORY_MANIFEST // ACTIVE_PROJECTS // SOURCE_CODE_AVAILABLE ║
╚══════════════════════════════════════════════════════════════════╝
        </div>

        {/* Projects */}
        <Projects repos={repos} loading={loading} error={error} />

        {/* Terminal Section */}
        <Terminal user={user} />

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
