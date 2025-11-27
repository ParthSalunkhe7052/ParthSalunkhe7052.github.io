import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';


function App() {
    return (
        <div className="app-container">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
