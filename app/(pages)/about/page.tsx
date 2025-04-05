import React from 'react';

import { About, Service } from '@/components';

// import About from "@/components/about";
// import Service from "@/components/service/Service";
import styles from './style.module.css';

export default function Index() {
    return (
        <div className={styles.container}>
            <div data-aos="fade">
                <div className={styles.aboutSection}>
                    <About />
                </div>
                <div className={styles.serviceSection}>
                    <h3 className={styles.title}>My expertise</h3>
                    <div className={styles.serviceGrid}>
                        <Service />
                    </div>
                </div>
            </div>
        </div>
    );
};
