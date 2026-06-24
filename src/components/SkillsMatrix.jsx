import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Terminal, Activity } from 'lucide-react';

const groups = [
    {
        id: 'security',
        title: 'Security',
        skills: ['Semgrep', 'Bandit', 'Secure Licensing', 'HWID Binding', 'JWT/OAuth Signing', 'Threat Modeling'],
        projects: ['lastresort', 'asura', 'codevault'],
    },
    {
        id: 'cloud-devops',
        title: 'Cloud & DevOps',
        skills: ['GCP', 'Vercel', 'Docker', 'GitHub Actions CI/CD', 'Containerized Builds'],
        projects: ['codevault'],
    },
    {
        id: 'ai-tooling',
        title: 'AI Tooling',
        skills: ['RAG Pipelines', 'Gemini/OpenAI API', 'Vector Databases', 'Semantic Search', 'Agentic Workflows'],
        projects: ['lastresort', 'neurobrain', 'gitasaarthi', 'ugv'],
    },
    {
        id: 'full-stack',
        title: 'Full-Stack',
        skills: ['React / Next.js', 'FastAPI / Node.js', 'PostgreSQL / SQLite', 'ConnectRPC / REST', 'Auth & Token Flows'],
        projects: ['soulmen', 'codevault', 'asura', 'gitasaarthi'],
    },
    {
        id: 'infrastructure',
        title: 'Infrastructure',
        skills: ['Build Workers', 'Artifact Delivery', 'Rate Limiting', 'Webhooks', 'Background Queues'],
        projects: ['codevault'],
    },
    {
        id: 'deployment',
        title: 'Deployment',
        skills: ['Cloud Hosting', 'SSL & DNS Setup', 'Production Rollouts', 'System Diagnostics'],
        projects: ['codevault', 'soulmen'],
    },
    {
        id: 'dev-workflow',
        title: 'Developer Workflow',
        skills: ['Git/Version Control', 'API Integration', 'Rapid Prototyping', 'Automated Testing', 'Agile & QA'],
        projects: ['asura', 'codevault', 'ugv'],
    },
];

const projectsData = [
    { id: 'lastresort', title: 'LastResort', status: 'online', color: '#FFB454', github: '#' },
    { id: 'neurobrain', title: 'NeuroBrain', status: 'online', color: '#7CFFB2', github: '#' },
    { id: 'soulmen', title: 'SoulMen', status: 'online', color: '#7CFFB2', github: '#' },
    { id: 'codevault', title: 'CodeVault', status: 'online', color: '#7CFFB2', github: 'https://github.com/ParthSalunkhe7052' },
    { id: 'asura', title: 'ASURA', status: 'online', color: '#7CFFB2', github: 'https://github.com/ParthSalunkhe7052/Asura-Security-Scan' },
    { id: 'gitasaarthi', title: 'GitaSaarthi 2.0', status: 'online', color: '#7CFFB2', github: '#' },
    { id: 'ugv', title: 'UGV Team', status: 'online', color: '#FFB454', github: '#' },
];

