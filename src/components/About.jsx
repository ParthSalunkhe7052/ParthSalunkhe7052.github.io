import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const terminalResponses = {
    help: 'Commands: help, projects, codevault, skills, github, resume, contact, stack, proof, shiplog, why-hire, founder-mode, ship, sudo hire parth',
    projects: 'Selected systems: CodeVault, ASURA, GitaSaarthi, Retainr.bot, DDoS Globe Visualizer, Clash Emote Detector, Autonomous Ground Vehicle.',
    codevault: 'Secure deployment + licensing platform\nStack: React, FastAPI, PostgreSQL, Docker, GCP\nPipeline: upload -> isolated build -> license bind -> signed artifact\nLive: https://codevault.parth7.me',
    skills: 'Security, cloud deployments, React/FastAPI full-stack systems, RAG pipelines, webhooks, build workers, product QA.',
    github: 'GitHub: https://github.com/ParthSalunkhe7052',
    resume: 'Resume: /Parth_Resume.pdf',
    contact: 'Email: contact@parth7.me\nOpen to internships, founder-led product builds, and security-aware full-stack work.',
    stack: 'React, Next.js, FastAPI, Node.js, PostgreSQL, Docker, GCP, Vercel, Semgrep, Bandit, Gemini API.',
    proof: 'Proof: live deployments, architecture notes, security tooling, CodeVault pipeline, public GitHub projects.',
    shiplog: 'Recent direction: CodeVault licensing infrastructure, security scan workflows, RAG UI, 3D network visualization, storefront experiments.',
    'why-hire': 'High-agency full-stack SaaS builder with cybersecurity depth, shipping deployed systems fast.',
    'founder-mode': 'Idea -> API -> auth -> database -> deployment -> feedback -> iteration.',
    ship: 'Build small, deploy early, tighten from real feedback.',
    'sudo hire parth': 'Permission granted. Email contact@parth7.me or open the resume above.',
};

const About = () => {
    const shouldReduceMotion = useReducedMotion();
    const [terminalLines, setTerminalLines] = useState([]);
    const [inputVal, setInputVal] = useState('');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', damping: 15, stiffness: 100 },
        },
    };

    const experience = [
        {
            role: 'Software Engineering Intern',
            company: 'Alfazance',
            location: 'Dubai',
            year: '2025',
            description: 'Built Power Automate workflows and Elasticsearch-backed data access for internal analytics workflows.',
        },
        {
            role: 'IT Infrastructure Intern',
            company: 'TLS IT Solutions',
            location: 'Dubai',
            year: '2022',
            description: 'Configured enterprise servers and resolved client-side infrastructure issues across live environments.',
        },
    ];

    const handleTerminalSubmit = (e) => {
        e.preventDefault();
        const cmd = inputVal.trim().toLowerCase();

        if (cmd === 'clear') {
            setTerminalLines([]);
            setInputVal('');
            return;
        }

        if (cmd !== '') {
            const response = terminalResponses[cmd] || `command not found: ${cmd}`;
            setTerminalLines((prev) => [...prev, { cmd, res: response }]);
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
                <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 items-start">
                    <div className="max-w-xl">
                        <motion.div variants={itemVariants} className="mb-8">
                            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">06 // Background</span>
                            <h2 className="text-3xl md:text-4xl font-bold">Experience + Recognition</h2>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-4 text-muted text-base leading-relaxed">
                            <p>
                                I'm a Computer Engineering student at Delhi Technological University, Class of 2027, focused on building real deployed software instead of portfolio-only demos.
                            </p>
                            <p>
                                My strongest work sits across <span className="text-text">full-stack SaaS</span>, <span className="text-text">cloud deployment</span>, <span className="text-text">cybersecurity tooling</span>, and <span className="text-text">AI-assisted product development</span>. I move quickly from idea to usable system: APIs, auth, databases, deployment, monitoring, and UI polish.
                            </p>
                            <p>
                                Right now I'm building <a href="https://codevault.parth7.me" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded">CodeVault</a>, a secure deployment and licensing platform that protects scripts through cloud build isolation, hardware-bound licenses, signed access checks, and controlled artifact delivery.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div variants={itemVariants} className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg overflow-hidden shadow-2xl font-mono text-sm">
                        <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border-b border-[#1f1f1f]">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                            <span className="ml-2 text-[#777] text-xs">guest@parth-proof ~</span>
                        </div>
                        <div className="p-4 h-[280px] overflow-y-auto text-muted flex flex-col">
                            <p className="mb-2 text-[#888]">Type <span className="text-primary">help</span> to reveal proof commands.</p>

                            {terminalLines.map((line, i) => (
                                <div key={`${line.cmd}-${i}`} className="mb-3">
                                    <div className="flex gap-2">
                                        <span className="text-green-400">$</span>
                                        <span className="text-white">{line.cmd}</span>
                                    </div>
                                    <div className="text-[#a3a3a3] whitespace-pre-wrap ml-5 mt-1">{line.res}</div>
                                </div>
                            ))}

                            <form onSubmit={handleTerminalSubmit} className="flex gap-2 mt-auto">
                                <span className="text-green-400">$</span>
                                <input
                                    type="text"
                                    value={inputVal}
                                    onChange={(e) => setInputVal(e.target.value)}
                                    className="flex-1 bg-transparent outline-none text-white placeholder-[#444]"
                                    autoComplete="off"
                                    spellCheck="false"
                                    aria-label="Terminal command input"
                                    placeholder="codevault"
                                />
                            </form>
                        </div>
                    </motion.div>
                </div>

                <div>
                    <motion.div variants={itemVariants} className="mb-8 mt-12">
                        <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">07 // Journey</span>
                        <h3 className="text-xl font-bold text-text uppercase tracking-wide">
                            Experience
                        </h3>
                    </motion.div>

                    <div className="space-y-0">
                        {experience.map((exp) => (
                            <motion.div
                                key={`${exp.company}-${exp.year}`}
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
                                        {exp.company} - {exp.location}
                                    </p>
                                    <p className="text-sm text-muted mt-2 max-w-2xl">
                                        {exp.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div variants={itemVariants} className="pt-12 border-t border-border mt-12">
                    <div className="mb-6">
                        <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">08 // Recognition</span>
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
                            <h4 className="text-text font-medium">1st Place - Emirates Aviation Rocket-Building</h4>
                            <span className="text-sm text-muted font-mono">Dubai</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border border-border/50 bg-surface/50 p-4 rounded-lg hover:border-primary/30 transition-colors">
                            <h4 className="text-text font-medium">Best Presentation - ICMTC (UGVC Category)</h4>
                            <span className="text-sm text-muted font-mono">Cairo, Egypt</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border border-border/50 bg-surface/50 p-4 rounded-lg hover:border-primary/30 transition-colors">
                            <h4 className="text-text font-medium">Top 5 - DTU Hackathon</h4>
                            <span className="text-sm text-muted font-mono">2024</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="pt-12 border-t border-border mt-12">
                    <div className="mb-6">
                        <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">09 // Education</span>
                        <h3 className="text-xl font-bold text-text uppercase tracking-wide">
                            Academia
                        </h3>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                            <h4 className="text-text font-medium">Delhi Technological University</h4>
                            <p className="text-sm text-muted mt-1">B.Tech in Computer Engineering - Expected 2027</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
