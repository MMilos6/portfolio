import serviceData from "@/data/serviceData";
import styles from "./style.module.css";

const Service = () => {
    return (
        <>
            {serviceData.map(({id, color, icon, title, des}) => (
                <div
                    className={styles.service}
                    key={id}
                >
                    <span
                        className={styles.icon}
                        style={{color: color}}
                    >
                        {icon}
                    </span>

                    <div className={styles.serviceInfo}>
                        <h3 className={styles.title}>
                            {title}
                        </h3>
                        <p className={styles.info}>
                            {des}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Service;