import Link from 'next/link';

import styles from '../style.module.css';

export default function Index() {
    return (
        <div className={styles.container}>
            <div data-aos="fade">
                <div className={styles.inner}>
                    <Link href="/work" style={{ color: '#fff' }}>
                        ← Back to all works
                    </Link>

                    <h1 style={{ color: '#fff' }}>TEST PROJECT</h1>
                </div>
            </div>
        </div>
    );
}
