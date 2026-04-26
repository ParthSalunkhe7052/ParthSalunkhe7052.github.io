import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Zap, Database, Brain, Sparkles, BookOpen } from 'lucide-react';
import detail1 from '../assets/gitasaarthi-detail-1.png';
import detail2 from '../assets/gitasaarthi-detail-2.png';

const GitaSaarthiModal = ({ isOpen, onClose }) => {
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
                            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface border border-border rounded-2xl shadow-2xl p-0 pointer-events-auto"
                        >
                            {/* Header Section */}
                            <div className="sticky top-0 bg-surface/80 backdrop-blur-md border-b border-border p-6 flex items-center justify-between z-10">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-xl bg-primary/10 text-primary">
                                        <Sparkles size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-text">GitaSaarthi 2.0</h2>
                                </div>
                                <div className="flex items-center gap-4">
                                    <a 
                                        href="https://gitasaarthi.vercel.app/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary text-background font-bold rounded-lg hover:opacity-90 transition-opacity text-sm"
                                    >
                                        Try it out
                                        <ExternalLink size={14} />
                                    </a>
                                    <button
                                        onClick={onClose}
                                        className="p-2 hover:bg-white/5 rounded-full text-muted hover:text-text transition-colors"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 space-y-10">
                                {/* Summary */}
                                <div className="space-y-4">
                                    <p className="text-lg text-muted leading-relaxed">
                                        GitaSaarthi 2.0 is an advanced, AI-powered conversational assistant for the Bhagavad Gita. It leverages <strong>Retrieval-Augmented Generation (RAG)</strong> to provide contextual, authentic, and spiritually grounded responses based on the 18 discourses of the Gita.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'Tailwind CSS', 'Framer Motion', 'Google Gemini', 'Python', 'Vector DB', 'RAG'].map(tag => (
                                            <span key={tag} className="text-xs font-mono text-primary px-2 py-1 rounded border border-primary/20 bg-primary/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Images Grid */}
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <div className="rounded-xl overflow-hidden border border-border shadow-lg">
                                            <img src={detail1} alt="GitaSaarthi Insights" className="w-full h-auto" />
                                        </div>
                                        <p className="text-xs text-center text-muted italic">Deep philosophical analysis and practical application</p>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="rounded-xl overflow-hidden border border-border shadow-lg">
                                            <img src={detail2} alt="GitaSaarthi Sanskrit Verses" className="w-full h-auto" />
                                        </div>
                                        <p className="text-xs text-center text-muted italic">Contextual Sanskrit retrieval with English translations</p>
                                    </div>
                                </div>

                                {/* Features Section */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Zap size={20} className="text-primary" />
                                        Key Capabilities
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="flex gap-4 items-start">
                                            <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                                                <Database size={18} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm mb-1">Contextual RAG Pipeline</h4>
                                                <p className="text-xs text-muted leading-relaxed">Uses vector embeddings to retrieve relevant verses from the Bhagavad Gita to answer spiritual queries authentically.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                                                <Brain size={18} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm mb-1">AI-Powered Insights</h4>
                                                <p className="text-xs text-muted leading-relaxed">Integrated with Google Gemini for deep philosophical analysis and connecting ancient wisdom to modern life.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                                                <BookOpen size={18} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm mb-1">Authentic Source Material</h4>
                                                <p className="text-xs text-muted leading-relaxed">Processed all 18 discourses from original EPUB sources into a structured JSON pipeline for maximum accuracy.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                                                <Sparkles size={18} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm mb-1">Modern UI/UX</h4>
                                                <p className="text-xs text-muted leading-relaxed">A clean, responsive, and animated interface that respects the spiritual gravity of the content.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile CTA */}
                                <div className="sm:hidden pt-4">
                                    <a 
                                        href="https://gitasaarthi.vercel.app/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-background font-bold rounded-xl transition-all"
                                    >
                                        Visit Website
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default GitaSaarthiModal;
