import React from 'react';
import HtmlLogo from '../../assets/icons8-html.svg';
import CSSLogo from '../../assets/icons8-css3.svg';
import JSLogo from '../../assets/icons8-javascript.svg';
import ReactLogo from '../../assets/icons8-react.png';
import ReduxLogo from '../../assets/icons8-redux.png';
import TailwindLogo from '../../assets/icons8-tailwind-css.svg';
import SassLogo from '../../assets/icons8-sass.svg';
import ExpressLogo from '../../assets/icons8-express-js.svg';

import NodeJSLogo from '../../assets/node.png';
import MongooseLogo from '../../assets/icons8-mongoose.svg';
import MongoDBLogo from '../../assets/mongoDB.png';
import GsapAnimations from '../../assets/gsap.webp';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const TechnologiesSection = () => {
    useGSAP(() => {
        gsap.from('.frontend', {
            duration: 2,
            x: '-100%',
            opacity: 0,
            ease: 'power3.out',
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.frontend',
                start: 'top 70%',
                toggleActions: 'play none none none',
            },
        });

        gsap.from('.backend', {
            duration: 2,
            x: '100%',
            opacity: 0,
            ease: 'power3.out',
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.backend',
                start: 'top 70%',
                toggleActions: 'play none none none',
            },
        });
    }, []);

    return (
        <section className="py-10 overflow-hidden" id="technologies">
            <div className="container m-auto px-4">
                <h2 className="lg:text-4xl text-2xl font-semibold text-center">
                    Tech Stack
                </h2>

                {/* Front End Skills ============================================================================================ */}

                <h1 className="font-semibold text-2xl mt-10">Front End :- </h1>
                <div className="frontend mt-14 flex flex-wrap lg:gap-[70px] gap-[50px] ">
                    {/* Skill -1  HTML*/}
                    <div className="frontend">
                        <div className="flex justify-between items-center flex-col">
                            <h2 className="font-semibold">HTML</h2>
                            <img src={HtmlLogo} height={100} width={100} />
                        </div>
                    </div>

                    {/* Skill -2  CSS*/}
                    <div className="frontend">
                        <div className="flex justify-between items-center flex-col">
                            <h2 className="font-semibold">CSS</h2>
                            <img src={CSSLogo} height={100} width={100} />
                        </div>
                    </div>

                    {/* Skill -3 SASS */}
                    <div className="frontend">
                        <div className="flex justify-between items-center gap-2 flex-col">
                            <h2 className="font-semibold">SASS</h2>
                            <img src={SassLogo} height={80} width={80} />
                        </div>
                    </div>

                    {/* Skill -3 Tailwind */}
                    <div className="frontend">
                        <div className="flex justify-between items-center gap-2 flex-col">
                            <h2 className="font-semibold">Tailwind</h2>
                            <img src={TailwindLogo} height={80} width={80} />
                        </div>
                    </div>

                    {/* Skill -4 Javascript */}
                    <div className="frontend">
                        <div className="flex justify-between items-center flex-col">
                            <h2 className="font-semibold">Javascript</h2>
                            <img src={JSLogo} height={100} width={100} />
                        </div>
                    </div>

                    {/* Skill -5 React */}
                    <div className="frontend">
                        <div className="flex justify-between items-center gap-2 flex-col">
                            <h2 className="font-semibold">React</h2>
                            <img src={ReactLogo} height={90} width={90} />
                        </div>
                    </div>

                    {/* Skill -6 Redux*/}
                    <div className="frontend">
                        <div className="flex justify-between items-center gap-2 flex-col">
                            <h2 className="font-semibold">Redux</h2>
                            <img src={ReduxLogo} height={80} width={80} />
                        </div>
                    </div>

                    {/* Skill -7 GSAP*/}
                    <div className="frontend">
                        <div className="flex justify-between items-center flex-col">
                            <h2 className="font-semibold">GSAP</h2>
                            <img
                                src={GsapAnimations}
                                height={200}
                                width={200}
                            />
                        </div>
                    </div>
                </div>
                {/* Front End Skills ============================================================================================ */}

                {/*Back End Skills  ============================================================================================ */}

                <h1 className="font-semibold text-2xl mt-10">Back End :- </h1>
                <div className="backend mt-14 flex flex-wrap lg:gap-[70px] gap-[50px]">
                    {/* Skill -1 Express*/}
                    <div className="backend">
                        <div className="flex justify-between items-center flex-col">
                            <h2 className="font-semibold">Express</h2>
                            <img src={ExpressLogo} height={80} width={80} />
                        </div>
                    </div>

                    {/* Skill -2  Node*/}
                    <div className="backend">
                        <div className="flex justify-between items-center flex-col">
                            <h2 className="font-semibold">Node</h2>
                            <img src={NodeJSLogo} height={120} width={120} />
                        </div>
                    </div>

                    {/* Skill -3 Mongoose */}
                    <div className="backend">
                        <div className="flex justify-between items-center gap-2 flex-col">
                            <h2 className="font-semibold">Mongoose</h2>
                            <img src={MongooseLogo} height={80} width={80} />
                        </div>
                    </div>

                    {/* Skill -4 MongoDB */}
                    <div className="backend">
                        <div className="flex justify-between items-center gap-2 flex-col">
                            <h2 className="font-semibold">MongoDB</h2>
                            <img src={MongoDBLogo} height={80} width={80} />
                        </div>
                    </div>
                </div>

                {/*Back End Skills  ============================================================================================ */}
            </div>
        </section>
    );
};

export default TechnologiesSection;
