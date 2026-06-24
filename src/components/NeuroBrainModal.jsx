import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, ScanLine, Brain, BarChart2 } from 'lucide-react';
import { useModal } from '../hooks/use-modal';
import neurobrainImg from '../assets/neurobrain.png';

const NeuroBrainModal = ({ isOpen, onClose }) => {
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
                                        <Brain size={20} />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-text">NeuroBrain</h2>
                                        <p className="text-xs font-mono text-muted mt-0.5">AI Creative Intelligence Platform · Computer Vision + Multimodal LLM</p>
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
                                    {['Computer Vision', 'OpenCV', 'OCR', 'Gemini Vision', 'FastAPI', 'React', 'Python'].map(tag => (
                                        <span key={tag} className="text-xs font-mono text-primary px-2 py-0.5 rounded border border-primary/20 bg-primary/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Screenshot */}
                                <div className="rounded-lg border border-border overflow-hidden bg-background/50">
                                    <img
                                        src={neurobrainImg}
                                        alt="NeuroBrain AI Pairwise Creative Comparison"
                                        className="w-full h-auto object-cover"
                                        loading="lazy"
                                    />
                                    <p className="text-[10px] font-mono text-muted text-center py-2 border-t border-border/50 bg-surface/50">NeuroBrain Creative Intelligence Dashboard</p>
                                </div>

                                {/* Problem */}
                                <div>
                                    <h3 className="text-sm font-mono text-primary uppercase tracking-wide mb-3">Problem</h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        Marketers and designers spend hours manually reviewing creatives for attention and conversion issues. Existing heatmap tools deliver raw visual data but no actionable edits — you still need a CRO expert to interpret them and propose specific layout changes.
                                    </p>
                                </div>

                                {/* Approach */}
                                <div>
                                    <h3 className="text-sm font-mono text-primary uppercase tracking-wide mb-3">Approach</h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        Build a three-stage pipeline: (1) CV fixation prediction identifies where viewers will look; (2) OCR maps the actual text elements on the creative; (3) a multimodal LLM fuses both signals to generate specific, named layout edits — "move the CTA above the hero image" — not generic design advice.
                                    </p>
                                </div>

                                {/* Architecture */}
                                <div>
                                    <h3 className="text-sm font-mono text-primary uppercase tracking-wide mb-4">Architecture</h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {[
                                            { icon: Eye, label: 'Fixation Prediction', desc: 'CV model predicts visual attention distribution across the uploaded creative, identifying high- and low-attention zones.' },
                                            { icon: ScanLine, label: 'OCR Text Mapping', desc: 'Extracts and positions text elements from the creative so recommendations can reference real on-creative content by name.' },
                                            { icon: Brain, label: 'Multimodal LLM Fusion', desc: 'Gemini Vision receives both the fixation map and OCR context to generate specific, actionable layout edits for conversion improvement.' },
                                            { icon: BarChart2, label: 'CRO Output', desc: 'Returns a structured list of prioritized layout changes with reasoning — not raw heatmaps or generic tips.' },
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
                                        <li className="flex gap-2 text-sm text-muted"><span className="text-primary/50 shrink-0 mt-0.5">›</span>Fuses CV fixation prediction with OCR text mapping so recommendations reference real on-creative elements — not inferred guesses.</li>
                                        <li className="flex gap-2 text-sm text-muted"><span className="text-primary/50 shrink-0 mt-0.5">›</span>Hardest part: prompt engineering the LLM to produce specific layout edits (not generic advice) while grounding outputs in CV evidence.</li>
                                    </ul>
                                </div>

                                {/* What I'd improve */}
                                <div>
                                    <h3 className="text-sm font-mono text-primary uppercase tracking-wide mb-3">What I'd improve next</h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        A/B test validation loop to measure whether recommended edits actually lift conversion; fine-tuned fixation model on ad-specific creative formats (social media cards, banners); batch processing for agencies reviewing multiple creatives at once.
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

export default NeuroBrainModal;
