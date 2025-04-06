import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import styles from './style.module.css';

// Define the interface for the social content
interface SocialContent {
    id: number;
    link: string;
    icon: React.ReactNode;  // Use ReactNode for JSX element icons
    iconClass: string;
    label: string;
}

export const Links = () => {
    // Define social content data with type safety
    const socialContent: SocialContent[] = [
        {
            id: 1,
            link: "https://www.linkedin.com/in/milos--milovanovic/",
            icon: <FaLinkedinIn />,
            iconClass: styles.linkedinIcon,
            label: "LinkedIn Profile",
        },
        {
            id: 2,
            link: "https://github.com/Mmilos6",
            icon: <FaGithub />,
            iconClass: styles.githubIcon,
            label: "GitHub Profile",
        },
        {
            id: 3,
            link: "https://www.instagram.com/mosquito_junior/",
            icon: <FaInstagram />,
            iconClass: styles.instagramIcon,
            label: "Instagram Profile",
        },
    ];

    return (
        <>
            {socialContent.map((item) => (
                <a
                    key={item.id}
                    target="_blank"
                    href={item.link}
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className={styles.socialLink}
                >
                    <span className={`${styles.iconWrapper} ${item.iconClass}`}>
                        {item.icon}
                    </span>
                </a>
            ))}
        </>
    );
};