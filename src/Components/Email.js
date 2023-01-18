import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lef73im', 'template_yx0mabj', form.current, 'Rq-fOAWy3sRr_-CLR')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className='flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center'>
                <label className='text-gray-300 font-CustomFont1 p-2 '>
                    Name
                </label>
                <input className='p-1 rounded text-slate-800 text-sm w-10/12' type="text" name="user_name" />
            </div>
            <div className='flex justify-center items-center'>
                <label className='text-gray-300 font-CustomFont1 p-2 '>
                    Email
                </label>
                <input className='p-1 rounded text-slate-800 text-sm w-10/12' type="email" name="user_email" />
            </div>
            <div className='flex flex-col justify-center items-stretch'>
                <label className='text-gray-300 font-CustomFont1 p-2 '>
                    Message :
                </label>
                <div className='m-auto flex justify-center items-center'>
                    <textarea className='p-1 rounded text-slate-800 text-sm w-10/12' name="message" rows={5} cols={40} />
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <button class="bg-transparent hover:bg-blue-500 font-semibold text-xs text-slate-800 bg-slate-200 hover:text-white p-2 m-4 border border-blue-500 hover:border-transparent rounded">
                    <input className=' font-CustomFont1 ' type="submit" value="Send" />
                </button>
            </div>
        </form>
    );
};