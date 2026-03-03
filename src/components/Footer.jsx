import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

const Footer = () => {
    return (
        <footer id="contact" className="relative py-12 mt-20 border-t border-white/5 bg-surface/50">
            <div className="section-container !py-12 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available for new opportunities
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">extraordinary</span></h2>

                    <p className="text-muted mb-8 leading-relaxed">
                        Whether you have a question, a project idea, or just want to connect—my inbox is always open. Let's make it happen.
                    </p>

                    <ContactForm />
                </motion.div>

                <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
                    <p>© {new Date().getFullYear()} Parth Salunkhe. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="https://github.com/ParthSalunkhe7052" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                        <a href="https://linkedin.com/in/parth-salunkhe-029a491a4" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="https://codevault.parth7.me" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">CodeVault</a>
                    </div>
                </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30"></div>
        </footer>
    );
};

export default Footer;
