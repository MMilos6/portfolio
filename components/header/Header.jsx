import Link from 'next/link';
import Image from 'next/image';
import headerNav from "@/data/headerNav";
import { usePathname } from 'next/navigation';
import React, { useState, useRef } from 'react';
import { Divide as Hamburger } from 'hamburger-react'

const isActiveLink = (menuPath, routePath) => {
    if (menuPath && routePath) {
        return menuPath.replace(/\/\d+/, "") === routePath.replace(/\/\d+/, "");
    }
};

const NavLink = ({ routePath, icon, name, pathname, onClick }) => {
    const activeClass = isActiveLink(routePath, pathname)
        ? "rounded-md cursor-pointer font-poppins font-medium mx-2.5 flex text-xtiny py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out hover:text-white bg-[#101010] hover:text-white hover:bg-gradient-to-r from-[#3d6037] to-[#182f17] text-[#A6A6A6] linked bg-gradient-to-r lg:shadow-[0_5px_10px_rgba(0,0,0,1)]"
        : "px-2 rounded-md cursor-pointer font-poppins font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out hover:text-white bg-[#101010] hover:text-white hover:bg-gradient-to-r from-[#3d6037] to-[#182f17] text-[#A6A6A6] lg:shadow-[0_5px_10px_rgba(0,0,0,1)]";

    return (
        <li className="mb-1">
            <Link
                className={activeClass}
                href={routePath}
                onClick={onClick}
            >
                <span className="mr-2 text-xl">{icon}</span>
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
        <div className="z-50">
            <div className="container">
            <header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111] shadow-[0_5px_10px_rgba(0,0,0,1)] lg:shadow-none">
                    <div className="flex justify-between w-full px-4 lg:px-0 lg:bg-transparent bg-[#0c0c0c]">
                        <div className="flex justify-between w-full items-center space-x-4 lg:my-8 my-5">
                            <Link className="text-5xl font-semibold" href="/">
                                <Image
                                    className="h-[40px] mb-1"
                                    width={150}
                                    height={40}
                                    priority
                                    src="/images/logo/logo.svg"
                                    alt="logo"
                                    onClick={() => setMenuOpen(false)}
                                />
                            </Link>

                            <div className="lg:hidden">
                                <Hamburger
                                    toggled={menuOpen}
                                    toggle={setMenuOpen}
                                    size={40}
                                    color='#b1b1b1'

                                />
                            </div>
                        </div>
                    </div>

                    <nav className="hidden lg:block">
                        <ul className="flex my-12">
                            {headerNav.map(({ id, routePath, icon, name }) => (
                                <NavLink
                                    key={id}
                                    routePath={routePath}
                                    icon={icon}
                                    name={name}
                                    pathname={pathname}
                                    onClick={() => setMenuOpen(false)}
                                />
                            ))}
                        </ul>
                    </nav>

                    <nav className="lg:hidden">
                        {menuOpen && (
                            <div
                                ref={backdropRef}
                                className="fixed inset-x-0 top-[88px] bottom-0 bg-black bg-opacity-70 z-[22222222222221] transition-opacity duration-200 ease-in-out"
                                onClick={() => setMenuOpen(false)}
                            />
                        )}

                        <ul
                            ref={menuRef}
                            className={`block absolute left-0 rounded-b-[20px] top-[88px] z-[22222222222222] w-full bg-[#101010] drop-shadow-lg py-4 transform transition-transform duration-200 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
                        >
                            {headerNav.map(({ id, routePath, icon, name }) => (
                                <NavLink
                                    key={id}
                                    routePath={routePath}
                                    icon={icon}
                                    name={name}
                                    pathname={pathname}
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
