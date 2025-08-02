import React from 'react';

import { About, Service } from '@/features';
import { aboutQuery } from '@/groq';
import { client } from '@/sanity/lib/client';

import styles from './style.module.css';

export default async function Index() {
    try {
        const data = await client.fetch(aboutQuery());

        if (!data) {
            console.warn("Data not found");
            return null;
        }

        const { biography, profileImgSrc, services } = data;

        return (
            <div className={styles.container}>
                <div data-aos="fade">
                    <div className={styles.aboutSection}>
                        <About
                            email={biography.email}
                            phone={biography.phone}
                            about={biography.about}
                            address={biography.address}
                            lastName={biography.lastName}
                            birthday={biography.birthday}
                            profileImgSrc={profileImgSrc}
                            firstName={biography.firstName}
                        />
                    </div>
                    <div className={styles.serviceSection}>
                        <h3 className={styles.title}>My expertise</h3>
                        <div className={styles.serviceGrid}>
                            <Service services={services} />
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error("Failed to fetch hero data:", error);
        return null;
    }
};