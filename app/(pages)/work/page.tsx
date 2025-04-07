import { Works } from '@/features';

import styles from './style.module.css';

export default function Index() {
    return (
        <div className={styles.container}>
            <div data-aos="fade">
                <div className={styles.inner}>
                    <Works />
                </div>
            </div>
        </div>

    );
};