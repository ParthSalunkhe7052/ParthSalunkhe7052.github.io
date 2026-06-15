import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import asuraImg from '../assets/asura.webp';
import ddosImg from '../assets/ddos.webp';
import clashImg from '../assets/clash.webp';
import ugvRealImg from '../assets/ugv-real.webp';
import gitasaarthiMainImg from '../assets/gitasaarthi-main.webp';

import UGVModal from './UGVModal';
import GitaSaarthiModal from './GitaSaarthiModal';
import RetainrModal from './RetainrModal';

const projects = [
    {
        id: 'asura',
        title: 'ASURA',
        category: 'Security analysis framework',
        impact: 'Reusable pre-deployment scanning workflow for security-first development habits.',
        description: 'Internal security analysis framework for scanning application code before deployment. ASURA combines static analysis tools like Semgrep and Bandit with a reusable API/UI workflow for surfacing risky patterns, explaining findings, and supporting security-first development habits.',
        tags: ['FastAPI', 'React', 'Semgrep', 'Bandit'],
        github: 'https://github.com/ParthSalunkhe7052/Asura-Security-Scan',
        image: asuraImg,
        notes: ['Combines scanner output with a reviewable API/UI flow.', 'Frames findings around developer action instead of raw tool noise.'],
    },
    {
        id: 'gitasaarthi',
        title: 'GitaSaarthi 2.0',
        category: 'RAG response system',
        impact: 'Grounded conversational responses with practical retrieval latency for a live UI.',
        description: 'Contextual Bhagavad Gita response system using semantic retrieval and a RAG pipeline. The project focuses on retrieving relevant source passages, grounding responses in context, and keeping inference latency practical for a conversational UI.',
        tags: ['React', 'Gemini', 'Python', 'Vector DB'],
        link: 'https://gitasaarthi.vercel.app/',
        github: '#',
        image: gitasaarthiMainImg,
        notes: ['Uses retrieval context to keep responses tied to source passages.', 'Prioritizes usable response speed for conversation.'],
    },
    {
        id: 'retainr',
        title: 'Retainr.bot',
        category: 'Slack and Discord SaaS workflow',
        impact: 'Webhook-driven retainer usage tracking inside the tools teams already use.',
        description: 'Lightweight SaaS workflow for tracking retainer usage and refill signals inside Slack and Discord. Built around webhook-driven updates, workspace-level account state, and simple billing integration patterns.',
        tags: ['Slack API', 'Discord API', 'Node.js', 'Webhooks'],
        github: '#',
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop',
        notes: ['Models workspace-level account state for team usage.', 'Uses webhook updates instead of a heavy dashboard-first flow.'],
    },
    {
        id: 'ddos',
        title: 'DDoS Globe Visualizer',
        category: 'Real-time 3D network visualization',
        impact: 'Streaming traffic patterns rendered in a browser without overwhelming the viewer.',
        description: 'Real-time 3D network event visualizer for understanding attack traffic patterns. Built with WebSockets and Three.js to render streaming events without overwhelming the browser.',
        tags: ['Three.js', 'WebSockets', 'React'],
        github: 'https://github.com/ParthSalunkhe7052/ddos-globe-visualizer',
        image: ddosImg,
        notes: ['Separates event stream handling from 3D rendering concerns.', 'Visualizes patterns instead of presenting raw network logs.'],
    },
    {
        id: 'clash',
        title: 'Clash Emote Detector',
        category: 'Computer vision interaction experiment',
        impact: 'Camera input translated into low-latency game interaction feedback.',
        description: 'Computer vision interaction experiment that maps hand gestures to live game emote triggers. The useful framing is low-latency gesture recognition, camera input handling, and real-time feedback loops.',
        tags: ['PyTorch', 'OpenCV', 'Python'],
        github: 'https://github.com/ParthSalunkhe7052/Clash-Emote-Detector',
        image: clashImg,
        notes: ['Focuses on real-time camera feedback rather than offline detection only.', 'Connects model output to a visible interaction loop.'],
    },
    {
        id: 'ugv',
        title: 'Autonomous Ground Vehicle',
        category: 'Robotics and navigation',
        impact: 'Hardware integration breadth across rover control, sensors, and obstacle handling.',
        description: 'Robotics project integrating rover hardware, sensor input, navigation logic, and obstacle detection. Kept here as engineering breadth alongside software systems work.',
        tags: ['ROS', 'Lidar', 'Robotics'],
        github: '#',
        image: ugvRealImg,
        notes: ['Integrates hardware and navigation into one rover workflow.', 'Recognized with Best Presentation at ICMTC.'],
    },
];

