import Providers from "./providers";
import metadataConfig from "../data/metadata";
import Header from "@/components/header/Header";
import "./style.css";

export const metadata = metadataConfig;

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="theme-color" content="#111111" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-app-capable" content="yes" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </head>
            <body>
                <div className="mainContainer">
                    <Header />
                    <Providers>{children}</Providers>
                </div>
            </body>
        </html>
    );
}
