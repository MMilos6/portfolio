import personalInfo from "@/data/personalInfo";
import styles from "./style.module.css"

const PersonalInfo = () => {
    return (
        <>
            {personalInfo.map(({ iconColor, id, icon, name, href, label }) => (
                <div className={styles.personal} key={id}>
                    <span
                        className={styles.icon}
                        style={{ color: iconColor }}
                    >
                        {icon}
                    </span>
                    <div className={styles.right}>
                        <p className={styles.title}>
                            {name}
                        </p>
                        <p className={styles.subTitle}>
                            {href ?
                                <a href={href}>
                                    {label}
                                </a>
                                :
                                <>{label}</>
                            }
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default PersonalInfo;