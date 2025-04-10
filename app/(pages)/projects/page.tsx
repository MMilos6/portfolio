import { Projects } from '@/features';
import { projectsQuery } from '@/groq';
import { client } from '@/sanity/lib/client';

import styles from './style.module.css';

export default async function Index() {
    try {
        const projects = await client.fetch(projectsQuery());

        if (!projects) {
            console.warn("Data not found");
            return null;
        }

        return (
            <div className={styles.container}>
                <div data-aos="fade">
                    <div className={styles.inner}>
                        <Projects projects={projects} />
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error("Failed to fetch hero data:", error);
        return null;
    }
};