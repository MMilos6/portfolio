import { FaRegSmile } from 'react-icons/fa';
import { MdOutlineBusinessCenter, MdOutlineSchool } from 'react-icons/md';

import { formatLinkLabel } from '@/shared';

import { ResumeItem } from './resumeItem';
import styles from './style.module.css';
import {
    IEducationItemProp, IPersonalItemProp, IResumeProp, IWorkExperienceItemProp
} from './type/type';

export const Resume = ({ education, personal, workExperience }: IResumeProp) => {
    const isEducationItem = (item: IEducationItemProp | IPersonalItemProp | IWorkExperienceItemProp): item is IEducationItemProp => {
        return (item as IEducationItemProp).degree !== undefined;
    };

    const isWorkExperienceItem = (item: IEducationItemProp | IPersonalItemProp | IWorkExperienceItemProp): item is IWorkExperienceItemProp => {
        return (item as IWorkExperienceItemProp).role !== undefined;
    };

    const renderEducationItem = (item: IEducationItemProp, index: number) => (
        <div key={index} className={styles.item}>
            <span className={styles.date}>
                {item.startDate} {`${item.endDate ? `- ${item.endDate}` : '- Present'}`}
            </span>
            <h3 className={styles.itemTitle}>{item.degree}</h3>
            <p className={styles.desc}>{item.schoolName}</p>
            {item.institutionLink && (
                <a href={item.institutionLink} target="_blank" className={styles.link}>
                    {formatLinkLabel(item.institutionLink)}
                </a>
            )}
        </div>
    );

    const renderWorkExperienceItem = (item: IWorkExperienceItemProp, index: number) => (
        <div key={index} className={styles.item}>
            <span className={styles.date}>
                {item.startDate} {`${item.endDate ? `- ${item.endDate}` : '- Present'}`}
            </span>
            <h3 className={styles.itemTitle}>{item.role}</h3>
            <p className={styles.desc}>{item.companyName}</p>
            {item.companyLink && (
                <a href={item.companyLink} target="_blank" className={styles.link}>
                    {formatLinkLabel(item.companyLink)}
                </a>
            )}
        </div>
    );

    const renderPersonalItem = (item: IPersonalItemProp, index: number) => (
        <div key={index} className={styles.item}>
            <span className={styles.date}>
                {item.startDate} {`${item.endDate ? `- ${item.endDate}` : '- Present'}`}
            </span>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.desc}>{item.description}</p>
        </div>
    );

    const renderItem = (item: IEducationItemProp | IPersonalItemProp | IWorkExperienceItemProp, index: number) => {
        if (isEducationItem(item)) {
            return renderEducationItem(item, index);
        } else if (isWorkExperienceItem(item)) {
            return renderWorkExperienceItem(item, index);
        } else {
            return renderPersonalItem(item, index);
        }
    };

    return (
        <>
            <ResumeItem
                title="Education"
                icon={<MdOutlineSchool />}
                items={education}
                renderItem={renderItem}
            />
            <ResumeItem
                title="Work Experience"
                icon={<MdOutlineBusinessCenter />}
                items={workExperience}
                renderItem={renderItem}
            />
            <ResumeItem
                title="Personal"
                icon={<FaRegSmile />}
                items={personal}
                renderItem={renderItem}
            />
        </>
    );
};