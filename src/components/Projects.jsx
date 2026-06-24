import React, { useState, lazy, Suspense, useRef, useEffect, useCallback } from 'react';
import { motion, useReducedMotion, useMotionValue, useAnimationFrame, animate } from 'framer-motion';
import { ArrowUpRight, Github, Lock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import asuraImg from '../assets/asura.webp';
import gitasaarthiMainImg from '../assets/gitasaarthi-main.webp';
import codevaultImg from '../assets/codevault-landing.webp';
import soulmenImg from '../assets/soulmen-main.png';
import ugvRealImg from '../assets/ugv-real.webp';
import lastresortImg from '../assets/lastresort.png';
import neurobrainImg from '../assets/neurobrain.png';

const GitaSaarthiModal = lazy(() => import('./GitaSaarthiModal'));
const ASURAModal = lazy(() => import('./ASURAModal'));
const LastResortModal = lazy(() => import('./LastResortModal'));
const NeuroBrainModal = lazy(() => import('./NeuroBrainModal'));
const SoulMenModal = lazy(() => import('./SoulMenModal'));
const UGVModal = lazy(() => import('./UGVModal'));
const CodeVaultModal = lazy(() => import('./CodeVaultModal'));

const projects = [
    {
        id: 'lastresort',
        title: 'LastResort',
        category: 'Autonomous Penetration-Testing Agent',
        impact: 'Closes the autonomous pentest loop — plan, execute in a live browser, verify by real DOM effect, update memory — without static payload lists.',
        description: 'Transitions a traditional scanner into an autonomous agent. LLM-driven planning (Gemini/OpenRouter) generates exploit payloads; Playwright executes and verifies them by real DOM/script execution rather than HTTP string-matching. A SessionJournal tracks action history and AXTree context for multi-step attacks.',
        tags: ['Go', 'LLM', 'Playwright', 'ConnectRPC', 'SQLite', 'Nuclei'],
        github: '#',
        image: lastresortImg,
        accentColor: '#FFB454',
        notes: [
            'Verifies vulnerabilities by real browser effect (DOM/script execution) instead of response string-matching.',
            'Maintains a SessionJournal (action history + AXTree) to execute multi-step attacks.',
        ],
    },
    {
        id: 'neurobrain',
        title: 'NeuroBrain',
        category: 'AI Creative Intelligence Platform',
        impact: 'Predicts visual fixations on marketing creatives and returns specific layout/CRO edits — not raw heatmaps.',
        description: 'Users upload marketing creatives; NeuroBrain predicts where viewers will look, maps on-creative text via OCR, and fuses CV attention data with a multimodal LLM to return actionable layout edits for conversion-rate optimization.',
        tags: ['Computer Vision', 'OCR', 'Gemini Vision', 'FastAPI', 'React'],
        github: '#',
        image: neurobrainImg,
        accentColor: '#7CFFB2',
        notes: [
            'Fuses CV fixation prediction with OCR text mapping so recommendations reference real on-creative elements.',
            'Frames model output as concrete layout edits for designers, not raw heatmaps.',
        ],
    },
    {
        id: 'soulmen',
        title: 'SoulMen',
        category: 'B2B Tender Readiness Platform',
        impact: 'Helps UAE subcontractors catch document gaps before client portal rejection with a Submission Readiness Score.',
        description: 'Automatically validates vendor-registration documents (Trade License, VAT, ISO, HSE, Bank Letter) against per-client tender requirements (DEWA, Emaar, Aldar, ADNOC). Flags missing/expired docs, entity-name mismatches, and outputs a "Ready / Not Ready" score.',
        tags: ['Document OCR', 'LLM', 'FastAPI', 'React', 'PostgreSQL'],
        github: '#',
        image: soulmenImg,
        accentColor: '#7CFFB2',
        notes: [
            'Encodes per-client tender requirement sets and validates documents for presence, expiry, and name matching.',
            'Produces a single readiness score + actionable gap list instead of a raw document dump.',
        ],
    },
    {
        id: 'codevault',
        title: 'CodeVault',
        category: 'Secure Deployment & Licensing',
        impact: 'Secure deployment and licensing infrastructure for script-based products.',
        description: 'Coordinating cloud build isolation, hardware-bound license checks, signed access tokens, and controlled artifact delivery in a single developer-focused pipeline. Built with FastAPI, PostgreSQL, Docker, and GCP.',
        tags: ['React', 'FastAPI', 'PostgreSQL', 'Docker', 'GCP', 'JWT'],
        link: 'https://codevault.parth7.me',
        github: 'https://github.com/ParthSalunkhe7052',
        image: codevaultImg,
        notes: [
            'Co-ordinates build isolation, license validation, and artifact delivery.',
            'Integrates HWID binding and offline lease signing to secure script assets.',
        ],
    },
    {
        id: 'asura',
        title: 'ASURA',
        category: 'Security Analysis Framework',
        impact: 'Reusable pre-deployment scanning workflow for security-first development, with an API/UI layer over raw scanner noise.',
        description: 'Internal security analysis framework combining Semgrep and Bandit static analysis with a reviewable API/UI workflow. Surfaces risky patterns, explains findings in developer terms, and supports iterative security-first habits before deployment.',
        tags: ['FastAPI', 'React', 'Semgrep', 'Bandit'],
        github: 'https://github.com/ParthSalunkhe7052/Asura-Security-Scan',
        image: asuraImg,
        notes: [
            'Combines scanner output with a reviewable API/UI flow — not raw CLI output.',
            'Frames findings around developer action instead of raw tool noise.',
        ],
    },
    {
        id: 'gitasaarthi',
        title: 'GitaSaarthi 2.0',
        category: 'RAG Response System',
        impact: 'Grounded conversational responses with practical retrieval latency — all 18 Bhagavad Gita discourses, live demo.',
        description: 'Contextual Bhagavad Gita response system using semantic retrieval and a RAG pipeline. Retrieves relevant source passages, grounds responses in context, and keeps inference latency practical for a conversational UI.',
        tags: ['React', 'Gemini', 'Python', 'Vector DB'],
        link: 'https://gitasaarthi.vercel.app/',
        github: '#',
        image: gitasaarthiMainImg,
        notes: [
            'Uses retrieval context to keep responses tied to source passages across all 18 discourses.',
            'Prioritizes usable response speed for real conversational flow.',
        ],
    },
    {
        id: 'ugv',
        title: 'UGV-DTU: IND AGNI',
        category: 'Hardware Engineering',
        impact: 'Hardware integration breadth across rover control, sensors, and obstacle handling.',
        description: 'Robotics project integrating rover hardware, sensor input, navigation logic, and obstacle detection. Represented India on the global stage in Cairo, Egypt.',
        tags: ['ROS', 'Lidar', 'Robotics'],
        github: '#',
        image: ugvRealImg,
        notes: [
            'Integrates hardware and navigation into one rover workflow.',
            'Recognized with Best Presentation at ICMTC (Cairo).',
        ],
    },
];

const Projects = () => {
    const navigate = useNavigate();
    const shouldReduceMotion = useReducedMotion();
    const [openModal, setOpenModal] = useState(null);
    const [isReady, setIsReady] = useState(false);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);
    const [isDragging, setIsDragging] = useState(false);

    const trackRef = useRef(null);
    const firstCardRef = useRef(null);
    const firstDupCardRef = useRef(null);
    const resumeTimeoutRef = useRef(null);
    const snapAnimationRef = useRef(null);
    const isDraggingRef = useRef(false);
    const dragStartOffset = useRef(0);

    const [stepWidth, setStepWidth] = useState(0);
    const [loopWidth, setLoopWidth] = useState(0);

    const tripleProjects = [...projects, ...projects, ...projects];

    const calculateWidths = useCallback(() => {
        if (firstCardRef.current && firstDupCardRef.current) {
            const distance = firstDupCardRef.current.offsetLeft - firstCardRef.current.offsetLeft;
            setLoopWidth(distance);
            setStepWidth(distance / projects.length);
        }
    }, []);

    useEffect(() => {
        calculateWidths();
        window.addEventListener('resize', calculateWidths);

        return () => {
            window.removeEventListener('resize', calculateWidths);
            if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
            if (snapAnimationRef.current) snapAnimationRef.current.stop();
        };
    }, [calculateWidths]);

    const x = useMotionValue(0);

    useEffect(() => {
        if (loopWidth > 0) {
            x.set(-loopWidth);
            setIsReady(true);
        }
    }, [loopWidth, x]);

    useAnimationFrame((time, delta) => {
        if (!isReady || isDragging || !isAutoScrolling || shouldReduceMotion) return;

        const currentX = x.get();
        const speed = 0.04; // Pixels per millisecond (~24px/sec)
        const nextX = currentX - speed * delta;

        if (nextX < -2 * loopWidth) {
            x.set(nextX + loopWidth);
        } else {
            x.set(nextX);
        }
    });

    const wrapPosition = (currentIndex) => {
        const n = projects.length;
        if (currentIndex >= 2 * n) {
            const wrappedIndex = currentIndex - n;
            x.set(-wrappedIndex * stepWidth);
        } else if (currentIndex < n) {
            const wrappedIndex = currentIndex + n;
            x.set(-wrappedIndex * stepWidth);
        }
    };

    const handleDragStart = () => {
        setIsDragging(true);
        setIsAutoScrolling(false);
        if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
        if (snapAnimationRef.current) snapAnimationRef.current.stop();
        isDraggingRef.current = false;
        dragStartOffset.current = x.get();
    };

    const handleDragEnd = (event, info) => {
        setIsDragging(false);

        const dragDistance = Math.abs(x.get() - dragStartOffset.current);
        if (dragDistance > 5) {
            isDraggingRef.current = true;
        }

        const velocity = info.velocity.x;
        const currentX = x.get();
        const projectedX = currentX + velocity * 0.1;

        let targetIndex = Math.round(-projectedX / stepWidth);
        const maxIndex = 3 * projects.length - 1;
        targetIndex = Math.max(0, Math.min(targetIndex, maxIndex));

        const targetX = -targetIndex * stepWidth;

        snapAnimationRef.current = animate(x, targetX, {
            type: 'spring',
            stiffness: 150,
            damping: 20,
            restDelta: 0.5,
            onComplete: () => {
                wrapPosition(targetIndex);
                resumeTimeoutRef.current = setTimeout(() => {
                    setIsAutoScrolling(true);
                }, 2000);
            },
        });
    };

    const handlePrev = () => {
        setIsAutoScrolling(false);
        if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
        if (snapAnimationRef.current) snapAnimationRef.current.stop();

        const currentIndex = Math.round(-x.get() / stepWidth);
        const targetIndex = currentIndex - 1;
        const targetX = -targetIndex * stepWidth;

        snapAnimationRef.current = animate(x, targetX, {
            type: 'spring',
            stiffness: 150,
            damping: 20,
            restDelta: 0.5,
            onComplete: () => {
                wrapPosition(targetIndex);
                resumeTimeoutRef.current = setTimeout(() => {
                    setIsAutoScrolling(true);
                }, 2000);
            },
        });
    };

    const handleNext = () => {
        setIsAutoScrolling(false);
        if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
        if (snapAnimationRef.current) snapAnimationRef.current.stop();

        const currentIndex = Math.round(-x.get() / stepWidth);
        const targetIndex = currentIndex + 1;
        const targetX = -targetIndex * stepWidth;

        snapAnimationRef.current = animate(x, targetX, {
            type: 'spring',
            stiffness: 150,
            damping: 20,
            restDelta: 0.5,
            onComplete: () => {
                wrapPosition(targetIndex);
                resumeTimeoutRef.current = setTimeout(() => {
                    setIsAutoScrolling(true);
                }, 2000);
            },
        });
    };

    const handleCardClick = (projectId, hasModal) => {
        if (isDraggingRef.current) {
            isDraggingRef.current = false;
            return;
        }

        if (hasModal) {
            setOpenModal(projectId);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', damping: 15, stiffness: 100 },
        },
    };

    const MODAL_IDS = ['lastresort', 'neurobrain', 'soulmen', 'asura', 'gitasaarthi', 'ugv', 'codevault'];

    return (
        <section id="projects" className="py-20 md:py-28 w-full relative z-10 overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div>
                            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">03 // Implementations</span>
                            <h2 className="text-3xl md:text-4xl font-bold">Selected Systems</h2>
                            <p className="text-muted mt-3 max-w-2xl">
                                Serious SaaS, security, AI, visualization, and robotics projects with proof-oriented notes.
                            </p>
                        </div>
                        {/* Navigation Buttons */}
                        <div className="flex gap-3 self-start md:self-end">
                            <button
                                type="button"
                                onClick={handlePrev}
                                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text hover:text-primary hover:border-primary/50 transition-colors bg-surface hover:bg-surfaceHover"
                                aria-label="Previous project"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                type="button"
                                onClick={handleNext}
                                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text hover:text-primary hover:border-primary/50 transition-colors bg-surface hover:bg-surfaceHover"
                                aria-label="Next project"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="relative w-full py-4 select-none">
                <div className="overflow-hidden w-full carousel-mask">
                    <motion.div
                        ref={trackRef}
                        drag="x"
                        style={{ x, opacity: isReady ? 1 : 0 }}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        className="flex gap-6 items-stretch w-max cursor-grab active:cursor-grabbing pb-12 pt-4 px-[max(1rem,calc((100vw-1024px)/2))]"
                    >
                        {tripleProjects.map((project, index) => {
                            const isFirstCard = index === 0;
                            const isFirstDupCard = index === projects.length;
                            const hasModal = MODAL_IDS.includes(project.id);

                            return (
                                <motion.article
                                    key={`${project.id}-${index}`}
                                    ref={isFirstCard ? firstCardRef : isFirstDupCard ? firstDupCardRef : null}
                                    onClick={() => handleCardClick(project.id, hasModal)}
                                    whileHover={{ scale: shouldReduceMotion ? 1 : 1.01 }}
                                    className={`group border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 bg-surface flex flex-col w-[85vw] sm:w-[450px] md:w-[480px] shrink-0 ${hasModal ? 'cursor-pointer' : 'cursor-default'}`}
                                >
                                    <div className="w-full h-52 overflow-hidden bg-background relative border-b border-border/20">
                                        {project.image ? (
                                            <img
                                                src={project.image}
                                                width={700}
                                                height={360}
                                                alt={`${project.title} deployed project screenshot`}
                                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out pointer-events-none"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950 text-zinc-500 relative">
                                                <span className="font-mono text-sm font-semibold tracking-wider text-primary">{project.title}</span>
                                                <span className="text-[10px] font-mono text-muted mt-1">screenshot coming</span>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="mb-3">
                                            <h3 className="text-2xl font-bold text-text group-hover:text-primary transition-colors duration-200">
                                                {project.title}
                                            </h3>
                                            <p className="text-xs font-mono text-primary uppercase tracking-wide mt-1">
                                                {project.category}
                                            </p>
                                        </div>

                                        <p className="text-sm text-text mb-3 leading-relaxed">
                                            {project.impact}
                                        </p>

                                        <p className="text-sm text-muted mb-5 leading-relaxed flex-grow">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-5">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="text-xs font-mono text-muted px-2 py-1 border border-border rounded bg-background/50">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="border-t border-border pt-4 mb-5">
                                            <h4 className="text-xs font-mono text-muted uppercase tracking-wide mb-2">Engineering notes</h4>
                                            <ul className="space-y-1.5">
                                                {project.notes.map((note) => (
                                                    <li key={note} className="text-xs text-muted leading-relaxed">
                                                        - {note}
                                                     </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex flex-wrap gap-3 mt-auto">
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-background text-sm font-bold hover:bg-primary/90 transition-colors"
                                                >
                                                    Live Demo
                                                    <ArrowUpRight size={15} />
                                                </a>
                                            )}
                                            {project.id === 'codevault' && (
                                                <a
                                                    href="/codevault"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-bold text-text hover:border-primary transition-colors"
                                                >
                                                    Architecture
                                                    <ArrowUpRight size={15} />
                                                </a>
                                            )}
                                            {project.github !== '#' ? (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-bold text-text hover:border-primary transition-colors"
                                                >
                                                    <Github size={15} />
                                                    GitHub
                                                </a>
                                            ) : (
                                                <span
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border/50 text-sm font-mono text-muted cursor-default bg-background/20"
                                                >
                                                    <Lock size={12} className="shrink-0" />
                                                    Private repo
                                                </span>
                                            )}
                                            {hasModal && (
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setOpenModal(project.id);
                                                    }}
                                                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-bold text-text hover:border-primary transition-colors ml-auto"
                                                >
                                                    Details
                                                    <ArrowUpRight size={15} />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </motion.div>
                </div>
            </div>

            <Suspense fallback={null}>
                {openModal === 'gitasaarthi' && <GitaSaarthiModal isOpen onClose={() => setOpenModal(null)} />}
                {openModal === 'asura' && <ASURAModal isOpen onClose={() => setOpenModal(null)} />}
                {openModal === 'lastresort' && <LastResortModal isOpen onClose={() => setOpenModal(null)} />}
                {openModal === 'neurobrain' && <NeuroBrainModal isOpen onClose={() => setOpenModal(null)} />}
                {openModal === 'soulmen' && <SoulMenModal isOpen onClose={() => setOpenModal(null)} />}
                {openModal === 'ugv' && <UGVModal isOpen onClose={() => setOpenModal(null)} />}
                {openModal === 'codevault' && <CodeVaultModal isOpen onClose={() => setOpenModal(null)} />}
            </Suspense>
        </section>
    );
};

export default Projects;


