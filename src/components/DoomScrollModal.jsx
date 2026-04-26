import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MousePointer2, Ruler, Calendar, TrendingUp } from 'lucide-react';
import doomscrollImg from '../assets/doomscroll.png';

const DoomScrollModal = ({ isOpen, onClose }) => {
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
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface border border-border rounded-3xl shadow-2xl p-0 overflow-hidden"
                    >
                        {/* Hero Image */}
                        <div className="relative w-full aspect-video overflow-hidden">
                            <img 
                                src={doomscrollImg} 
                                alt="DoomScroll Pedometer" 
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 bg-background/50 backdrop-blur-md rounded-full text-text hover:text-primary transition-colors border border-border/50 z-20"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8 space-y-8">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-3xl font-bold text-text">DoomScroll Pedometer</h2>
                                <p className="text-primary font-mono text-sm tracking-widest uppercase">Visualizing Digital Exhaustion</p>
                            </div>

                            <p className="text-muted leading-relaxed">
                                Ever wondered how far your thumb actually travels in a day? <strong>DoomScroll</strong> is a fun experiment that converts your screen time into physical distance. By analyzing scrolling velocity and screen dimensions, it calculates your daily, monthly, and yearly "travel" through the infinite feed.
                            </p>

                            {/* Stats/Features */}
                            <div className="grid sm:grid-cols-3 gap-6">
                                <div className="space-y-3">
                                    <div className="p-2 w-fit rounded-lg bg-orange-500/10 text-orange-500">
                                        <Ruler size={20} />
                                    </div>
                                    <h4 className="font-bold text-sm">Distance Mapping</h4>
                                    <p className="text-xs text-muted">Converts pixels into meters and kilometers based on average device DPI.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="p-2 w-fit rounded-lg bg-blue-500/10 text-blue-500">
                                        <Calendar size={20} />
                                    </div>
                                    <h4 className="font-bold text-sm">Time Intervals</h4>
                                    <p className="text-xs text-muted">Break down your scrolling habits by day, month, and year with interactive charts.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="p-2 w-fit rounded-lg bg-green-500/10 text-green-500">
                                        <TrendingUp size={20} />
                                    </div>
                                    <h4 className="font-bold text-sm">Fun Experience</h4>
                                    <p className="text-xs text-muted">Compare your scroll distance to real-world landmarks (e.g., height of Mt. Everest).</p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-border flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <a 
                                        href="https://doomscroll-sandy.vercel.app/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-text hover:text-primary transition-colors group/link"
                                    >
                                        Live App
                                        <TrendingUp size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                    </a>
                                    <div className="flex items-center gap-2 text-xs font-mono text-muted">
                                        <MousePointer2 size={14} />
                                        <span>React & Framer Motion</span>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="px-6 py-2 bg-primary text-background font-bold rounded-lg hover:opacity-90 transition-opacity text-sm"
                                >
                                    Stop Scrolling
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default DoomScrollModal;