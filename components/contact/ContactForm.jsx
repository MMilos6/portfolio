"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CommonContact = ({ condition }) => {
    const form = useRef();

    // use Email js for recive message

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_n4mkhz9",
                "template_ugoztxr",
                form.current,
                "user_vYmDSd9PwIuRXUQEDjYwN"
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
                    });
                    document.getElementById("myForm").reset();
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
                }
            );
    };

    return (
        <div
            className={`${condition
                ? "mx-4 md:mx-[60px] p-4 md:p-16  border-[#212425]  border-2"
                : "   border-[#212425]  border-2 mb-16  md:p-[48px]  p-4  "
                } rounded-xl  bg-[#111111] mb-[30px] md:mb-[60px]`}
        >
            <h3 className="text-4xl  ">
                <span className="font-semibold  text-white ">
                    Design. Code. Capture.
                </span>
                <br />
                <span className="text-[#A6A6A6]">
                    Let&apos;s create something awesome!
                </span>
            </h3>
            <form id="myForm" ref={form} onSubmit={sendEmail}>
                <div className="relative z-0 w-full mt-[40px] mb-8 group">
                    <input
                        type="text"
                        name="name"
                        className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm   bg-transparent border-0 border-b-[2px]  appearance-none  text-white  border-[#333333]  focus:border-[#2E8B57] focus:outline-none focus:ring-0 focus:border-[#2E8B57] peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#2E8B57] peer-focus: text-[#2E8B57] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                    >
                        Name *
                    </label>
                </div>
                <div className="relative z-0 w-full mb-8 group">
                    <input
                        type="email"
                        name="user_email"
                        className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm   bg-transparent border-0 border-b-[2px] appearance-none  text-white  border-[#333333]  focus:border-[#2E8B57] focus:outline-none focus:ring-0 focus:border-[#2E8B57] peer"
                        placeholder=" "
                        id="user_email"
                        required
                    />
                    <label
                        htmlFor="user_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#2E8B57] peer-focus: text-[#2E8B57] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                    >
                        Email *
                    </label>
                </div>

                <div className="relative z-0 w-full mb-8 group">
                    <input
                        type="text"
                        name="message"
                        className="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm   bg-transparent border-0 border-b-[2px] appearance-none  text-white  border-[#333333]  focus:border-[#2E8B57] focus:outline-none focus:ring-0 focus:border-[#2E8B57] peer"
                        placeholder=" "
                        id="message"
                        required
                    />
                    <label
                        htmlFor="message"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#2E8B57] peer-focus: text-[#2E8B57] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                    >
                        Message *
                    </label>
                </div>
                <div className="transition-all duration-300  ease-in-out inline-block hover:bg-gradient-to-r from-[#2E8B57] to-[#3a9f3a] rounded-lg  mt-3">
                    <input
                        type="submit"
                        className=" transition ease-in duration-200 font-semibold cursor-pointer border-color-910   hover:border-transparent px-6  py-2 rounded-lg border-[2px]  hover:text-white    text-white "
                        value="Submit"
                    />
                </div>
            </form>
        </div>
    );
};

export default CommonContact;