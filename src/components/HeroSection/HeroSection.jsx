import React from 'react';

import Profile from '../../assets/Dpimg-modified.png';
import Typewriter from 'typewriter-effect';
import DoubleQuotes from '../../assets/doubleQuotes.png';
import ChaitanyaCv from '../../assets/ChaitanyaCV.pdf';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    //Using GSAP Hook
    useGSAP(() => {
        gsap.from('.heading', {
            duration: 2,
            x: 100,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.container',
                start: 'top center',
                toggleActions: 'play reverse play reverse',
            },
        });

        gsap.from('.tagline', {
            duration: 2,
            y: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: '.container2',
                start: 'top bottom',
                toggleActions: 'play reverse play reverse',
            },
        });

        gsap.from('.doubleQuotes', {
            duration: 3,
            y: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: '.container2',
                start: 'top bottom',
                toggleActions: 'play reverse play reverse',
            },
        });
    }, []);

    // Function to handle CV download
    const downloadCv = () => {
        const link = document.createElement('a');
        link.href = ChaitanyaCv;
        link.download = 'ChaitanyaCV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section>
            {/* Container for hero section content */}
            <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left justify-center items-center">
                <div>
                    {/* Heading */}
                    <h2 className="font-bold lg:text-6xl text-4xl heading ">
                        Hello, I'm Chaitanya,
                    </h2>
                    <div>
                        {/* Typewriter effect for changing line animation */}
                        <h2 className="font-bold lg:text-6xl text-4xl mt-1 text z-2 ">
                            <Typewriter
                                options={{
                                    strings: [
                                        'Frontend Developer',
                                        'Backend Developer',
                                        'Full Stack Web Developer',
                                    ],
                                    autoStart: true,
                                    typeSpeed: 50,
                                    deleteSpeed: 30,
                                    delay: 40,
                                    loop: true,
                                }}
                            />
                        </h2>
                    </div>

                    <div className="container2">
                        {/* Tagline with double quotes */}
                        <p className="mt-6 text-gray-400 font-semibold lg:text-xl ">
                            <span className="doubleQuotes">
                                <img
                                    src={DoubleQuotes}
                                    width={50}
                                    height={50}
                                />
                            </span>{' '}
                            <span className="tagline">
                                Enthusiastic full-stack web developer, committed
                                to mastering both front-end and back-end
                                technologies, with a focus on collaboration and
                                clear communication.
                            </span>
                            <img
                                src={DoubleQuotes}
                                width={50}
                                height={50}
                                className="doubleQuotes lg:ml-[620px] ml-[250px]"
                            />
                        </p>

                        {/* Button to download CV */}
                        <button
                            className="px-8 shadow-gray-500 shadow-md lg:py-5 py-2 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                            onClick={downloadCv}
                        >
                            Download CV
                        </button>
                    </div>
                </div>

                {/* Profile image */}
                <div className="relative imgContainer">
                    <div
                        className="after:bg-[url('./large-long.png')] 
                                    after:w-[420px] 
                                    after:absolute
                                    after:bg-contain 
                                    after:block 
                                    after:bg-no-repeat  
                                    after:h-[320px] 
                                    lg:after:top-[-3rem]
                                    after:top-0
                                    lg:after:left-[-9rem]
                                    after:-left-20
                                    sm:after:-left-40 
                                   before:bg-[url('./small.png')] 
                                   before:bg-contain 
                                   before:block
                                   before:bg-no-repeat 
                                    before:w-[220px]
                                    before:h-[220px]
                                    before:absolute 
                                    lg:before:bottom-[-2rem]
                                    before:bottom-0
                                    lg:before:-right-[-8rem]
                                    before:-right-10"
                    >
                        <img
                            src={Profile}
                            className="relative z-10 lg:w-[50%] w-[200px] m-auto sm:w-[600px] rounded-[50%] lg:mt-0 lg:left-[-4rem] mt-10  dpimage "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
