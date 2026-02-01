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

export default function Terminal({ user }: { user: GHUser | null }) {
  return (
    <section className="my-20 border-3 border-fg bg-[#0a0a0a] overflow-hidden">
      <div className="bg-fg text-bg px-4 py-2 flex justify-between items-center font-bold text-sm">
        <span>adhishtanaka@nsbm: ~/sys_info</span>
        <span className="flex gap-2 text-xs">[×] [_] [⬜]</span>
      </div>
      <div className="p-6 md:p-8 text-sm md:text-base leading-relaxed font-mono">
        <div className="text-matrix mb-2 cmd cursor-pointer hover:opacity-80 transition-opacity">
          <span className="text-alert mr-4">$</span>whoami --verbose
        </div>
        <div className="text-fg mb-6 pl-8 opacity-80">
          Adhishtanaka Kulasooriya [he/him]<br />
          Computer Science Undergraduate<br />
          NSBM Green University, Sri Lanka<br />
          GPA: 3.80 / 4.00
        </div>

        <div className="text-matrix mb-2 cmd cursor-pointer hover:opacity-80 transition-opacity">
          <span className="text-alert mr-4">$</span>cat /etc/stack.conf
        </div>
        <div className="text-fg mb-6 pl-8 opacity-80 text-xs md:text-sm">
          LANGUAGES=[TypeScript, Python, Java, C#, Dart, SQL]<br />
          FRONTEND=[Next.js, React, TailwindCSS, Flutter]<br />
          BACKEND=[FastAPI, ASP.NET, Node.js, Prisma]<br />
          DATABASES=[PostgreSQL, MySQL, Firestore]<br />
          AI_ML=[TensorFlow, LangChain, Gemini API, Scikit-Learn]<br />
          CLOUD=[Firebase, Appwrite, Netlify]
        </div>

        <div className="text-matrix mb-2 cmd cursor-pointer hover:opacity-80 transition-opacity">
          <span className="text-alert mr-4">$</span>ping github.com/{user?.login || "Adhishtanaka"} -c 1
        </div>
        <div className="text-fg mb-6 pl-8 opacity-80">
          64 bytes from github.com: icmp_seq=1 ttl=56 time=12.4 ms<br />
          {user?.followers ?? 13} followers | {user?.following ?? 13} following | {user?.public_repos ?? 13} repositories<br />
          Connection: STABLE
        </div>

        <div className="flex items-center gap-4 mt-8">
          <span className="text-alert">$</span>
          <span className="text-matrix">_awaiting_input</span>
          <div className="w-3 h-5 bg-alert animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}