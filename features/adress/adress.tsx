import { ReactElement } from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';

import styles from './style.module.css';

// Define the shape of data items
interface ContactItem {
    id: string;
    icon: ReactElement;
    iconColor: string;
    href: string;
    label: string;
}

// Define the data array with type annotation
const data: ContactItem[] = [
    {
        id: "01",
        icon: <FaPhoneAlt />,
        iconColor: "#F1A66D",
        href: "tel:+381656848296",
        label: "+381 65 6848 296"
    },
    {
        id: "02",
        icon: <FaLinkedinIn />,
        iconColor: "#0077B5",
        href: "https://www.linkedin.com/in/milos--milovanovic/",
        label: "Milos Milovanovic"
    },
    {
        id: "03",
        icon: <FaGithub />,
        iconColor: "#545454",
        href: "https://github.com/Mmilos6",
        label: "MMilos6"
    },
    {
        id: "04",
        icon: <FaInstagram />,
        iconColor: "#E4405F",
        href: "https://www.instagram.com/mosquito_junior/",
        label: "mosquito_junior"
    },
];

export const Address = () => {
    return (
        <>
            {data.map(({ id, label, href, icon, iconColor }) => (
                <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactItem}
                >
                    <div className={styles.contactInfo}>
                        <div
                            className={styles.icon}
                            style={{ color: iconColor }}
                        >
                            {icon}
                        </div>
                        <span className={styles.label}>
                            {label}
                        </span>
                    </div>
                </a>
            ))}
        </>
    );
};