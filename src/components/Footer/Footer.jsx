import React from 'react';


const Footer = () => {

    const handleClick = () => {
        const email = 'chaitubhake2013@gmail.com';
        const mailtoLink = `mailto:${email}`;
        window.open(mailtoLink, '_blank', 'noopener noreferrer');
        setPopupOpened(true);
    }
    return (
        <footer>
            <div className="container m-auto lg:flex flex-col gap-4 justify-between px-4 py-6">
                <div>
                    <p className="text-gray-300 text-sm">Thankyou for checking out my portfolio ❤️</p>
                </div>
                <div>
                    <ul className="">
                       
                        <li>
                            <a onClick={handleClick} className='cursor-pointer grid  text-center mt-5 mb-6  '>
                                📫Contact Me!
                            </a>
                        </li>
                     
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
