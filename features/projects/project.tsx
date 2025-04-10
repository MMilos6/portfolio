import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCode, FaLink, FaProjectDiagram, FaUser } from 'react-icons/fa';

import { getRandomColors } from '@/shared';

import styles from './styleProject.module.css';
import { IProjectProp } from './type/type';

export const Project = ({ project }: IProjectProp) => {
    const {
        mainImage,
        clientName,
        projectName,
        projectLink,
        associatedWith,
        projectTypeTags,
        associatedWithUrl,
        projectTechStackTags,
        projectDescriptionFirst,
        projectDescriptionSecond,
    } = project;

    const randomColors = getRandomColors(4);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <Image
                        width={322}
                        height={216}
                        alt="routePath"
                        src={mainImage || ""}
                        className={styles.image}
                    />
                </div>
                <div className={styles.aboutWrapper}>
                    <div className={styles.top}>
                        <h3 className={styles.title}>
                            {projectName}
                            {projectLink &&
                                <div className={styles.tag}>
                                    <Link className={styles.vissitLink} href={projectLink}>Live Preview</Link>
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
                    <FaCode style={{ color: randomColors[0] }} />
                    Project type :
                </h3>
                {projectTypeTags.map((type, i) => (
                    <button key={i}>{type.toLocaleLowerCase()}</button>
                ))}
            </div>
            <div className={styles.tagsWrapper}>
                <h3 className={styles.techTitle}>
                    <FaProjectDiagram style={{ color: randomColors[1] }} />
                    Used technologies :
                </h3>
                {projectTechStackTags.map((tech, i) => (
                    <button key={i}>{tech.toLocaleLowerCase()}</button>
                ))}
            </div>
            <div className={styles.tagsWrapper}>
                <h3 className={styles.techTitle}>
                    <FaLink style={{ color: randomColors[2] }} />
                    Associated with :
                </h3>
                <button>
                    {associatedWith && associatedWithUrl ?
                        <Link href={associatedWithUrl}>{associatedWith.toLocaleLowerCase()}</Link>
                        :
                        'Freelence'
                    }
                </button>
            </div>
            <div className={styles.tagsWrapper}>
                <h3 className={styles.techTitle}>
                    <FaUser style={{ color: randomColors[3] }} />
                    Client :
                </h3>
                <button>{clientName}</button>
            </div>
        </>
    );
};
