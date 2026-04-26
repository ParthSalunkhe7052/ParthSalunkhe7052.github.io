import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bot, Zap, Globe, Shield, Terminal, MessageSquare, BarChart3 } from 'lucide-react';

const InterpreterModal = ({ isOpen, onClose }) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal Wrapper */}
                    <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface border border-border rounded-2xl shadow-2xl p-0 pointer-events-auto"
                        >
                            {/* Header Section */}
                            <div className="relative p-8 pb-0 flex items-start justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                                        <Bot size={32} />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-text">Open Interpreter</h2>
                                        <p className="text-primary font-mono text-sm tracking-widest uppercase">Telegram Automation Hub</p>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-white/5 rounded-full text-muted hover:text-text transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-8 space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Zap size={20} className="text-primary" />
                                        The "God-Mode" for Code Vault
                                    </h3>
                                    <p className="text-muted leading-relaxed">
                                        This is an AI-powered Telegram automation platform built specifically for <strong>Code Vault</strong> operations and growth. It's not just a bot; it's a centralized command center that orchestrates everything from social media marketing to competitive intelligence.
                                    </p>
                                </div>

                                {/* Features Grid */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex gap-3 items-start">
                                            <div className="p-2 rounded-lg bg-white/5 text-primary shrink-0">
                                                <MessageSquare size={18} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm">AI Content Engine</h4>
                                                <p className="text-xs text-muted mt-1">Generates tailored content for Twitter/X, LinkedIn, and Reddit using advanced LLM prompts.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-start">
                                            <div className="p-2 rounded-lg bg-white/5 text-primary shrink-0">
                                                <Globe size={18} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm">Social Posting Automation</h4>
                                                <p className="text-xs text-muted mt-1">Browser-driven posting for X and LinkedIn, plus native Reddit API integration with approval queues.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-start">
                                            <div className="p-2 rounded-lg bg-white/5 text-primary shrink-0">
                                                <Shield size={18} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm">Safe Command Execution</h4>
                                                <p className="text-xs text-muted mt-1">Executes system commands via Telegram with granular risk-level assessments and admin approval requirements.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex gap-3 items-start">
                                            <div className="p-2 rounded-lg bg-white/5 text-primary shrink-0">
                                                <Terminal size={18} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm">Competitive Intel</h4>
                                                <p className="text-xs text-muted mt-1">Real-time tracking of competitors on GitHub, niche websites, Reddit, and Twitter/X.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-start">
                                            <div className="p-2 rounded-lg bg-white/5 text-primary shrink-0">
                                                <BarChart3 size={18} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm">Analytics Hub</h4>
                                                <p className="text-xs text-muted mt-1">Local SQLite database tracking engagement, growth metrics, and bot performance history.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-start">
                                            <div className="p-2 rounded-lg bg-white/5 text-primary shrink-0">
                                                <Bot size={18} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm">Multi-Product Support</h4>
                                                <p className="text-xs text-muted mt-1">Built-in context switching to manage multiple product lines within the same interface.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tech Stack Footer */}
                                <div className="pt-6 border-t border-border flex flex-wrap gap-x-6 gap-y-3">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] font-mono text-muted uppercase tracking-wider">Backend</span>
                                        <span className="text-sm font-medium">Python, SQLite</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] font-mono text-muted uppercase tracking-wider">Interface</span>
                                        <span className="text-sm font-medium">Telegram Bot API</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] font-mono text-muted uppercase tracking-wider">Automation</span>
                                        <span className="text-sm font-medium">Playwright, Reddit API</span>
                                    </div>
                                    <div className="ml-auto">
                                        <button
                                            onClick={onClose}
                                            className="px-6 py-2 bg-primary text-background font-bold rounded-lg hover:opacity-90 transition-opacity text-sm pointer-events-auto"
                                        >
                                            Got it
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default InterpreterModal;
