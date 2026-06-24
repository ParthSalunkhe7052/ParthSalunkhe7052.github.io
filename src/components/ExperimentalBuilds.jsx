import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import navaakImg from '../assets/navaak.webp';
import adawwrablyImg from '../assets/adawwrably.webp';
import doomscrollImg from '../assets/doomscroll.webp';
import aerovortexImg from '../assets/aerovortex.webp';
import whisperxImg from '../assets/whisperx.webp';

const builds = [
    {
        title: 'Navaak',
        tag: 'Storefront',
        description: 'Minimal e-commerce storefront exploring premium product presentation and responsive browsing.',
        image: navaakImg,
        link: 'https://navaak.vercel.app/',
        github: 'https://github.com/ParthSalunkhe7052/navaak-coming-soon'
    },
    {
        title: 'Adawwrably',
        tag: 'Storefront',
        description: 'Playful merchandise storefront with fast iteration on visual identity and fan-oriented shopping flows.',
        image: adawwrablyImg,
        link: 'https://adawwrably-v2.vercel.app/',
        github: 'https://github.com/ParthSalunkhe7052/adawwrably'
    },
    {
        title: 'DoomScroll Pedometer',
        tag: 'Weekend Build',
        description: 'Small interaction experiment that turns feed scrolling into a thumb-travel counter.',
        image: doomscrollImg,
        link: 'https://doomscroll-sandy.vercel.app/',
        github: 'https://github.com/ParthSalunkhe7052/DoomScroll'
    },
    {
        title: 'AeroVortex',
        tag: 'UI Experiment',
        description: '3D product showcase with scroll-driven assembly and immersive product motion.',
        image: aerovortexImg,
        link: 'https://ac-website.vercel.app/',
        github: 'https://github.com/ParthSalunkhe7052/ac-website'
    },
    {
        title: 'Whisper X',
        tag: 'AI Tooling',
        description: 'Transcription tool exploring local and Groq-backed inference flows for fast audio processing.',
        image: whisperxImg,
        github: 'https://github.com/ParthSalunkhe7052/WisperX'
    },
];

const moreWork = [
    {
        title: 'DDoS Globe Visualizer',
        desc: 'Real-time 3D network event visualizer — streaming attack traffic rendered in WebSockets + Three.js without overwhelming the browser.',
        github: 'https://github.com/ParthSalunkhe7052/ddos-globe-visualizer',
        tags: ['Three.js', 'WebSockets', 'React'],
    },
    {
        title: 'Clash Emote Detector',
        desc: 'Computer vision interaction experiment mapping hand gestures to live game emote triggers via low-latency camera input.',
        github: 'https://github.com/ParthSalunkhe7052/Clash-Emote-Detector',
        tags: ['PyTorch', 'OpenCV', 'Python'],
    },
];

const ExperimentalBuilds = () => {
    const shouldReduceMotion = useReducedMotion();

    const itemVariants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    };

    return (
        <section id="experiments" className="section-container">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 } },
                }}
            >
                <motion.div variants={itemVariants} className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">05 // Range</span>
                        <h2 className="text-3xl md:text-4xl font-bold">Experimental / Fun Builds</h2>
                        <p className="text-muted mt-3 max-w-2xl">
                            Smaller experiments, storefronts, visual demos, and weekend builds that show range and shipping speed.
                        </p>
                    </div>
                    <Link to="/fun" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors group">
                        Open full archive
                        <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {builds.map((build) => (
                        <motion.article key={build.title} variants={itemVariants} className="border border-border bg-surface rounded-lg overflow-hidden flex flex-col justify-between">
                            <div>
                                <div className="h-36 bg-background overflow-hidden">
                                    <img
                                        src={build.image}
                                        alt={build.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover opacity-75"
                                    />
                                </div>
                                <div className="p-5 pb-0">
                                    <span className="text-[11px] font-mono text-primary border border-primary/20 bg-primary/10 px-2 py-1 rounded">
                                        {build.tag}
                                    </span>
                                    <h3 className="text-lg font-semibold mt-4 mb-2">{build.title}</h3>
                                    <p className="text-sm text-muted leading-relaxed">{build.description}</p>
                                </div>
                            </div>
                            <div className="p-5 pt-4 flex flex-wrap gap-2">
                                {build.link && (
                                    <a
                                        href={build.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg bg-primary text-background text-xs font-bold hover:bg-primary/90 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                                    >
                                        Visit Site
                                    </a>
                                )}
                                {build.github && (
                                    <a
                                        href={build.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg border border-border text-xs font-bold text-text hover:border-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                                    >
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Secondary tier — more work */}
                <motion.div variants={itemVariants} className="mt-16">
                    <h3 className="text-xs font-mono text-muted uppercase tracking-wider mb-6">06 // More Work</h3>
                    <div className="space-y-4">
                        {moreWork.map((item) => (
                            <div key={item.title} className="flex flex-col sm:flex-row sm:items-center gap-3 py-4 border-t border-border group">
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                        <span className="text-base font-semibold text-text group-hover:text-primary transition-colors duration-200">{item.title}</span>
                                        <div className="flex gap-1.5">
                                            {item.tags.map(t => (
                                                <span key={t} className="text-[10px] font-mono text-muted border border-border px-1.5 py-0.5 rounded bg-background/30">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-xs text-muted leading-relaxed max-w-3xl">{item.desc}</p>
                                </div>
                                <div className="shrink-0 pt-1 sm:pt-0">
                                    <a
                                        href={item.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-xs font-mono text-muted hover:text-primary transition-colors duration-200"
                                    >
                                        GitHub <ArrowUpRight size={12} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ExperimentalBuilds;
