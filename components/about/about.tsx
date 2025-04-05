import Image from 'next/image';
import React from 'react';

import aboutImageSrc from '../../public/about/about.jpg';
import { PersonalInfo } from './personalInfo';
import styles from './style.module.css';

// Define an interface for the data object
interface AboutData {
    title: string;
    paragraphOne: string;
    paragraphTwo: string;
}

const data: AboutData = {
    title: 'Who am I?',
    paragraphOne: `Hi, I'm 32 years old with over six years of experience as a software developer, primarily focused on frontend development, along with expertise in UI/UX design and photography. I have an excellent command of verbal and written English.`,
    paragraphTwo: 'I currently live in Belgrade. Passionate about self-improvement, I love exploring new technologies, tackling challenges, and putting in great effort to deliver high-quality products.',
};

export const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <Image
                    width={300}
                    height={400}
                    alt="routePath"
                    src={aboutImageSrc}
                    className={styles.image}
                />
            </div>
            <div className={styles.aboutWrapper}>
                <div className={styles.top}>
                    <h3 className={styles.title}>
                        {data.title}
                    </h3>
                    <p className={styles.descTop}>
                        {data.paragraphOne}
                    </p>
                    <p className={styles.descBottom}>
                        {data.paragraphTwo}
                    </p>
                </div>
                <div>
                    <h3 className={styles.personalTitle}>
                        Personal Info
                    </h3>
                    <div className={styles.personalWrapper}>
                        <PersonalInfo />
                    </div>
                </div>
            </div>
        </div>
    );
};