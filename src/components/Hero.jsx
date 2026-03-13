import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import parthPhoto from '../assets/parth-photo.jpg';

const TITLES = [
    'Full-Stack Engineer',
    'Security Researcher',
    'AI Systems Builder',
];

const Hero = () => {
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentTitle = TITLES[titleIndex];
        let timeout;

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

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, titleIndex]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 16 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center w-full">
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
                            Computer Engineering student at DTU, building scalable SaaS and autonomous AI systems. Currently engineering{' '}
                            <a href="https://codevault.parth7.me" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4">
                                CodeVault
                            </a>
                            {' '}— a security-first licensing platform that compiles Python & Node.js into native C binaries.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex items-center gap-5">
                            {[
                                { icon: Github, href: 'https://github.com/ParthSalunkhe7052', label: 'GitHub' },
                                { icon: Linkedin, href: 'https://linkedin.com/in/parth-salunkhe-029a491a4', label: 'LinkedIn' },
                                { icon: Mail, href: 'mailto:contact@parth7.me', label: 'Email' }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="text-muted hover:text-primary transition-colors duration-200"
                                >
                                    <social.icon size={20} strokeWidth={1.5} />
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                        className="order-1 lg:order-2 flex justify-center"
                    >
                        <div className="relative">
                            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/40 shadow-lg shadow-primary/10">
                                <img
                                    src={parthPhoto}
                                    alt="Parth Salunkhe"
                                    className="w-full h-full object-cover object-[center_80%] scale-[1.35] origin-center"
                                />
                            </div>
                            {/* Subtle ring */}
                            <div className="absolute -inset-3 rounded-full border border-border opacity-50 pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
