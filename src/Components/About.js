import React from 'react'

export default function About() {
    return (
        <>
            <main className='about h-screen w-screen bg-gray-800 flex flex-col justify-evenly items-center'>
                <section className='about-me w-11/12'>
                    <h1 className='p-2 text-gray-300 font-CustomFont1 text-2xl underline underline-offset-4 decoration-pink-500 text-center'>About Me</h1>
                    <img className='w-4/5 mx-auto m-2' src="images/monson-final-1MB.jpg" alt="img not found" srcset="" />
                    <p className='text-container text-red-300 text-xs font-normal p-1'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis temporibus molestias iure delectus nihil, hic amet rem cupiditate maiores ad eos ipsum sint. Ipsum omnis debitis quod atque incidunt soluta!
                    </p>
                </section>
                <section className='tech-stack w-11/12'>
                    <h1 className='p-2 text-gray-300 font-CustomFont1 text-2xl underline underline-offset-4 decoration-pink-500 text-center'>Tech Stack</h1>
                    <div className=' grid grid-cols-2 justify-center'>
                        <div className='tech-stack-items p-6 m-auto'>
                            <i class="fa-brands fa-react scale-[3] text-slate-300"></i>
                        </div>
                        <div className='tech-stack-items p-6 m-auto'>
                            <i class="fa-brands fa-square-js scale-[3] text-slate-300"></i>
                        </div>
                        <div className='tech-stack-items p-6 m-auto'>
                            <iconify-icon icon="logos:tailwindcss-icon"></iconify-icon>
                        </div>
                        <div className='tech-stack-items p-6 m-auto'>
                            <i class="fa-brands fa-css3-alt scale-[3] text-slate-300"></i>
                        </div>
                        <div className='tech-stack-items p-6 m-auto'>
                            <i class="fa-brands fa-html5 scale-[3] text-slate-300"></i>
                        </div>
                        <div className='tech-stack-items p-6 m-auto'>
                            <i class="fa-brands fa-python scale-[3] text-slate-300"></i>
                        </div>
                        <div className='tech-stack-items p-6 m-auto'>
                            <i class="fa-brands fa-java scale-[3] text-slate-300"></i>
                        </div>
                        <div className='tech-stack-items p-6 m-auto'>
                            <i class="fa-brands fa-github scale-[3] text-slate-300"></i>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
