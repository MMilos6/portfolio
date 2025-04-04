import contactData from "@/data/contactData";
import styles from "./style.module.css";

const Address = () => {
    return (
        <>
            {contactData.map(({ id, label, href, icon, iconColor }) => (
                <a
                    key={id}
                    href={href}
                    target="_blank"
                    className={styles.contactItem}
                >
                    <p className={styles.contactInfo}>
                        <div
                            className={styles.icon}
                            style={{ color: iconColor }}
                        >
                            {icon}
                        </div>
                        <span className={styles.label}>
                            {label}
                        </span>
                    </p>
                </a>
            ))}
        </>
    );
};

export default Address;