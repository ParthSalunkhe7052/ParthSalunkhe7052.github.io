import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import codevaultImg from '../assets/codevault-landing.webp';

const features = [
    'Cloud Build Isolation',
    'Hardware-Locked Licensing',
    'Signed Offline Lease Tokens',
    'Controlled Artifact Delivery',
];

const proof = [
    { label: 'Deployment', value: 'GCP + Docker + PostgreSQL' },
    { label: 'Pipeline', value: 'Upload -> isolated build -> license bind -> signed artifact -> delivery' },
    { label: 'Security checks', value: 'rate limits, signed tokens, artifact controls' },
    { label: 'Status', value: 'Live deployment' },
];

const CodeVaultHighlight = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <section id="codevault" className="relative py-20 border-b border-border">
            <div className="section-container !py-12">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="space-y-12"
                >
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
                        <div>
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                <motion.p variants={itemVariants} className="text-sm font-mono text-muted uppercase tracking-wide">
                                    02 // Featured Build
                                </motion.p>
                                <motion.div variants={itemVariants} className="flex items-center gap-2 bg-green-500/10 text-green-500 border border-green-500/20 px-2.5 py-1 rounded-full text-xs font-mono">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                                    </span>
                                    Live deployment
                                </motion.div>
                            </div>
                            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">
                                CodeVault<span className="text-primary">.</span>
                            </motion.h2>
                            <motion.p variants={itemVariants} className="text-muted mt-3 max-w-3xl">
                                Secure deployment and licensing infrastructure for script-based products.
                            </motion.p>
                        </div>
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                            <a
                                href="https://codevault.parth7.me"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-background text-sm font-bold hover:bg-primary/90 transition-colors"
                            >
                                Live
                                <ArrowUpRight size={15} />
                            </a>
                            <Link
                                to="/codevault"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm text-text font-bold hover:border-primary transition-colors"
                            >
                                Architecture
                                <ArrowUpRight size={15} />
                            </Link>
                            <a
                                href="https://github.com/ParthSalunkhe7052"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm text-text font-bold hover:border-primary transition-colors"
                            >
                                <Github size={15} />
                                GitHub
                            </a>
                        </motion.div>
                    </div>

                    <motion.div variants={itemVariants} className="rounded-lg overflow-hidden border border-border">
                        <img
                            src={codevaultImg}
                            width={1200}
                            height={675}
                            alt="CodeVault deployed application screenshot"
                            className="w-full h-auto"
                        />
                    </motion.div>

                    <div className="grid lg:grid-cols-[1.05fr,0.95fr] gap-12">
                        <motion.div variants={itemVariants} className="space-y-5">
                            <p className="text-muted leading-relaxed">
                                CodeVault runs uploads through isolated cloud build workers, applies hardware-bound license checks, signs access tokens, and delivers protected artifacts through a controlled pipeline. The engineering challenge is coordinating build isolation, license validation, artifact delivery, and abuse controls without making the developer workflow painful.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {features.map((feature) => (
                                    <span key={feature} className="text-xs font-mono text-primary border border-primary/20 bg-primary/10 px-2.5 py-1 rounded">
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="border border-border bg-surface rounded-lg p-5">
                            <h3 className="text-sm font-mono uppercase tracking-wide text-primary mb-5">Proof Panel</h3>
                            <div className="space-y-4">
                                {proof.map((item) => (
                                    <div key={item.label} className="grid sm:grid-cols-[120px,1fr] gap-2 border-t border-border pt-4 first:border-t-0 first:pt-0">
                                        <div className="text-xs font-mono text-muted uppercase tracking-wide">{item.label}</div>
                                        <div className="text-sm text-text">{item.value}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-border">
                        {['React', 'FastAPI', 'PostgreSQL', 'Docker', 'GCP', 'JWT', 'artifact delivery'].map((tech) => (
                            <span key={tech} className="text-xs font-mono text-muted">{tech}</span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CodeVaultHighlight;
