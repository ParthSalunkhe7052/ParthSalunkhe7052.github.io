import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Terminal, Globe, Database, ArrowUpRight } from 'lucide-react';
import { useModal } from '../hooks/use-modal';
import lastresortImg from '../assets/lastresort.png';

const LastResortModal = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);
    useModal(isOpen, onClose, modalRef);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
                    />
                    <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
                        <motion.div
                            ref={modalRef}
                            initial={{ opacity: 0, scale: 0.95, y: 16 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 16 }}
                            transition={{ type: 'spring', damping: 20, stiffness: 280 }}
                            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface border border-border rounded-xl shadow-2xl pointer-events-auto"
                        >
                            {/* Header */}
                            <div className="sticky top-0 bg-surface/90 backdrop-blur-md border-b border-border p-5 flex items-center justify-between z-10">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                                        <Shield size={20} />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-text">LastResort</h2>
                                        <p className="text-xs font-mono text-muted mt-0.5">Autonomous Penetration-Testing Agent · Go · Local Daemon</p>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-white/5 rounded-lg text-muted hover:text-text transition-colors"
                                    aria-label="Close modal"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-6 space-y-8">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {['Go', 'LLM (Gemini/OpenRouter)', 'Playwright', 'ConnectRPC', 'REST', 'SQLite', 'Nuclei', 'Nikto', 'Wapiti'].map(tag => (
                                        <span key={tag} className="text-xs font-mono text-primary px-2 py-0.5 rounded border border-primary/20 bg-primary/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Screenshot */}
                                <div className="rounded-lg border border-border overflow-hidden bg-background/50">
                                    <img
                                        src={lastresortImg}
                                        alt="LastResort Cognitive Stream & Pipeline Running"
                                        className="w-full h-auto object-cover"
                                        loading="lazy"
                                    />
                                    <p className="text-[10px] font-mono text-muted text-center py-2 border-t border-border/50 bg-surface/50">Autonomous Agent Exploit Loop & Console Logs</p>
                                </div>

                                {/* Problem */}
                                <div>
                                    <h3 className="text-sm font-mono text-primary uppercase tracking-wide mb-3">Problem</h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        Traditional vulnerability scanners use static payload lists and HTTP string-matching to detect issues — they miss context, produce false positives, and can't chain multi-step exploits. A human pentester thinks, adapts, and verifies by real effect; tools don't.
                                    </p>
                                </div>

                                {/* Approach */}
                                <div>
                                    <h3 className="text-sm font-mono text-primary uppercase tracking-wide mb-3">Approach</h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        Replace the static scanner with an LLM planning loop. The agent forms hypotheses, generates tailored payloads, executes them in a real browser via Playwright, and verifies findings by actual DOM/script effect — not response strings. A SessionJournal persists action history and page context (AXTree) so the agent can chain multi-step attacks.
                                    </p>
                                </div>

                                {/* Architecture */}
                                <div>
                                    <h3 className="text-sm font-mono text-primary uppercase tracking-wide mb-4">Architecture</h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {[
                                            { icon: Terminal, label: 'LLM Planning', desc: 'Gemini/OpenRouter drives hypothesis generation, payload crafting, and result evaluation — replacing static signature matching.' },
                                            { icon: Globe, label: 'Browser Verification', desc: 'Playwright executes payloads in a real browser and confirms exploits by DOM change or script execution (e.g. alert() fires).' },
                                            { icon: Database, label: 'SessionJournal', desc: 'SQLite-backed action history + Accessibility Tree context enables multi-step attack chains and state persistence across the session.' },
                                            { icon: Shield, label: 'Scanner Orchestration', desc: 'Wraps Nuclei, Nikto, and Wapiti for the discovery phase; the AI agent then verifies and exploits points of interest.' },
                                        ].map(({ icon: Icon, label, desc }) => (
                                            <div key={label} className="flex gap-3 items-start p-4 rounded-lg border border-border bg-background/30">
                                                <div className="p-1.5 rounded bg-secondary/10 text-secondary shrink-0">
                                                    <Icon size={15} />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-semibold text-text mb-1">{label}</h4>
                                                    <p className="text-xs text-muted leading-relaxed">{desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Runtime */}
                                <div className="rounded-lg border border-border bg-background/50 p-4">
                                    <h4 className="text-xs font-mono text-muted uppercase tracking-wide mb-3">Runtime</h4>
                                    <div className="space-y-2 text-xs font-mono text-muted">
                                        <div className="flex gap-3"><span className="text-primary/60 w-24 shrink-0">entry point</span><span>main.go → local background daemon</span></div>
                                        <div className="flex gap-3"><span className="text-primary/60 w-24 shrink-0">APIs</span><span>ConnectRPC + REST → external UI</span></div>
                                        <div className="flex gap-3"><span className="text-primary/60 w-24 shrink-0">storage</span><span>SQLite (session logs, findings)</span></div>
                                        <div className="flex gap-3"><span className="text-primary/60 w-24 shrink-0">status</span><span className="text-secondary">local daemon (no live URL)</span></div>
                                    </div>
                                </div>

                                {/* Engineering notes */}
                                <div>
                                    <h3 className="text-sm font-mono text-primary uppercase tracking-wide mb-3">Engineering notes</h3>
                                    <ul className="space-y-2">
                                        <li className="flex gap-2 text-sm text-muted"><span className="text-primary/50 shrink-0 mt-0.5">›</span>Closes the autonomous loop: plan → execute in real browser → verify by actual DOM effect → update session memory.</li>
                                        <li className="flex gap-2 text-sm text-muted"><span className="text-primary/50 shrink-0 mt-0.5">›</span>AXTree context lets the agent understand page structure without reading raw HTML — more robust for dynamic apps.</li>
                                    </ul>
                                </div>

                                {/* What I'd improve */}
                                <div>
                                    <h3 className="text-sm font-mono text-primary uppercase tracking-wide mb-3">What I'd improve next</h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        Structured output schemas from the LLM to reduce parse failures; a confidence-scoring layer on findings before reporting; authenticated session support for post-login attack surfaces.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default LastResortModal;
