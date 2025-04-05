import { Address, Form } from '@/components';

import styles from './style.module.css';

export default function Index() {
    return (
        <div className={styles.mainContainer}>
            <div data-aos="fade">
                <div className={styles.contentWrapper}>
                    <div className={styles.flexContainer}>
                        <div className={styles.addressWrapper}>
                            <Address />
                        </div>
                        <div className={styles.formWrapper}>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};