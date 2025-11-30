import dynamic from 'next/dynamic';
import { projectsQuery } from '@/groq';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import styles from './style.module.css';

const Projects = dynamic(() => import('@/features').then(mod => ({ default: mod.Projects })), {
    loading: () => <div style={{ minHeight: '400px' }}>Loading projects...</div>,
    ssr: true
});

interface ProjectFromQuery {
    id: string;
    projectName: string;
    projectYear: string;
    slug: string;
    tags: string[];
    imageAsset: SanityImageSource | null;
}

export default async function Index() {
    try {
        const projects = await client.fetch<ProjectFromQuery[]>(projectsQuery(), {}, {
            next: { revalidate: 86400 }
        });

        if (!projects) {
            console.warn("Data not found");
            return null;
        }

        const optimizedProjects = projects.map((project) => ({
            ...project,
            image: project.imageAsset 
                ? urlFor(project.imageAsset, { width: 600, height: 400, quality: 85 })?.url() || ''
                : ''
        }));

        return (
            <div className={styles.container}>
                <div data-aos="fade">
                    <div className={styles.inner}>
                        <Projects projects={optimizedProjects} />
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error("Failed to fetch hero data:", error);
        return null;
    }
};