import React from 'react';
import { useState , useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {

    const [navBar, setnavBar] = useState(false);

    const toggleNavbar = () => {
        if (navBar === false) {
            setnavBar(true);
        } else {
            setnavBar(false);
        }
    }

    // const [navColor, setnavColor] = useState("bg-gray-700");
    // const listenScrollEvent = () => {
    //     window.scrollY > 619 && window.scrollY < 1837 ? setnavColor("bg-gray-800") : setnavColor("bg-gray-700");
    //     window.scrollY > 1837 ? setnavColor("bg-gray-700") : setnavColor("bg-gray-800");
    //     // window.scrollY > 619 ? setnavColor("bg-gray-800") : setnavColor("bg-gray-700");
    // };
    // useEffect(() => {
    //     window.addEventListener("scroll", listenScrollEvent);
    //     return () => {
    //         window.removeEventListener("scroll", listenScrollEvent);
    //     };
    // }, []);

    return (
        <>
            <main className='home h-screen w-screen bg-gray-800 flex flex-col justify-between items-center' id='home'>
                <div className={`navbar-toggle fixed flex justify-between items-center w-full p-2 bg-gray-700 z-10`}>
                    <div className='logo flex justify-center items-center'>
                        <a href="https://www.linkedin.com/in/monson-reji-verghese-a26061231/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin text-slate-300 active:text-slate-400 scale-150 sm:scale-[200%] lg:scale-[300%] m-2 sm:m-3 lg:m-6 hover:text-slate-400 hover:rotate-360 transition-all duration-1000"></i>
                        </a>
                        <a href="https://github.com/Monson2002" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-square-github text-slate-300 active:text-slate-400 scale-150 sm:scale-[200%] lg:scale-[300%] m-2 sm:m-3 lg:m-6 hover:text-slate-400 hover:rotate-360 transition-all duration-1000"></i>
                        </a>
                    </div>

                    <div className='dropdown-md hidden md:flex'>
                        <div className='dropdown'>
                            <ul className="text-gray-300 flex justify-center items-center md:mx-2 rounded-lg">
                                <a href="#home"><i className="fa-solid fa-house p-2 m-2 sm:m-4 lg:mx-8 w-auto md:scale-150 hover:text-slate-400 hover:underline hover:underline-offset-4 hover:decoration-pink-500 active:text-slate-100"></i></a>
                                {/* <li className="p-2 m-1 w-auto text-lg font-normal hover:text-slate-400 hover:underline hover:underline-offset-4 hover:decoration-pink-500 active:bg-slate-800 active:text-slate-100">Home</li> */}
                                <a href="#about"><i className="fa-solid fa-user p-2 m-2 sm:m-4 lg:mx-8 w-auto md:scale-150 hover:text-slate-400 hover:underline hover:underline-offset-4 hover:decoration-pink-500 active:text-slate-100"></i></a>
                                {/* <li className="p-2 m-1 w-auto text-lg font-normal hover:text-slate-400 hover:underline hover:underline-offset-4 hover:decoration-pink-500 active:bg-slate-800 active:text-slate-100">About</li> */}
                                <a href="#projects"><i className="fa-solid fa-briefcase p-2 m-2 sm:m-4 lg:mx-8 w-auto md:scale-150 hover:text-slate-400 hover:underline hover:underline-offset-4 hover:decoration-pink-500 active:text-slate-100"></i></a>
                                {/* <li className="p-2 m-1 w-auto text-lg font-normal hover:text-slate-400 hover:underline hover:underline-offset-4 hover:decoration-pink-500 active:bg-slate-800 active:text-slate-100"> Projects</li> */}
                                <a href="#contact-us"><i className="fa-solid fa-phone p-2 m-2 sm:m-4 lg:mx-8 w-auto md:scale-150 hover:text-slate-400 hover:underline hover:underline-offset-4 hover:decoration-pink-500 active:text-slate-100"></i></a>
                                {/* <li className="p-2 m-1 w-auto text-lg font-normal hover:text-slate-400 hover:underline hover:underline-offset-4 hover:decoration-pink-500 active:bg-slate-800 active:text-slate-100"> Contact</li> */}
                            </ul>
                        </div>
                    </div>

                    <div className='md:hidden'>
                        <i onClick={toggleNavbar} className="fa-solid fa-bars text-slate-300 sm:scale-150 p-2"></i>
                        {navBar ?
                            (<div className='dropdown'>
                                <ul className="absolute m-3 mt-4 left-0 w-11/12 bg-slate-900 text-gray-300 flex flex-col justify-start items-center p-2 sm:p-3 rounded-lg">
                                    <a href="#home" className='flex hover:text-slate-400 hover:underline hover:underline-offset-4 hover:decoration-pink-500 active:bg-slate-800 active:text-slate-100'>
                                        <i className="fa-solid fa-house m-auto p-2 w-auto "></i>
                                        <li className="p-2 w-auto text-lg font-normal">Home</li>
                                    </a>
                                    <a href="#about" className='flex hover:text-slate-400 hover:underline hover:underline-offset-4 hover:decoration-pink-500 active:bg-slate-800 active:text-slate-100'>
                                        <i className="fa-solid fa-user m-auto p-2 w-auto "></i>
                                        <li className="p-2 w-auto text-lg font-normal">About</li>
                                    </a>
                                    <a href="#projects" className='flex hover:text-slate-400 hover:underline hover:underline-offset-4 hover:decoration-pink-500 active:bg-slate-800 active:text-slate-100'>
                                        <i className="fa-solid fa-briefcase m-auto p-2 w-auto "></i>
                                        <li className="p-2 w-auto text-lg font-normal">Projects</li>
                                    </a>
                                    <a href="#contacy-us" className='flex hover:text-slate-400 hover:underline hover:underline-offset-4 hover:decoration-pink-500 active:bg-slate-800 active:text-slate-100'>
                                        <i className="fa-solid fa-phone m-auto p-2 w-auto "></i>
                                        <li className="p-2 w-auto text-lg font-normal">Contact</li>
                                    </a>
                                </ul>
                            </div>)
                            :
                            null
                        }
                    </div>
                </div>

                <div className='start block'>
                    {/* Dummy div for vertical alignment */}
                </div>

                <div className='container p-2 sm:w-3/5 md:mt-7 lg:w-2/5'>
                    <div className="text-container text-pink-700 font-[revert] font-semibold sm:font-bold lg:text-lg p-1 sm:py-2">
                        Hi, my name is
                    </div>
                    <div className="text-container text-pink-200 font-CustomFont1 text-3xl sm:text-4xl lg:text-5xl">
                        Monson Verghese
                    </div>
                    <div className="text-container text-gray-300 text-lg sm:text-xl lg:text-2xl font-normal sm:font-medium p-1 sm:py-2">
                        <TypeAnimation
                            sequence={[
                                'React',
                                1500, // Waits 1.5s
                                'Python',
                                1500, // Waits 1.5s
                                'Java', // 
                                1500, // Waits 1.5s
                                'JavaScript',
                                1500, // Waits 1.5s
                                'Tailwind CSS',
                                1500, // Waits 1.5s
                                'HTML',
                                1500, // Waits 1.5s
                                'Github',
                                1500,
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                        />
                    </div>
                    <div className="text-container text-red-300 text-xs sm:text-sm lg:text-base font-normal sm:font-medium p-1 sm:py-2">
                        I am an aspiring web-developer currently studying Computer Science.
                    </div>
                    <div className='flex items-center justify-center lg:mt-4'>
                        <button className="w-auto m-2 sm:m-4 p-1 py-2 sm:py-3 font-medium text-gray-900 rounded-lg group bg-transparent border hover:text-white dark:text-white">
                            <span className="p-1 sm:py-2  text-sm sm:text-base lg:text-lg transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Resume
                            </span>
                        </button>
                    </div>
                </div>

                <div className='end'>
                    {/* Dummy div for vertical alignment */}
                </div>
            </main>
        </>
    )
}