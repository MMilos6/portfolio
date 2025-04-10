import Image from "next/image";
import React from "react";

// import { PersonalInfo } from './personalInfo';
import styles from "./styleProject.module.css";
import { IProjectProp } from "./type/type";
// import { IAboutProps } from './type/type';

export const Project = ({ project }: IProjectProp) => {
  const {
    // seoTitle,
    mainImage,
    // clientName,
    // seoDescription,
    // associatedWith,
    // projectTypeTags,
    // associatedWithUrl,
    // projectTechStackTags,
    projectDescriptionFirst,
    projectDescriptionSecond,
  } = project;

  return (
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
          <h3 className={styles.title}>Project info</h3>
          <p className={styles.desc}>{projectDescriptionFirst}</p>
          {projectDescriptionSecond && (
            <p className={styles.desc}>{projectDescriptionSecond}</p>
          )}
        </div>
        {/* <div>
                    <h3 className={styles.personalTitle}>
                        Personal Info
                    </h3>
                    <div className={styles.personalWrapper}>
                        <PersonalInfo email={email} phone={phone} address={address} birthday={birthday} />
                    </div>
                </div> */}
      </div>
    </div>
  );
};
