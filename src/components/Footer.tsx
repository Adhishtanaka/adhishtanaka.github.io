export default function Footer() {
    return (
        <footer className="mt-20 pt-12 border-t-3 border-fg grid grid-cols-1 md:grid-cols-3 gap-8 text-xs md:text-sm">
            <div className="border-l-2 border-white/10 pl-4">
                <strong className="block text-amber mb-4 uppercase">System Status</strong>
                <p className="opacity-80 leading-relaxed">
                    All systems operational.<br />
                    Last deployment: 2026-01-31<br />
                    Framework: Tailwind CSS
                </p>
            </div>
            <div className="border-l-2 border-white/10 pl-4">
                <strong className="block text-amber mb-4 uppercase">Remote Links</strong>
                <p className="opacity-80 leading-relaxed">
                    <a href="https://github.com/Adhishtanaka" target="_blank" rel="noreferrer" className="hover:text-matrix transition-colors">github.com/Adhishtanaka</a><br />
                    <a href="https://linkedin.com/in/adhishtanaka" target="_blank" rel="noreferrer" className="hover:text-matrix transition-colors">linkedin.com/in/adhishtanaka</a><br />
                    <a href="mailto:kulasoooriyaa@gmail.com" className="hover:text-matrix transition-colors">kulasoooriyaa@gmail.com</a>
                </p>
            </div>
            <div className="border-l-2 border-white/10 pl-4">
                <strong className="block text-amber mb-4 uppercase">Legal</strong>
                <p className="opacity-80 leading-relaxed">
                    © 2026 Adhishtanaka K.<br />
                    All rights reserved.<br />
                    <span className="text-matrix">[END OF FILE]</span>
                </p>
            </div>
        </footer>
    );
}
