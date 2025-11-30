import Image from 'next/image';
import React from 'react';

import fallbackImgSrc from '../../public/about/falback.png';
import { PersonalInfo } from './personalInfo';
import styles from './style.module.css';
import { IAboutProps } from './type/type';

export const About = ({
    about,
    email,
    phone,
    address,
    birthday,
    lastName,
    firstName,
    profileImgSrc,
}: IAboutProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <Image
                    width={300}
                    height={400}
                    className={styles.image}
                    src={profileImgSrc || fallbackImgSrc}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 300px"
                    alt={`${firstName} ${lastName}` || 'Profile Image'}
                />
            </div>
            <div className={styles.aboutWrapper}>
                {about && (
                    <div className={styles.top}>
                        <h3 className={styles.title}>Who am I?</h3>
                        {about.split('\n').map((line, i) => (
                            <p className={styles.desc} key={i}>
                                {line}
                            </p>
                        ))}
                    </div>
                )}
                <div>
                    <h3 className={styles.personalTitle}>Personal Info</h3>
                    <div className={styles.personalWrapper}>
                        <PersonalInfo
                            email={email}
                            phone={phone}
                            address={address}
                            birthday={birthday}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
