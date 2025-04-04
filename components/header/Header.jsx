'use client';

import Link from 'next/link';
import Image from 'next/image';
import headerNav from "@/data/headerNav";
import { usePathname } from 'next/navigation';
import React, { useState, useRef } from 'react';
import { Divide as Hamburger } from 'hamburger-react'
import styles from './style.module.css'

const isActiveLink = (menuPath, routePath) => {
    if (menuPath && routePath) {
        return menuPath.replace(/\/\d+/, "") === routePath.replace(/\/\d+/, "");
    }
};

const NavLink = ({ routePath, icon, name, pathname, onClick }) => {
    const activeClass = isActiveLink(routePath, pathname)
        ? `${styles.navLink} ${styles.active}`
        : `${styles.navLink}`;

    return (
        <li className={styles.navItem}>
            <Link
                href={routePath}
                onClick={onClick}
                className={activeClass}
            >
                <span className={styles.icon}>{icon}</span>
                {name}
            </Link>
        </li>
    );
};

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const backdropRef = useRef(null);
    const pathname = usePathname();

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.logoContainer}>
                        <div className={styles.logoContainerInner}>
                            <Link href="/">
                                <Image
                                    priority
                                    alt="logo"
                                    width={150}
                                    height={40}
                                    className={styles.logoImg}
                                    src="/images/logo/logo.svg"
                                    onClick={() => setMenuOpen(false)}
                                />
                            </Link>

                            <div className={styles.lgHidden}>
                                <Hamburger
                                    size={40}
                                    color='#b1b1b1'
                                    toggled={menuOpen}
                                    toggle={setMenuOpen}

                                />
                            </div>
                        </div>
                    </div>

                    <nav className={styles.hiddenLgBlock}>
                        <ul className={styles.desktopNavList}>
                            {headerNav.map(({ id, routePath, icon, name }) => (
                                <NavLink
                                    key={id}
                                    icon={icon}
                                    name={name}
                                    pathname={pathname}
                                    routePath={routePath}
                                    onClick={() => setMenuOpen(false)}
                                />
                            ))}
                        </ul>
                    </nav>

                    <nav className={styles.lgHidden}>
                        {menuOpen && (
                            <div
                                ref={backdropRef}
                                className={styles.backdrop}
                                onClick={() => setMenuOpen(false)}
                            />
                        )}

                        <ul
                            ref={menuRef}
                            className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ''}`}
                        >
                            {headerNav.map(({ id, routePath, icon, name }) => (
                                <NavLink
                                    key={id}
                                    icon={icon}
                                    name={name}
                                    pathname={pathname}
                                    routePath={routePath}
                                    onClick={() => setMenuOpen(false)}
                                />
                            ))}
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    );
};

export default Header;