import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCode, FaIndustry, FaLink, FaProjectDiagram, FaUser, FaUsers } from 'react-icons/fa';

import { getRandomColors } from '@/shared';

import styles from './styleProject.module.css';
import { IProjectProp } from './type/type';

export const Project = ({ project }: IProjectProp) => {
    const {
        mainImage,
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

    const randomColors = getRandomColors(6);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <Image
                        role='img'
                        width={322}
                        height={216}
                        src={mainImage}
                        className={styles.image}
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
                                        className={styles.vissitLink}
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
                <button
                    aria-label={
                        associatedWith && associatedWithUrl
                            ? `Visit associated link for ${associatedWith}`
                            : 'Freelance'
                    }>
                    {associatedWith && associatedWithUrl ?
                        <Link
                            target='_blank'
                            href={associatedWithUrl}
                            aria-label={`Visit ${associatedWith}`}
                        >
                            {associatedWith}
                        </Link>
                        :
                        'Freelance'
                    }
                </button>
            </div>
            {contributors && contributors.length > 0 && 
                <div className={styles.tagsWrapper}>
                    <h3 className={styles.techTitle}>
                        <FaUsers style={{ color: randomColors[5] }} />
                        Contributors<span>:</span>
                    </h3>
                    {contributors.map(({lnProfile, name}) => (
                        <button
                            key={lnProfile}
                            aria-label={
                                lnProfile
                                ? `Visit LinkedIn profile of ${name}`
                                : `Visit profile of ${name}`
                            }>
                            {lnProfile ? 
                                <Link
                                    target='_blank'
                                    href={lnProfile}
                                    aria-label={`Visit LinkedIn profile of ${name}`}
                                >
                                    {name}
                                </Link>
                                :
                                name
                            }
                        </button>
                    ))}
                </div>
            }
        </>
    );
};
