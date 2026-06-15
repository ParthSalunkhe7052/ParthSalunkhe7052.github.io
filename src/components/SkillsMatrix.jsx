import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const groups = [
    {
        title: 'Security',
        skills: ['Semgrep', 'Bandit', 'secure licensing', 'HWID binding', 'JWT signing', 'threat-aware workflows'],
    },
    {
        title: 'Cloud & DevOps',
        skills: ['GCP', 'Vercel', 'Docker', 'CI/CD', 'containerized builds', 'environment management'],
    },
    {
        title: 'AI Tooling',
        skills: ['RAG pipelines', 'Gemini API', 'semantic retrieval', 'prompt iteration', 'AI-assisted development', 'tool discovery'],
    },
    {
        title: 'Full-Stack',
        skills: ['React', 'Next.js', 'FastAPI', 'Node.js', 'PostgreSQL', 'REST APIs', 'auth flows'],
    },
    {
        title: 'Infrastructure',
        skills: ['build workers', 'artifact delivery', 'rate limiting', 'webhooks', 'background jobs'],
    },
    {
        title: 'Deployment',
        skills: ['live demos', 'cloud hosting', 'domain setup', 'release iteration', 'monitoring basics'],
    },
    {
        title: 'Developer Workflow',
        skills: ['GitHub', 'API integration', 'rapid prototyping', 'debugging', 'product QA', 'documentation'],
    },
];

const SkillsMatrix = () => {
    const shouldReduceMotion = useReducedMotion();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    };

    return (
        <section id="skills" className="section-container">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={containerVariants}
            >
                <motion.div variants={itemVariants} className="mb-12">
                    <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">04 // Engineering Surface</span>
                    <h2 className="text-3xl md:text-4xl font-bold">Skills Matrix</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {groups.map((group) => (
                        <motion.div key={group.title} variants={itemVariants} className="border border-border bg-surface rounded-lg p-5">
                            <h3 className="text-text font-semibold mb-4">{group.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span key={skill} className="text-xs font-mono text-muted px-2.5 py-1 border border-border rounded bg-background/50">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default SkillsMatrix;
