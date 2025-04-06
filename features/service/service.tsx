import React from 'react';

import { getRandomColors, iconsMap } from '@/shared';

import styles from './style.module.css';
import { IServicesProps } from './type/type';

export const Service = ({ services }: IServicesProps) => {
    const colors = getRandomColors(services.length);
    return (
        <>
            {services.map(({ icon, title, description }, index) => {
                const IconComponent = iconsMap[icon];

                if (!IconComponent) {
                    return null;
                }

                const iconColor = colors[index]

                return (
                    <div
                        className={styles.service}
                        key={index}
                    >
                        <span
                            className={styles.icon}
                            style={{ color: iconColor }}
                        >
                            <IconComponent />
                        </span>

                        <div className={styles.serviceInfo}>
                            <h3 className={styles.title}>
                                {title}
                            </h3>
                            <p className={styles.info}>
                                {description}
                            </p>
                        </div>
                    </div>
                );
            })}
        </>
    );
};
