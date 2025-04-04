import resumeData from "@/data/resumeData";
import styles from "./style.module.css";

const Resume = () => {
    return (
        <>
            {resumeData.map(({ id, iconColor, title, items, icon }) => (
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

export default Resume;