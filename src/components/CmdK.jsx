import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Search, FileText, Github, Linkedin, Mail, X, Terminal, BriefcaseBusiness, Shield, Wrench, Bot } from 'lucide-react';

const CmdK = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(open => !open);
            }
            if (e.key === 'Escape') setIsOpen(false);
        };
        const handleOpenEvent = () => setIsOpen(true);

        window.addEventListener('keydown', handleKeyDown);
        document.addEventListener('open-cmdk', handleOpenEvent);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('open-cmdk', handleOpenEvent);
        };
    }, []);

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.left = '-9999px';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        }
    };

    const actions = [
        { id: 'projects', label: 'View Projects', icon: BriefcaseBusiness, onSelect: () => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); } },
        { id: 'codevault', label: 'See CodeVault Live', icon: Shield, onSelect: () => { window.open('https://codevault.parth7.me', '_blank'); setIsOpen(false); } },
        { id: 'lastresort', label: 'LastResort — Pentest Agent', icon: Shield, onSelect: () => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); } },
        { id: 'neurobrain', label: 'NeuroBrain — AI Creative Platform', icon: Bot, onSelect: () => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); } },
        { id: 'soulmen', label: 'SoulMen — Tender Readiness', icon: BriefcaseBusiness, onSelect: () => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); } },
        { id: 'skills', label: 'Skills Matrix', icon: Wrench, onSelect: () => { document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); } },
        { id: 'resume', label: 'Open Resume', icon: FileText, onSelect: () => { window.open('/Parth_Resume.pdf', '_blank'); setIsOpen(false); } },
        { id: 'github', label: 'Go to GitHub', icon: Github, onSelect: () => { window.open('https://github.com/ParthSalunkhe7052'); setIsOpen(false); } },
        { id: 'linkedin', label: 'Go to LinkedIn', icon: Linkedin, onSelect: () => { window.open('https://linkedin.com/in/parth-salunkhe-029a491a4'); setIsOpen(false); } },
        { id: 'email', label: 'Copy Email', icon: Mail, onSelect: () => { copyToClipboard('contact@parth7.me').then(() => setIsOpen(false)); } },
        { id: 'terminal', label: 'Open Terminal (About)', icon: Terminal, onSelect: () => { document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); } },
    ];

    const filtered = actions.filter(a => a.label.toLowerCase().includes(query.toLowerCase()));

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[18vh] px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96, y: shouldReduceMotion ? 0 : -16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96, y: shouldReduceMotion ? 0 : -16 }}
                        transition={{ type: 'spring', damping: 22, stiffness: 300 }}
                        className="relative w-full max-w-md bg-surface border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        <div className="flex items-center px-4 py-3.5 border-b border-border gap-3">
                            <Search size={16} className="text-muted shrink-0" />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Search commands..."
                                className="w-full bg-transparent text-text placeholder-muted focus:outline-none text-sm font-mono"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <button onClick={() => setIsOpen(false)} className="text-muted hover:text-text p-1 rounded focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none shrink-0">
                                <X size={16} />
                            </button>
                        </div>
                        <div className="p-1.5 max-h-72 overflow-y-auto">
                            {filtered.length > 0 ? (
                                <div className="space-y-0.5">
                                    {filtered.map((action) => (
                                        <button
                                            key={action.id}
                                            onClick={action.onSelect}
                                            className="w-full flex items-center px-3 py-2.5 text-sm text-muted hover:text-text hover:bg-white/5 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                                        >
                                            <action.icon size={14} className="mr-3 shrink-0" />
                                            {action.label}
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-center text-xs text-muted py-5 font-mono">No commands found.</p>
                            )}
                        </div>
                        <div className="px-4 py-2.5 border-t border-border bg-background/30 text-[11px] text-muted flex items-center justify-between font-mono">
                            <span>↑↓ navigate</span>
                            <span>ESC close</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CmdK;
