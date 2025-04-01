import "../styles/custom.css";
import "../styles/globals.css";
import Header from "@/components/header/Header";
import Providers from "./providers";

export const metadata = {
    metadataBase: new URL("https://www.milosmilovanovic.rs"),
    title: "Miloš Milovanović - Frontend Developer Profile",
    description: "Discover the professional journey of Miloš Milovanović, a frontend developer with expertise in React, Next.js, and cutting-edge web technologies.",
    openGraph: {
        title: "Miloš Milovanović - Frontend Developer Profile",
        description: "Discover the professional journey of Miloš Milovanović, a frontend developer with expertise in React, Next.js, and cutting-edge web technologies.",
        images: [
            {
                url: "/images/about/meta-image.png",
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
        images: ["/images/about/meta-image.png"]
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="theme-color" content="#111111" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-app-capable" content="yes" />
            </head>
            <body>
                <div className="bg-homeBg min-h-screen bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
                    <Header />
                    <Providers>{children}</Providers>
                </div>
            </body>
        </html>
    );
}
