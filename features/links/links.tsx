import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

import { useLinks } from './hooks/useLinks';
import styles from './style.module.css';
import { ILinksData } from './type/type';

export const Links = ({ links, phone, type = '1' }: ILinksData) => {
    const linkItems = useLinks(links);

    if (!linkItems) return null;

    const renderContactLinks = () => (
        <>
            <a
                href={`tel:${phone}`}
                target="_blank"
                aria-label={phone}
                rel="noopener noreferrer"
                className={styles.contactItem}
            >
                <div className={styles.contactInfo}>
                    <div className={`${styles.icon} ${styles.phone}`}>
                        <FaPhoneAlt />
                    </div>
                    <span className={styles.label}>{phone}</span>
                </div>
            </a>
            {linkItems.map(({ key, href, label, IconComponent }) => (
                <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={styles.contactItem}
                >
                    <div className={styles.contactInfo}>
                        <div className={`${styles.icon} ${styles[key]}`}>
                            <IconComponent />
                        </div>
                        <span className={styles.label}>{label}</span>
                    </div>
                </a>
            ))}
        </>
    );

    const renderSocialLinks = () => (
        <>
            {linkItems.map(({ key, href, label, IconComponent }) => (
                <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={styles.socialLink}
                >
                    <span className={`${styles.iconWrapper} ${styles[key]}`}>
                        <IconComponent />
                    </span>
                </a>
            ))}
        </>
    );

    return type === '2' ? renderContactLinks() : renderSocialLinks();
};