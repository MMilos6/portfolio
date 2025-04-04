"use client";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import styles from "./style.module.css";

const CommonContact = ({ condition }) => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setStatusMessage({ type: "success", text: "Message sent successfully!" });
                    document.getElementById("myForm").reset();
                },
                () => {
                    setStatusMessage({ type: "error", text: "Oops! Message not sent." });
                }
            )
            .finally(() => {
                setIsLoading(false);
                setTimeout(() => setStatusMessage(null), 2000);
            });
    };

    return (
        <div className={`${styles.container} ${styles[condition ? 'success' : 'false']}`}>
            {(isLoading || statusMessage) && (
                <div className={styles.backdrop}>
                    {isLoading && (
                        <span className={styles.msg}>
                            Sending...
                        </span>
                    )}
                    {!isLoading && statusMessage && (
                        <span
                            className={`${styles.msg} ${styles[`msg${statusMessage.type.charAt(0).toUpperCase() + statusMessage.type.slice(1)}`]}`}
                        >
                            {statusMessage.text}
                        </span>
                    )}
                </div>
            )}

            <h3 className={styles.formTitle}>
                <span className={styles.upper}>
                    Code. <span className={styles.highlighted}>Design.</span> Capture.
                </span>
                <br />
                <span className={styles.bottom}>
                    Let&apos;s create something awesome!
                </span>
            </h3>
            <form id="myForm" ref={form} onSubmit={sendEmail}>
                <div className={styles.inputWrapper}>
                    <input
                        id="name"
                        required
                        type="text"
                        name="name"
                        placeholder=" "
                        className={styles.input}
                    />
                    <label
                        htmlFor="name"
                        className={styles.formLabel}
                    >
                        Name *
                    </label>
                </div>
                <div className={styles.inputWrapper}>
                    <input
                        required
                        type="email"
                        placeholder=" "
                        id="user_email"
                        name="user_email"
                        className={styles.input}
                    />
                    <label
                        htmlFor="user_email"
                        className={styles.formLabel}
                    >
                        Email *
                    </label>
                </div>

                <div className={styles.inputWrapper}>
                    <textarea
                        required
                        type="text"
                        id="message"
                        name="message"
                        placeholder=" "
                        className={styles.input}
                    />
                    <label
                        htmlFor="message"
                        className={styles.formLabel}
                    >
                        Message *
                    </label>
                </div>
                <div className={styles.submitWrapper}>
                    <input
                        type="submit"
                        value="Submit"
                        className={styles.submitButton}
                    />
                </div>
            </form>
        </div>
    );
};

export default CommonContact;