import { ReactElement } from 'react';
import { FaRegSmile } from 'react-icons/fa';
import { MdOutlineBusinessCenter, MdOutlineSchool } from 'react-icons/md';

import styles from './style.module.css';

// Define the type for items
interface Item {
    id: number;
    date: string;
    title: string;
    desc: string;
    href?: string;
    label?: string;
}

// Define the type for each data section
interface Section {
    id: number;
    title: string;
    icon: ReactElement;
    iconColor: string;
    items: Item[];
}

const data: Section[] = [
    {
        id: 1,
        title: "Education",
        icon: <MdOutlineSchool />,
        iconColor: "#F4D03F",
        items: [
            {
                id: 1,
                date: "2018 - 2019",
                title: "Frontend JavaScript Development",
                desc: "ITAcademy",
                href: "https://www.it-akademija.com",
                label: "www.it-akademija.com",
            },
            {
                id: 2,
                date: "2012 - 2016",
                title: "Professional Engineer of Electrical Engineering and Computer Science",
                desc: "School of electrical and computer engineering of applied studies",
                href: "https://www.viser.edu.rs",
                label: "www.viser.edu.rs",
            },
            {
                id: 3,
                date: "2008 - 2012",
                title: "Electrical Computer Tehnics",
                desc: "High School Kolubara",
                href: "https://www.tehnickaskolakolubara.edu.rs",
                label: "www.tehnickaskolakolubara.edu.rs",
            },
        ],
    },
    {
        id: 2,
        title: "Experience",
        icon: <MdOutlineBusinessCenter />,
        iconColor: "#9C8D4F",
        items: [
            {
                id: 1,
                date: "2021 - Present",
                title: "Frontend Developer",
                desc: "Geta Digital",
                href: "https://www.getadigital.com",
                label: "www.getadigital.com",
            },
            {
                id: 2,
                date: "2019 - 2021",
                title: "Frontend Developer",
                desc: "Eximius Solutions",
                href: "https://eximius-solutions.com",
                label: "eximius-solutions.com",
            },
            {
                id: 3,
                date: "2019 - 2019",
                title: "Web Developer",
                desc: "Link Group",
                href: "https://www.link.co.rs",
                label: "www.link.co.rs",
            },
            {
                id: 4,
                date: "2017 - 2019",
                title: "Electrical Engineer",
                desc: "Standard Invest Group",
                href: "https://www.sigdoo.rs",
                label: "www.sigdoo.rs",
            },
        ],
    },
    {
        id: 3,
        title: "Personal",
        icon: <FaRegSmile />,
        iconColor: "#E6A5D7",
        items: [
            {
                id: 1,
                date: "2022 - Present",
                title: "Bicycling Adventures",
                desc: "Exploring new trails and routes while staying fit and enjoying nature.",
            },
            {
                id: 2,
                date: "2018 - Present",
                title: "Photography Hobbyist",
                desc: "Capturing beautiful moments and experimenting with different photography styles.",
            },
            {
                id: 3,
                date: "2010 - Present",
                title: "Beer Tasting Enthusiast",
                desc: "Exploring new craft beers while learning about brewing techniques.",
            },
        ],
    },
];

export const Resume = () => {
    return (
        <>
            {data.map(({ id, iconColor, title, items, icon }) => (
                <div key={id}>
                    <div className={styles.titleWrapper}>
                        <div className={styles.icon} style={{ color: iconColor }}>{icon}</div>
                        <h4 className={styles.title}>
                            {title}
                        </h4>
                    </div>
                    {items.map(({ id, date, title, desc, href, label }) => (
                        <div
                            key={id}
                            className={styles.item}
                        >
                            <span className={styles.date}>
                                {date}
                            </span>
                            <h3 className={styles.itemTitle}>{title}</h3>
                            <p className={styles.desc}>{desc}</p>
                            <a
                                href={href}
                                target="_blank"
                                className={styles.link}
                            >
                                {label}
                            </a>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
};