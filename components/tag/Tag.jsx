import techStackData from "@/data/techStackData";
import styles from "./style.module.css";

const Tag = () => {
    return (
        <div className={styles.tagRow}>
            {techStackData.map(({ name, icon, iconColor, tags }) => (
                <div key={name}>
                    <div className={styles.title}>
                        <div
                            className={styles.icon}
                            style={{ color: iconColor }}
                        >
                            {icon}
                        </div>
                        <h2>{name}</h2>
                    </div>
                    <div className={styles.tag}>
                        {tags.map((tag, i) => (
                            <button key={i}>
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Tag;
