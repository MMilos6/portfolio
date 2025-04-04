"use client";

import Image from "next/image";
import Social from "../social/Social";
import styles from "./style.module.css";
import { useState, useEffect } from "react";

const Hero = () => {
    const avatars = [
        '/images/about/avatar.png',
        '/images/about/avatar2.PNG'
    ];

    const [currentAvatar, setCurrentAvatar] = useState('');

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
                    alt="hero image"
                    className={styles.avatarImage}
                    src={currentAvatar || '/images/about/avatar.png'}
                />
            </div>

            <h3 className={styles.name}>Miloš Milovanović</h3>
            <p className={styles.description}>Frontend Developer | Graphic Designer | Photographer</p>
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

export default Hero;