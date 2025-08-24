"use client";

import 'aos/dist/aos.css';

import AOS from 'aos';
import { ReactNode, useEffect } from 'react';

interface ProvidersProps {
    children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    useEffect(() => {
        AOS.init({ duration: 1200 });
        AOS.refresh();
    }, []);

    return <>{children}</>;
}