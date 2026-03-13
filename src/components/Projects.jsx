import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import asuraImg from '../assets/asura.png';
import ddosImg from '../assets/ddos.png';
import clashImg from '../assets/clash.png';

const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    };

    const projects = [
        {
            id: 'asura',
            title: 'ASURA — AI SecureLab',
            description: 'Privacy-first security testing tool with AI-powered vulnerability analysis. Integrates Bandit and Semgrep scanners with local LLMs for automated code review.',
            tags: ['FastAPI', 'React', 'Python', 'AI'],
            github: 'https://github.com/ParthSalunkhe7052/Asura-Security-Scan',
            image: asuraImg,
        },
        {
            id: 'ddos',
            title: 'DDoS Globe Visualizer',
            description: 'Real-time 3D threat intelligence visualization platform. Displays live DDoS attacks on an interactive globe using WebSocket streams and Three.js.',
            tags: ['Three.js', 'React', 'WebSocket', 'FastAPI'],
            github: 'https://github.com/ParthSalunkhe7052/ddos-globe-visualizer',
            image: ddosImg,
        },
        {
            id: 'clash',
            title: 'Clash Emote Detector',
            description: 'Real-time gesture recognition system using computer vision. Detects hand gestures through MediaPipe to trigger Clash Royale emotes live.',
            tags: ['PyTorch', 'OpenCV', 'MediaPipe', 'Flask'],
            github: 'https://github.com/ParthSalunkhe7052/Clash-Emote-Detector',
            image: clashImg,
        },
        {
            id: 'ugv',
            title: 'Autonomous Ground Vehicle',
            description: 'Built a 6-wheel rover with Jetson Nano, Lidar, and ROS-based SLAM navigation. Awarded Best Presentation at ICMTC, Cairo.',
            tags: ['ROS', 'Python', 'Jetson Nano', 'Lidar', 'SLAM'],
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
                <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-12">
                    Selected Work
                </motion.h2>

                <div className="space-y-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="group border border-border rounded-xl overflow-hidden hover:border-muted/50 transition-colors duration-300"
                        >
                            <div className="grid md:grid-cols-[1fr,1fr]">
                                {/* Image */}
                                {project.image ? (
                                    <div className="h-56 md:h-auto overflow-hidden bg-surface">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                                        />
                                    </div>
                                ) : (
                                    <div className="h-56 md:h-auto bg-surface flex items-center justify-center">
                                        <span className="font-mono text-sm text-muted/50 uppercase tracking-widest">Research</span>
                                    </div>
                                )}

                                {/* Content */}
                                <div className="p-8 flex flex-col justify-center">
                                    <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors duration-200">
                                        {project.title}
                                    </h3>

                                    <p className="text-sm text-muted mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-mono text-muted px-2 py-1 border border-border rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {project.github !== '#' && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors duration-200 group/link w-fit"
                                        >
                                            <Github size={14} />
                                            Source
                                            <ArrowUpRight size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                        </a>
                                    )}
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
