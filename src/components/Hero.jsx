import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight, FileText, Github, Linkedin, Mail } from 'lucide-react';
import parthPhoto from '../assets/parth-photo.webp';
import { useScroll } from '../hooks/use-scroll';

const TITLES = [
    'Building CodeVault, a cloud-integrated licensing and binary protection platform.',
    'I design, build, deploy, and maintain real products across SaaS, AI, and security.',
    'Focused on auth, APIs, cloud deployments, security checks, and clean UX.',
    'Computer Engineering student at DTU, shipping full-stack systems beyond class projects.',
];

const Hero = () => {
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    const { y } = useScroll();

    useEffect(() => {
        const currentTitle = TITLES[titleIndex];
        let timeout;

        if (y <= 600) {
            if (!isDeleting && displayText === currentTitle) {
                timeout = setTimeout(() => setIsDeleting(true), 2200);
            } else if (isDeleting && displayText === '') {
                setIsDeleting(false);
                setTitleIndex((prev) => (prev + 1) % TITLES.length);
            } else {
                timeout = setTimeout(() => {
                    setDisplayText(
                        isDeleting
                            ? currentTitle.slice(0, displayText.length - 1)
                            : currentTitle.slice(0, displayText.length + 1)
                    );
                }, isDeleting ? 24 : 44);
            }
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [displayText, isDeleting, titleIndex, y]);

    const handleEmailClick = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText('contact@parth7.me');
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', damping: 15, stiffness: 100 },
        },
    };

    return (
        <section id="hero" className="relative min-h-[100dvh] flex items-center w-full overflow-hidden">
            <div className="section-container">
                <div className="grid lg:grid-cols-[1fr,auto] gap-16 items-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="order-1 min-w-0 max-w-full"
                    >
                        <motion.p variants={itemVariants} className="text-primary text-xs md:text-sm font-mono tracking-wide mb-5 min-h-[3rem] md:min-h-[2.5rem] max-w-2xl break-words [overflow-wrap:anywhere]" aria-live="polite">
                            {displayText}
                            <span className="inline-block w-[2px] h-4 bg-primary ml-1 animate-pulse" />
                        </motion.p>

                        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 tracking-tight leading-[1.05]">
                            Parth Salunkhe<span className="text-primary">.</span>
                        </motion.h1>

                        <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl font-semibold text-text mb-5 max-w-3xl leading-tight break-words">
                            Full-stack SaaS builder shipping secure deployed systems.
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-base md:text-lg text-[#d0d0d0] mb-8 max-w-2xl leading-relaxed break-words">
                            I build production-focused web apps, cloud workflows, and security-aware tools. Currently building{' '}
                            <a href="https://codevault.parth7.me" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4 font-medium transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none">
                                CodeVault
                            </a>
                            , a cloud-integrated licensing and binary protection platform for Python and Node.js projects.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8 max-w-full">
                            <a
                                href="#projects"
                                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-background font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                            >
                                View Live Projects
                                <ArrowDown size={17} />
                            </a>
                            <a
                                href="/Parth_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 rounded-lg border border-border text-text font-bold hover:border-primary transition-colors"
                            >
                                <FileText size={17} />
                                Open Resume
                            </a>
                            <a
                                href="https://codevault.parth7.me"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 rounded-lg border border-primary/30 text-primary font-bold hover:bg-primary/10 transition-colors"
                            >
                                See CodeVault Live
                                <ArrowUpRight size={17} />
                            </a>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-center gap-4">
                            <motion.a
                                href="https://github.com/ParthSalunkhe7052"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="relative text-muted hover:text-primary transition-colors duration-200 p-2 -m-2 rounded-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                                whileHover={shouldReduceMotion ? {} : { scale: 1.15, y: -2 }}
                                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            >
                                <Github size={22} strokeWidth={1.5} />
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com/in/parth-salunkhe-029a491a4"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="relative text-muted hover:text-primary transition-colors duration-200 p-2 -m-2 rounded-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                                whileHover={shouldReduceMotion ? {} : { scale: 1.15, y: -2 }}
                                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            >
                                <Linkedin size={22} strokeWidth={1.5} />
                            </motion.a>
                            <motion.a
                                href="#"
                                aria-label={isCopied ? 'Copied!' : 'Copy Email'}
                                onClick={handleEmailClick}
                                className="relative inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors duration-200 px-3 py-2 -m-2 rounded-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                                whileHover={shouldReduceMotion ? {} : { scale: 1.08, y: -2 }}
                                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            >
                                <Mail size={22} strokeWidth={1.5} />
                                <span>Copy Email</span>
                                <AnimatePresence>
                                    {isCopied && (
                                        <motion.span
                                            initial={{ opacity: 0, y: 10, x: '-50%' }}
                                            animate={{ opacity: 1, y: 0, x: '-50%' }}
                                            exit={{ opacity: 0, y: 10, x: '-50%' }}
                                            className="absolute -top-8 left-1/2 bg-primary text-background text-xs font-bold py-1 px-2 rounded pointer-events-none"
                                        >
                                            Copied!
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.2 }}
                        className="order-2 lg:order-2 flex justify-center"
                    >
                        <div className="relative group">
                            <motion.div
                                className="w-44 h-44 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/20 shadow-[0_0_40px_-15px_rgba(0,255,204,0.3)] transition-all duration-500 group-hover:border-primary/60 group-hover:shadow-[0_0_60px_-15px_rgba(0,255,204,0.5)]"
                                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                                transition={{ type: 'spring', damping: 15 }}
                            >
                                <img
                                    src={parthPhoto}
                                    width={288}
                                    height={288}
                                    alt="Parth Salunkhe"
                                    className="w-full h-full object-cover object-bottom origin-center"
                                />
                            </motion.div>
                            <div className="absolute -inset-4 rounded-full border border-border/50 opacity-50 pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-out" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
