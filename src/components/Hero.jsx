import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import parthPhoto from '../assets/parth-photo.jpg';
import { GooeyDemo } from './ui/demo';

const TITLES = [
    'Shipped enterprise SaaS',
    'Built native compilers',
    '95% ML accuracy',
    'Orchestrated AI Agents',
];

const Hero = () => {
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const currentTitle = TITLES[titleIndex];
        let timeout;

        // Optionally pause typing if scrolled out of view to save performance
        const handleScroll = () => {
            if (window.scrollY > 600) {
                clearTimeout(timeout);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        if (window.scrollY <= 600) {
            if (!isDeleting && displayText === currentTitle) {
                timeout = setTimeout(() => setIsDeleting(true), 2000);
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
                }, isDeleting ? 40 : 80);
            }
        }

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [displayText, isDeleting, titleIndex]);

    const handleEmailClick = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText('contact@parth7.me');
        const target = e.currentTarget;
        const originalAria = target.getAttribute('aria-label');
        target.setAttribute('aria-label', 'Copied!');
        // Create a temporary "Copied!" tooltip effect
        const span = document.createElement('span');
        span.textContent = 'Copied!';
        span.className = 'absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-background text-xs font-bold py-1 px-2 rounded pointer-events-none opacity-0 transition-opacity duration-200';
        target.appendChild(span);
        // Fade in
        requestAnimationFrame(() => span.classList.replace('opacity-0', 'opacity-100'));
        setTimeout(() => {
            span.classList.replace('opacity-100', 'opacity-0');
            setTimeout(() => target.removeChild(span), 200);
            target.setAttribute('aria-label', originalAria);
        }, 2000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", damping: 15, stiffness: 100 }
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center w-full bg-black overflow-hidden">
            <div className="absolute inset-0 z-0">
                <GooeyDemo />
            </div>
            <div className="section-container">
                <div className="grid lg:grid-cols-[1fr,auto] gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="order-2 lg:order-1"
                    >
                        <motion.p variants={itemVariants} className="text-muted text-sm font-mono tracking-wide uppercase mb-6">
                            {displayText}
                            <span className="inline-block w-[2px] h-4 bg-primary ml-1 animate-pulse" />
                        </motion.p>

                        <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter leading-[1.1]">
                            Parth Salunkhe<span className="text-primary">.</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-lg text-muted mb-10 max-w-xl leading-relaxed">
                            I build secure, high-performance software at the intersection of full-stack systems, AI, and cybersecurity. Currently engineering{' '}
                            <a href="https://codevault.parth7.me" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4 font-medium transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none">
                                CodeVault
                            </a>
                            {' '}— a security-first licensing platform that compiles Python & Node.js into native C binaries.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex items-center gap-6">
                            {[
                                { icon: Github, href: 'https://github.com/ParthSalunkhe7052', label: 'GitHub', onClick: null },
                                { icon: Linkedin, href: 'https://linkedin.com/in/parth-salunkhe-029a491a4', label: 'LinkedIn', onClick: null },
                                { icon: Mail, href: '#', label: 'Copy Email', onClick: handleEmailClick }
                            ].map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target={social.onClick ? undefined : "_blank"}
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    onClick={social.onClick}
                                    className="relative text-muted hover:text-primary transition-colors duration-200 p-2 -m-2 rounded-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                                    whileHover={shouldReduceMotion ? {} : { scale: 1.15, y: -2 }}
                                    whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <social.icon size={22} strokeWidth={1.5} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.2 }}
                        className="order-1 lg:order-2 flex justify-center"
                    >
                        <div className="relative group">
                            <motion.div 
                                className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/20 shadow-[0_0_40px_-15px_rgba(0,255,204,0.3)] transition-all duration-500 group-hover:border-primary/60 group-hover:shadow-[0_0_60px_-15px_rgba(0,255,204,0.5)]"
                                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                                transition={{ type: "spring", damping: 15 }}
                            >
                                <img
                                    src={parthPhoto}
                                    alt="Parth Salunkhe"
                                    className="w-full h-full object-cover object-[center_80%] scale-[1.35] origin-center"
                                />
                            </motion.div>
                            {/* Subtle ring */}
                            <div className="absolute -inset-4 rounded-full border border-border/50 opacity-50 pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-out" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;