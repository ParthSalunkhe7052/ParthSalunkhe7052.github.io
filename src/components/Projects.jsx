import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import asuraImg from '../assets/asura.png';
import ddosImg from '../assets/ddos.png';
import clashImg from '../assets/clash.png';
import adawwrablyImg from '../assets/adawwrably.png';

const Projects = () => {
    const shouldReduceMotion = useReducedMotion();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', damping: 15, stiffness: 100 }
        }
    };

    const projects = [
        {
            id: 'codevault',
            title: 'CodeVault',
            description: 'Security-first licensing platform that compiles Python and Node.js scripts into native, hardware-locked binaries.',
            stats: 'LaaS + Compiler + DRM',
            tags: ['C/C++', 'Python', 'Node.js', 'FastAPI'],
            link: 'https://codevault.parth7.me',
            github: '#',
            image: null,
            featured: true, // spans 2 cols
        },
        {
            id: 'adawwrably',
            title: 'Adawwrably',
            description: 'A vibrant e-commerce platform for an anime merchandise store. Modern, interactive UI tailored for fans.',
            stats: 'Live Project',
            tags: ['E-Commerce', 'React'],
            link: 'https://adawwrably.vercel.app/',
            github: '#',
            image: adawwrablyImg,
        },
        {
            id: 'asura',
            title: 'ASURA — AI SecureLab',
            description: 'Privacy-first security testing tool. Integrates Bandit and Semgrep scanners with AI vulnerability analysis.',
            stats: 'Automated Code Review',
            tags: ['FastAPI', 'React', 'AI'],
            github: 'https://github.com/ParthSalunkhe7052/Asura-Security-Scan',
            image: asuraImg,
        },
        {
            id: 'ddos',
            title: 'DDoS Globe Visualizer',
            description: 'Real-time 3D cyber threat intelligence platform animating live DDoS attacks.',
            stats: '200+ msg/sec',
            tags: ['Three.js', 'WebSockets'],
            github: 'https://github.com/ParthSalunkhe7052/ddos-globe-visualizer',
            image: ddosImg,
        },
        {
            id: 'clash',
            title: 'Clash Emote Detector',
            description: 'Computer vision system that triggers Clash Royale emotes live using hand gestures.',
            stats: '95%+ accuracy @ 30 FPS',
            tags: ['PyTorch', 'OpenCV'],
            github: 'https://github.com/ParthSalunkhe7052/Clash-Emote-Detector',
            image: clashImg,
        },
        {
            id: 'ugv',
            title: 'Autonomous Ground Vehicle',
            description: 'Built a 6-wheel rover integrating ROS-based navigation, SLAM mapping, and obstacle detection.',
            stats: 'Best Presentation at ICMTC',
            tags: ['ROS', 'Lidar'],
            github: '#',
            image: null,
        }
    ];

    return (
        <section id="projects" className="section-container">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={containerVariants}
            >
                <motion.div variants={itemVariants} className="mb-12">
                    <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">06 // Portfolio</span>
                    <h2 className="text-3xl md:text-4xl font-bold">Selected Work</h2>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
                            className={`group relative border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300 bg-surface flex flex-col ${
                                project.featured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                            }`}
                        >
                            {/* Image Background for Bento */}
                            {project.image ? (
                                <div className={`w-full overflow-hidden bg-surface ${project.featured ? 'h-64' : 'h-48'}`}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300" />
                                </div>
                            ) : (
                                <div className={`w-full bg-surface flex items-center justify-center relative overflow-hidden ${project.featured ? 'h-64' : 'h-48'}`}>
                                    {/* Abstract placeholder for items without images */}
                                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-surface to-background blur-2xl" />
                                    <span className="font-mono text-sm text-primary/50 uppercase tracking-widest z-10">{project.id}</span>
                                </div>
                            )}

                            {/* Content */}
                            <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 -mt-16">
                                <h3 className="text-2xl font-bold text-text mb-2 group-hover:text-primary transition-colors duration-200">
                                    {project.title}
                                </h3>

                                {project.stats && (
                                    <div className="mb-4 inline-block bg-primary/10 border border-primary/20 text-primary w-fit text-xs font-mono px-2.5 py-1 rounded">
                                        {project.stats}
                                    </div>
                                )}

                                <p className="text-sm text-muted mb-6 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-mono text-muted px-2 py-1 border border-border rounded bg-background/50 backdrop-blur-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-4 shrink-0">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-sm font-medium text-text hover:text-primary transition-colors duration-200 group/link"
                                            >
                                                Live
                                                <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                            </a>
                                        )}
                                        {project.github !== '#' && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-sm font-medium text-text hover:text-primary transition-colors duration-200 group/link"
                                            >
                                                Source
                                                <Github size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;