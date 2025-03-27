"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import headerMenu from "@/data/headerMenu";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const isActiveLink = (menuPath, routePath) => {
    if (menuPath && routePath) {
        return menuPath.replace(/\/\d+/, "") === routePath.replace(/\/\d+/, "");
    }
};

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="z-50 ">
            <div className="container">
                <header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]  ">
                    <div className=" flex justify-between w-full px-4 lg:px-0 lg:bg-transparent lg:bg-transparent bg-[#0c0c0c] ">
                        <div className="flex justify-between w-full items-center space-x-4 lg:my-8 my-5 ">
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

                            <div className="flex items-center">
                                {!menuOpen ? (
                                    <span
                                        onClick={() => setMenuOpen(!menuOpen)}
                                        className="lg:opacity-0 lg:invisible visible opacity-100   w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-white text-white text-3xl ml-3 "
                                    >
                                        <AiOutlineMenu />
                                    </span>
                                ) : (
                                    <span
                                        onClick={() => setMenuOpen(!menuOpen)}
                                        className="lg:opacity-0 cursor-pointer lg:invisible visible opacity-100  w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-3xl ml-3 "
                                    >
                                        <AiOutlineClose />
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <nav
                        className={`${menuOpen ? "block bg-black   " : "hidden lg:block"
                            }`}
                    >
                        <ul
                            className={`${menuOpen
                                ? "block lg:hidden  absolute left-0 rounded-b-[20px] top-20 z-[22222222222222] w-full bg-[#101010] drop-shadow-lg py-4 "
                                : "flex my-12 "
                                }`}
                        >
                            {headerMenu.map(({ id, routePath, icon, name }) => (
                                <li key={id} className="mb-1">
                                    <Link
                                        className={`${isActiveLink(routePath, pathname)
                                            ? "rounded-md  cursor-pointer font-poppins font-medium mx-2.5 flex text-xtiny py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out hover:text-white bg-[#101010] hover:text-white hover:bg-gradient-to-r from-[#3d6037] to-[#182f17] text-[#A6A6A6] linked bg-gradient-to-r "
                                            : "px-2 rounded-md  cursor-pointer font-poppins font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out hover:text-white bg-[#101010] hover:text-white hover:bg-gradient-to-r from-[#3d6037] to-[#182f17] text-[#A6A6A6]"
                                            } `}
                                        href={routePath}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <span className="mr-2 text-xl">{icon}</span>
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    );
};

export default Header;