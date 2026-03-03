import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Lock, Terminal, ArrowRight, Github } from 'lucide-react';

const CodeVaultHighlight = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const features = [
        {
            icon: <Terminal className="w-6 h-6 text-primary" />,
            title: "Native C Compilation",
            description: "Synthesizes Python and Node.js into standalone, reverse-engineering resistant binaries via Nuitka."
        },
        {
            icon: <Lock className="w-6 h-6 text-purple-400" />,
            title: "HWID Locking",
            description: "Cryptographically locks software to specific hardware IDs, preventing unauthorized distribution."
        },
        {
            icon: <Cpu className="w-6 h-6 text-emerald-400" />,
            title: "Offline Leases",
            description: "Robust offline licensing system utilizing signed JWTs and asymmetric encryption for secure air-gapped environments."
        },
        {
            icon: <Shield className="w-6 h-6 text-blue-400" />,
            title: "API Abuse Protection",
            description: "Rate limiting, threat intelligence integration, and Cloud Build pipeline isolation."
        }
    ];

    return (
        <section id="codevault" className="relative py-24 my-20 bg-surface/30 border-y border-white/5 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

            <div className="section-container !py-10 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
                            <Shield size={16} />
                            Featured SaaS Platform
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                                CodeVault
                            </span> LaaS
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-muted text-lg mb-8 leading-relaxed">
                            Engineered a highly scalable Licensing-as-a-Service (LaaS) platform focused on security-first software distribution. It compiles standard Python/Node.js apps into secure native binaries and locks them via hardware IDs.
                        </motion.p>

                        <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6 mb-10">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="mt-1 flex-shrink-0">{feature.icon}</div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">{feature.title}</h3>
                                        <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
                            <a href="https://codevault.parth7.me" target="_blank" rel="noopener noreferrer" className="primary-button group">
                                Visit CodeVault
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Visual Showcase (Glass Card) */}
                    <motion.div
                        variants={itemVariants}
                        className="order-1 lg:order-2 rounded-2xl glass-panel p-2 shadow-2xl relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50 rounded-2xl group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="bg-[#0a0a0a] rounded-xl border border-white/10 overflow-hidden relative">
                            {/* Fake Browser Header */}
                            <div className="bg-surface border-b border-white/5 px-4 py-3 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                                <div className="mx-auto bg-black/50 px-4 py-1 rounded text-xs text-muted/50 font-mono hidden sm:block">
                                    codevault.parth7.me
                                </div>
                            </div>

                            {/* Fake Dashboard Content */}
                            <div className="p-6 font-mono text-sm leading-loose">
                                <div className="flex justify-between items-center text-muted mb-4 border-b border-white/5 pb-4">
                                    <span>Dashboard Overview</span>
                                    <span className="text-emerald-400">Status: Active</span>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="p-4 rounded-lg bg-black/50 border border-white/5">
                                        <div className="text-muted text-xs mb-1">Active Leases</div>
                                        <div className="text-2xl text-white font-sans font-bold">1,204</div>
                                    </div>
                                    <div className="p-4 rounded-lg bg-black/50 border border-white/5">
                                        <div className="text-muted text-xs mb-1">Cloud Builds Total</div>
                                        <div className="text-2xl text-blue-400 font-sans font-bold">28,591</div>
                                    </div>
                                </div>

                                <div className="text-emerald-400">› Compiling payload.py via Nuitka...</div>
                                <div className="text-muted pl-4 opacity-70">  - Fetching dependencies... [Done]</div>
                                <div className="text-muted pl-4 opacity-70">  - Running C compiler... [Done]</div>
                                <div className="text-purple-400">› Injecting HWID locking stub...</div>
                                <div className="text-muted pl-4 opacity-70">  - Generating RSA keypair... [Done]</div>
                                <div className="text-emerald-400 mt-2 font-bold mb-8">› Build completed successfully in 45.2s.</div>
                            </div>
                        </div>

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -bottom-6 -right-6 glass-panel px-4 py-3 shadow-xl border-emerald-500/30 flex items-center gap-3 backdrop-blur-xl"
                        >
                            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                <Shield className="w-4 h-4 text-emerald-400" />
                            </div>
                            <div>
                                <div className="text-white text-sm font-bold">Secured Binary</div>
                                <div className="text-emerald-400 text-xs">Zero Detections</div>
                            </div>
                        </motion.div>

                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CodeVaultHighlight;
