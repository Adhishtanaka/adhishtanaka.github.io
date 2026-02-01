import { useState } from "react";

export default function Contact() {
    const [sent, setSent] = useState(false);

    const handleClick = () => {
        setSent(true);
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <section id="contact" className="h-[50vh] flex items-center justify-center mb-20">
            <a
                href="mailto:kulasoooriyaa@gmail.com"
                onClick={handleClick}
                className="group relative inline-flex items-center justify-center font-sans text-3xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tight bg-alert text-bg px-8 md:px-16 py-6 md:py-12 border-4 border-alert shadow-[10px_10px_0px_#e6e6e6] md:shadow-[20px_20px_0px_#e6e6e6] transition-all duration-200 hover:shadow-[15px_15px_0px_#e6e6e6] md:hover:shadow-[30px_30px_0px_#e6e6e6] hover:translate-x-[-5px] hover:translate-y-[-5px] overflow-hidden"
            >
                <span className="relative z-10 group-hover:text-bg transition-colors">INITIATE_CONTACT</span>
                <div className="absolute inset-0 bg-matrix transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            </a>

            {sent && (
                <div className="fixed bottom-4 right-4 bg-matrix text-bg px-4 py-2 border-2 border-fg z-50 font-mono text-sm">
                    [ MESSAGE_SENT ]
                </div>
            )}
        </section>
    );
}
