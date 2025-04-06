import { getRandomColors, iconsMap } from '@/shared';

import styles from './style.module.css';
import { TechStackProps } from './type/type';

export const TechStack = ({ techStack }: TechStackProps) => {
    const iconColors = getRandomColors(techStack.length);

    return (
        <div className={styles.tagRow}>
            {techStack.map(({ techCategory, icon, techStackSkills }, index) => {
                const IconComponent = icon ? iconsMap[icon] : null;
                const iconColor = iconColors[index];

                return (
                    <div key={index} className={styles.stackBlock}>
                        <div className={styles.title}>
                            {IconComponent && (
                                <div className={styles.icon} style={{ color: iconColor }}>
                                    <IconComponent />
                                </div>
                            )}
                            <h2>{techCategory}</h2>
                        </div>
                        <div className={styles.tag}>
                            {techStackSkills.map((skill, i) => (
                                <button key={i}>{skill}</button>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};