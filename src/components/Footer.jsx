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
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Get in Touch
                    </h2>

                    <p className="text-muted mb-8 leading-relaxed">
                        I'm always open to interesting conversations and opportunities. If you have a project in mind or just want to say hello, drop me a line.
                    </p>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center gap-2 text-lg text-primary hover:underline underline-offset-4 transition-colors duration-200 group bg-transparent border-none cursor-pointer outline-none"
                    >
                        Send a Message
                        <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </button>
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
