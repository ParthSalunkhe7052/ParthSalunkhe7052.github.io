import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Search, Code, ArrowUpRight } from 'lucide-react';
import { useModal } from '../hooks/use-modal';

const ASURAModal = ({ isOpen, onClose }) => {
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
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <Shield size={20} />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-text">ASURA</h2>
                                        <p className="text-xs font-mono text-muted mt-0.5">Security Analysis Framework · FastAPI + React + Semgrep + Bandit</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <a
                                        href="https://github.com/ParthSalunkhe7052/Asura-Security-Scan"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-lg text-xs font-mono text-muted hover:text-text hover:border-primary/40 transition-colors"
                                    >
                                        GitHub
                                        <ArrowUpRight size={12} />
                                    </a>
                                    <button
                                        onClick={onClose}
                                        className="p-2 hover:bg-white/5 rounded-lg text-muted hover:text-text transition-colors"
                                        aria-label="Close modal"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6 space-y-8">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {['FastAPI', 'React', 'Semgrep', 'Bandit', 'Static Analysis', 'Python'].map(tag => (
                                        <span key={tag} className="text-xs font-mono text-primary px-2 py-0.5 rounded border border-primary/20 bg-primary/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Problem */}
                                <div>
                                    <h3 className="text-sm font-mono text-primary uppercase tracking-wide mb-3">Problem</h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        Security tools like Semgrep and Bandit are powerful but produce noisy CLI output — a wall of findings with no prioritization, no context, and no clear developer action. Most developers run them once, get overwhelmed, and never integrate security checks into their workflow.
                                    </p>
                                </div>

                                {/* Approach */}
                                <div>
                                    <h3 className="text-sm font-mono text-primary uppercase tracking-wide mb-3">Approach</h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        Build an API/UI layer over the scanners that aggregates findings, explains them in developer language, groups by severity, and surfaces actionable next steps. The goal: make pre-deployment security scanning a repeatable habit, not a one-off chore.
                                    </p>
                                </div>

                                {/* Architecture */}
                                <div>
                                    <h3 className="text-sm font-mono text-primary uppercase tracking-wide mb-4">Architecture</h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {[
                                            { icon: Search, label: 'Scanner Layer', desc: 'Semgrep (pattern-based rule matching) + Bandit (Python-specific AST analysis) run as subprocesses and output structured JSON.' },
                                            { icon: Code, label: 'FastAPI Backend', desc: 'Orchestrates scanner execution, aggregates findings by severity, deduplicates overlapping detections, and exposes a clean REST API.' },
                                            { icon: Shield, label: 'Finding Explanation', desc: 'Each finding is enriched with developer-readable context — what the risk is, why it matters, and a concrete remediation step.' },
                                            { icon: ArrowUpRight, label: 'React Review UI', desc: 'Filterable findings view grouped by severity and file, with diff context. Designed for pre-deployment review, not background CI noise.' },
                                        ].map(({ icon: Icon, label, desc }) => (
                                            <div key={label} className="flex gap-3 items-start p-4 rounded-lg border border-border bg-background/30">
                                                <div className="p-1.5 rounded bg-primary/10 text-primary shrink-0">
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

                                {/* Engineering notes */}
                                <div>
                                    <h3 className="text-sm font-mono text-primary uppercase tracking-wide mb-3">Engineering notes</h3>
                                    <ul className="space-y-2">
                                        <li className="flex gap-2 text-sm text-muted"><span className="text-primary/50 shrink-0 mt-0.5">›</span>Combines scanner output with a reviewable API/UI flow — not raw CLI output piped to a file.</li>
                                        <li className="flex gap-2 text-sm text-muted"><span className="text-primary/50 shrink-0 mt-0.5">›</span>Frames findings around developer action (what to fix and why) rather than tool-level noise (rule ID and file path only).</li>
                                    </ul>
                                </div>

                                {/* What I'd improve */}
                                <div>
                                    <h3 className="text-sm font-mono text-primary uppercase tracking-wide mb-3">What I'd improve next</h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        CI/CD integration (GitHub Actions step, pre-commit hook); multi-language support beyond Python (JavaScript via ESLint security rules); a baseline/delta mode that only surfaces new findings introduced in the current diff.
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

export default ASURAModal;
