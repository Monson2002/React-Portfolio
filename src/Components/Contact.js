import React from 'react'
import Email from './Email'

export default function Contact() {
    return (
        <>
            <main className='contact-us w-screen bg-gray-800 flex flex-col justify-evenly items-center' id='contact-us'>
                <section className='heading m-2 w-11/12'>
                    <h1 className='p-2 my-8 text-gray-300 font-CustomFont1 text-2xl underline underline-offset-4 decoration-pink-500 text-center'>
                        Mail Me
                    </h1>
                </section>
                <section className='content w-screen'>
                    <Email/>
                </section>
            </main>
        </>
    )
}
