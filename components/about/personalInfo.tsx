import React, { ReactElement } from 'react';
import { FaEnvelopeOpenText, FaMapMarkerAlt, FaMobileAlt, FaRegCalendarAlt } from 'react-icons/fa';

import styles from './style.module.css';

// Define the type for each item in the data array
interface PersonalInfoItem {
    id: number;
    icon: ReactElement;
    iconColor: string;
    name: string;
    href?: string; // href is optional since it's not required for all items
    label: string;
}

// Data array with personal information
const data: PersonalInfoItem[] = [
    {
        id: 1,
        icon: <FaMobileAlt />,
        iconColor: "#F1A66D",
        name: "Phone",
        href: "tel:+381656848296",
        label: "+381 65 6848 296",
    },
    {
        id: 2,
        icon: <FaMapMarkerAlt />,
        iconColor: "#7B9A56",
        name: "Location",
        label: "Belgrade, Serbia",
    },
    {
        id: 3,
        icon: <FaEnvelopeOpenText />,
        iconColor: "#C7A7E4",
        name: "Email",
        href: "mailto:milos.milovanovic.la@gmail.com",
        label: "milos.milovanovic.la@gmail.com",
    },
    {
        id: 4,
        icon: <FaRegCalendarAlt />,
        iconColor: "#F4A300",
        name: "Birthday",
        label: "06.11.1992",
    },
];

export const PersonalInfo = () => {
    return (
        <>
            {data.map(({ iconColor, id, icon, name, href, label }) => (
                <div className={styles.personal} key={id}>
                    <span
                        className={styles.icon}
                        style={{ color: iconColor }}
                    >
                        {icon}
                    </span>
                    <div className={styles.right}>
                        <p className={styles.title}>
                            {name}
                        </p>
                        <p className={styles.subTitle}>
                            {href ? (
                                <a href={href}>{label}</a>
                            ) : (
                                <>{label}</>
                            )}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};