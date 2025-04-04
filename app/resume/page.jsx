import Tag from "@/components/tag/Tag";
import Resume from "@/components/resume/Resume";
import styles from "./style.module.css";

const index = () => {
    return (
        <div className={styles.mainContainer}>
            <div data-aos="fade">
                <div className={styles.innerContainer}>
                    <div className={styles.resumeSection}>
                        <div className={styles.resumeGrid}>
                            <Resume />
                        </div>
                    </div>
                </div>

                <div className={styles.toolsSection}>
                    <div className={styles.toolsContent}>
                        <h4 className={styles.title}>
                            Tools & Tech I&apos;ve used in projects
                        </h4>

                        <div className={styles.tagsContainer}>
                            <Tag />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;