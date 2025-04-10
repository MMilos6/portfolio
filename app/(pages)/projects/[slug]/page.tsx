import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Project } from '@/features';
import { projectQuery } from '@/groq';
import { client } from '@/sanity/lib/client';

import styles from '../style.module.css';

interface ProjectPageProps {
    params: Promise<{ slug: string }>
  }

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;

    try {
        const project = await client.fetch(projectQuery(slug));

        if (!project) return {};

        return {
            title: `${project.seoTitle}`,
            description: project.seoDescription,
            openGraph: {
                title: project.seoTitle,
                description: project.seoDescription,
                images: [
                    {
                        url: project.mainImage,
                        width: 1200,
                        height: 630,
                        alt: project.seoTitle,
                    },
                ],
            },
            twitter: {
                card: 'summary_large_image',
                title: project.seoTitle,
                description: project.seoDescription,
                images: [project.mainImage],
            },
        };
    } catch (error) {
        console.error('Error generating metadata:', error);
        return {};
    }
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

        return (
            <div className={styles.container}>
                <div data-aos="fade">
                    <div className={styles.inner}>
                        <Link href="/projects">
                            ← Back to all works
                        </Link>
                        <Project project={project} />
                        <Link className={styles.mobileLink} href="/projects">
                            ← Back to all works
                        </Link>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error fetching project:', error);
        return notFound();
    }
}