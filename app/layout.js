"use client";

import "../styles/custom.css";
import "../styles/globals.css";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Header from "@/components/header/Header";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RootLayout({ children }) {
    useEffect(() => {
        AOS.init({ duration: 1200 });
        AOS.refresh();
    }, []);

    return (
        <html lang="en">
            <head>
                <meta name="theme-color" content="#111111" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
            </head>
            <body>
                <ToastContainer
                    draggable
                    rtl={false}
                    pauseOnHover
                    closeOnClick
                    autoClose={2000}
                    pauseOnFocusLoss
                    newestOnTop={false}
                    position="top-right"
                    hideProgressBar={false}
                />
                <div className="bg-homeBg min-h-screen bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    );
}
