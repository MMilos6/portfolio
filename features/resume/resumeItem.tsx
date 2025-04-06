import { getRandomColors } from '@/shared';

import styles from './style.module.css';
import { IResumeColumnItem } from './type/type';

export const ResumeItem = ({ title, icon, items, renderItem }: IResumeColumnItem) => {
    const randomColors = getRandomColors(1);

    return (
        <div>
            <div className={styles.titleWrapper}>
                <div 
                    className={styles.icon} 
                    style={{ color: randomColors[0] }}
                >
                    {icon}
                </div>
                <h4 className={styles.title}>{title}</h4>
            </div>
            {items.map((item, index) => renderItem(item, index))}
        </div>
    );
};