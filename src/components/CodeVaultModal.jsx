import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Cpu, Code, ArrowUpRight, Lock } from 'lucide-react';
import { useModal } from '../hooks/use-modal';

const CodeVaultModal = ({ isOpen, onClose }) => {
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
                                        <Lock size={20} />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-text">CodeVault</h2>
                                        <p className="text-xs font-mono text-muted mt-0.5">Secure Deployment & Licensing · FastAPI + React + PostgreSQL + GCP + Docker</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <a
                                        href="https://github.com/ParthSalunkhe7052"
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
                                    {['React', 'FastAPI', 'PostgreSQL', 'Docker', 'GCP', 'JWT', 'RSA Cryptography', 'Secure Delivery'].map(tag => (
                                        <span key={tag} className="text-xs font-mono text-primary px-2 py-0.5 rounded border border-primary/20 bg-primary/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Problem */}
                                <div>
                                    <h3 className="text-sm font-mono text-primary uppercase tracking-wide mb-3">Problem</h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        Developers of script-based products or commercial software tools require a secure, automated way to compile, license, and deliver code to enterprise customers. Without a controlled build, licensing validation, and signed artifact delivery mechanism, proprietary source code and intellectual property can easily be stolen, reverse-engineered, or distributed without authorization.
                                    </p>
                                </div>

                                {/* Approach */}
                                <div>
                                    <h3 className="text-sm font-mono text-primary uppercase tracking-wide mb-3">Approach</h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        Build an automated pipeline that coordinates cloud build isolation, hardware-bound license verification (HWID binding), cryptographically signed license tokens, and controlled delivery of compiled packages. The system provides licensing compliance and code security without introducing friction into client workflows.
                                    </p>
                                </div>

                                {/* Architecture */}
                                <div>
                                    <h3 className="text-sm font-mono text-primary uppercase tracking-wide mb-4">Architecture</h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {[
                                            { icon: Code, label: 'Isolated Build Workers', desc: 'Runs source file uploads inside dynamic, ephemeral Docker sandboxes on Google Cloud (GCP) to compile assets securely.' },
                                            { icon: Cpu, label: 'Hardware-Locked Licensing', desc: 'Binds active subscriptions to client CPU, motherboard, and disk IDs (HWID verification) to prevent multi-device sharing.' },
                                            { icon: Shield, label: 'Signed Offline Leases', desc: 'Employs asymmetric cryptography (RSA) to sign lease tokens, letting client software run securely in offline environments.' },
                                            { icon: Lock, label: 'Controlled Artifact Delivery', desc: 'Validates client identity and license status before serving the compiled binaries, preventing raw artifact leaks.' },
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
                                        <li className="flex gap-2 text-sm text-muted"><span className="text-primary/50 shrink-0 mt-0.5">›</span>Co-ordinates GCP container orchestration, license checking database triggers, and artifact streaming gates in a unified backend.</li>
                                        <li className="flex gap-2 text-sm text-muted"><span className="text-primary/50 shrink-0 mt-0.5">›</span>Integrates offline lease verification with client-side RSA check engines to protect runtime execution without constant cloud roundtrips.</li>
                                    </ul>
                                </div>

                                {/* What I'd improve */}
                                <div>
                                    <h3 className="text-sm font-mono text-primary uppercase tracking-wide mb-3">What I'd improve next</h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        Build SDK obfuscation (PyArmor or Javascript-Obfuscator plugins) directly into the compiler workers; support automated checkout webhooks (e.g. Stripe checkout integrations) for hands-off key generation; build dynamic blacklists to revoke compromised keys on the fly.
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

export default CodeVaultModal;