const Projects = () => {
    const shouldReduceMotion = useReducedMotion();
    const [isUGVModalOpen, setIsUGVModalOpen] = useState(false);
    const [isGitaModalOpen, setIsGitaModalOpen] = useState(false);
    const [isRetainrModalOpen, setIsRetainrModalOpen] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
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

    const openProjectModal = (projectId) => {
        if (projectId === 'ugv') setIsUGVModalOpen(true);
        if (projectId === 'gitasaarthi') setIsGitaModalOpen(true);
        if (projectId === 'retainr') setIsRetainrModalOpen(true);
    };

    return (
        <section id="projects" className="section-container">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={containerVariants}
            >
                <motion.div variants={itemVariants} className="mb-12">
                    <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">03 // Selected Systems</span>
                    <h2 className="text-3xl md:text-4xl font-bold">Selected Systems</h2>
                    <p className="text-muted mt-3 max-w-2xl">
                        Serious SaaS, security, AI, visualization, and robotics projects with proof-oriented notes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => {
                        const hasModal = ['ugv', 'gitasaarthi', 'retainr'].includes(project.id);

                        return (
                            <motion.article
                                key={project.id}
                                variants={itemVariants}
                                whileHover={{ scale: shouldReduceMotion ? 1 : 1.01 }}
                                className="group border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors duration-300 bg-surface flex flex-col"
                            >
                                <button
                                    type="button"
                                    onClick={() => hasModal && openProjectModal(project.id)}
                                    className={`w-full text-left h-52 overflow-hidden bg-background relative ${hasModal ? 'cursor-pointer' : 'cursor-default'}`}
                                    aria-label={hasModal ? `Open ${project.title} details` : project.title}
                                >
                                    <img
                                        src={project.image}
                                        width={700}
                                        height={360}
                                        alt={`${project.title} deployed project screenshot`}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
                                </button>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="mb-3">
                                        <h3 className="text-2xl font-bold text-text group-hover:text-primary transition-colors duration-200">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs font-mono text-primary uppercase tracking-wide mt-1">
                                            {project.category}
                                        </p>
                                    </div>

                                    <p className="text-sm text-text mb-3 leading-relaxed">
                                        {project.impact}
                                    </p>

                                    <p className="text-sm text-muted mb-5 leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-xs font-mono text-muted px-2 py-1 border border-border rounded bg-background/50">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="border-t border-border pt-4 mb-5">
                                        <h4 className="text-xs font-mono text-muted uppercase tracking-wide mb-2">Engineering notes</h4>
                                        <ul className="space-y-1.5">
                                            {project.notes.map((note) => (
                                                <li key={note} className="text-xs text-muted leading-relaxed">
                                                    - {note}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-wrap gap-3 mt-auto">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-background text-sm font-bold hover:bg-primary/90 transition-colors"
                                            >
                                                Live Demo
                                                <ArrowUpRight size={15} />
                                            </a>
                                        )}
                                        {project.github !== '#' && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-bold text-text hover:border-primary transition-colors"
                                            >
                                                <Github size={15} />
                                                GitHub
                                            </a>
                                        )}
                                        {hasModal && (
                                            <button
                                                type="button"
                                                onClick={() => openProjectModal(project.id)}
                                                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-bold text-text hover:border-primary transition-colors"
                                            >
                                                Details
                                                <ArrowUpRight size={15} />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </motion.div>
            <UGVModal isOpen={isUGVModalOpen} onClose={() => setIsUGVModalOpen(false)} />
            <GitaSaarthiModal isOpen={isGitaModalOpen} onClose={() => setIsGitaModalOpen(false)} />
            <RetainrModal isOpen={isRetainrModalOpen} onClose={() => setIsRetainrModalOpen(false)} />
        </section>
    );
};

export default Projects;
