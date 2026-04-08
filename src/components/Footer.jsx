import React, { useState } from 'react';
import ContactModal from './ContactModal';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <footer id="contact" className="relative pt-20 pb-12 border-t border-border">
            <div className="section-container !py-0">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-xl"
                >
                    <div className="flex items-center gap-2 mb-6 inline-flex bg-green-500/10 text-green-500 border border-green-500/20 px-3 py-1.5 rounded-full text-xs font-mono">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Open to Opportunities
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Let's build something together.
                    </h2>

                    <p className="text-muted mb-8 leading-relaxed">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Drop me a line!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-background font-bold rounded-lg hover:bg-opacity-90 transition-colors shadow-lg shadow-primary/20 group"
                        >
                            Send a Message
                            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                        </button>
                        <a
                            href="mailto:contact@parth7.me"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-text font-bold rounded-lg hover:border-primary transition-colors"
                        >
                            Direct Email
                        </a>
                    </div>
                </motion.div>

                <div className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <p className="text-sm text-muted">
                        © {new Date().getFullYear()} Parth Salunkhe
                    </p>

                    <div className="flex items-center gap-5">
                        {[
                            { icon: Github, href: 'https://github.com/ParthSalunkhe7052', label: 'GitHub' },
                            { icon: Linkedin, href: 'https://linkedin.com/in/parth-salunkhe-029a491a4', label: 'LinkedIn' },
                            { icon: Mail, href: 'mailto:contact@parth7.me', label: 'Email' },
                        ].map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="text-muted hover:text-text transition-colors duration-200"
                            >
                                <social.icon size={16} strokeWidth={1.5} />
                            </a>
                        ))}
                    </div>
                </div>
             </div>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </footer>
    );
};

export default Footer;
