import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

import { Project } from '@/features';
import { projectQuery } from '@/groq';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

import styles from '../style.module.css';

interface ProjectPageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;

    try {
        const project = await client.fetch(projectQuery(slug), {}, {
            next: { revalidate: 86400 }
        });

        if (!project) return {};

        const mainImage = project.imageAsset 
            ? urlFor(project.imageAsset, { width: 1200, height: 630, quality: 90 })?.url() || ''
            : '';

        return {
            title: `${project.seoTitle}`,
            description: project.seoDescription,
            openGraph: {
                title: project.seoTitle,
                description: project.seoDescription,
                images: [
                    {
                        url: mainImage,
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
                images: [mainImage],
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
        const project = await client.fetch(projectQuery(slug), {}, {
            next: { revalidate: 86400 }
        });

        if (!project) {
            return notFound();
        }

        const optimizedProject = {
            ...project,
            image: project.imageAsset 
                ? urlFor(project.imageAsset, { width: 644, height: 432, quality: 90 })?.url() || ''
                : ''
        };

        return (
            <div className={styles.container}>
                <div data-aos="fade">
                    <div className={styles.inner}>
                        <Link href="/projects">
                            <FaArrowLeft /> Back to all works
                        </Link>
                        <Project project={optimizedProject} />
                        <Link className={styles.mobileLink} href="/projects">
                            <FaArrowLeft /> Back to all works
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