import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { cn } from '../utils/cn';

const Hero = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
            {/* Particle Background */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={{
                        background: { color: { value: "transparent" } },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onHover: { enable: true, mode: "grab" },
                                resize: true,
                            },
                            modes: {
                                grab: { distance: 150, links: { opacity: 0.5 } },
                            },
                        },
                        particles: {
                            color: { value: ["#3b82f6", "#8b5cf6"] },
                            links: {
                                color: "#4b5563",
                                distance: 150,
                                enable: true,
                                opacity: 0.2,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: { default: "bounce" },
                                random: true,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: { enable: true, area: 800 },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                                animation: { enable: true, speed: 1, minimumValue: 0.1 }
                            },
                            shape: { type: "circle" },
                            size: {
                                value: { min: 1, max: 3 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>

            {/* Hero Content */}
            <div className="section-container relative z-10 flex flex-col items-start pt-20">
                <motion.div
                    className="max-w-3xl"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
                        <span className="text-sm font-medium text-primary">Full-Stack Engineer & AI Security</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter loading-tight">
                        Hi, I'm <br />
                        <span className="text-gradient">Parth Salunkhe.</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted mb-10 max-w-2xl leading-relaxed">
                        I'm a Computer Engineering student building scalable SaaS and autonomous AI systems.
                        Currently engineering <strong className="text-white font-medium">CodeVault</strong> to synthesize Python & Node.js compilation into secure native C binaries.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
                        <a href="#projects" className="primary-button group">
                            View Selected Work
                            <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                        </a>

                        <div className="flex items-center gap-2 ml-2">
                            {[
                                { icon: Github, href: "https://github.com/ParthSalunkhe7052" },
                                { icon: Linkedin, href: "https://linkedin.com/in/parth-salunkhe-029a491a4" },
                                { icon: Mail, href: "mailto:contact@parth7.me" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-surface border border-border text-muted hover:text-white hover:border-white/20 transition-all hover:-translate-y-1"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center opacity-50"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
