"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Links } from '@/components';

import styles from './style.module.css';

interface IAvatarsProps {
    avatar1Src: string;
    avatar2Src?: string;
}

export interface IHeroProps {
    files?: string[];
    lastName: string;
    position: string;
    firstName: string;
    avatars: IAvatarsProps;
}

export const Hero = ({ firstName, lastName, position, avatars, files }: IHeroProps) => {
    const [currentAvatar, setCurrentAvatar] = useState<string>("");

    useEffect(() => {
        const avatarUrls = [avatars.avatar1Src];

        if (avatars.avatar2Src) {
            avatarUrls.push(avatars.avatar2Src);
        }

        const randomAvatar = avatarUrls[Math.floor(Math.random() * avatarUrls.length)];
        setCurrentAvatar(randomAvatar);
    }, [avatars]);

    return (
        <div className={styles.heroContainer} data-aos="fade">
            <div className={styles.avatarWrapper}>
                {currentAvatar && <Image
                    priority
                    width={250}
                    height={250}
                    alt={`${firstName} ${lastName} avatar`}
                    className={styles.avatarImage}
                    src={currentAvatar}
                />}
            </div>

            <h3 className={styles.name}>{firstName} {lastName}</h3>
            <p className={styles.description}>{position}</p>

            <div className={styles.socialWrapper}>
                <Links />
            </div>

            {files && (
                <div className={styles.downloadWrapper}>
                    {files.map((fileUrl, index) => (
                        <a
                            key={index}
                            download
                            className={styles.downloadButton}
                            href={fileUrl}
                        >
                            Download CV
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};
