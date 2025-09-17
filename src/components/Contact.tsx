import React, { useState } from "react";

export default function Contact() {
    const [sent, setSent] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setFormData({ name: '', email: '', message: '' });
        setSent(true);
        setTimeout(() => setSent(false), 4000);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
            <div className="mb-8 flex items-end justify-between gap-4">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900 dark:text-gray-100">Contact</h2>
                <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="md:col-span-2">
                    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/60 p-6">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="mb-1 block text-sm text-gray-600 dark:text-gray-400">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="mb-1 block text-sm text-gray-600 dark:text-gray-400">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="message" className="mb-1 block text-sm text-gray-600 dark:text-gray-400">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                value={formData.message}
                                onChange={handleInputChange}
                                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                            />
                        </div>
                        <div className="mt-6">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="inline-flex items-center rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-5 py-2.5 text-sm hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                Send Message
                            </button>
                            {sent && (
                                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">Thanks! I will get back to you soon.</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Prefer email?</p>
                        <a
                            href="mailto:kulasoooriyaa@gmail.com"
                            className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            kulasoooriyaa@gmail.com
                        </a>
                        <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <span className="rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-2 py-1">Available for freelance</span>
                            <span className="rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-2 py-1">Remote-friendly</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
