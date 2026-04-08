import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const BackgroundAnimation = () => {
    const [init, setInit] = useState(false);
    const [themeColors, setThemeColors] = useState({
        particles: ["#FDE047", "#FACC15", "#EAB308", "#FEF08A"], // Yellow shades
        links: "#FEF08A",
    });

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const handleScroll = useCallback(() => {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > 500) {
            // Scroll past Hero: Transition to warm orange/amber
            setThemeColors((prev) => {
                if (prev.links === "#FB923C") return prev; // Avoid unnecessary state updates
                return {
                    particles: ["#F97316", "#EA580C", "#FB923C", "#FDBA74"], 
                    links: "#FB923C",
                };
            });
        } else {
            // Top of page: Yellow
            setThemeColors((prev) => {
                if (prev.links === "#FEF08A") return prev; // Avoid unnecessary state updates
                return {
                    particles: ["#FDE047", "#FACC15", "#EAB308", "#FEF08A"], 
                    links: "#FEF08A",
                };
            });
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Memoize the options so tsparticles doesn't forcefully re-render the whole canvas on state tick
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    const particleOptions = useMemo(() => ({
        fullScreen: { enable: true, zIndex: -10 },
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 60, // Capped at 60 for better performance
        interactivity: {
            events: {
                onClick: { enable: !prefersReducedMotion, mode: "push" },
                onHover: { enable: !prefersReducedMotion && !isMobile, mode: "repulse" }, // Disable repulse on mobile
                resize: true,
            },
            modes: {
                push: { quantity: 3 }, // Reduced quantity
                repulse: {
                    distance: 150,
                    duration: 0.8,
                    factor: 2,
                    speed: 1,
                    easing: "ease-out-quad",
                },
            },
        },
        particles: {
            color: {
                value: themeColors.particles, 
            },
            links: {
                color: themeColors.links, 
                distance: 90,
                enable: !prefersReducedMotion,
                opacity: 0.3, // Lower opacity looks slightly cleaner
                width: 1,
            },
            move: {
                direction: "none",
                enable: !prefersReducedMotion, // Stop motion if requested
                outModes: { default: "bounce" },
                random: true,
                speed: 1, // Slower base speed
                straight: false,
            },
            number: {
                density: { enable: true, area: 800 },
                value: isMobile ? 30 : 60, // Less particles on mobile
                limit: { value: isMobile ? 60 : 100, mode: "delete" }
            },
            opacity: {
                value: { min: 0.1, max: 0.5 },
                animation: { enable: !prefersReducedMotion, speed: 0.5, sync: false }
            },
            shape: {
                type: "triangle",
            },
            size: {
                value: { min: 2, max: 6 },
                animation: { enable: !prefersReducedMotion, speed: 1.5, sync: false }
            },
        },
        detectRetina: true,
    }), [themeColors, isMobile, prefersReducedMotion]);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            className="fixed inset-0 -z-10 transition-colors duration-1000"
            options={particleOptions}
        />
    );
};

export default BackgroundAnimation;
