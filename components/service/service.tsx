import { ReactElement } from 'react';
import {
    FaCamera, FaGitAlt, FaHeadset, FaNodeJs, FaPaintBrush, FaReact, FaSearch, FaTachometerAlt
} from 'react-icons/fa';

import styles from './style.module.css';

// Define the type for each service item
interface ServiceItem {
    id: string;
    icon: ReactElement;
    title: string;
    des: string;
    color: string;
}

const data: ServiceItem[] = [
    {
        id: "1",
        icon: <FaReact />,
        title: "Frontend Development",
        des: "Building high-performance web applications with React, Next.js, TypeScript, and modern frontend technologies.",
        color: "#7B9A56",
    },
    {
        id: "2",
        icon: <FaHeadset />,
        title: "Headless CMS & eCommerce",
        des: "Working with Sanity CMS, Payload CMS and Shopify to build scalable and flexible web solutions.",
        color: "#F1A66D",
    },
    {
        id: "3",
        icon: <FaTachometerAlt />,
        title: "Performance Optimization",
        des: "Improving Core Web Vitals with code splitting, lazy loading, and image optimization for a fast user experience.",
        color: "#F4A300",
    },
    {
        id: "4",
        icon: <FaPaintBrush />,
        title: "UI/UX Design",
        des: "Creating visually appealing and user-friendly interfaces with Figma, Adobe XD, and modern design principles.",
        color: "#C7A7E4",
    },
    {
        id: "5",
        icon: <FaGitAlt />,
        title: "Version Control & CI/CD",
        des: "Managing code efficiently with Git, GitHub, GitLab, and automating deployments using Vercel and Netlify.",
        color: "#9C8D4F",
    },
    {
        id: "6",
        icon: <FaSearch />,
        title: "SEO & Web Accessibility",
        des: "Enhancing website visibility with SEO best practices and ensuring accessibility compliance (WCAG, a11y).",
        color: "#F4D03F",
    },
    {
        id: "7",
        icon: <FaNodeJs />,
        title: "Backend & APIs",
        des: "Developing and integrating REST APIs, GraphQL, and Serverless functions with Node.js and Firebase.",
        color: "#5C4B51",
    },
    {
        id: "8",
        icon: <FaCamera />,
        title: "Photography",
        des: "Capturing moments with a keen eye for composition, lighting, and post-processing in Photoshop and Lightroom.",
        color: "#E6A5D7",
    }
];

// Use the ServiceItem type to ensure type safety for each item
export const Service = () => {
    return (
        <>
            {data.map(({id, color, icon, title, des}) => (
                <div
                    className={styles.service}
                    key={id}
                >
                    <span
                        className={styles.icon}
                        style={{color: color}}
                    >
                        {icon}
                    </span>

                    <div className={styles.serviceInfo}>
                        <h3 className={styles.title}>
                            {title}
                        </h3>
                        <p className={styles.info}>
                            {des}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};