import React from 'react';

import { useLinks } from './hooks/useLinks';
import styles from './style.module.css';
import { ILinksData } from './type/type';

export const Links = ({ links }: ILinksData) => {
    const linkItems = useLinks(links);

    if (!linkItems) return null;

    return (
        <>
            {linkItems.map(({ key, href, label, IconComponent }) => (
                <a
                    key={key}
                    target="_blank"
                    href={href}
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
};