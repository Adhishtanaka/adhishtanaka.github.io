export default function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-700 py-8 bg-white/80 dark:bg-gray-900/80">
            <div className="mx-auto max-w-6xl px-4 flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-xs text-gray-500 dark:text-gray-500">
                    © {new Date().getFullYear()} Adhish. All rights reserved.
                </p>
                <div className="flex items-center gap-3 text-xs">
                    <a
                        href="https://github.com/Adhishtanaka"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        GitHub
                    </a>
                    <span className="text-gray-400 dark:text-gray-600">•</span>
                    <a
                        href="https://www.linkedin.com/in/adhishtanaka/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        LinkedIn
                    </a>
                    <span className="text-gray-400 dark:text-gray-600">•</span>
                    <a
                        href="https://x.com/adhishtanaka"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        X
                    </a>
                    <span className="text-gray-400 dark:text-gray-600">•</span>
                    <a
                        href="#home"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        Top
                    </a>
                </div>
            </div>
        </footer>
    );
}
