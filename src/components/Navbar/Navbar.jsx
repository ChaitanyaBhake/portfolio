import React from 'react';
import LinkedIn from '../../assets/linkedin.svg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ scrolling }) => {

    // Using useGSAP hook to initialize GSAP animations
    useGSAP(() => {
        gsap.from('.rightNav', {
            duration: 2,
            x: '100%',
            opacity: 0,
            ease: 'power3.out',
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.rightNav',
                start: 'top 30%', 
                toggleActions: 'play none none none', 
            },
        });

        gsap.from('.portfolio', {
            duration: 2,
            y: '100%',
            opacity: 0,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.portfolio',
                start: 'top 30%',
                toggleActions: 'play none none none',
            },
        });
    }, []);

    return (
        <nav
            className={`${
                scrolling ? 'border-b border-gray-900' : ''
            }  fixed left-0 right-0 top-0 z-20`}
            id="home"
        >
            <div className="container m-auto px-4 py-6 max-w-8xl  bg-black">
                <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
                    <div className="portfolio">
                        <h1 className="font-bold text-2xl">
                            <span className="portfolio">C</span>
                            <span className="portfolio">h</span>
                            <span className="portfolio">a</span>
                            <span className="portfolio">i</span>
                            <span className="portfolio">t</span>
                            <span className="portfolio">a</span>
                            <span className="portfolio">n</span>
                            <span className="portfolio">y</span>
                            <span className="portfolio">'</span>
                            <span className="portfolio">s</span>
                            <span className="portfolio">&nbsp;</span>
                            <span className="portfolio">P</span>
                            <span className="portfolio">o</span>
                            <span className="portfolio">r</span>
                            <span className="portfolio">t</span>
                            <span className="portfolio">f</span>
                            <span className="portfolio">o</span>
                            <span className="portfolio">l</span>
                            <span className="portfolio">i</span>
                            <span className="portfolio">o</span>
                        </h1>
                    </div>

                    {/* Navigation links section */}
                    <div className="rightNav">
                        <ul className="flex gap-4">
                            {/* Linkedin Icon */}
                            <li className="rightNav">
                                <a>
                                    <img
                                        src={LinkedIn}
                                        className="w-5 cursor-pointer"
                                        onClick={() =>
                                            window.open(
                                                'https://www.linkedin.com/in/chaitanya-bhake-a8a011283',
                                                '_blank'
                                            )
                                        }
                                    />
                                </a>
                            </li>

                            {/* Other navigation links */}
                            <li className="rightNav">
                                <a
                                    href="#projects"
                                    className="text-gray-400 hover:text-white cursor-pointer"
                                >
                                    Projects
                                </a>
                            </li>
                            <li className="rightNav">
                                <a
                                    href="#technologies"
                                    className="text-gray-400 hover:text-white cursor-pointer"
                                >
                                    Skills
                                </a>
                            </li>
                            <li className="rightNav">
                                <a
                                    href="#aboutme"
                                    className="text-gray-400 hover:text-white cursor-pointer"
                                >
                                    About Me
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
