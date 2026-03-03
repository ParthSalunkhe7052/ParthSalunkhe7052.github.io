import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import asuraImg from '../assets/asura.png';
import ddosImg from '../assets/ddos.png';
import clashImg from '../assets/clash.png';

const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const projects = [
        {
            id: 'asura',
            title: 'ASURA - AI SecureLab',
            description: 'Privacy-first security testing tool with AI-powered vulnerability analysis. Integrates multiple scanners like Bandit and Semgrep with local LLMs for explanation.',
            tags: ['FastAPI', 'React', 'Python', 'AI'],
            link: 'https://github.com/ParthSalunkhe7052/Asura-Security-Scan',
            image: asuraImg,
            color: "from-purple-500/20 to-pink-500/20"
        },
        {
            id: 'ddos',
            title: 'DDoS Globe Visualizer',
            description: 'Real-time 3D threat intelligence visualization platform. Displays live attacks on an interactive globe using WebSocket and Three.js.',
            tags: ['Three.js', 'React', 'WebSocket', 'FastAPI'],
            link: 'https://github.com/ParthSalunkhe7052/ddos-globe-visualizer',
            image: ddosImg,
            color: "from-blue-500/20 to-cyan-500/20"
        },
        {
            id: 'clash',
            title: 'Clash Emote Detector',
            description: 'Real-time gesture recognition system using computer vision. Detects hand gestures to trigger Clash Royale emotes in real-time.',
            tags: ['PyTorch', 'OpenCV', 'MediaPipe', 'Flask'],
            link: 'https://github.com/ParthSalunkhe7052/Clash-Emote-Detector',
            image: clashImg,
            color: "from-orange-500/20 to-red-500/20"
        },
        {
            id: 'ugv',
            title: 'UGV Tech Team - Autonomous Ground Vehicle',
            description: 'Built a 6-wheel rover using Jetson Nano, Lidar, and sensors. Integrated ROS-based navigation, SLAM mapping, and obstacle detection. Awarded Best Presentation at ICMTC, Cairo.',
            tags: ['ROS', 'Python', 'Jetson Nano', 'Lidar', 'SLAM'],
            link: '#',
            image: null,
            color: "from-emerald-500/20 to-teal-500/20"
        }
    ];

    return (
        <section id="projects" className="section-container relative z-10 pt-10">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <div className="flex items-center gap-4 mb-16">
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold">
                        Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Work</span>
                    </motion.h2>
                    <motion.div variants={itemVariants} className="h-px bg-white/10 flex-grow mt-2 hidden sm:block"></motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="group glass-panel overflow-hidden border border-white/5 hover:border-white/10 transition-colors duration-300"
                        >
                            {project.image ? (
                                <div className="relative h-64 overflow-hidden bg-surface">
                                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} mix-blend-overlay z-10 opacity-60 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                                    />
                                </div>
                            ) : (
                                <div className={`h-64 flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                                    <span className="font-heading font-bold text-2xl text-white/50 tracking-widest uppercase">Research Project</span>
                                </div>
                            )}

                            <div className="p-8">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted mb-6 leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded bg-white/5 text-muted border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm font-semibold text-white/80 hover:text-white transition-colors group/link"
                                >
                                    <Github className="w-4 h-4 mr-2" />
                                    View Source
                                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
