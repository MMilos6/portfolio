"use client";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useRef, useState } from "react";

const CommonContact = ({ condition }) => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true)
        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result);
                    toast.success("Message Sent successfully!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'dark',
                        className:'success'
                    });
                    document.getElementById("myForm").reset();
                    setIsLoading(false)
                },
                (error) => {
                    toast.error("Ops Message not Sent!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setIsLoading(false)
                }
            );
    };

    return (
        <div
            className={`relative overflow-hidden ${condition
                ? "mx-4 md:mx-[60px] p-4 md:p-16  border-[#101010]  border-2"
                : "   border-[#101010]  border-2  md:p-[48px]  p-4  "
                } rounded-xl  bg-[#0c0c0c] `}
        >
            {isLoading && (
                <div className="absolute inset-0 backdrop-blur-sm bg-black/50 z-10 flex items-center justify-center">
                    <span className="text-2xl text-[#3d6037]">Sending...</span>
                </div>
            )}

            <h3 className="text-4xl  ">
                <span className="font-semibold  text-white ">
                    Code. <span className="text-[#3d6037]">Design.</span> Capture.
                </span>
                <br />
                <span className="text-[#A6A6A6]">
                    Let&apos;s create something awesome!
                </span>
            </h3>
            <form id="myForm" ref={form} onSubmit={sendEmail}>
                <div className="relative z-0 w-full mt-[40px] mb-8 group">
                    <input
                        id="name"
                        type="text"
                        name="name"
                        className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm   bg-transparent border-0 border-b-[2px]  appearance-none  text-white  border-[#333333]  focus:border-[#3d6037] focus:outline-none focus:ring-0 focus:border-[#3d6037] peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#3d6037] peer-focus: text-[#3d6037] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                    >
                        Name *
                    </label>
                </div>
                <div className="relative z-0 w-full mb-8 group">
                    <input
                        type="email"
                        name="user_email"
                        className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm   bg-transparent border-0 border-b-[2px] appearance-none  text-white  border-[#333333]  focus:border-[#3d6037] focus:outline-none focus:ring-0 focus:border-[#3d6037] peer"
                        placeholder=" "
                        id="user_email"
                        required
                    />
                    <label
                        htmlFor="user_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#3d6037] peer-focus: text-[#3d6037] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                    >
                        Email *
                    </label>
                </div>

                <div className="relative z-0 w-full mb-8 group">
                    <input
                        type="text"
                        name="message"
                        className="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm   bg-transparent border-0 border-b-[2px] appearance-none  text-white  border-[#333333]  focus:border-[#3d6037] focus:outline-none focus:ring-0 focus:border-[#3d6037] peer"
                        placeholder=" "
                        id="message"
                        required
                    />
                    <label
                        htmlFor="message"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#3d6037] peer-focus: text-[#3d6037] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                    >
                        Message *
                    </label>
                </div>
                <div className="transition-all duration-300  ease-in-out inline-block bg-[#101010] hover:bg-gradient-to-r from-[#3d6037] to-[#182f17] rounded-lg  mt-3">
                    <input
                        type="submit"
                        className=" transition ease-in duration-200 font-semibold cursor-pointer px-6  py-2 rounded-lg  hover:text-white    text-white "
                        value="Submit"
                    />
                </div>
            </form>
        </div>
    );
};

export default CommonContact;