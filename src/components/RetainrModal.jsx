import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Slack, Zap, AlertTriangle, RefreshCw, Layout, CreditCard, MessageSquare } from 'lucide-react';

const RetainrModal = ({ isOpen, onClose }) => {
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
                            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface border border-border rounded-3xl shadow-2xl p-0 pointer-events-auto"
                        >
                            {/* Hero Section */}
                            <div className="relative h-64 bg-gradient-to-br from-indigo-600 to-violet-700 overflow-hidden">
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent blur-3xl" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="p-4 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                                            <Slack size={48} className="text-white" />
                                        </div>
                                        <h2 className="text-4xl font-bold text-white tracking-tight">Retainr.bot</h2>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="absolute top-6 right-6 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-colors border border-white/10"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-12 space-y-10">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-text">The "Headless" SaaS for Freelancers</h3>
                                    <p className="text-muted leading-relaxed text-sm sm:text-base">
                                        Automate the awkward "I need more hours/money" conversation by making retainer burn rate visible and refill frictionless. Retainr.bot eliminates the need for manual tracking by providing real-time visibility directly within Slack and Discord.
                                    </p>
                                </div>

                                {/* Features Grid */}
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div className="flex gap-4 items-start">
                                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                                            <Zap size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm mb-1">The Fuel Gauge</h4>
                                            <p className="text-xs text-muted leading-relaxed">A persistent, auto-updating message pinned to client channels showing remaining hours and forecasts.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                                            <CreditCard size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm mb-1">Frictionless Refills</h4>
                                            <p className="text-xs text-muted leading-relaxed">One-click "Refill Now" buttons powered by Polar.sh take clients directly to checkout.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                                            <AlertTriangle size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm mb-1">Automated Alerts</h4>
                                            <p className="text-xs text-muted leading-relaxed">Progressive low-balance notifications (50%, 25%, 15%, 10%) to keep projects moving smoothly.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                                            <RefreshCw size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm mb-1">Time Tracking Sync</h4>
                                            <p className="text-xs text-muted leading-relaxed">Auto-sync entries from Toggl or log hours via simple slash commands like /log.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Integration Bar */}
                                <div className="pt-8 border-t border-border flex flex-wrap gap-6 items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Integrates with</span>
                                        <div className="flex gap-3">
                                            <Slack size={18} className="text-muted" />
                                            <MessageSquare size={18} className="text-muted" />
                                            <Layout size={18} className="text-muted" />
                                        </div>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="px-8 py-3 bg-primary text-background font-bold rounded-xl hover:opacity-90 transition-all text-sm shadow-lg shadow-primary/20"
                                    >
                                        Got it!
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

export default RetainrModal;
