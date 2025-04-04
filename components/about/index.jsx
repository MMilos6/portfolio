import Image from "next/image";
import PersonalInfo from "./PersonalInfo";
import styles from "./style.module.css"

const index = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <Image
                    width={300}
                    height={400}
                    alt="routePath"
                    className={styles.image}
                    src="/images/about/about.jpg"
                />
            </div>
            <div className={styles.aboutWrapper}>
                <div className={styles.top}>
                    <h3 className={styles.title}>
                        Who am I?
                    </h3>
                    <p className={styles.descTop}>
                        Hi, I&apos;m 32 years old with over six years of experience as a software developer, primarily focused on frontend development, along with expertise in UI/UX design and photography. I have an excellent command of verbal and written English.
                    </p>
                    <p className={styles.descBottom}>
                        I currently live in Belgrade. Passionate about self-improvement, I love exploring new technologies, tackling challenges, and putting in great effort to deliver high-quality products.
                    </p>
                </div>
                <div>
                    <h3 className={styles.personalTitle}>
                        Personal Info
                    </h3>
                    <div className={styles.personalWrapper}>
                        <PersonalInfo />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;