const SkillsMatrix = () => {
    // Interactive states
    const [activeCategory, setActiveCategory] = useState('security');
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [hoveredProject, setHoveredProject] = useState(null);

    // SVG coordinates mapping
    const [coords, setCoords] = useState(null);
    const containerRef = useRef(null);
    const categoryRefs = useRef({});
    const projectRefs = useRef({});

    // Recalculate coordinates for SVG path drawing
    const updateCoords = useCallback(() => {
        if (!containerRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const newCoords = { categories: {}, projects: {} };

        // Get coordinates for categories (center-right edge)
        groups.forEach((group) => {
            const el = categoryRefs.current[group.id];
            if (el) {
                const rect = el.getBoundingClientRect();
                newCoords.categories[group.id] = {
                    x: rect.right - containerRect.left,
                    y: rect.top + rect.height / 2 - containerRect.top,
                };
            }
        });

        // Get coordinates for projects (center-left edge)
        projectsData.forEach((proj) => {
            const el = projectRefs.current[proj.id];
            if (el) {
                const rect = el.getBoundingClientRect();
                newCoords.projects[proj.id] = {
                    x: rect.left - containerRect.left,
                    y: rect.top + rect.height / 2 - containerRect.top,
                };
            }
        });

        setCoords(newCoords);
    }, []);

    // Set up resize observer and scroll listener to update SVG lines dynamically
    useEffect(() => {
        updateCoords();
        // Delay update slightly to allow layout calculations to settle
        const timer = setTimeout(updateCoords, 100);

        window.addEventListener('resize', updateCoords);
        window.addEventListener('scroll', updateCoords);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', updateCoords);
            window.removeEventListener('scroll', updateCoords);
        };
    }, [updateCoords, activeCategory]);

    // Determine current highlighted state
    const currentCategory = hoveredCategory || (!hoveredProject ? activeCategory : null);
    
    // Bidirectional lookup: find categories linked to the hovered project
    const linkedCategories = hoveredProject
        ? groups.filter((g) => g.projects.includes(hoveredProject)).map((g) => g.id)
        : [];

    const handleProjectClick = (projectId) => {
        const el = document.getElementById('projects');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="skills" className="section-container relative overflow-visible">
            {/* Header */}
            <div className="mb-12">
                <span className="text-primary font-mono text-xs tracking-wider uppercase mb-2 block">
                    04 // System Architecture
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Skills Graph</h2>
                <p className="text-muted text-sm mt-2 max-w-xl">
                    Hover or click skill categories on the left to see their application across core projects on the right.
                </p>
            </div>

            {/* Main Interactive Workspace */}
            <div
                ref={containerRef}
                className="relative grid lg:grid-cols-12 gap-8 items-start select-none"
            >
                {/* SVG Connections Overlay (Only visible on large screens) */}
                <div className="absolute inset-0 hidden lg:block pointer-events-none z-0">
                    {coords && (
                        <svg className="w-full h-full" style={{ overflow: 'visible' }}>
                            {/* Base Layer: Draw all connections faintly */}
                            {groups.map((group) =>
                                group.projects.map((projId) => {
                                    const cat = coords.categories[group.id];
                                    const proj = coords.projects[projId];
                                    if (!cat || !proj) return null;

                                    const path = `M ${cat.x} ${cat.y} C ${(cat.x + proj.x) / 2} ${cat.y}, ${(cat.x + proj.x) / 2} ${proj.y}, ${proj.x} ${proj.y}`;

                                    return (
                                        <path
                                            key={`base-${group.id}-${projId}`}
                                            d={path}
                                            fill="none"
                                            stroke="#1f1f1f"
                                            strokeWidth="1.5"
                                        />
                                    );
                                })
                            )}

                            {/* Active Layer: Highlight paths that match current active/hovered state */}
                            {groups.map((group) =>
                                group.projects.map((projId) => {
                                    const cat = coords.categories[group.id];
                                    const proj = coords.projects[projId];
                                    if (!cat || !proj) return null;

                                    // Determine if this path should be highlighted
                                    let isHighlighted = false;
                                    if (hoveredProject) {
                                        isHighlighted = hoveredProject === projId && linkedCategories.includes(group.id);
                                    } else {
                                        isHighlighted = currentCategory === group.id;
                                    }

                                    if (!isHighlighted) return null;

                                    const path = `M ${cat.x} ${cat.y} C ${(cat.x + proj.x) / 2} ${cat.y}, ${(cat.x + proj.x) / 2} ${proj.y}, ${proj.x} ${proj.y}`;
                                    const strokeColor = group.id === 'security' || projId === 'lastresort' ? '#FFB454' : '#7CFFB2';

                                    return (
                                        <g key={`active-${group.id}-${projId}`}>
                                            {/* Glow path */}
                                            <path
                                                d={path}
                                                fill="none"
                                                stroke={strokeColor}
                                                strokeWidth="4"
                                                strokeOpacity="0.25"
                                                className="blur-[2px]"
                                            />
                                            {/* Main path */}
                                            <path
                                                d={path}
                                                fill="none"
                                                stroke={strokeColor}
                                                strokeWidth="1.5"
                                                strokeOpacity="0.9"
                                            />
                                            {/* Pulse overlay */}
                                            <motion.path
                                                d={path}
                                                fill="none"
                                                stroke={strokeColor}
                                                strokeWidth="2.5"
                                                initial={{ strokeDasharray: "15 150", strokeDashoffset: 0 }}
                                                animate={{ strokeDashoffset: -165 }}
                                                transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                                            />
                                        </g>
                                    );
                                })
                            )}
                        </svg>
                    )}
                </div>

                {/* Left Panel: Skill Categories (Grid col span 5) */}
                <div className="lg:col-span-5 space-y-3 z-10">
                    <div className="text-[10px] font-mono text-muted uppercase tracking-wider mb-2 px-2 flex items-center gap-1.5">
                        <Terminal size={10} className="text-primary" /> System Controls
                    </div>
                    {groups.map((group, index) => {
                        const isHovered = hoveredCategory === group.id;
                        const isActive = activeCategory === group.id;
                        const isHighlightedByProject = hoveredProject && linkedCategories.includes(group.id);
                        
                        const displayActive = isActive || isHovered || isHighlightedByProject;

                        return (
                            <div
                                key={group.id}
                                ref={(el) => (categoryRefs.current[group.id] = el)}
                                className={`border rounded-lg p-3 cursor-pointer transition-all duration-300 relative overflow-hidden ${
                                    displayActive
                                        ? 'border-primary/50 bg-[#0F1417]/90 shadow-[0_0_15px_rgba(124,255,178,0.03)]'
                                        : 'border-border bg-surface/40 hover:border-border/80'
                                }`}
                                onClick={() => setActiveCategory(group.id)}
                                onMouseEnter={() => setHoveredCategory(group.id)}
                                onMouseLeave={() => setHoveredCategory(null)}
                            >
                                {/* Left indicator */}
                                {displayActive && (
                                    <motion.div
                                        layoutId="categoryIndicator"
                                        className={`absolute left-0 top-0 bottom-0 w-1 ${
                                            group.id === 'security' ? 'bg-[#FFB454]' : 'bg-primary'
                                        }`}
                                    />
                                )}

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="font-mono text-xs text-muted">
                                            0{index + 1}
                                        </span>
                                        <span className={`font-semibold tracking-tight text-sm ${displayActive ? 'text-text' : 'text-text/70'}`}>
                                            {group.title}
                                        </span>
                                    </div>
                                    <span className="font-mono text-xs text-muted/60">
                                        [{group.projects.length} sys]
                                    </span>
                                </div>

                                {/* Skills tag list under active category (collapsible/visible directly on mobile) */}
                                <AnimatePresence>
                                    {displayActive && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="flex flex-wrap gap-1.5"
                                        >
                                            {group.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className={`text-[10px] font-mono px-2 py-0.5 border rounded ${
                                                        group.id === 'security'
                                                            ? 'border-[#FFB454]/20 bg-[#FFB454]/5 text-[#FFB454]'
                                                            : 'border-primary/20 bg-primary/5 text-primary'
                                                    }`}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                {/* Middle Grid Spacer (Col span 2) */}
                <div className="hidden lg:block lg:col-span-2 h-full" />

                {/* Right Panel: Project Nodes (Grid col span 5) */}
                <div className="lg:col-span-5 space-y-3 z-10">
                    <div className="text-[10px] font-mono text-muted uppercase tracking-wider mb-2 px-2 flex items-center gap-1.5">
                        <Activity size={10} className="text-[#FFB454]" /> Target Implementations
                    </div>
                    {projectsData.map((proj) => {
                        const isHovered = hoveredProject === proj.id;
                        
                        // Check if this project is linked to currently highlighted category
                        let isLinkedToActive = false;
                        if (hoveredProject) {
                            isLinkedToActive = hoveredProject === proj.id;
                        } else if (currentCategory) {
                            const activeGroup = groups.find((g) => g.id === currentCategory);
                            isLinkedToActive = activeGroup?.projects.includes(proj.id);
                        }

                        const displayActive = isHovered || isLinkedToActive;

                        return (
                            <div
                                key={proj.id}
                                ref={(el) => (projectRefs.current[proj.id] = el)}
                                className={`border rounded-lg p-3 transition-all duration-300 relative flex items-center justify-between ${
                                    displayActive
                                        ? 'border-primary/50 bg-[#0F1417]/90 shadow-[0_0_15px_rgba(124,255,178,0.03)]'
                                        : 'border-border bg-surface/40 hover:border-border/80'
                                }`}
                                onMouseEnter={() => setHoveredProject(proj.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                <div 
                                    className="flex items-center gap-3 cursor-pointer flex-1"
                                    onClick={() => handleProjectClick(proj.id)}
                                >
                                    {/* Simulated Pulse Status Light */}
                                    <div className="relative flex h-2 w-2">
                                        {displayActive && (
                                            <span 
                                                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                                                style={{ backgroundColor: proj.color }}
                                            />
                                        )}
                                        <span 
                                            className="relative inline-flex rounded-full h-2 w-2"
                                            style={{ backgroundColor: displayActive ? proj.color : '#2e2e2e' }}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className={`font-semibold text-sm ${displayActive ? 'text-text' : 'text-text/70'}`}>
                                            {proj.title}
                                        </span>
                                        <span className="text-[10px] font-mono text-muted/60">
                                            sys_node::{proj.id}.service
                                        </span>
                                    </div>
                                </div>

                                {/* External Links */}
                                <div className="flex items-center gap-2">
                                    {proj.github !== '#' && (
                                        <a
                                            href={proj.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-1.5 hover:bg-white/5 rounded text-muted hover:text-text transition-colors"
                                            title="View Github"
                                        >
                                            <Github size={13} />
                                        </a>
                                    )}
                                    <button
                                        onClick={() => handleProjectClick(proj.id)}
                                        className="p-1.5 hover:bg-white/5 rounded text-muted hover:text-primary transition-colors"
                                        title="Jump to Details"
                                    >
                                        <ExternalLink size={13} />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SkillsMatrix;
