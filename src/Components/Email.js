import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lef73im', 'template_yx0mabj', form.current, 'Rq-fOAWy3sRr_-CLR')
            .then((result) => {
                notify();
            }, (error) => {
                console.log("ERROR !!!");
            });
    };

    const notify = () => {
        toast.success('Mail sent successfully!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            }
        );
    }

    // const error = () => {
    //     toast.error('An error ocurred!', {
    //         position: "top-right",
    //         autoClose: 3000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: false,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "dark",
    //     });
    // }

    return (
        <form ref={form} onSubmit={sendEmail} className='flex flex-col justify-center items-center'>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"
            />

            <div className='flex justify-center items-center w-10/12 sm:m-1'>
                <label className='text-gray-300 font-CustomFont1 p-2  '>
                    Name
                </label>
                <input required className='p-1 rounded text-slate-800 text-sm w-10/12' type="text" name="user_name" />
            </div>
            <div className='flex justify-center items-center w-10/12 sm:m-1'>
                <label className='text-gray-300 font-CustomFont1 p-2  '>
                    Email
                </label>
                <input required className='p-1 rounded text-slate-800 text-sm w-10/12' type="email" name="user_email" />
            </div>
            <div className='flex flex-col justify-center items-stretch w-full sm:m-1 sm:w-3/4'>
                <label className='text-gray-300 font-CustomFont1 p-2 '>
                    Message :
                </label>
                <div className='m-auto flex justify-center items-center w-full sm:w-full'>
                    <textarea required className='p-1 rounded text-slate-800 text-sm w-10/12 sm:w-full' name="message" rows={5} />
                </div>
            </div>
            <div className='flex justify-center items-center sm:m-2'>
                <button className="bg-transparent hover:bg-blue-500 font-semibold text-xs sm:text-sm text-slate-800 bg-slate-200 hover:text-white p-2 sm:p-3 m-4 sm:m-5 border border-blue-500 hover:border-transparent rounded">
                    <input className=' font-CustomFont1 ' type="submit" value="Send" />
                </button>
            </div>
        </form>
    );
};