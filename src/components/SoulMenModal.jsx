import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileCheck, AlertTriangle, CheckCircle, LayoutList } from 'lucide-react';
import { useModal } from '../hooks/use-modal';
import soulmenMainImg from '../assets/soulmen-main.png';
import soulmenPipelineImg from '../assets/soulmen-pipeline.png';

const SoulMenModal = ({ isOpen, onClose }) => {
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
                                        <FileCheck size={20} />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-text">SoulMen</h2>
                                        <p className="text-xs font-mono text-muted mt-0.5">B2B Tender Readiness Platform · UAE Contractor Tendering</p>
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
                                    {['Document OCR', 'LLM Extraction', 'Rules Engine', 'FastAPI', 'React', 'PostgreSQL'].map(tag => (
                                        <span key={tag} className="text-xs font-mono text-primary px-2 py-0.5 rounded border border-primary/20 bg-primary/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Screenshots */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="rounded-lg border border-border overflow-hidden bg-background/50">
                                        <img
                                            src={soulmenMainImg}
                                            alt="SoulMen Pre-Flight Vendor Audit Workbench"
                                            className="w-full h-auto object-cover"
                                            loading="lazy"
                                        />
                                        <p className="text-[10px] font-mono text-muted text-center py-2 border-t border-border/50 bg-surface/50">Pre-Flight Audit Workbench</p>
                                    </div>
                                    <div className="rounded-lg border border-border overflow-hidden bg-background/50">
                                        <img
                                            src={soulmenPipelineImg}
                                            alt="SoulMen Pipeline Test Dashboard"
                                            className="w-full h-auto object-cover"
                                            loading="lazy"
                                        />
                                        <p className="text-[10px] font-mono text-muted text-center py-2 border-t border-border/50 bg-surface/50">Pipeline Test Dashboard</p>
                                    </div>
                                </div>

                                {/* Problem */}
                                <div>
                                    <h3 className="text-sm font-mono text-primary uppercase tracking-wide mb-3">Problem</h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        UAE subcontractors lose tenders not because they can't do the work, but because their submission packages have missing documents, expired certifications, or entity-name mismatches. Client portals (DEWA, Emaar, Aldar, ADNOC) reject submissions automatically — subcontractors only find out after the deadline.
                                    </p>
                                </div>

                                {/* Approach */}
                                <div>
                                    <h3 className="text-sm font-mono text-primary uppercase tracking-wide mb-3">Approach</h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        Encode per-client requirement sets (what documents are needed, what expiry windows are acceptable, what entity names must match) and run uploaded company documents through an LLM extraction + rules engine. Output a single Readiness Score and a specific gap list — not a generic document checklist.
                                    </p>
                                </div>

                                {/* Architecture */}
                                <div>
                                    <h3 className="text-sm font-mono text-primary uppercase tracking-wide mb-4">Architecture</h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {[
                                            { icon: FileCheck, label: 'Document Parsing', desc: 'OCR + LLM extraction pulls structured data (expiry dates, entity names, certification bodies) from heterogeneous official documents.' },
                                            { icon: LayoutList, label: 'Requirement Rules Engine', desc: 'Per-client rule sets encode document presence, expiry windows, and name-matching constraints for DEWA, Emaar, Aldar, ADNOC, and major contractors.' },
                                            { icon: AlertTriangle, label: 'Gap Detection', desc: 'Validates extracted document data against the active client rule set and surfaces specific failures: missing doc, expired cert, name mismatch.' },
                                            { icon: CheckCircle, label: 'Readiness Score', desc: 'Aggregates all validations into a single "Ready / Not Ready" verdict with a weighted score and a prioritized gap list for remediation.' },
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

                                {/* Documents handled */}
                                <div className="rounded-lg border border-border bg-background/50 p-4">
                                    <h4 className="text-xs font-mono text-muted uppercase tracking-wide mb-3">Documents validated</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Trade License', 'VAT Certificate', 'ISO Certification', 'HSE Manual', 'Bank Letter', 'Company Profile'].map(doc => (
                                            <span key={doc} className="text-xs font-mono text-muted px-2 py-0.5 border border-border rounded">
                                                {doc}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Engineering notes */}
                                <div>
                                    <h3 className="text-sm font-mono text-primary uppercase tracking-wide mb-3">Engineering notes</h3>
                                    <ul className="space-y-2">
                                        <li className="flex gap-2 text-sm text-muted"><span className="text-primary/50 shrink-0 mt-0.5">›</span>Hardest part: reliably extracting structured fields (dates, entity names) from heterogeneous government document formats using LLM extraction with fallback heuristics.</li>
                                        <li className="flex gap-2 text-sm text-muted"><span className="text-primary/50 shrink-0 mt-0.5">›</span>Per-client rule sets are data-driven (not hardcoded) so adding a new client portal requires only a rules file, not code changes.</li>
                                    </ul>
                                </div>

                                {/* What I'd improve */}
                                <div>
                                    <h3 className="text-sm font-mono text-primary uppercase tracking-wide mb-3">What I'd improve next</h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        Direct portal integration to pull requirement sets automatically (instead of manual encoding); email alerts for expiring documents before tender season; a document vault where companies store and track their compliance portfolio across clients.
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

export default SoulMenModal;
