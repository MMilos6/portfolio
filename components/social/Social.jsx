import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import styles from "./style.module.css";

const Social = () => {
    const socialContent = [
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

export default Social;
