import dynamic from 'next/dynamic';
import { contactQuery } from '@/groq';
import { client } from '@/sanity/lib/client';

import styles from './style.module.css';

const Form = dynamic(() => import('@/features').then(mod => ({ default: mod.Form })), {
    loading: () => <div style={{ minHeight: '400px' }}>Loading form...</div>,
    ssr: true
});

const Links = dynamic(() => import('@/features').then(mod => ({ default: mod.Links })), {
    ssr: true
});

export default async function Index() {
    try {
        const data = await client.fetch(contactQuery(), {}, {
            next: { revalidate: 86400 }
        });

        if (!data) {
            console.warn("Data not found");
            return null;
        }

        const { links, phone } = data;

        return (
            <div className={styles.mainContainer}>
                <div data-aos="fade">
                    <div className={styles.contentWrapper}>
                        <div className={styles.flexContainer}>
                            <div className={styles.addressWrapper}>
                                <Links links={links} phone={phone} type='2'/>
                            </div>
                            <div className={styles.formWrapper}>
                                <Form />
                            </div>
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