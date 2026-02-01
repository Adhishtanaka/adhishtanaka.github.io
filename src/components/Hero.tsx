export default function Hero({
    cvUrl
}: {
    name?: string;
    bio?: string;
    avatarUrl?: string;
    location?: string | null;
    repoCount?: number;
    followers?: number;
    following?: number;
    cvUrl?: string;
}) {
  return (
    <section className="min-h-[90vh] flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center justify-center mb-32">
      {/* LEFT: MAIN CARD */}
      <div className="glitch-hover border-3 border-fg bg-bg p-6 md:p-12 shadow-[15px_15px_0px_#ff2a00] hover:shadow-[20px_20px_0px_#ffb000] transition-all duration-300 hover:translate-x-[-5px] hover:translate-y-[-5px] transform -rotate-1 hover:rotate-0 w-full">
        <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold leading-none mb-4 text-alert uppercase tracking-tight">
          ADHISHTANAKA<br />KULASOORIYA
        </h1>
        <div className="text-lg md:text-xl mb-6 uppercase tracking-wider">
          Computer Science<br />
          Undergraduate &<br />
          <span className="text-matrix">AI Integration Specialist</span>
        </div>
        <div className="text-sm opacity-70 font-mono">
          NSBM Green University<br />
          2022 — Present
        </div>
      </div>

      {/* RIGHT: DESCRIPTION */}
      <div className="border-l-4 border-alert pl-6 md:pl-8 lg:translate-y-12 w-full">
        <p className="mb-6 text-base md:text-lg leading-relaxed">
          Full-stack developer specializing in AI-powered applications, distributed systems, and experimental interfaces. I build tools that bridge the gap between human intuition and machine logic.
        </p>
        <p className="mb-8 text-matrix text-base md:text-lg">
          Current focus: Natural Language to SQL translation, synthetic data generation, and cross-platform mobile architectures.
        </p>

        {/* META GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs md:text-sm">
          <div>
            <strong className="block text-alert mb-2 uppercase">Stack</strong>
            TS • Py • Java • Dart
          </div>
          <div>
            <strong className="block text-alert mb-2 uppercase">Frameworks</strong>
            Next • Flutter • FastAPI
          </div>
          <div>
            <strong className="block text-alert mb-2 uppercase">AI/ML</strong>
            LangChain • TF • Gemini
          </div>
        </div>
        
        {cvUrl && (
          <div className="mt-8">
            <a
              href={cvUrl}
              download
              className="inline-flex items-center gap-2 border-2 border-matrix px-4 py-2 text-sm text-matrix hover:bg-matrix hover:text-bg transition-all uppercase tracking-wider"
            >
              [ DOWNLOAD_CV ]
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
