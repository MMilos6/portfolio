"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Social } from '@/components';

import styles from './style.module.css';

const avatars = [
    "/about/avatar.webp",
    "/about/avatar2.webp",
];

export const Hero = () => {
    const [currentAvatar, setCurrentAvatar] = useState<string>("");

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * avatars.length);
        setCurrentAvatar(avatars[randomIndex]);
    }, []);

    return (
        <div className={styles.heroContainer} data-aos="fade">
            <div className={styles.avatarWrapper}>
                <Image
                    priority
                    width={250}
                    height={250}
                    alt="Miloš Milovanović avatar"
                    className={styles.avatarImage}
                    src={currentAvatar || avatars[0]}
                />
            </div>

            <h3 className={styles.name}>Miloš Milovanović</h3>
            <p className={styles.description}>
                Frontend Developer | Graphic Designer | Photographer
            </p>

            <div className={styles.socialWrapper}>
                <Social />
            </div>

            <a
                download
                className={styles.downloadButton}
                href="/images/CV_Milos_Milovanovic.pdf"
            >
                Download CV
            </a>
        </div>
    );
};
