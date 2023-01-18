import React from 'react'

export default function Projects() {


    return (
        <>
            <main className='projects w-screen bg-gray-800 flex flex-col justify-evenly items-center'>
                <section className='m-2 w-11/12'>
                    <h1 className='p-2 my-4 mb-8 text-gray-300 font-CustomFont1 text-2xl underline underline-offset-4 decoration-pink-500 text-center'>Projects</h1>
                    <section className='cards flex flex-col justify-center items-center md:grid md:grid-cols-2'>

                        <div className="sticky card w-11/12 h-auto bg-base-100 shadow-xl image-full">
                            <figure><img className='rounded-md opacity-40 m-auto' src="images/MGM's Hustlers.png" alt="Shoes" /></figure>
                            <div className="relative card-body bottom-24 text-center font-CustomFont1">
                                <h2 className="card-title text-gray-200">MGM's Hustlers</h2>
                                <div className="card-actions justify-end text-gray-200">
                                    <button onClick={()=>{window.open("https://mgm-hustlers.netlify.app/index.html")}} className="btn text-xs font-normal m-2 p-1 bg-slate-800 rounded-md active:bg-slate-300 active:text-gray-800">View Demo</button>
                                    <button onClick={()=>{window.open("https://github.com/Monson2002/MGM-s-Hustlers")}} className="btn text-xs font-normal m-2 p-1 bg-slate-800 rounded-md active:bg-slate-300 active:text-gray-800">View Code</button>
                                </div>
                            </div>
                        </div>

                        <div className="sticky card w-11/12 bg-base-100 shadow-xl image-full">
                            <figure><img className='rounded-md opacity-40 m-auto' src="images/Text-Utils.png" alt="Shoes" /></figure>
                            <div className="relative card-body bottom-24 text-center font-CustomFont1">
                                <h2 className="card-title text-gray-200">Text Utils</h2>
                                <div className="card-actions justify-end text-gray-200">
                                    <button onClick={()=>{window.open("https://monson2002-text-utils.netlify.app")}} className="btn text-xs font-normal m-2 p-1 bg-slate-800 rounded-md active:bg-slate-300 active:text-gray-800">View Demo</button>
                                    <button onClick={()=>{window.open("https://github.com/Monson2002/Text-Utils")}} className="btn text-xs font-normal m-2 p-1 bg-slate-800 rounded-md active:bg-slate-300 active:text-gray-800">View Code</button>
                                </div>
                            </div>
                        </div>

                        <div className="sticky card w-11/12 bg-base-100 shadow-xl image-full">
                            <figure><img className='rounded-md opacity-40 m-auto' src="images/MMT Bakery.png" alt="Shoes" /></figure>
                            <div className="relative card-body bottom-24 text-center font-CustomFont1">
                                <h2 className="card-title text-gray-200">MMT Bakery</h2>
                                <div className="card-actions justify-end text-gray-200">
                                    <button onClick={()=>{window.open("https://github.com/Monson2002/MMT-Bakery")}} className="btn text-xs font-normal m-2 p-1 bg-slate-800 rounded-md active:bg-slate-300 active:text-gray-800">View Code</button>
                                </div>
                            </div>
                        </div>

                        <div className="sticky card w-11/12 bg-base-100 shadow-xl image-full">
                            <figure><img className='rounded-md opacity-40 m-auto' src="images/News-App.png" alt="Shoes" /></figure>
                            <div className="relative card-body bottom-24 text-center font-CustomFont1">
                                <h2 className="card-title text-gray-200">News App</h2>
                                <div className="card-actions justify-end text-gray-200">
                                    <button onClick={()=>{window.open("https://github.com/Monson2002/News-App")}} className="btn text-xs font-normal m-2 p-1 bg-slate-800 rounded-md active:bg-slate-300 active:text-gray-800">View Code</button>
                                </div>
                            </div>
                        </div>

                        <div className="sticky card w-11/12 bg-base-100 shadow-xl image-full">
                            <figure><img className='rounded-md opacity-40 m-auto' src="images/Portfolio(Old).png" alt="Shoes" /></figure>
                            <div className="relative card-body bottom-24 text-center font-CustomFont1">
                                <h2 className="card-title text-gray-200">Portfolio (Old)</h2>
                                <div className="card-actions justify-end text-gray-200">
                                    <button onClick={()=>{window.open("https://monson2002.github.io/Personal-Portfolio-Old/")}} className="btn text-xs font-normal m-2 p-1 bg-slate-800 rounded-md active:bg-slate-300 active:text-gray-800">View Demo</button>
                                    <button onClick={()=>{window.open("https://github.com/Monson2002/Personal-Portfolio-Old")}} className="btn text-xs font-normal m-2 p-1 bg-slate-800 rounded-md active:bg-slate-300 active:text-gray-800">View Code</button>
                                </div>
                            </div>
                        </div>

                    </section>
                </section>
            </main>
        </>
    )
}
