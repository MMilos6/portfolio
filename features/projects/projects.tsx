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
        ...Array.from(
          projects
            .flatMap(item => item.tags)
            .reduce((map, tag) => {
                const lower = tag.toLowerCase();
                if (!map.has(lower) || /[A-Z]/.test(tag)) {
                    map.set(lower, tag);
                }
                return map;
            }, new Map<string, string>())
            .values()
        ),
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
                        aria-label={`Filter by ${tag}`}
                        onClick={() => setSelectedTag(tag)}
                        className={`${styles.tagBtn} ${tag === selectedTag ? styles.tagBtnActive : ''}`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div className={styles.projectsGrid}>
                {filteredData.map(({ id, slug, projectName, image }) => (
                    <Link key={id} className={styles.project} href={`/projects/${slug}`}>
                        <span className={styles.hover} aria-label={`View more details about ${projectName}`}>See more</span>
                        <div className={styles.projectInner}>
                            <Image
                                width={300}
                                src={image}
                                height={200}
                                loading="lazy"
                                className={styles.image}
                                aria-label={`Project ${projectName} image`}
                                alt={`Image of the project ${projectName}`}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <h3 className={styles.title}>{projectName}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
