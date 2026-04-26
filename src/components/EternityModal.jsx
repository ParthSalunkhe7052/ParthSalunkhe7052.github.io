import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code2, Server, Layout, Activity, Terminal, Files, Zap } from 'lucide-react';
import eternityImg from '../assets/eternity.png';

const EternityModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-[95%] max-w-4xl max-h-[90vh] overflow-y-auto bg-surface border border-border rounded-2xl shadow-2xl p-0 overflow-hidden"
                    >
                        {/* Header Image */}
                        <div className="relative w-full aspect-video overflow-hidden border-b border-border">
                            <img 
                                src={eternityImg} 
                                alt="ETERNITY Workspace" 
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 bg-background/50 backdrop-blur-md rounded-full text-text hover:text-primary transition-colors border border-border/50 z-20"
                            >
                                <X size={20} />
                            </button>
                            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                        </div>

                        {/* Header Section */}
                        <div className="p-8 pb-0">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                                    <Code2 size={32} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-text">ETERNITY</h2>
                                    <p className="text-primary font-mono text-sm tracking-widest uppercase">Local AI-Powered Mini-IDE</p>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <Zap size={20} className="text-primary" />
                                    The Future of Local Agentic Coding
                                </h3>
                                <p className="text-muted leading-relaxed">
                                    ETERNITY is a comprehensive, local coding workspace designed to orchestrate AI agents directly within your environment. Built as a <strong>TypeScript monorepo</strong>, it provides a seamless bridge between high-level LLM reasoning and low-level system execution.
                                </p>
                            </div>

                            {/* Monorepo Architecture */}
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="p-5 rounded-xl bg-background/50 border border-border flex flex-col gap-3">
                                    <Server className="text-primary" size={24} />
                                    <h4 className="font-bold text-sm">Backend Server</h4>
                                    <p className="text-xs text-muted leading-relaxed">FastAPI/Node layer exposing REST + WebSocket APIs for prompt management, provider config, and terminal execution.</p>
                                </div>
                                <div className="p-5 rounded-xl bg-background/50 border border-border flex flex-col gap-3">
                                    <Layout className="text-primary" size={24} />
                                    <h4 className="font-bold text-sm">Web App</h4>
                                    <p className="text-xs text-muted leading-relaxed">React-based interface featuring chat, task orchestration, file explorer, and terminal/editor panes.</p>
                                </div>
                                <div className="p-5 rounded-xl bg-background/50 border border-border flex flex-col gap-3">
                                    <Activity className="text-primary" size={24} />
                                    <h4 className="font-bold text-sm">Task Runner</h4>
                                    <p className="text-xs text-muted leading-relaxed">Advanced execution engine supporting queued, sequential, and parallel agent task runs.</p>
                                </div>
                            </div>

                            {/* Deep Dive */}
                            <div className="grid md:grid-cols-2 gap-8 pt-4">
                                <div className="space-y-4">
                                    <h4 className="font-bold text-sm uppercase tracking-wider text-primary/70">Core Capabilities</h4>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3 text-sm text-muted">
                                            <Terminal size={18} className="text-primary shrink-0" />
                                            <span>Real-time terminal execution with WebSocket output streaming.</span>
                                        </li>
                                        <li className="flex gap-3 text-sm text-muted">
                                            <Files size={18} className="text-primary shrink-0" />
                                            <span>Full workspace file operations with Git-aware filtering.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-bold text-sm uppercase tracking-wider text-primary/70">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['TypeScript', 'Monorepo', 'WebSocket', 'React', 'Tailwind', 'REST API', 'Node.js'].map(tech => (
                                            <span key={tech} className="px-3 py-1 bg-white/5 border border-border rounded-full text-[10px] font-mono text-muted">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="pt-6 border-t border-border flex items-center justify-between">
                                <span className="text-xs text-muted italic">Local development in progress...</span>
                                <button
                                    onClick={onClose}
                                    className="px-8 py-2 bg-primary text-background font-bold rounded-lg hover:opacity-90 transition-opacity text-sm shadow-lg shadow-primary/20"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default EternityModal;