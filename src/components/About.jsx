import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <h2 className="section-title">About Me</h2>

            <div className="about-content">
                <div className="about-bio">
                    <p>
                        I'm a <strong>Computer Science Engineering student</strong> at Delhi Technological University (Class of 2027).
                        I specialize in <strong>Full-Stack Development</strong>, <strong>Machine Learning</strong>, and <strong>Cybersecurity</strong>.
                    </p>
                    <p>
                        I am actively seeking roles in <strong>Software Engineering</strong>, <strong>Computer Vision</strong>, or <strong>Security Analysis</strong> in Dubai or Delhi.
                        I have a passion for automation, real-time systems, and building secure, scalable applications.
                    </p>
                    <div className="bio-meta">
                        <span>📍 Open to roles in Dubai, Delhi, Pune, Mumbai</span>
                        <span>🗣️ English (Fluent), Hindi (Native), Marathi (Native)</span>
                    </div>
                </div>

                <div className="about-grid">
                    {/* Experience Column */}
                    <div className="grid-column">
                        <h3 className="column-title">Experience</h3>

                        <div className="timeline-item">
                            <div className="timeline-header">
                                <h4>Alfazance</h4>
                                <span className="timeline-date">May – June 2025</span>
                            </div>
                            <span className="timeline-role">Intern | Dubai, UAE</span>
                            <ul className="timeline-list">
                                <li>Built Microsoft Power Automate workflows to reduce repetitive manual tasks.</li>
                                <li>Integrated large client datasets into Elasticsearch for analytics.</li>
                                <li>Worked on Dynamics 365 automation triggers and dashboards.</li>
                            </ul>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-header">
                                <h4>TLS IT Solutions</h4>
                                <span className="timeline-date">June – July 2022</span>
                            </div>
                            <span className="timeline-role">Intern | Dubai, UAE</span>
                            <ul className="timeline-list">
                                <li>Assisted in large-scale server setup and configuration.</li>
                                <li>Resolved client-side network and infrastructure issues.</li>
                                <li>Supported documentation for server maintenance procedures.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Education & Skills Column */}
                    <div className="grid-column">
                        <h3 className="column-title">Education</h3>
                        <div className="education-item">
                            <h4>Delhi Technological University (DTU)</h4>
                            <p>B.Tech in Computer Engineering | 2023 – 2027</p>
                        </div>
                        <div className="education-item">
                            <h4>Our Own High School, Dubai</h4>
                            <p>High School Diploma | 2023</p>
                        </div>

                        <h3 className="column-title mt-large">Technical Skills</h3>
                        <div className="skills-category">
                            <strong>Programming:</strong> C++, Python, JavaScript (React)
                        </div>
                        <div className="skills-category">
                            <strong>Web & Backend:</strong> React, Vite, FastAPI, REST APIs, WebSockets
                        </div>
                        <div className="skills-category">
                            <strong>AI & ML:</strong> PyTorch, TensorFlow, OpenCV, MediaPipe
                        </div>
                        <div className="skills-category">
                            <strong>Cybersecurity:</strong> Threat Intel APIs, DShield, Attack Visualization
                        </div>
                        <div className="skills-category">
                            <strong>Tools:</strong> Git, Docker, Linux, Elasticsearch, Proxmox
                        </div>
                    </div>
                </div>

                <div className="achievements-section">
                    <h3 className="column-title">Achievements & Certifications</h3>
                    <ul className="achievements-list">
                        <li><strong>Google Cybersecurity Certificate</strong> (2025)</li>
                        <li><strong>1st Place</strong> – Emirates Aviation Rocket-Building Competition</li>
                        <li><strong>Top 5 & Best Presentation</strong> – ICMTC (UGVC Category, Cairo, Egypt) for UGV Tech Team</li>
                        <li><strong>Top 5</strong> – DTU Hackathon 2024</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
