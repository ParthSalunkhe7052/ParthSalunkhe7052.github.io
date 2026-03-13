import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 16 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
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

    const skills = [
        'C++', 'Python', 'TypeScript', 'React', 'FastAPI',
        'PyTorch', 'Elasticsearch', 'Docker', 'Node.js', 'PostgreSQL'
    ];

    return (
        <section id="about" className="section-container">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={containerVariants}
                className="space-y-20"
            >
                {/* About Text */}
                <div className="max-w-2xl">
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8">
                        About
                    </motion.h2>

                    <motion.div variants={itemVariants} className="space-y-4 text-muted text-base leading-relaxed">
                        <p>
                            I'm a Computer Engineering student at Delhi Technological University (Class of 2027) who cares deeply about building software that actually ships and solves real problems — not just looks good in a demo.
                        </p>
                        <p>
                            My work sits at the intersection of <span className="text-text">full-stack development</span>, <span className="text-text">machine learning</span>, and <span className="text-text">cybersecurity</span>. I've built everything from real-time 3D threat visualizers to gesture recognition systems to a full Licensing-as-a-Service platform.
                        </p>
                        <p>
                            Right now I'm heads-down on <a href="https://codevault.parth7.me" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4">CodeVault</a> — a platform that compiles Python and Node.js scripts into native, hardware-locked binaries. Think of it as a compiler + DRM in one.
                        </p>
                        <p>
                            I hold a <span className="text-text">Google Cybersecurity Professional Certificate</span> and have presented autonomous vehicle research at ICMTC in Cairo.
                        </p>
                    </motion.div>
                </div>

                {/* Experience */}
                <div>
                    <motion.h3 variants={itemVariants} className="text-sm font-mono text-muted uppercase tracking-wide mb-8">
                        Experience
                    </motion.h3>

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
                                    <p className="text-sm text-muted mt-2">
                                        {exp.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Tech Stack */}
                <div>
                    <motion.h3 variants={itemVariants} className="text-sm font-mono text-muted uppercase tracking-wide mb-6">
                        Technologies
                    </motion.h3>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-x-6 gap-y-2">
                        {skills.map(skill => (
                            <span key={skill} className="text-sm text-muted hover:text-text transition-colors duration-200 cursor-default">
                                {skill}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* Education */}
                <motion.div variants={itemVariants} className="pt-6 border-t border-border">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                            <h4 className="text-text font-medium">Delhi Technological University</h4>
                            <p className="text-sm text-muted">B.Tech in Computer Engineering · Expected 2027</p>
                        </div>
                        <span className="text-sm text-muted font-mono">CGPA: 7.0/10</span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
