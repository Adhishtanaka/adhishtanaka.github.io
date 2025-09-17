import { useState } from "react";

export default function Header({
    nav,
    githubUrl
}: {
    nav: { href: string; label: string }[];
    githubUrl?: string;
    twitterUrl?: string;
}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
                <a href="#home" className="inline-flex items-center gap-2">
                    <span className="font-semibold tracking-tight text-xl">Adhish</span>
                </a>
                <nav className="hidden sm:flex items-center gap-6 text-sm">
                    {nav.map((n) => (
                        <a
                            key={n.href}
                            href={n.href}
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {n.label}
                        </a>
                    ))}
                </nav>
                <div className="flex items-center gap-3 text-sm">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            GitHub
                        </a>
                    )}
                    
                    <a
                        href="https://www.linkedin.com/in/adhishtanaka/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        LinkedIn
                    </a>


                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="sm:hidden p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="sm:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                    <div className="px-4 py-4 space-y-3">
                        {nav.map((n) => (
                            <a
                                key={n.href}
                                href={n.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                            >
                                {n.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
