export default function About() {
    return (
        <section id="about" className="mx-auto max-w-6xl px-4 py-16">
            <div className="mb-8 flex items-end justify-between gap-4">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-fg">About</h2>
                <div className="h-px flex-1 bg-fg/20" />
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="md:col-span-2">
                    <p className="text-pretty text-fg/80">
                        I am a Computer Science student specializing in AI integration for software development.
                        My focus is on creating tools that empower developers to build better applications,
                        rather than just consumer products. I'm committed to designing clean, efficient user
                        interfaces and developing scalable, high-performance applications. I'm also passionate
                        about exploring new technologies in AI, web, and mobile development.
                    </p>

                    {/* Technical Skills (grouped) */}
                    <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-fg/70 sm:grid-cols-3">
                        <li className="rounded-md border border-fg/20 bg-bg px-3 py-2">
                            TypeScript / Python / C# / Dart
                        </li>
                        <li className="rounded-md border border-fg/20 bg-bg px-3 py-2">
                            Firebase / Appwrite / Netlify
                        </li>
                        <li className="rounded-md border border-fg/20 bg-bg px-3 py-2">
                            Postgres / MySQL / Firestore
                        </li>
                        <li className="rounded-md border border-fg/20 bg-bg px-3 py-2">
                            Langchain / TensorFlow / Scikit-Learn
                        </li>
                        <li className="rounded-md border border-fg/20 bg-bg px-3 py-2">
                            React / Next.js / Flutter / FastAPI / ASP.NET
                        </li>
                    </ul>
                </div>

                {/* Education Timeline */}
                <div className="space-y-4">
                    <div className="rounded-xl border border-fg/20 bg-bg p-4">
                        <p className="text-sm font-medium text-fg">Education</p>
                        <ol className="mt-3 space-y-3 text-sm text-fg/70">
                            <li className="flex gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-alert" />
                                <div>
                                    <p className="font-medium text-fg">
                                        Bachelor of Computer Science
                                    </p>
                                    <p>NSBM Green University</p>
                                    <p className="text-xs text-fg/50">2022 — Present | Current GPA: 3.80</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}
