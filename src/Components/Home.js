import React from 'react';
import { useState } from 'react';
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

    return (
        <>
            <main className='h-screen w-screen bg-gray-800 flex flex-col justify-between items-center'>
                <div className='navbar-toggle flex justify-between items-center w-11/12 m-2'>
                    {/* <div className='logo'>

                    </div> */}
                    <div>
                        <i onClick={toggleNavbar} class="fa-solid fa-bars text-slate-300"></i>
                    </div>
                    {navBar ?
                        (<div className='dropdown'>
                            <ul className="absolute m-3 mt-4 left-0 w-11/12 bg-slate-900 text-gray-300 flex flex-col justify-start items-center p-2 sm:p-3 rounded-lg">
                                <li className="p-2 m-1 w-auto text-lg font-normal active:bg-slate-800 active:text-slate-100">Home</li>
                                <li className="p-2 m-1 w-auto text-lg font-normal active:bg-slate-800 active:text-slate-100"> About</li>
                                <li className="p-2 m-1 w-auto text-lg font-normal active:bg-slate-800 active:text-slate-100"> Projects</li>
                                <li className="p-2 m-1 w-auto text-lg font-normal active:bg-slate-800 active:text-slate-100"> Contact</li>
                            </ul>
                        </div>)
                        :
                        null
                    }
                </div>

                <div className=' container p-2'>
                    <div className="text-container text-pink-700 font-[revert] font-semibold p-1">
                        Hi, my name is
                    </div>
                    <div className="text-container text-pink-200 font-CustomFont1 text-3xl">
                        Monson Verghese
                    </div>
                    <div className="text-container text-gray-300 text-lg font-normal p-1">
                        <TypeAnimation
                            sequence={[
                                'Python',
                                1500, // Waits 2s
                                'Java', // 
                                1500, // Waits 2s
                                'JavaScript',
                                1500, // Waits 2s
                                'Tailwind CSS',
                                1500, // Waits 2s
                                'HTML',
                                1500, // Waits 2s
                                'Github',
                                1500,
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                        />
                    </div>
                    <div className="text-container text-red-300 text-xs font-normal p-1">
                        I am an aspiring web-developer currently studying Computer Science.
                    </div>
                    <div className='flex items-center justify-center'>
                        <button class="w-auto m-2 p-1 py-2 text-sm font-medium text-gray-900 rounded-lg group bg-transparent border hover:text-white dark:text-white">
                            <span class="p-1 text-sm transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Resume
                            </span>
                        </button>
                    </div>
                </div>
                <div>

                </div>
            </main>
        </>
    )
}