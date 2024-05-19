import React from 'react';
import gitLogo from '../../assets/icons8-git.svg';
import postmanLogo from '../../assets/postman.png';
import vsCodeLogo from '../../assets/icons8-visual-studio-code-2019.svg';
import npmLogo from '../../assets/npm.png';
import slackLogo from '../../assets/icons8-slack.svg';
import githubLogo from '../../assets/icons8-github.svg';
import wordLogo from "../../assets/icons8-word.svg";
import excelLogo from "../../assets/icons8-microsoft-excel-2019.svg"

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const AdditionalSkillsSection = () => {


    useGSAP(() => {
        gsap.from('.tools', {
            duration: 2,
            x: '-100%',
            opacity: 0,
            ease: 'power3.out',
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.tools',
                start: 'top 90%',
                toggleActions: 'play none none none',
            },
        });

    }, []);

    return (
        <section>
            <div className="container m-auto px-4 py-14">
                <h2 className="text-2xl font-semibold">
                    Additional Tools and Softwares
                </h2>
                {/* First 4 Tools */}
                <div className="tools flex flex-wrap gap-4 sm:gap-28 mt-12 w-full">
                    <div className="flex flex-col items-center justify-center gap-5">
                        <h2 className="font-semibold">Slack</h2>
                        <img src={slackLogo} width={80} height={80} />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-5">
                        <h2 className="font-semibold">Postman</h2>
                        <img src={postmanLogo} width={80} height={80} />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-5">
                        <h2 className="font-semibold">VS Code</h2>
                        <img src={vsCodeLogo} width={80} height={80} />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-5">
                        <h2 className="font-semibold">NPM</h2>
                        <img src={npmLogo} width={80} height={80} />
                    </div>
                </div>

                <div className='m-[4rem]'></div>

                {/* Second  4 Tools */}

                <div className="tools flex flex-wrap gap-4 sm:gap-28 mt-12 w-full">
                    <div className="flex flex-col items-center justify-center gap-5">
                        <h2 className="font-semibold">Git</h2>
                        <img src={gitLogo} width={80} height={80} />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-5">
                        <h2 className="font-semibold">GitHub</h2>
                        <img src={githubLogo} width={80} height={80} />
                    </div>

                     <div className="flex flex-col items-center justify-center gap-5">
                        <h2 className='font-semibold'>
                            Word
                        </h2>
                        <img src={wordLogo}  width={80} height={80} />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-5">
                        <h2 className='font-semibold'>
                            Excel
                        </h2>
                        <img src={excelLogo}  width={80} height={80} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdditionalSkillsSection;
