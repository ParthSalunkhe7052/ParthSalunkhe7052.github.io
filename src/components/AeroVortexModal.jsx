import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Wind, Box, MousePointer2, Layers, Cpu, Fan } from 'lucide-react';
import aerovortexImg from '../assets/aerovortex.png';

const AeroVortexModal = ({ isOpen, onClose }) => {
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
                                src={aerovortexImg} 
                                alt="AeroVortex 3D Experience" 
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
                                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400">
                                    <Wind size={32} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-text">AeroVortex</h2>
                                    <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Atmospheric Engineering Visualized</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <Fan size={20} className="text-cyan-400" />
                                    Next-Gen Climate Control
                                </h3>
                                <p className="text-muted leading-relaxed">
                                    AeroVortex is a high-end 3D product showcase built to push the boundaries of web-based storytelling. It features a custom <strong>scroll-driven assembly system</strong> where the hardware deconstructs and reassembles as the user explores the page.
                                </p>
                            </div>

                            {/* Tech Breakdown */}
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="p-5 rounded-xl bg-background/50 border border-border flex flex-col gap-3 group hover:border-cyan-500/30 transition-colors">
                                    <Box className="text-cyan-400" size={24} />
                                    <h4 className="font-bold text-sm">3D Assembly</h4>
                                    <p className="text-xs text-muted leading-relaxed">Exploded-view animations mapping Three.js bone transformations to scroll progression.</p>
                                </div>
                                <div className="p-5 rounded-xl bg-background/50 border border-border flex flex-col gap-3 group hover:border-cyan-500/30 transition-colors">
                                    <Layers className="text-cyan-400" size={24} />
                                    <h4 className="font-bold text-sm">GSAP Integration</h4>
                                    <p className="text-xs text-muted leading-relaxed">Complex timeline orchestration for smooth, frame-perfect transitions between components.</p>
                                </div>
                                <div className="p-5 rounded-xl bg-background/50 border border-border flex flex-col gap-3 group hover:border-cyan-500/30 transition-colors">
                                    <MousePointer2 className="text-cyan-400" size={24} />
                                    <h4 className="font-bold text-sm">Interactive Shaders</h4>
                                    <p className="text-xs text-muted leading-relaxed">Custom GLSL shaders for heat-wave distortions and metallic finish reflections.</p>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="pt-4 space-y-4">
                                <h4 className="font-bold text-sm uppercase tracking-wider text-cyan-400/70">Key Features</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex gap-3 text-sm text-muted">
                                        <Cpu size={18} className="text-cyan-400 shrink-0" />
                                        <span>Real-time component rendering with PBR materials.</span>
                                    </div>
                                    <div className="flex gap-3 text-sm text-muted">
                                        <MousePointer2 size={18} className="text-cyan-400 shrink-0" />
                                        <span>Interactive exploded view with mouse-parallax depth.</span>
                                    </div>
                                </div>
                            </div>

                            {/* Tech Stack Footer */}
                            <div className="pt-6 border-t border-border flex flex-col sm:flex-row gap-6 items-center justify-between">
                                <div className="flex flex-wrap gap-3">
                                    {['Three.js', 'React Three Fiber', 'GSAP', 'GLSL'].map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-cyan-500/5 border border-cyan-500/20 rounded-full text-[10px] font-mono text-cyan-400">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-4 w-full sm:w-auto">
                                    <a 
                                        href="https://ac-website.vercel.app/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2 border border-cyan-500/30 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500/10 transition-colors text-sm"
                                    >
                                        Live Demo
                                        <MousePointer2 size={16} />
                                    </a>
                                    <button
                                        onClick={onClose}
                                        className="flex-1 sm:flex-none px-8 py-2 bg-cyan-500 text-background font-bold rounded-lg hover:opacity-90 transition-opacity text-sm shadow-lg shadow-cyan-500/20"
                                    >
                                        Cool!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AeroVortexModal;