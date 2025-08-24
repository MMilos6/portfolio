import type { Metadata } from "next";
import './globals.css';

import { Poppins } from 'next/font/google';

import { Header } from '@/features';
import { Analytics } from '@vercel/analytics/next';

import Providers from './providers';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.milosmilovanovic.rs"),
    title: "Miloš Milovanović - Frontend Developer Profile",
    description: "Discover the professional journey of Miloš Milovanović, a frontend developer with expertise in React, Next.js, and cutting-edge web technologies.",
    openGraph: {
        title: "Miloš Milovanović - Frontend Developer Profile",
        description: "Discover the professional journey of Miloš Milovanović, a frontend developer with expertise in React, Next.js, and cutting-edge web technologies.",
        images: [
            {
                url: "/about/meta-image.png",
                width: 1200,
                height: 630,
                alt: "Miloš Milovanović - Frontend Developer Profile"
            }
        ],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Miloš Milovanović - Frontend Developer Profile",
        description: "Discover the professional journey of Miloš Milovanović, a frontend developer with expertise in React, Next.js, and cutting-edge web technologies.",
        images: ["/about/meta-image.png"]
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="theme-color" content="#111111" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-app-capable" content="yes" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={`${poppins.variable}`}>
                <div className="mainContainer">
                    <Header />
                    <Providers>{children}</Providers>
                </div>
                <Analytics />
            </body>
        </html>
    );
}
