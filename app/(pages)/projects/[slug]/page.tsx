import Link from 'next/link';
import { notFound } from 'next/navigation';

import { projectQuery } from '@/groq';
import { client } from '@/sanity/lib/client';

import styles from '../style.module.css';
import { Project } from '@/features';

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;

    if (!slug) {
        return notFound();
    }

    try {
        const project = await client.fetch(projectQuery(slug));

        if (!project) {
            return notFound();
        }

        console.log(project)

        return (
            <div className={styles.container}>
                <div data-aos="fade">
                    <div className={styles.inner}>
                        <Link href="/projects">
                            ← Back to all works
                        </Link>
                        <Project project={project} />
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error fetching project:', error);
        return notFound();
    }
}