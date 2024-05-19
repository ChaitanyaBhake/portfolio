import React from 'react';

const AboutMeSection = () => {
    return (
        <section className="py-8" id="aboutme">
            <div className="container m-auto px-4">
                <h2 className="text-2xl font-semibold">About me</h2>
                <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
                    <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                        <h3 className="absolute left-0 text-lg font-semibold">
                            2017
                        </h3>
                        <p>
                            Completed SSC (10th Std) from Maharashtra State
                            Board
                        </p>
                    </div>
                    <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                        <h3 className="absolute left-0 text-lg font-semibold">
                            2019
                        </h3>
                        <p>
                            Completed HSC (12th Std) from Maharashtra State
                            Board
                        </p>
                    </div>
                    <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                        <h3 className="absolute left-0 text-lg font-semibold">
                            2023
                        </h3>
                        <p>
                            Complete Graduation B.E [CSE] from KDK (Karamveer
                            Dadashaheb Kannamwar College of Engineering) , RTM Nagpur
                            University ,Maharashtra
                        </p>
                    </div>
                    <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                        <h3 className="absolute left-0 text-lg font-semibold">
                            2024
                        </h3>
                        <p>
                           Found my interest in Web Development. Currently pursuing MERN Stack Course
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;
