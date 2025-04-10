'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import styles from './style.module.css';
import { IProjectsProp } from './type/type';

export const Projects = ({projects}: IProjectsProp) => {
    const [selectedTag, setSelectedTag] = useState('All');

    const uniqueTags = [
        'All',
        ...Array.from(new Set(projects.flatMap(item => item.tags))),
    ];

    const filterPortfolioData = (tag: string) => {
        if (tag === 'All') return projects;
        return projects.filter(item => item.tags.includes(tag));
    };

    const filteredData = filterPortfolioData(selectedTag);

    return (
        <div className={styles.container}>
            <div className={styles.tagWrapper}>
                {uniqueTags.map(tag => (
                    <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`${styles.tagBtn} ${tag === selectedTag ? styles.tagBtnActive : ''}`}
                    >
                        {tag.toLocaleLowerCase()}
                    </button>
                ))}
            </div>

            <div className={styles.projectsGrid}>
                {filteredData.map(({ id, slug, projectName, projectCardImage }) => (
                    <Link key={id} className={styles.project} href={`/projects/${slug}`}>
                        <span className={styles.hover}>See more</span>
                        <div className={styles.projectInner}>
                            <Image
                                width={300}
                                height={200}
                                alt={projectName}
                                src={projectCardImage}
                                className={styles.image}
                            />
                            <h3 className={styles.title}>{projectName}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
