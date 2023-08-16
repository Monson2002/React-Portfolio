import React from 'react'

export default function Projects() {


    return (
        <>
            <main className='projects w-screen bg-gray-800 flex flex-col justify-evenly items-center' id='projects'>
                <section className='m-2 sm:m-4 w-11/12'>
                    <h1 className='p-2 sm:p-4 my-8 sm:my-12 lg:my-16 text-gray-300 font-CustomFont1 text-2xl sm:text-3xl lg:text-4xl underline underline-offset-4 decoration-pink-500 text-center'>Projects</h1>
                    <section className='cards flex flex-col justify-center items-center md:grid md:grid-cols-2'>

                        <div className="sticky card m-auto w-11/12 sm:w-3/4 h-auto bg-base-100  image-full">
                            <figure><img className='rounded-md opacity-40 hover:opacity-20 m-auto' src="images/MGM's Hustlers.png" alt="slow net speed" /></figure>
                            <div className="relative card-body bottom-32 text-center font-CustomFont1">
                                <h2 className="card-title text-gray-200">MGM's Hustlers</h2>
                                <div className="card-actions justify-end text-gray-200">
                                    <button onClick={()=>{window.open("https://mgm-hustlers.netlify.app/index.html")}} className="btn text-xs sm:text-sm font-normal m-2 sm:m-4 p-1 sm:p-2 bg-slate-800 rounded-md hover:bg-slate-200 active:bg-slate-300 hover:text-gray-700 active:text-gray-800">View Demo</button>
                                    <button onClick={()=>{window.open("https://github.com/Monson2002/MGM-s-Hustlers")}} className="btn text-xs sm:text-smp-2bg-slate-800 font-normal m-2 sm:m-4 p-1 sm:p-2 bg-slate-800 rounded-md hover:bg-slate-200 active:bg-slate-300 hover:text-gray-700 active:text-gray-800">View Code</button>
                                </div>
                            </div>
                        </div>

                        <div className="sticky card m-auto w-11/12 sm:w-3/4 bg-base-100 image-full">
                            <figure><img className='rounded-md opacity-40 hover:opacity-20 m-auto' src="images/Olympics-analysis.png" alt="slow net speed" /></figure>
                            <div className="relative card-body bottom-32 text-center font-CustomFont1">
                                <h2 className="card-title text-gray-200">Olympics Analysis</h2>
                                <div className="card-actions justify-end text-gray-200">
                                    <button onClick={()=>{window.open("https://monson2002-olympics-analysis.streamlit.app/")}} className="btn text-xs sm:text-sm font-normal m-2 sm:m-4 p-1 sm:p-2 bg-slate-800 rounded-md hover:bg-slate-200 active:bg-slate-300 hover:text-gray-700 active:text-gray-800">View Demo</button>
                                    <button onClick={()=>{window.open("https://github.com/Monson2002/Olympics-Analysis")}} className="btn text-xs sm:text-sm font-normal m-2 sm:m-4 p-1 sm:p-2 bg-slate-800 rounded-md hover:bg-slate-200 active:bg-slate-300 hover:text-gray-700 active:text-gray-800">View Code</button>
                                </div>
                            </div>
                        </div>

                        <div className="sticky card m-auto w-11/12 sm:w-3/4 bg-base-100 image-full">
                            <figure><img className='rounded-md opacity-40 hover:opacity-20 m-auto' src="images/Text-Utils.png" alt="slow net speed" /></figure>
                            <div className="relative card-body bottom-32 text-center font-CustomFont1">
                                <h2 className="card-title text-gray-200">Text Utils</h2>
                                <div className="card-actions justify-end text-gray-200">
                                    <button onClick={()=>{window.open("https://monson2002-text-utils.netlify.app")}} className="btn text-xs sm:text-sm font-normal m-2 sm:m-4 p-1 sm:p-2 bg-slate-800 rounded-md hover:bg-slate-200 active:bg-slate-300 hover:text-gray-700 active:text-gray-800">View Demo</button>
                                    <button onClick={()=>{window.open("https://github.com/Monson2002/Text-Utils")}} className="btn text-xs sm:text-sm font-normal m-2 sm:m-4 p-1 sm:p-2 bg-slate-800 rounded-md hover:bg-slate-200 active:bg-slate-300 hover:text-gray-700 active:text-gray-800">View Code</button>
                                </div>
                            </div>
                        </div>

                        <div className="sticky card m-auto w-11/12 sm:w-3/4 h-auto bg-base-100  image-full">
                            <figure><img className='rounded-md opacity-40 hover:opacity-20 m-auto' src="images/expense-tracker.png" alt="slow net speed" /></figure>
                            <div className="relative card-body bottom-32 text-center font-CustomFont1">
                                <h2 className="card-title text-gray-200">Personal Expense Tracker</h2>
                                <div className="card-actions justify-end text-gray-200">
                                    <button onClick={()=>{window.open("https://monson2002-daily-expense-tracker.netlify.app/")}} className="btn text-xs sm:text-sm font-normal m-2 sm:m-4 p-1 sm:p-2 bg-slate-800 rounded-md hover:bg-slate-200 active:bg-slate-300 hover:text-gray-700 active:text-gray-800">View Demo</button>
                                    <button onClick={()=>{window.open("https://github.com/Monson2002/Personal-Finance-Tracker")}} className="btn text-xs sm:text-smp-2bg-slate-800 font-normal m-2 sm:m-4 p-1 sm:p-2 bg-slate-800 rounded-md hover:bg-slate-200 active:bg-slate-300 hover:text-gray-700 active:text-gray-800">View Code</button>
                                </div>
                            </div>
                        </div>

                        <div className="sticky card m-auto w-11/12 sm:w-3/4 bg-base-100 image-full">
                            <figure><img className='rounded-md opacity-40 hover:opacity-20 m-auto' src="images/MMT Bakery.png" alt="slow net speed" /></figure>
                            <div className="relative card-body bottom-32 text-center font-CustomFont1">
                                <h2 className="card-title text-gray-200">MMT Bakery</h2>
                                <div className="card-actions justify-end text-gray-200">
                                    <button onClick={()=>{window.open("https://github.com/Monson2002/MMT-Bakery")}} className="btn text-xs sm:text-sm font-normal m-2 sm:m-4 p-1 sm:p-2 bg-slate-800 rounded-md hover:bg-slate-200 active:bg-slate-300 hover:text-gray-700 active:text-gray-800">View Code</button>
                                </div>
                            </div>
                        </div>

                        <div className="sticky card m-auto w-11/12 sm:w-3/4 bg-base-100 image-full">
                            <figure><img className='rounded-md opacity-40 hover:opacity-20 m-auto' src="images/News-App.png" alt="slow net speed" /></figure>
                            <div className="relative card-body bottom-32 text-center font-CustomFont1">
                                <h2 className="card-title text-gray-200">News App</h2>
                                <div className="card-actions justify-end text-gray-200">
                                    <button onClick={()=>{window.open("https://github.com/Monson2002/News-App")}} className="btn text-xs sm:text-sm font-normal m-2 sm:m-4 p-1 sm:p-2 bg-slate-800 rounded-md hover:bg-slate-200 active:bg-slate-300 hover:text-gray-700 active:text-gray-800">View Code</button>
                                </div>
                            </div>
                        </div>

                        <div className="sticky card m-auto w-11/12 sm:w-3/4 bg-base-100 image-full">
                            <figure><img className='rounded-md opacity-40 hover:opacity-20 m-auto' src="images/Portfolio(Old).png" alt="slow net speed" /></figure>
                            <div className="relative card-body bottom-32 text-center font-CustomFont1">
                                <h2 className="card-title text-gray-200">Portfolio (Old)</h2>
                                <div className="card-actions justify-end text-gray-200">
                                    <button onClick={()=>{window.open("https://monson2002.github.io/Personal-Portfolio-Old/")}} className="btn text-xs sm:text-sm font-normal m-2 sm:m-4 p-1 sm:p-2 bg-slate-800 rounded-md hover:bg-slate-200 active:bg-slate-300 hover:text-gray-700 active:text-gray-800">View Demo</button>
                                    <button onClick={()=>{window.open("https://github.com/Monson2002/Personal-Portfolio-Old")}} className="btn text-xs sm:text-sm font-normal m-2 sm:m-4 p-1 sm:p-2 bg-slate-800 rounded-md hover:bg-slate-200 active:bg-slate-300 hover:text-gray-700 active:text-gray-800">View Code</button>
                                </div>
                            </div>
                        </div>

                    </section>
                </section>
            </main>
        </>
    )
}
