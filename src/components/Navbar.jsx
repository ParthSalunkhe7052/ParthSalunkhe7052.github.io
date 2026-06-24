import React, { useState } from 'react';
import { BriefcaseBusiness, Command, FileText, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useScroll } from '../hooks/use-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { y, lastY, progress: scrollProgress } = useScroll();
    const shouldReduceMotion = useReducedMotion();

    const scrolled = y > 50;
    const hidden = y > lastY && y > 100;
    const showMiniCta = y > 650;

    const navLinks = [
        { name: 'Work', href: '/#projects' },
        { name: 'Skills', href: '/#skills' },
        { name: 'Experiments', href: '/#experiments', isSpecial: true },
        { name: 'About', href: '/#about' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <>
            <div className="fixed top-0 left-0 h-0.5 bg-primary z-[60] transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }} />
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" }
                }}
                initial="visible"
                animate={hidden ? "hidden" : "visible"}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.35, ease: 'easeInOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
                    scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
                }`}
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo — clean text */}
                        <a href="/" className="font-heading font-bold text-lg tracking-tight hover:text-primary transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded">
                            Parth Salunkhe<span className="text-primary">.</span>
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`relative px-3 py-2 text-sm transition-colors duration-200 group focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md ${link.isSpecial ? 'text-primary font-semibold hover:text-primary/70' : 'text-muted hover:text-text'}`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/Parth_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative px-3 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md"
                            >
                                Resume
                            </a>
                            
                            {/* Cmd+K Hint */}
                            <button
                                onClick={() => document.dispatchEvent(new CustomEvent('open-cmdk'))}
                                className="ml-2 flex items-center gap-1.5 px-2 py-1.5 bg-surface border border-border rounded-md text-xs text-muted hover:text-text hover:border-muted transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                                aria-label="Open Command Palette"
                            >
                                <Command size={12} />
                                <span>K</span>
                            </button>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="md:hidden flex items-center gap-2">
                            <button
                                className="p-1.5 text-muted hover:text-text transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md"
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X size={22} /> : <Menu size={22} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
                            className="md:hidden absolute top-full left-6 right-6 mt-2 z-50"
                        >
                            {/* Adding a click-outside overlay */}
                            <div className="fixed inset-0 top-0 bg-black/20 z-[-1]" onClick={() => setIsOpen(false)} />
                            <div className="relative bg-surface border border-border rounded-xl p-3 flex flex-col gap-1 shadow-2xl">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className={`px-4 py-3 text-sm rounded-lg hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none ${link.isSpecial ? 'text-primary font-semibold' : 'text-muted hover:text-text'}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <a
                                    href="/Parth_Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-3 text-sm font-medium text-primary rounded-lg hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                                >
                                    Resume
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
            <AnimatePresence>
                {showMiniCta && (
                    <motion.div
                        initial={{ opacity: 0, y: 12, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: 12, x: '-50%' }}
                        style={{ x: '-50%' }}
                        className="fixed bottom-5 left-1/2 z-50 hidden md:flex items-center gap-1 rounded-full border border-border bg-background/85 backdrop-blur-md px-2 py-2 shadow-2xl"
                    >
                        <a href="/#projects" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-muted hover:text-primary hover:bg-white/5 transition-colors">
                            <BriefcaseBusiness size={14} />
                            Projects
                        </a>
                        <a href="/Parth_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-muted hover:text-primary hover:bg-white/5 transition-colors">
                            <FileText size={14} />
                            Resume
                        </a>
                        <a href="mailto:contact@parth7.me" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-muted hover:text-primary hover:bg-white/5 transition-colors">
                            <Mail size={14} />
                            Email
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
