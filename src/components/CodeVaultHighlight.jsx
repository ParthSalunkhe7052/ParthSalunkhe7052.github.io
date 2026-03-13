import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import codevaultImg from '../assets/codevault-landing.png';

const CodeVaultHighlight = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
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

    const features = [
        {
            title: 'Native C Compilation',
            description: 'Compiles Python and Node.js into standalone binaries via Nuitka — resistant to reverse engineering.'
        },
        {
            title: 'HWID Locking',
            description: 'Cryptographically binds software to specific hardware, preventing unauthorized redistribution.'
        },
        {
            title: 'Offline Leases',
            description: 'Signed JWT-based offline licensing with asymmetric encryption for air-gapped environments.'
        },
        {
            title: 'Cloud Build Pipeline',
            description: 'Isolated build pipelines with rate limiting, threat intelligence, and automated artifact delivery.'
        }
    ];

    return (
        <section id="codevault" className="relative py-20 border-y border-border">
            <div className="section-container !py-12">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="space-y-12"
                >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                        <div>
                            <motion.p variants={itemVariants} className="text-sm font-mono text-muted uppercase tracking-wide mb-3">
                                Featured Project
                            </motion.p>
                            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">
                                CodeVault<span className="text-primary"> LaaS</span>
                            </motion.h2>
                        </div>
                        <motion.a
                            variants={itemVariants}
                            href="https://codevault.parth7.me"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors duration-200 group"
                        >
                            Visit live
                            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                        </motion.a>
                    </div>

                    {/* Screenshot */}
                    <motion.div variants={itemVariants} className="rounded-xl overflow-hidden border border-border">
                        <img
                            src={codevaultImg}
                            alt="CodeVault landing page — Ship Protected"
                            className="w-full h-auto"
                        />
                    </motion.div>

                    {/* Description + Features */}
                    <div className="grid lg:grid-cols-[1fr,1fr] gap-12">
                        <motion.p variants={itemVariants} className="text-muted leading-relaxed">
                            A security-first Licensing-as-a-Service platform I built from scratch. It takes standard Python and Node.js applications and compiles them into native C binaries, then locks them to specific hardware via cryptographic HWID binding. The entire pipeline — from code upload to signed binary delivery — runs in isolated cloud containers.
                        </motion.p>

                        <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6">
                            {features.map((feature, idx) => (
                                <div key={idx}>
                                    <h4 className="text-text text-sm font-medium mb-1">{feature.title}</h4>
                                    <p className="text-xs text-muted leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Tech */}
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-border">
                        {['Python', 'FastAPI', 'React', 'PostgreSQL', 'Nuitka', 'Docker', 'GCP'].map(tech => (
                            <span key={tech} className="text-xs font-mono text-muted">{tech}</span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CodeVaultHighlight;
