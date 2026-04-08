import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Search, FileText, Github, Linkedin, Mail, X, Terminal } from 'lucide-react';

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
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const actions = [
        { id: 'resume', label: 'Download Resume', icon: FileText, onSelect: () => { window.open('/Parth_Resume.docx'); setIsOpen(false); } },
        { id: 'github', label: 'Go to GitHub', icon: Github, onSelect: () => { window.open('https://github.com/ParthSalunkhe7052'); setIsOpen(false); } },
        { id: 'linkedin', label: 'Go to LinkedIn', icon: Linkedin, onSelect: () => { window.open('https://linkedin.com/in/parth-salunkhe-029a491a4'); setIsOpen(false); } },
        { id: 'email', label: 'Copy Email Address', icon: Mail, onSelect: () => { navigator.clipboard.writeText('contact@parth7.me'); setIsOpen(false); alert('Email copied!'); } },
        { id: 'contact', label: 'Contact Me', icon: Terminal, onSelect: () => { document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}); setIsOpen(false); } },
    ];

    const filteredActions = actions.filter(action => action.label.toLowerCase().includes(query.toLowerCase()));

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : -20 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                        className="relative w-full max-w-lg bg-surface border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        <div className="flex items-center px-4 py-4 border-b border-border">
                            <Search size={20} className="text-muted mr-3" />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Type a command or search..."
                                className="w-full bg-transparent text-text placeholder-muted focus:outline-none"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <button onClick={() => setIsOpen(false)} className="text-muted hover:text-text p-1 rounded-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none">
                                <X size={18} />
                            </button>
                        </div>
                        <div className="p-2 max-h-80 overflow-y-auto">
                            {filteredActions.length > 0 ? (
                                <div className="space-y-1">
                                    {filteredActions.map((action, i) => (
                                        <button
                                            key={action.id}
                                            onClick={action.onSelect}
                                            className="w-full flex items-center px-3 py-3 text-sm text-muted hover:text-text hover:bg-white/5 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                                        >
                                            <action.icon size={16} className="mr-3" />
                                            {action.label}
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-center text-sm text-muted py-6 font-mono">No commands found.</p>
                            )}
                        </div>
                        <div className="px-4 py-3 border-t border-border bg-black/20 text-xs text-muted flex items-center justify-between font-mono">
                            <span>Use TAB to navigate</span>
                            <span>ESC to close</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CmdK;