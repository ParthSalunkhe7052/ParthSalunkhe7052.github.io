import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const proofItems = [
    { value: '7+', label: 'shipped projects' },
    { value: 'GCP + Vercel', label: 'cloud deployments' },
    { value: 'Security', label: 'tooling and license flows' },
    { value: 'CodeVault', label: 'active SaaS build' },
];

const scanItems = ['DTU 2027', 'Full-stack', 'Security', 'Cloud', 'Live deployments'];

const ProofStrip = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section aria-label="Execution proof" className="border-y border-border bg-surface/30">
            <div className="section-container !py-8">
                <motion.div
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.45 }}
                    className="space-y-6"
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {proofItems.map((item) => (
                            <div key={item.label} className="border border-border bg-background/50 rounded-lg px-4 py-4">
                                <div className="text-primary font-mono text-sm mb-1">{item.value}</div>
                                <div className="text-muted text-xs uppercase tracking-wide">{item.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {scanItems.map((item) => (
                            <span key={item} className="text-xs font-mono text-muted border border-border rounded-full px-3 py-1 bg-background/40">
                                {item}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProofStrip;
