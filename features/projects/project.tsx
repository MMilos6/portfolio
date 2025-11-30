import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { FaCode, FaIndustry, FaLink, FaProjectDiagram, FaUser, FaUsers } from 'react-icons/fa';

import { getRandomColors } from '@/shared';

import styles from './styleProject.module.css';
import { IProjectProp } from './type/type';

export const Project = ({ project }: IProjectProp) => {
    const {
        image,
        clientName,
        projectName,
        projectLink,
        projectYear,
        contributors,
        associatedWith,
        projectTypeTags,
        projectIndustry,
        associatedWithUrl,
        projectTechStackTags,
        projectDescriptionFirst,
        projectDescriptionSecond,
    } = project;

    const randomColors = useMemo(() => getRandomColors(6), []);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <Image
                        role='img'
                        src={image}
                        width={322}
                        height={216}
                        loading="lazy"
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, 644px"
                        alt={`Main image for project: ${projectName}`}
                    />
                </div>
                <div className={styles.aboutWrapper}>
                    <div className={styles.top}>
                        <h3 className={styles.title}>
                            {projectName} ({projectYear})
                            {projectLink &&
                                <div className={styles.tag}>
                                    <Link
                                        target='_blank'
                                        href={projectLink}
                                        className={styles.visitLink}
                                        aria-label={`Live preview of ${projectName}`}
                                    >
                                        Live Preview
                                    </Link>
                                </div>
                            }
                        </h3>
                        <p className={styles.desc}>{projectDescriptionFirst}</p>
                        {projectDescriptionSecond && (
                            <p className={styles.desc}>{projectDescriptionSecond}</p>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.tagsWrapper}>
                <h3 className={styles.techTitle}>
                    <FaUser style={{ color: randomColors[0] }} />
                    Client<span>:</span>
                </h3>
                <button aria-label={`Client: ${clientName}`}>{clientName}</button>
            </div>
            <div className={styles.tagsWrapper}>
                <h3 className={styles.techTitle}>
                    <FaIndustry style={{ color: randomColors[1] }} />
                    Project industry<span>:</span>
                </h3>
                <button aria-label={`Proyect industry: ${projectIndustry}`}>{projectIndustry}</button>
            </div>
            <div className={styles.tagsWrapper}>
                <h3 className={styles.techTitle}>
                    <FaCode style={{ color: randomColors[2] }} />
                    Project type<span>:</span>
                </h3>
                {projectTypeTags.map((type, i) => (
                    <button
                        key={i}
                        aria-label={`Filter by project type: ${type}`}
                    >
                        {type}
                    </button>
                ))}
            </div>
            <div className={styles.tagsWrapper}>
                <h3 className={styles.techTitle}>
                    <FaProjectDiagram style={{ color: randomColors[3] }} />
                    Tech stack<span>:</span>
                </h3>
                {projectTechStackTags.map((tech, i) => (
                    <button
                        key={i}
                        aria-label={`Filter by technology: ${tech}`}
                    >
                        {tech}
                    </button>
                ))}
            </div>
            <div className={styles.tagsWrapper}>
                <h3 className={styles.techTitle}>
                    <FaLink style={{ color: randomColors[4] }} />
                    Associated with<span>:</span>
                </h3>
                {associatedWith && associatedWithUrl ? (
                    <Link
                        target='_blank'
                        href={associatedWithUrl}
                        className={styles.tagButton}
                        aria-label={`Visit associated link for ${associatedWith}`}
                    >
                        {associatedWith}
                    </Link>
                ) : (
                    <button
                        className={styles.tagButton}
                        aria-label='Freelance'
                    >
                        Freelance
                    </button>
                )}
            </div>
            {contributors && contributors.length > 0 && 
                <div className={styles.tagsWrapper}>
                    <h3 className={styles.techTitle}>
                        <FaUsers style={{ color: randomColors[5] }} />
                        Contributors<span>:</span>
                    </h3>
                    {contributors.map(({lnProfile, name}) => (
                        lnProfile ? (
                            <Link
                                key={lnProfile}
                                target='_blank'
                                href={lnProfile}
                                className={styles.tagButton}
                                aria-label={`Visit LinkedIn profile of ${name}`}
                            >
                                {name}
                            </Link>
                        ) : (
                            <button
                                key={name}
                                className={styles.tagButton}
                                aria-label={`Visit profile of ${name}`}
                            >
                                {name}
                            </button>
                        )
                    ))}
                </div>
            }
        </>
    );
};
