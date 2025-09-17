export default function Hero({
    name,
    bio,
    location,
    cvUrl
}: {
    name: string;
    bio: string;
    avatarUrl?: string;
    location?: string;
    repoCount?: number;
    followers?: number;
    following?: number;
    cvUrl?: string; 
}) {
    return (
        <section className="relative isolate overflow-hidden">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
                <div className="grid grid-cols-1 items-start gap-8">
                    <div>
                        <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900 dark:text-gray-100">
                            {name}
                        </h1>
                        <p className="mt-4 max-w-[65ch] text-pretty text-base text-gray-600 dark:text-gray-400 sm:text-lg">
                            {bio}
                        </p>
                        {location && (
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                                Based in {location}
                            </p>
                        )}
                        <div className="mt-6 flex flex-wrap items-center gap-4">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-5 py-2.5 text-sm text-gray-900 dark:text-gray-100 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                View Projects
                            </a>
                            {cvUrl && (
                                <a
                                    href={cvUrl}
                                    download
                                    className="text-sm underline-offset-4 hover:underline text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" >
                                    Download CV
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
