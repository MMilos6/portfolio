import "../styles/custom.css";
import "../styles/globals.css";
import Header from "@/components/header/Header";
import Providers from "./providers";
import metadataConfig from "../data/metadata";

export const metadata = metadataConfig;

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
