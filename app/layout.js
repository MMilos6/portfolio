"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/custom.css";
import "../styles/globals.css";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import Header from "@/components/header/Header";

export default function RootLayout({ children }) {
    useEffect(() => {
        AOS.init({ duration: 1200 });
        AOS.refresh();
    }, []);

    return (
        <html lang="en">
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
                {/* <ThemeProvider attribute="class"> */}
                    <div className="bg-homeBg min-h-screen bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
                        <Header />
                        {children}
                    </div>
                {/* </ThemeProvider> */}
            </body>
        </html>
    );
}
