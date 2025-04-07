'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import projectImgSrc from './data/projectImage.png';
import styles from './style.module.css';

const portfolioData = [
    {
        id: '1',
        tag: 'Photography',
        title: 'Minimalist Architecture',
    },
    {
        id: '2',
        tag: 'Development',
        title: 'E-commerce Platform',
    },
    {
        id: '3',
        tag: 'Design',
        title: 'di Bolazo',
    },
    {
        id: '4',
        tag: 'Design',
        title: 'Corporate Website Redesign',
    },
    {
        id: '5',
        tag: 'Design',
        title: 'Mobile App UI Kit',
    },
    {
        id: '6',
        tag: 'Development',
        title: 'Street Portraits Collection',
    },
    {
        id: '7',
        tag: 'Development',
        title: 'Modern Web App UI',
    },
    {
        id: '8',
        tag: 'Photography',
        title: 'Urban Nightlife Series',
    },
    {
        id: '9',
        tag: 'Development',
        title: 'Interactive Landing Page',
    }
];

export const Works = () => {
    const [selectedTag, setSelectedTag] = useState('All');

    const uniqueTags = ['All', ...new Set(portfolioData.map(item => item.tag))];

    const filterPortfolioData = (tag: string) => {
        if (tag === 'All') return portfolioData;
        return portfolioData.filter(item => item.tag === tag);
    };

    const filteredData = filterPortfolioData(selectedTag);

    return (
        <div className={styles.container}>
            <div className={styles.tagWrapper}>
                {uniqueTags.map(tag => (
                    <button
                        key={tag}
                        className={`${styles.tagBtn} ${tag === selectedTag ? styles.tagBtnActive : ''}`}
                        onClick={() => setSelectedTag(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div className={styles.workGrid}>
                {filteredData.map(({ id, title }) => (
                    <Link key={id} className={styles.work} href={`/work/${id}`}>
                        <span className={styles.hover}>See more</span>
                        <div className={styles.workInner}>
                            <Image
                                width={300}
                                height={200}
                                alt="Project Image"
                                src={projectImgSrc}
                                className={styles.image}
                            />
                            <h3 className={styles.title}>{title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
