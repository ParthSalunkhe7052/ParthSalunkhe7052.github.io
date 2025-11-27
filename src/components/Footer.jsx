import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer-content">
                <h2 className="footer-title">Let's Connect</h2>
                <p className="footer-text">
                    Feel free to reach out for collaborations or just a friendly hello.
                </p>
                <a href="mailto:contact@parth7.me" className="footer-email">
                    contact@parth7.me
                </a>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Parth Salunkhe</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
