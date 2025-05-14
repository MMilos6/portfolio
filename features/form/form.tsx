"use client";
import React, { FormEvent, useRef, useState } from 'react';

import emailjs from '@emailjs/browser';

import styles from './style.module.css';

// Define prop types
interface CommonContactProps {
    condition?: boolean;
}

export const Form = ({ condition }: CommonContactProps) => {
    const form = useRef<HTMLFormElement | null>(null); // Type the form reference
    const [isLoading, setIsLoading] = useState<boolean>(false); // Explicit type for loading state
    const [statusMessage, setStatusMessage] = useState<{
        type: "success" | "error" | null;
        text: string;
    } | null>(null); // Type for status message state

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        if (form.current) {
            setIsLoading(true);
            emailjs
                .sendForm(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                    form.current,
                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
                )
                .then(
                    () => {
                        setStatusMessage({
                            type: "success",
                            text: "Message sent successfully!"
                        });
                        if (form.current) {
                            form.current.reset();
                        }
                    },
                    () => {
                        setStatusMessage({ type: "error", text: "Oops! Message not sent." });
                    }
                )
                .finally(() => {
                    setIsLoading(false);
                    setTimeout(() => setStatusMessage(null), 2000);
                });
        }
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
                            className={`${styles.msg} ${statusMessage.type &&
                                styles[`msg${statusMessage.type.charAt(0).toUpperCase() + statusMessage.type.slice(1)}`]
                                }`}
                        >
                            {statusMessage.text}
                        </span>
                    )}
                </div>
            )}

            <h3 className={styles.formTitle}>
                <span className={styles.upper}>
                    Code. <span className={styles.highlighted}>Design.</span> Develop.
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