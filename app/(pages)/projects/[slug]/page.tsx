import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { projectQuery } from '@/groq';
import { client } from '@/sanity/lib/client';

import styles from '../style.module.css';

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

export default async function Index({ params }: ProjectPageProps) {
    const data = await client.fetch(projectQuery(params.slug));

    if (!data) {
        notFound();
    }

    return (
        <div className={styles.container}>
            <div data-aos="fade">
                <div className={styles.inner}>
                    <Link href="/projects" style={{ color: '#fff' }}>
                        ← Back to all works
                    </Link>

                    <h1 style={{ color: '#fff' }}>
                        {data.projectName}
                    </h1>
                    <Image
                        width={300}
                        height={200}
                        src={data.mainImage}
                        alt={data.projectName}
                    />
                </div>
            </div>
        </div>
    );
}
