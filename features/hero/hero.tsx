"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Links } from '@/features';

import styles from './style.module.css';
import { IHeroProps } from './type/type';

export const Hero = ({ firstName, lastName, position, avatars, files, links }: IHeroProps) => {
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
                    src={currentAvatar}
                    className={styles.avatarImage}
                    alt={`${firstName} ${lastName} avatar`}
                />}
            </div>

            <h3 className={styles.name}>{firstName} {lastName}</h3>
            <p className={styles.description}>{position}</p>

            <div className={styles.socialWrapper}>
                <Links links={links} />
            </div>

            {files && (
                <div className={styles.downloadWrapper}>
                    {files.map((fileUrl, index) => (
                        <a
                            download
                            key={index}
                            href={fileUrl}
                            className={styles.downloadButton}
                        >
                            Download CV
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};
