import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import whisperxImg from '../assets/whisperx.webp';
import eternityImg from '../assets/eternity.webp';
import aerovortexImg from '../assets/aerovortex.webp';
import doomscrollImg from '../assets/doomscroll.webp';
import navaakImg from '../assets/navaak.webp';
import adawwrablyImg from '../assets/adawwrably.webp';
import InterpreterModal from './InterpreterModal';
import EternityModal from './EternityModal';
import AeroVortexModal from './AeroVortexModal';
import WhisperXModal from './WhisperXModal';
import DoomScrollModal from './DoomScrollModal';

const DEMO_PROJECTS = [
    {
        id: 'navaak',
        title: 'Navaak',
        description: 'Minimal e-commerce storefront exploring premium product presentation and conversion-focused browsing.',
        span: 'col-span-1 md:col-span-1 row-span-1',
        color: 'from-emerald-900/30 to-emerald-800/10 border-emerald-500/20',
        image: navaakImg,
        link: 'https://navaak.vercel.app/',
        github: 'https://github.com/ParthSalunkhe7052/navaak-coming-soon'
    },
    {
        id: 'adawwrably',
        title: 'Adawwrably',
        description: 'Playful merchandise storefront with fast iteration on visual identity and product cards.',
        span: 'col-span-1 md:col-span-1 row-span-1',
        color: 'from-pink-900/30 to-pink-800/10 border-pink-500/20',
        image: adawwrablyImg,
        link: 'https://adawwrably-v2.vercel.app/',
        github: 'https://github.com/ParthSalunkhe7052/adawwrably'
    },
    { 
        id: 'doomscroll', 
        title: 'DoomScroll Pedometer', 
        description: 'Track how far your thumb travels through the infinite feed today.',
        span: 'col-span-1 md:col-span-2 row-span-2', 
        color: 'from-orange-900/40 to-orange-800/10 border-orange-500/20',
        image: doomscrollImg,
        link: 'https://doomscroll-sandy.vercel.app/',
        github: 'https://github.com/ParthSalunkhe7052/DoomScroll'
    },
    { 
        id: 'aerovortex', 
        title: 'AeroVortex', 
        description: '3D brand experience for a futuristic AC with scroll-driven assembly animations.',
        span: 'col-span-1 md:col-span-1 row-span-1', 
        color: 'from-cyan-900/40 to-cyan-800/10 border-cyan-500/20',
        image: aerovortexImg,
        link: 'https://ac-website.vercel.app/',
        github: 'https://github.com/ParthSalunkhe7052/ac-website'
    },
    { 
        id: 'eternity', 
        title: 'ETERNITY', 
        description: 'Local AI-powered mini-IDE and workspace with TypeScript monorepo orchestration.',
        span: 'col-span-1 md:col-span-1 row-span-1', 
        color: 'from-amber-900/40 to-amber-800/10 border-amber-500/20',
        image: eternityImg,
        github: 'https://github.com/ParthSalunkhe7052/goaltracker'
    },
    { 
        id: 'whisperx', 
        title: 'Whisper X', 
        description: 'Free, unlimited transcription using Groq or local models.',
        span: 'col-span-1 md:col-span-1 row-span-1', 
        color: 'from-blue-900/40 to-blue-800/10 border-blue-500/20',
        image: whisperxImg,
        github: 'https://github.com/ParthSalunkhe7052/WisperX'
    },
    { 
        id: 'interpreter', 
        title: 'Open Interpreter', 
        description: 'AI-powered Telegram platform for Code Vault automation and growth.',
        span: 'col-span-1 md:col-span-2 row-span-1', 
        color: 'from-indigo-900/40 to-indigo-800/10 border-indigo-500/20',
        image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop',
        github: 'https://github.com/ParthSalunkhe7052/code-vault'
    },
];

const Fun = () => {
    const [isInterpreterOpen, setIsInterpreterOpen] = useState(false);
    const [isEternityOpen, setIsEternityOpen] = useState(false);
    const [isAeroVortexOpen, setIsAeroVortexOpen] = useState(false);
    const [isWhisperXOpen, setIsWhisperXOpen] = useState(false);
    const [isDoomScrollOpen, setIsDoomScrollOpen] = useState(false);

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 w-full max-w-7xl mx-auto flex flex-col relative z-20">
            {/* Header */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12 flex flex-col items-start gap-4"
            >
                <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-4 group">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </Link>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
                    Experimental / Fun Builds<span className="text-primary">.</span>
                </h1>
                <p className="text-lg text-muted max-w-2xl">
                    Smaller experiments, storefronts, visual demos, and weekend builds that show range and shipping speed.
                </p>
            </motion.div>

            {/* Bento Grid */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
            >
                {DEMO_PROJECTS.map((project, i) => (
                    <motion.div 
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + (i * 0.1), duration: 0.4 }}
                        whileHover={{ y: -5, scale: 1.01 }}
                        onClick={() => {
                            if (project.link) {
                                window.open(project.link, '_blank', 'noopener,noreferrer');
                                return;
                            }
                            if (project.id === 'interpreter') setIsInterpreterOpen(true);
                            if (project.id === 'eternity') setIsEternityOpen(true);
                            if (project.id === 'aerovortex') setIsAeroVortexOpen(true);
                            if (project.id === 'whisperx') setIsWhisperXOpen(true);
                            if (project.id === 'doomscroll') setIsDoomScrollOpen(true);
                        }}
                        className={`relative rounded-lg overflow-hidden glass-panel flex flex-col p-8 justify-end bg-gradient-to-br ${project.color} ${project.span} group cursor-pointer border`}
                    >
                        {/* Background Image for projects that have one */}
                        {project.image && (
                            <div className="absolute inset-0 z-0">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-all duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                            </div>
                        )}

                        {/* Dummy Background pattern for others */}
                        {!project.image && (
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                        )}
                        
                        <div className="relative z-10 transition-transform duration-300 group-hover:translate-x-2 flex flex-col items-start w-full">
                            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-white/70 max-w-sm line-clamp-2 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-2 pointer-events-auto">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary text-background text-xs font-bold hover:bg-primary/90 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                                    >
                                        Visit Site
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-white/20 text-white text-xs font-bold hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                                    >
                                        GitHub
                                    </a>
                                )}
                                {['interpreter', 'eternity', 'aerovortex', 'whisperx', 'doomscroll'].includes(project.id) && (
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (project.id === 'interpreter') setIsInterpreterOpen(true);
                                            if (project.id === 'eternity') setIsEternityOpen(true);
                                            if (project.id === 'aerovortex') setIsAeroVortexOpen(true);
                                            if (project.id === 'whisperx') setIsWhisperXOpen(true);
                                            if (project.id === 'doomscroll') setIsDoomScrollOpen(true);
                                        }}
                                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none ${
                                            !project.link 
                                                ? 'bg-primary text-background hover:bg-primary/90' 
                                                : 'border border-white/20 text-white hover:bg-white/10'
                                        }`}
                                    >
                                        Details
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <InterpreterModal isOpen={isInterpreterOpen} onClose={() => setIsInterpreterOpen(false)} />
            <EternityModal isOpen={isEternityOpen} onClose={() => setIsEternityOpen(false)} />
            <AeroVortexModal isOpen={isAeroVortexOpen} onClose={() => setIsAeroVortexOpen(false)} />
            <WhisperXModal isOpen={isWhisperXOpen} onClose={() => setIsWhisperXOpen(false)} />
            <DoomScrollModal isOpen={isDoomScrollOpen} onClose={() => setIsDoomScrollOpen(false)} />
        </main>
    );
};

export default Fun;
