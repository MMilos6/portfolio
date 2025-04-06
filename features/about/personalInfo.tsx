import React from 'react';
import { FaEnvelopeOpenText, FaMapMarkerAlt, FaMobileAlt, FaRegCalendarAlt } from 'react-icons/fa';

import { getRandomColors } from '@/shared';

import styles from './style.module.css';
import { IAboutProps, IPersonalInfoProps } from './type/type';

const InfoItem = ({ icon, title, value, link, iconColor }: IPersonalInfoProps) => (
    <div className={styles.personal}>
        <span className={styles.icon} style={{color: iconColor}}>
            {icon}
        </span>
        <div className={styles.right}>
            <p className={styles.title}>{title}</p>
            <p className={styles.subTitle}>
                {link ? <a href={link}>{value}</a> : value}
            </p>
        </div>
    </div>
);

export const PersonalInfo = ({ email, phone, address, birthday }: IAboutProps) => {
    const randomColors = getRandomColors(4);
    return (
        <>
            <InfoItem 
                title="Phone"
                value={phone}
                link={`tel:${phone}`}
                icon={<FaMobileAlt />}
                iconColor={randomColors[0]}
            />
            <InfoItem 
                value={address}
                title="Location"
                icon={<FaMapMarkerAlt />}
                iconColor={randomColors[1]}
            />
            <InfoItem 
                title="Email"
                value={email}
                link={`mailto:${email}`}
                iconColor={randomColors[2]}
                icon={<FaEnvelopeOpenText />}
            />
            <InfoItem 
                title="Birthday"
                value={birthday}
                iconColor={randomColors[3]}
                icon={<FaRegCalendarAlt />}
            />
        </>
    );
};