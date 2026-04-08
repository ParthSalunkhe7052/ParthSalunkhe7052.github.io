import React, { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';

const About = () => {
    const shouldReduceMotion = useReducedMotion();
    const [terminalLines, setTerminalLines] = useState([]);
    const [inputVal, setInputVal] = useState('');
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', damping: 15, stiffness: 100 }
        }
    };

    const experience = [
        {
            role: 'Software Engineering Intern',
            company: 'Alfazance',
            location: 'Dubai',
            year: '2025',
            description: 'Architected Power Automate workflows and engineered large-scale Elasticsearch integrations for enterprise analytics.'
        },
        {
            role: 'IT Infrastructure Intern',
            company: 'TLS IT Solutions',
            location: 'Dubai',
            year: '2022',
            description: 'Configured enterprise servers and resolved complex client-side infrastructure issues.'
        }
    ];

    const handleTerminalSubmit = (e) => {
        e.preventDefault();
        const cmd = inputVal.trim().toLowerCase();
        let response = '';

        if (cmd === 'help') {
            response = 'Available commands: whoami, skills, clear, sudo rm -rf /';
        } else if (cmd === 'whoami') {
            response = 'Parth Salunkhe | Engineer. Learner. Builder.';
        } else if (cmd === 'skills' || cmd === 'cat skills.txt') {
            response = 'C++, Python, TypeScript, React, FastAPI, PyTorch, Docker, Node.js, PostgreSQL';
        } else if (cmd === 'clear') {
            setTerminalLines([]);
            setInputVal('');
            return;
        } else if (cmd === 'sudo rm -rf /') {
            response = 'Nice try. Permission denied.';
        } else if (cmd !== '') {
            response = `command not found: ${cmd}`;
        }

        if (cmd !== '') {
            setTerminalLines(prev => [...prev, { cmd, res: response }]);
        }
        setInputVal('');
    };

    return (
        <section id="about" className="section-container">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={containerVariants}
                className="space-y-20"
            >
                {/* About Text & Terminal */}
                <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 items-start">
                    <div className="max-w-xl">
                        <motion.div variants={itemVariants} className="mb-8">
                            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">01 // Background</span>
                            <h2 className="text-3xl md:text-4xl font-bold">About</h2>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-4 text-muted text-base leading-relaxed">
                            <p>
                                I'm a Computer Engineering student at Delhi Technological University (Class of 2027) who cares deeply about building software that actually ships and solves real problems — not just looks good in a demo.
                            </p>
                            <p>
                                My work sits at the intersection of <span className="text-text">full-stack development</span>, <span className="text-text">machine learning</span>, and <span className="text-text">cybersecurity</span>. I've built everything from real-time 3D threat visualizers to gesture recognition systems to a full Licensing-as-a-Service platform.
                            </p>
                            <p>
                                Right now I'm heads-down on <a href="https://codevault.parth7.me" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded">CodeVault</a> — a platform that compiles Python and Node.js scripts into native, hardware-locked binaries. Think of it as a compiler + DRM in one.
                            </p>
                        </motion.div>
                    </div>

                    {/* Interactive Terminal Easter Egg */}
                    <motion.div variants={itemVariants} className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg overflow-hidden shadow-2xl font-mono text-sm">
                        <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border-b border-[#1f1f1f]">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                            <span className="ml-2 text-[#666] text-xs">guest@parth-macbook-pro ~</span>
                        </div>
                        <div className="p-4 h-[240px] overflow-y-auto text-muted flex flex-col">
                            <p className="mb-2 text-[#888]">Type <span className="text-primary">help</span> to see available commands.</p>
                            
                            {terminalLines.map((line, i) => (
                                <div key={i} className="mb-2">
                                    <div className="flex gap-2">
                                        <span className="text-green-400">➜</span>
                                        <span className="text-white">{line.cmd}</span>
                                    </div>
                                    <div className="text-[#a3a3a3] whitespace-pre-wrap ml-5 mt-1">{line.res}</div>
                                </div>
                            ))}

                            <form onSubmit={handleTerminalSubmit} className="flex gap-2 mt-auto">
                                <span className="text-green-400">➜</span>
                                <input 
                                    type="text" 
                                    value={inputVal}
                                    onChange={e => setInputVal(e.target.value)}
                                    className="flex-1 bg-transparent outline-none text-white placeholder-[#444]"
                                    autoComplete="off"
                                    spellCheck="false"
                                />
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* Experience */}
                <div>
                    <motion.div variants={itemVariants} className="mb-8 mt-12">
                        <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">02 // Journey</span>
                        <h3 className="text-xl font-bold text-text uppercase tracking-wide">
                            Experience
                        </h3>
                    </motion.div>

                    <div className="space-y-0">
                        {experience.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="grid grid-cols-[120px,1fr] md:grid-cols-[160px,1fr] gap-4 py-6 border-t border-border group"
                            >
                                <div className="text-sm text-muted font-mono">
                                    {exp.year}
                                </div>
                                <div>
                                    <h4 className="text-text font-medium group-hover:text-primary transition-colors duration-200">
                                        {exp.role}
                                    </h4>
                                    <p className="text-sm text-muted mt-1">
                                        {exp.company} · {exp.location}
                                    </p>
                                    <p className="text-sm text-muted mt-2 max-w-2xl">
                                        {exp.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications & Awards */}
                <motion.div variants={itemVariants} className="pt-12 border-t border-border mt-12">
                    <div className="mb-6">
                        <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">04 // Recognition</span>
                        <h3 className="text-xl font-bold text-text uppercase tracking-wide">
                            Awards & Certifications
                        </h3>
                    </div>
                    <div className="space-y-4 max-w-3xl">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border border-border/50 bg-surface/50 p-4 rounded-lg hover:border-primary/30 transition-colors">
                            <h4 className="text-text font-medium">Google Cybersecurity Professional Certificate</h4>
                            <span className="text-sm text-primary font-mono">2025</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border border-border/50 bg-surface/50 p-4 rounded-lg hover:border-primary/30 transition-colors">
                            <h4 className="text-text font-medium">1st Place — Emirates Aviation Rocket-Building</h4>
                            <span className="text-sm text-muted font-mono">Dubai</span>
                        </div>
                         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border border-border/50 bg-surface/50 p-4 rounded-lg hover:border-primary/30 transition-colors">
                            <h4 className="text-text font-medium">Best Presentation — ICMTC (UGVC Category)</h4>
                            <span className="text-sm text-muted font-mono">Cairo, Egypt</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border border-border/50 bg-surface/50 p-4 rounded-lg hover:border-primary/30 transition-colors">
                            <h4 className="text-text font-medium">Top 5 — DTU Hackathon</h4>
                            <span className="text-sm text-muted font-mono">2024</span>
                        </div>
                    </div>
                </motion.div>

                {/* Education */}
                <motion.div variants={itemVariants} className="pt-12 border-t border-border mt-12">
                    <div className="mb-6">
                        <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">05 // Education</span>
                        <h3 className="text-xl font-bold text-text uppercase tracking-wide">
                            Academia
                        </h3>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                            <h4 className="text-text font-medium">Delhi Technological University</h4>
                            <p className="text-sm text-muted mt-1">B.Tech in Computer Engineering · Expected 2027</p>
                        </div>
                        <span className="text-sm text-muted font-mono px-3 py-1 bg-surface rounded-full border border-border">CGPA: 7.0/10</span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;