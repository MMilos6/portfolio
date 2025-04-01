"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Providers({ children }) {
    useEffect(() => {
        AOS.init({ duration: 1200 });
        AOS.refresh();
    }, []);

    return <>{children}</>;
}