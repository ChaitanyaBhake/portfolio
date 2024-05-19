import React, { useState } from 'react';
import ObysDemo from '../../assets/Demos/ObysDemo.mp4';
import MovieDemo from '../../assets/Demos/MovieDemo.mp4';
import SwiptoryDemo from '../../assets/Demos/SwiptoryDemo.mp4';
import PortfolioDemo from '../../assets/Demos/PortfolioDemo.mp4';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    // State and state setters for tilt and glow effects for each project
    const [tilt1, setTilt1] = useState({ x: 0, y: 0 });
    const [isGlowing1, setIsGlowing1] = useState(false);

    const [tilt2, setTilt2] = useState({ x: 0, y: 0 });
    const [isGlowing2, setIsGlowing2] = useState(false);

    const [tilt3, setTilt3] = useState({ x: 0, y: 0 });
    const [isGlowing3, setIsGlowing3] = useState(false);

    const [tilt4, setTilt4] = useState({ x: 0, y: 0 });
    const [isGlowing4, setIsGlowing4] = useState(false);

    // GSAP animations initialization using useGSAP hook
    useGSAP(() => {
        gsap.from('.project-card', {
            duration: 1,
            x: '100%',
            opacity: 0,
            ease: 'power2.out',
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.projects',
                start: 'top 30%',
                toggleActions: 'play none none none',
            },
        });
    }, []);

    // Function to handle mouse move events and update tilt state
    const handleMouseMove = (event, setTilt) => {
        const container = event.currentTarget;
        const rect = container.getBoundingClientRect();
        const x = event.clientX - rect.left - container.offsetWidth / 2;
        const y = event.clientY - rect.top - container.offsetHeight / 2;
        const tiltX = (y / container.offsetHeight) * 50;
        const tiltY = -(x / container.offsetWidth) * 50;
        setTilt({ x: tiltX, y: tiltY });
    };

    // Function to handle mouse enter events and update glow state
    const handleMouseEnter = (setIsGlowing) => {
        setIsGlowing(true);
    };

    // Function to handle mouse leave events and reset tilt and glow states
    const handleMouseLeave = (setIsGlowing, setTilt) => {
        setIsGlowing(false);
        setTilt({ x: 0, y: 0 });
    };

    // Function to prevent context menu from appearing this function is added for mobile
    const handleContextMenu = (event) => {
        event.preventDefault();
    };

    // Function to prevent text selection
    const handleSelectStart = (event) => {
        event.preventDefault();
    };

    return (
        <section id="projects">
            <div className="container m-auto px-4 sm:py-12 ">
                <h2 className="lg:text-4xl text-2xl font-semibold text-center prj">
                    Projects
                </h2>

                {/* PROJECT CONTAINER */}
                <div className="lg:flex flex-col sm:flex-row  gap-10 mt-11 flex-wrap projects overflow-hidden p-9 ">
                    {/* Project 1 */}
                    <div
                        className={`border  mb-6 border-gray-500t rounded-md p-5 flex-1 shadow-md shadow-orange-600 project-card tilt-effect ${
                            isGlowing1 ? 'glow-effect' : ''
                        }`}
                        onMouseMove={(event) =>
                            handleMouseMove(event, setTilt1)
                        }
                        onMouseEnter={() => handleMouseEnter(setIsGlowing1)}
                        onMouseLeave={() =>
                            handleMouseLeave(setIsGlowing1, setTilt1)
                        }
                        onContextMenu={handleContextMenu}
                        onSelectStart={handleSelectStart}
                        style={{
                            transform: `perspective(1000px) rotateX(${tilt1.x}deg) rotateY(${tilt1.y}deg)`,
                            transition: 'transform 0.5s ease',
                        }}
                    >
                        {/* Video Preview of Project */}
                        <video
                            className="w-full h-auto rounded-lg"
                            src={SwiptoryDemo}
                            autoPlay
                            loop
                            muted
                        ></video>

                        {/* Project Title */}
                        <h3 className="text-2xl font-semibold mt-8">
                            SwipTory App
                        </h3>

                        {/*Project Description */}
                        <p
                            className="text-gray-400 text-sm mt-2"
                            style={{ userSelect: 'none' }}
                        >
                            • FullStack Fun Project where you can make your
                            stories and like , share , bookmark it with your
                            friends and family! <br />
                            <br />
                            Skills Developed :- React.JS, Module CSS, Redux ,
                            Express, Mongoose, MongoDB
                        </p>

                        {/* Buttons */}
                        <div className="flex lg:mt-14 mt-12 gap-2">
                            <button
                                className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                                onClick={() =>
                                    window.open(
                                        'https://swiptory-fd.vercel.app/',
                                        '_blank'
                                    )
                                }
                            >
                                Live preview
                            </button>
                            <button
                                className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
                                onClick={() =>
                                    window.open(
                                        'https://github.com/ChaitanyaBhake/swiptoryFD',
                                        '_blank'
                                    )
                                }
                            >
                                Checkout github
                            </button>
                        </div>
                    </div>

                    {/* Project 2 */}
                    {/* Similar Structure as Project 1 */}
                    <div
                        className={`border mb-6    border-gray-500 rounded-md p-5 flex-1 shadow-md shadow-orange-600 project-card tilt-effect ${
                            isGlowing2 ? 'glow-effect' : ''
                        }`}
                        onMouseMove={(event) =>
                            handleMouseMove(event, setTilt2)
                        }
                        onMouseEnter={() => handleMouseEnter(setIsGlowing2)}
                        onMouseLeave={() =>
                            handleMouseLeave(setIsGlowing2, setTilt2)
                        }
                        onContextMenu={handleContextMenu}
                        onSelectStart={handleSelectStart}
                        style={{
                            transform: `perspective(1000px) rotateX(${tilt2.x}deg) rotateY(${tilt2.y}deg)`,
                            transition: 'transform 0.5s ease',
                        }}
                    >
                        <video
                            className="w-full h-auto rounded-lg"
                            src={MovieDemo}
                            autoPlay
                            loop
                            muted
                        ></video>
                        <h3 className="text-2xl font-semibold mt-8">
                            Movie App
                        </h3>
                        <p
                            className="text-gray-400 text-sm mt-2"
                            style={{ userSelect: 'none' }}
                        >
                            • Streamline your entertainment choices with a
                            responsive user-friendly web-app, offering global
                            search capabilities for informed movie and TV show
                            decisions saving movie hunting time! <br /> <br />{' '}
                            Skills Developed :- React.JS, TailwindCSS, Redux,
                            AJAX, Infinite Scroll
                        </p>
                        <div className="flex lg:mt-5 mt-12 gap-2">
                            <button
                                className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                                onClick={() =>
                                    window.open(
                                        'https://movie-app-chaitanya.vercel.app/',
                                        '_blank'
                                    )
                                }
                            >
                                Live preview
                            </button>
                            <button
                                className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
                                onClick={() =>
                                    window.open(
                                        'https://github.com/ChaitanyaBhake/movie-app',
                                        '_blank'
                                    )
                                }
                            >
                                Checkout github
                            </button>
                        </div>
                    </div>
                    {/* Project 3 */}
                    {/* Similar Structure as Project 1 */}
                    <div
                        className={`border mb-6    border-gray-500 rounded-md p-5 flex-1 over shadow-md shadow-orange-600 project-card tilt-effect ${
                            isGlowing3 ? 'glow-effect' : ''
                        }`}
                        onMouseMove={(event) =>
                            handleMouseMove(event, setTilt3)
                        }
                        onMouseEnter={() => handleMouseEnter(setIsGlowing3)}
                        onMouseLeave={() =>
                            handleMouseLeave(setIsGlowing3, setTilt3)
                        }
                        onContextMenu={handleContextMenu}
                        onSelectStart={handleSelectStart}
                        style={{
                            transform: `perspective(1000px) rotateX(${tilt3.x}deg) rotateY(${tilt3.y}deg)`,
                            transition: 'transform 0.5s ease',
                        }}
                    >
                        <video
                            className="w-full h-auto rounded-lg"
                            src={ObysDemo}
                            autoPlay
                            loop
                            muted
                        ></video>

                        <h3 className="text-2xl font-semibold mt-8">
                            Obey's Agency Clone
                        </h3>
                        <p
                            className="text-gray-400 text-sm mt-2"
                            style={{ userSelect: 'none' }}
                        >
                            • Crafted a faithful replica of the award-winning
                            Obeys Agency website, leveraging Locomotive Scroll
                            and infuse innovative effects and interactivity,
                            honoring the original design ethos. <br /> <br />
                            Skills Developed :- HTML 5 , CSS 3 , JS , GSAP
                            Animations
                        </p>
                        <div className="flex gap-4 lg:mt-5 mt-12">
                            <button
                                className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                                onClick={() =>
                                    window.open(
                                        'https://major-project-chaitanya.vercel.app/',
                                        '_blank'
                                    )
                                }
                            >
                                Live preview
                            </button>
                            <button
                                className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
                                onClick={() =>
                                    window.open(
                                        'https://github.com/ChaitanyaBhake/majorProject',
                                        '_blank'
                                    )
                                }
                            >
                                Checkout github
                            </button>
                        </div>
                    </div>
                    {/* Project 4 */}
                    {/* Similar Structure as Project 1 */}
                    <div
                        className={`border mb-6   border-gray-500 rounded-md p-5 flex-1 shadow-md shadow-orange-600 project-card tilt-effect ${
                            isGlowing4 ? 'glow-effect' : ''
                        }`}
                        onMouseMove={(event) =>
                            handleMouseMove(event, setTilt4)
                        }
                        onMouseEnter={() => handleMouseEnter(setIsGlowing4)}
                        onMouseLeave={() =>
                            handleMouseLeave(setIsGlowing4, setTilt4)
                        }
                        onContextMenu={handleContextMenu}
                        onSelectStart={handleSelectStart}
                        style={{
                            transform: `perspective(1000px) rotateX(${tilt4.x}deg) rotateY(${tilt4.y}deg)`,
                            transition: 'transform 0.5s ease',
                        }}
                    >
                        <video
                            className="w-full h-auto rounded-lg"
                            src={PortfolioDemo}
                            autoPlay
                            loop
                            muted
                        ></video>
                        <h3 className="text-2xl font-semibold mt-8">
                            Portfolio Website
                        </h3>
                        <p
                            className="text-gray-400 text-sm mt-2"
                            style={{ userSelect: 'none' }}
                        >
                            Dynamic portfolio showcasing my projects and skills,
                            designed to adapt seamlessly across devices for
                            optimal viewing experience. <br />
                            <br /> Skills Developed :- React.JS, TailwindCSS,
                            GSAP Animations
                        </p>
                        <div className="flex gap-2 lg:mt-14 mt-12">
                            <button
                                className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                                onClick={() => scrollTo(0, 0)}
                            >
                                Live preview
                            </button>
                            <button
                                className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
                                onClick={() =>
                                    window.open(
                                        'https://github.com/ChaitanyaBhake/portfolio',
                                        '_blank'
                                    )
                                }
                            >
                                Checkout github
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
