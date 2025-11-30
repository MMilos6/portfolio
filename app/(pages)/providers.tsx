"use client";

import 'aos/dist/aos.css';

import AOS from 'aos';
import { ReactNode, useEffect, useRef } from 'react';

interface ProvidersProps {
    children: ReactNode;
}

let aosInitialized = false;

export default function Providers({ children }: ProvidersProps) {
    const initRef = useRef(false);

    useEffect(() => {
        if (!aosInitialized && !initRef.current) {
            AOS.init({ 
                duration: 1200,
                once: true,
                offset: 100,
                easing: 'ease-out-cubic',
            });
            aosInitialized = true;
            initRef.current = true;
        }
    }, []);

    return <>{children}</>;
}