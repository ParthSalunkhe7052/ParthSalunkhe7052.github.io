import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    Hi, I'm Parth.
                </h1>
                <p className="hero-bio">
                    I'm a Computer Science Engineering student passionate about
                    <span className="highlight"> Cybersecurity</span>,
                    <span className="highlight"> AI</span>, and building useful things.
                </p>

                <div className="hero-links">
                    <a href="https://github.com/ParthSalunkhe7052" target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/parth-salunkhe-029a491a4" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:contact@parth7.me">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
