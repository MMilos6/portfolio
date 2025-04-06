
import { Resume, TechStack } from '@/features';
import { resumeQuery } from '@/groq';
import { client } from '@/sanity/lib/client';

import styles from './style.module.css';

export default async function Index() {
    try {
        const data = await client.fetch(resumeQuery());

        if (!data) {
            console.warn("Data not found");
            return null;
        }

        const { education, personal, workExperience, techStack } = data;

        return (
            <div className={styles.mainContainer}>
                <div data-aos="fade">
                    <div className={styles.innerContainer}>
                        <div className={styles.resumeSection}>
                            <div className={styles.resumeGrid}>
                                <Resume
                                    personal={personal}
                                    education={education}
                                    workExperience={workExperience}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.toolsSection}>
                        <div className={styles.toolsContent}>
                            <h4 className={styles.title}>
                                Tools & Tech I&apos;ve used in projects
                            </h4>

                            <div className={styles.tagsContainer}>
                                <TechStack techStack={techStack}/>
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