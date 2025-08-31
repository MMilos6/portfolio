'use client';

import { Divide as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC, useRef, useState } from 'react';

import { Logo } from './logo';
import styles from './style.module.css';
import { NavItem, NavLinkProps } from './type/type';

const data: NavItem[] = [
    {
        id: "1",
        name: "Home",
        routePath: "/",
    },
    {
        id: "2",
        name: "About",
        routePath: "/about",
    },
    {
        id: "3",
        name: "Resume",
        routePath: "/resume",
    },
    {
        id: "4",
        name: "Projects",
        routePath: "/projects",
    },
    {
        id: "5",
        name: "Contact",
        routePath: "/contact",
    },
];

const isActiveLink = (menuPath: string, routePath: string): boolean => {
    const cleanedMenu = menuPath.replace(/\/\d+/, "").replace(/^\/|\/$/g, "");
    const cleanedRoute = routePath.replace(/\/\d+/, "").replace(/^\/|\/$/g, "");
    return cleanedRoute === cleanedMenu || cleanedRoute.startsWith(`${cleanedMenu}/`);
};

const NavLink: FC<NavLinkProps> = ({ routePath, name, pathname, onClick }) => {
    const activeClass = isActiveLink(routePath, pathname)
        ? `${styles.navLink} ${styles.active}`
        : styles.navLink;

    return (
        <li className={styles.navItem}>
            <Link href={routePath} aria-label={`Go to ${name}`} onClick={onClick} className={activeClass}>
                {name}
            </Link>
        </li>
    );
};

export const Header: FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLUListElement>(null);
    const backdropRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.logoContainer}>
                        <div className={styles.logoContainerInner}>
                            <Link
                                href="/"
                                aria-label="Home"
                                className={styles.logoImg}
                                onClick={() => setMenuOpen(false)}
                            >
                                <Logo />
                            </Link>

                            <div className={styles.lgHidden}>
                                <Hamburger
                                    size={40}
                                    color="#b1b1b1"
                                    toggled={menuOpen}
                                    toggle={setMenuOpen}
                                    label='Mobile menu button'
                                />
                            </div>
                        </div>
                    </div>

                    <nav className={styles.hiddenLgBlock}>
                        <ul className={styles.desktopNavList}>
                            {data.map(({ id, routePath, name }) => (
                                <NavLink
                                    key={id}
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
                            {data.map(({ id, routePath, name }) => (
                                <NavLink
                                    key={id}
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