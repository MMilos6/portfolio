import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { projectQuery } from '@/groq';
import { client } from '@/sanity/lib/client';

import styles from '../style.module.css';

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
        const data = await client.fetch(projectQuery(slug));

        if (!data) {
            return notFound();
        }

        return (
            <div className={styles.container}>
                <div data-aos="fade">
                    <div className={styles.inner} style={{ color: '#fff' }}>
                        <Link href="/projects">
                            ← Back to all works
                        </Link>
                        <h1>{data.projectName}</h1>
                        <Image
                            width={400}
                            height={300}
                            src={data.mainImage}
                            alt={data.projectName}
                        />
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error fetching project:', error);
        return notFound();
    }
}