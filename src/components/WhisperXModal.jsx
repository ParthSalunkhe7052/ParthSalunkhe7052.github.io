import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mic, Zap, Github, Headphones, Languages, FileText, ArrowUpRight } from 'lucide-react';
import whisperxImg from '../assets/whisperx.png';

const WhisperXModal = ({ isOpen, onClose }) => {
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
                                src={whisperxImg} 
                                alt="Whisper X Transcription" 
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

                        {/* Content */}
                        <div className="p-8 space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                                    <Mic size={32} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-text">Whisper X</h2>
                                    <p className="text-blue-400 font-mono text-sm tracking-widest uppercase">High-Speed Transcription Engine</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <Zap size={20} className="text-blue-400" />
                                    Infinite Transcription, Zero Cost
                                </h3>
                                <p className="text-muted leading-relaxed">
                                    Whisper X is a locally-hosted transcription tool that leverages the power of OpenAI's Whisper models and Groq's LPU inference. It's designed for speed, privacy, and unlimited usage without per-minute fees.
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="p-5 rounded-xl bg-background/50 border border-border flex flex-col gap-3 group hover:border-blue-500/30 transition-colors">
                                    <Headphones className="text-blue-400" size={24} />
                                    <h4 className="font-bold text-sm">Low Latency</h4>
                                    <p className="text-xs text-muted leading-relaxed">Optimized for Groq LPUs to achieve near-instant transcription speeds.</p>
                                </div>
                                <div className="p-5 rounded-xl bg-background/50 border border-border flex flex-col gap-3 group hover:border-blue-500/30 transition-colors">
                                    <Languages className="text-blue-400" size={24} />
                                    <h4 className="font-bold text-sm">90+ Languages</h4>
                                    <p className="text-xs text-muted leading-relaxed">Automatic language detection and high-accuracy translation support.</p>
                                </div>
                                <div className="p-5 rounded-xl bg-background/50 border border-border flex flex-col gap-3 group hover:border-blue-500/30 transition-colors">
                                    <FileText className="text-blue-400" size={24} />
                                    <h4 className="font-bold text-sm">Structured Output</h4>
                                    <p className="text-xs text-muted leading-relaxed">Generates timestamped JSON, SRT, or plain text logs automatically.</p>
                                </div>
                            </div>

                            {/* Tech Stack Footer */}
                            <div className="pt-6 border-t border-border flex items-center justify-between">
                                <div className="flex gap-4">
                                    <a 
                                        href="https://github.com/ParthSalunkhe7052/WisperX" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-medium text-text hover:text-primary transition-colors group"
                                    >
                                        <Github size={20} />
                                        <span>Source Code</span>
                                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                                    </a>
                                </div>
                                <div className="flex gap-2">
                                    {['Whisper', 'Groq', 'FastAPI', 'Python'].map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-blue-500/5 border border-blue-500/20 rounded-full text-[10px] font-mono text-blue-400">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default WhisperXModal;