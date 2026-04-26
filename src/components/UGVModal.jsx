import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, MapPin, Users, Trophy } from 'lucide-react';
import ugvRealImg from '../assets/ugv-real.jpg';

const UGVModal = ({ isOpen, onClose }) => {
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
                            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-surface border border-border rounded-2xl shadow-2xl p-0 pointer-events-auto"
                        >
                            {/* Header Image */}
                            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-background">
                                <img 
                                    src={ugvRealImg} 
                                    alt="The Real UGV - IND AGNI" 
                                    className="w-full h-full object-cover object-bottom"
                                />
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 bg-background/50 backdrop-blur-md rounded-full text-text hover:text-primary transition-colors border border-border/50 z-30"
                                >
                                    <X size={20} />
                                </button>
                                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface via-surface/80 to-transparent z-10" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="bg-primary text-background px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                            The Real Deal
                                        </span>
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl font-bold text-text tracking-tight drop-shadow-sm">UGV-DTU: IND AGNI</h2>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-8 space-y-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-primary">
                                        <Trophy size={20} className="shrink-0" />
                                        <p className="text-lg font-semibold tracking-tight">
                                            Pranked! This is what we actually built.
                                        </p>
                                    </div>
                                    <p className="text-muted leading-relaxed text-sm sm:text-base">
                                        While the portfolio image is a cool render, this is <strong>IND AGNI</strong> — our competition-grade Unmanned Ground Vehicle. Our team, <strong>UGV-DTU</strong>, represented India on the global stage in Cairo, Egypt.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="p-5 rounded-2xl border border-border bg-background/30 backdrop-blur-sm flex gap-4 items-start group hover:border-primary/30 transition-colors">
                                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                                            <Award size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-text text-sm mb-1">Top 5 Global</h4>
                                            <p className="text-xs text-muted leading-normal">Ranked in the Top 5 at the 8th International ICMTC Competition among elite global teams.</p>
                                        </div>
                                    </div>
                                    <div className="p-5 rounded-2xl border border-border bg-background/30 backdrop-blur-sm flex gap-4 items-start group hover:border-primary/30 transition-colors">
                                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                                            <Trophy size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-text text-sm mb-1">Best Presentation</h4>
                                            <p className="text-xs text-muted leading-normal">Awarded Best Presentation for our technical design and engineering methodology.</p>
                                        </div>
                                    </div>
                                    <div className="p-5 rounded-2xl border border-border bg-background/30 backdrop-blur-sm flex gap-4 items-start group hover:border-primary/30 transition-colors">
                                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-text text-sm mb-1">Cairo, Egypt</h4>
                                            <p className="text-xs text-muted leading-normal">The first ever Indian team to participate in the UGVC category at ICMTC.</p>
                                        </div>
                                    </div>
                                    <div className="p-5 rounded-2xl border border-border bg-background/30 backdrop-blur-sm flex gap-4 items-start group hover:border-primary/30 transition-colors">
                                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                                            <Users size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-text text-sm mb-1">Team UGV-DTU</h4>
                                            <p className="text-xs text-muted leading-normal">Developed by a multidisciplinary team of engineers from Delhi Technological University.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-border flex flex-col sm:flex-row gap-6 items-center justify-between">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Industry Partners:</span>
                                        <div className="flex flex-wrap gap-4">
                                            <span className="text-xs font-mono text-primary font-bold">ANSYS</span>
                                            <span className="text-xs font-mono text-primary font-bold">SOLIDWORKS</span>
                                            <span className="text-xs font-mono text-primary font-bold">MATHWORKS</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="w-full sm:w-auto px-8 py-3 bg-primary text-background font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all text-sm shadow-lg shadow-primary/20 pointer-events-auto"
                                    >
                                        Awesome Work!
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default UGVModal;
