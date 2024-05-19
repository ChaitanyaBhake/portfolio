import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Projects from './components/ProjectsSection/Projects';
import TechnologiesSection from './components/TechnologiesSection/TechnologiesSection';
import AdditionalSkillsSection from './components/AddtionalSkillsSection/AdditionalSkillsSection';
import Footer from './components/Footer/Footer';
import AboutMeSection from './components/AboutMeSection/AboutMeSection';
import ArrowDown from './assets/arrow-down.svg';

function App() {
    const [scrolling, setScrolling] = useState(false);

     // Function to handle page scroll
     const onPageScroll = () => {
        if (window.scrollY > 200) {
            setScrolling(true); // If page is scrolled down more than 200px, set scrolling state to true
        } else {
            setScrolling(false); // Otherwise, set scrolling state to false
        }
    };

    // Effect hook to add event listener for scroll event when component mounts
    useEffect(() => {
        window.addEventListener('scroll', onPageScroll);
        
        return () => {
            window.removeEventListener('scroll', onPageScroll);
        };
    }, []); 

    return (
        <div className="max-w-8xl  m-auto relative">
            {/* Navbar */}
            <Navbar scrolling={scrolling} />

            <main className="relative mt-28">

                {/* Hero section */}
                <HeroSection />

                {/* Projects section */}
                <Projects />

                {/* Technologies section */}
                <TechnologiesSection />

                {/* Additional skills/tools section */}
                <AdditionalSkillsSection />

                {/* About Me Section */}
                <AboutMeSection />
            </main>
            {/* Footer Section */}
            <Footer />

            {/* Button to scroll to the top of the page */}
            {scrolling && (
                <button
                    className="fixed block lg:right-8 bottom-0 w-24"
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={ArrowDown} />
                </button>
            )}
        </div>
    );
}

export default App;
