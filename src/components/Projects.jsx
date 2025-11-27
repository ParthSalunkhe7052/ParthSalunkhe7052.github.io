import React from 'react';
import { Github } from 'lucide-react';
import './Projects.css';
import asuraImg from '../assets/asura.png';
import ddosImg from '../assets/ddos.png';
import clashImg from '../assets/clash.png';

const Projects = () => {
    const projects = [
        {
            id: 'asura',
            title: 'ASURA - AI SecureLab',
            description: 'Privacy-first security testing tool with AI-powered vulnerability analysis. Integrates multiple scanners like Bandit and Semgrep with local LLMs for explanation.',
            tags: ['FastAPI', 'React', 'Python', 'AI'],
            link: 'https://github.com/ParthSalunkhe7052/Asura-Security-Scan',
            image: asuraImg
        },
        {
            id: 'ddos',
            title: 'DDoS Globe Visualizer',
            description: 'Real-time 3D threat intelligence visualization platform. Displays live attacks on an interactive globe using WebSocket and Three.js.',
            tags: ['Three.js', 'React', 'WebSocket', 'FastAPI'],
            link: 'https://github.com/ParthSalunkhe7052/ddos-globe-visualizer',
            image: ddosImg
        },
        {
            id: 'clash',
            title: 'Clash Emote Detector',
            description: 'Real-time gesture recognition system using computer vision. Detects hand gestures to trigger Clash Royale emotes in real-time.',
            tags: ['PyTorch', 'OpenCV', 'MediaPipe', 'Flask'],
            link: 'https://github.com/ParthSalunkhe7052/Clash-Emote-Detector',
            image: clashImg
        },
        {
            id: 'ugv',
            title: 'UGV Tech Team - Autonomous Ground Vehicle',
            description: 'Built a 6-wheel rover using Jetson Nano, Lidar, and sensors. Integrated ROS-based navigation, SLAM mapping, and obstacle detection. Awarded Best Presentation at ICMTC, Cairo.',
            tags: ['ROS', 'Python', 'Jetson Nano', 'Lidar', 'SLAM'],
            link: '#',
            image: null
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">Selected Work</h2>

            <div className="projects-list">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        {project.image && (
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                            </div>
                        )}
                        <div className="project-info" style={{ width: project.image ? undefined : '100%' }}>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                <Github size={18} />
                                <span>View Source</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
