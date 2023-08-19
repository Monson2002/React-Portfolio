import React from "react";

export default function About() {
    return (
        <>
            <main
                className="about w-screen bg-gray-900 flex flex-col justify-evenly items-center"
                id="about">
                <section className="about-me flex flex-col justify-center items-center w-11/12">
                    <h1 className="p-2 sm:p-4 my-8 sm:my-12 lg:my-16 text-gray-300 font-CustomFont1 text-2xl sm:text-3xl lg:text-4xl underline underline-offset-4 decoration-pink-500 text-center">
                        About Me
                    </h1>
                    <div className="sm:flex sm:flex-col lg:flex-row-reverse sm:justify-center sm:items-center">
                        <img
                            className="w-4/5 md:w-3/5 lg:w-2/5 mx-auto m-2 rounded-sm"
                            src="images/monson-final-1MB.jpg"
                            alt="img not found"
                            srcSet=""
                        />
                        <p className="text-container sm:w-4/5 text-red-300 text-sm sm:text-base lg:text-xl font-normal p-1 sm:p-2 lg:m-4 lg:p-4">
                            I am a student currently studying Computer Science.
                            I believe my knack for trying new things will help
                            me in moving forward.You can connect with me on
                            linkedin and do check out my projects.
                            <p>
                                Check out my{" "}
                                <a
                                    href="https://leetcode.com/MONSONRV/"
                                    className="hover:text-red-200"
                                    target="_blank"
                                    rel="noreferrer">
                                    <u>Leetcode</u>
                                </a>{" "}
                                and{" "}
                                <a
                                    href="https://auth.geeksforgeeks.org/user/monsonreji2002/practice"
                                    className="hover:text-red-200"
                                    target="_blank"
                                    rel="noreferrer">
                                    <u>GFG</u>
                                </a>{" "}
                                profiles.
                            </p>
                        </p>
                    </div>
                </section>
                <section className="tech-stack w-11/12 mb-4 md:mb-8">
                    <h1 className="p-2 sm:p-4 my-4 sm:my-6 lg:my-8 text-gray-300 font-CustomFont1 text-2xl sm:text-3xl lg:text-4xl underline underline-offset-4 decoration-pink-500 text-center">
                        Tech Stack
                    </h1>
                    <div className=" grid grid-cols-2 justify-center">
                        <div className="tech-stack-items p-6 sm:p-8 lg:p-12 m-auto">
                            <i className="fa-brands fa-node scale-[3] sm:scale-[4] lg:scale-[5] text-slate-300 hover:text-slate-400"></i>
                        </div>
                        <div className="tech-stack-items p-6 sm:p-8 lg:p-12 m-auto">
                            <i className="fa-brands fa-react scale-[3] sm:scale-[4] lg:scale-[5] text-slate-300 hover:text-slate-400"></i>
                        </div>
                        <div className="tech-stack-items p-6 sm:p-8 lg:p-12 m-auto">
                            <i className="fa-brands fa-square-js scale-[3] sm:scale-[4] lg:scale-[5] text-slate-300 hover:text-slate-400"></i>
                        </div>
                        <div className="tech-stack-items p-6 sm:p-8 lg:p-12 m-auto">
                            <i className="fa-brands fa-python scale-[3] sm:scale-[4] lg:scale-[5] text-slate-300 hover:text-slate-400"></i>
                        </div>
                        <div className="tech-stack-items p-6 sm:p-8 lg:p-12 lg:scale-150 m-auto">
                            <iconify-icon
                                className=""
                                icon="logos:tailwindcss-icon"></iconify-icon>
                        </div>
                        <div className="tech-stack-items p-6 sm:p-8 lg:p-12 m-auto">
                            <i className="fa-brands fa-css3-alt scale-[3] sm:scale-[4] lg:scale-[5] text-slate-300 hover:text-slate-400"></i>
                        </div>
                        <div className="tech-stack-items p-6 sm:p-8 lg:p-12 m-auto">
                            <i className="fa-brands fa-html5 scale-[3] sm:scale-[4] lg:scale-[5] text-slate-300 hover:text-slate-400"></i>
                        </div>
                        <div className="tech-stack-items p-6 sm:p-8 m-auto">
                            <i className="fa-brands fa-github scale-[3] sm:scale-[4] lg:scale-[5] text-slate-300 hover:text-slate-400"></i>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
