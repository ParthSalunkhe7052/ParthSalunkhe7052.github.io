import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CodeVaultHighlight from './components/CodeVaultHighlight';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
    return (
        <div className="relative min-h-screen font-sans text-text">
            <BackgroundAnimation />
            <Navbar />
            <main>
                <Hero />
                <CodeVaultHighlight />
                <About />
                <Projects />
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}

export default App;
