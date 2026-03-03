import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Globe2, ShieldCheck, Cpu, Database } from 'lucide-react';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const skills = [
        { name: "C++", color: "text-blue-400" },
        { name: "Python", color: "text-yellow-400" },
        { name: "TypeScript", color: "text-blue-500" },
        { name: "React 18", color: "text-cyan-400" },
        { name: "FastAPI", color: "text-teal-400" },
        { name: "PyTorch", color: "text-orange-500" },
        { name: "Elasticsearch", color: "text-green-500" },
        { name: "Docker", color: "text-blue-600" }
    ];

    return (
        <section id="about" className="section-container relative z-10">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="space-y-16"
            >
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-6">
                        Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Future</span>
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-muted text-lg leading-relaxed">
                        I specialize in the intersection of <strong className="text-white">Full-Stack Development</strong>, <strong className="text-white">Machine Learning</strong>, and <strong className="text-white">Cybersecurity</strong>.
                        Currently pursuing my B.Tech in Computer Engineering at DTU (Class of 2027).
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">

                    {/* Card 1: Experience (Spans 2 cols, 2 rows) */}
                    <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2 glass-panel p-8 flex flex-col justify-between group overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 transition-all duration-500 group-hover:bg-primary/20"></div>
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                                    <Server size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white">Experience</h3>
                            </div>

                            <div className="space-y-6 relative z-10">
                                <div className="border-l-2 border-white/10 pl-4">
                                    <h4 className="text-white font-medium">Software Engineering Intern</h4>
                                    <p className="text-sm text-primary mb-2">Alfazance • Dubai • 2025</p>
                                    <p className="text-sm text-muted">Architected Power Automate workflows and engineered large-scale Elasticsearch integrations for enterprise analytics.</p>
                                </div>

                                <div className="border-l-2 border-white/10 pl-4">
                                    <h4 className="text-white font-medium">IT Infrastructure Intern</h4>
                                    <p className="text-sm text-primary mb-2">TLS IT Solutions • Dubai • 2022</p>
                                    <p className="text-sm text-muted">Configured enterprise servers and resolved complex client-side infrastructure issues.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Tech Stack */}
                    <motion.div variants={itemVariants} className="md:col-span-2 glass-panel p-6 group">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400">
                                <Code2 size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-white">Tech Stack</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.map(skill => (
                                <div key={skill.name} className="px-3 py-1.5 rounded-lg bg-surface border border-white/5 text-sm font-medium hover:bg-white/10 transition-colors cursor-default">
                                    <span className={skill.color}>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Card 3: Security */}
                    <motion.div variants={itemVariants} className="glass-panel p-6 flex flex-col justify-between group overflow-hidden relative">
                        <div className="absolute -bottom-10 -right-10 text-white/5 group-hover:text-emerald-500/10 transition-colors duration-500">
                            <ShieldCheck size={120} />
                        </div>
                        <div>
                            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 w-fit mb-4 relative z-10">
                                <ShieldCheck size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 relative z-10">Cybersecurity</h3>
                            <p className="text-sm text-muted relative z-10">Google Cybersecurity Certified. Expertise in Threat Intel APIs, DShield, and real-time attack visualization.</p>
                        </div>
                    </motion.div>

                    {/* Card 4: AI/ML */}
                    <motion.div variants={itemVariants} className="glass-panel p-6 flex flex-col justify-between group overflow-hidden relative">
                        <div className="absolute -bottom-10 -right-10 text-white/5 group-hover:text-orange-500/10 transition-colors duration-500">
                            <Cpu size={120} />
                        </div>
                        <div>
                            <div className="p-2.5 rounded-xl bg-orange-500/20 text-orange-400 w-fit mb-4 relative z-10">
                                <Cpu size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 relative z-10">AI & ML</h3>
                            <p className="text-sm text-muted relative z-10">Building autonomous MCP agents and real-time computer vision models using PyTorch & MediaPipe.</p>
                        </div>
                    </motion.div>

                    {/* Card 5: Education */}
                    <motion.div variants={itemVariants} className="md:col-span-2 glass-panel p-6 flex items-center justify-between group">
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">Delhi Technological University</h3>
                            <p className="text-sm text-primary mb-2">B.Tech in Computer Engineering</p>
                            <p className="text-xs text-muted">Expected 2027 • CGPA: 7.0/10</p>
                        </div>
                        <div className="hidden sm:flex w-16 h-16 rounded-full border-4 border-surface items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl shadow-blue-500/20">
                            <span className="font-bold text-white">DTU</span>
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
};

export default About;
