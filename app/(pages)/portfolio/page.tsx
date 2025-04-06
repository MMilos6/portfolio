import { Works } from '@/features';

import styles from './style.module.css';

export default function Index() {
    return (
        <div className={styles.container}>
            <div data-aos="fade">
                <div className={styles.inner}>
                    <div className={styles.works}>
                        <Works />
                    </div>
                </div>
            </div>
        </div>
    );
};