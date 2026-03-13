import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            
            setScrolled(currentScrollY > 50);
            setLastScrollY(currentScrollY);
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { name: 'Work', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" }
            }}
            initial="visible"
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
                scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
            }`}
        >
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo — just clean text */}
                    <a href="#" className="font-heading font-bold text-lg tracking-tight hover:text-primary transition-colors duration-200">
                        Parth Salunkhe
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 text-sm text-muted hover:text-text transition-colors duration-200 group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-primary transition-all duration-200 group-hover:w-1/2" />
                            </a>
                        ))}
                        <a
                            href="/Parth_Resume.docx"
                            download="Parth_Salunkhe_Resume.docx"
                            className="relative px-4 py-2 text-sm text-muted hover:text-text transition-colors duration-200 group"
                        >
                            Resume
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-primary transition-all duration-200 group-hover:w-1/2" />
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-muted hover:text-text transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden absolute top-full left-6 right-6 mt-2"
                    >
                        <div className="bg-surface border border-border rounded-xl p-3 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-3 text-sm text-muted hover:text-text rounded-lg hover:bg-surfaceHover transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/Parth_Resume.docx"
                                download="Parth_Salunkhe_Resume.docx"
                                className="px-4 py-3 text-sm text-muted hover:text-text rounded-lg hover:bg-surfaceHover transition-colors"
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
