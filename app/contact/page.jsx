import Address from "@/components/contact/Address";
import ContactForm from "@/components/contact/ContactForm";
import styles from "./style.module.css";

const index = () => {
    return (
        <div className={styles.mainContainer}>
            <div data-aos="fade">
                <div className={styles.contentWrapper}>
                    <div className={styles.flexContainer}>
                        <div className={styles.addressWrapper}>
                            <Address />
                        </div>
                        <div className={styles.formWrapper}>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;