import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CodeVaultHighlight from './components/CodeVaultHighlight';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
    return (
        <div className="bg-background min-h-screen font-sans selection:bg-primary/30 selection:text-white">
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
