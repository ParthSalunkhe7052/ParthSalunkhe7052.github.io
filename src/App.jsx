import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CodeVaultHighlight from './components/CodeVaultHighlight';
import About from './components/About';
import Projects from './components/Projects';
import ProofStrip from './components/ProofStrip';
import SkillsMatrix from './components/SkillsMatrix';
import ExperimentalBuilds from './components/ExperimentalBuilds';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CmdK from './components/CmdK';
import Fun from './components/Fun';

import CodeVaultDocs from './components/CodeVaultDocs';

import { GooeyDemo } from './components/ui/demo';

function Home() {
    return (
        <main>
            <Hero />
            <ProofStrip />
            <About />
            <Projects />
            <SkillsMatrix />
            <ExperimentalBuilds />
        </main>
    );
}

function App() {
    return (
        <div className="relative min-h-screen font-sans text-text">
            <GooeyDemo />
            <div className="relative z-10">
                <CmdK />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/fun" element={<Fun />} />
                    <Route path="/codevault" element={<CodeVaultDocs />} />
                </Routes>
                <Footer />
                <BackToTop />
            </div>
        </div>
    );
}

export default App;
