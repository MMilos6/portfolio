"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import DarkMode from "../mode/DarkMode";
import HeaderMenu from "@/data/HeaderMenu";
import { usePathname } from "next/navigation";
import DarkModeMobile from "../mode/DarkModeMobile";
import { isActiveLink } from "../../utilis/linkActiveChecker";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="z-50 ">
            <div className="container">
                <header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]  ">
                    <div className=" flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent lg:dark:bg-transparent dark:bg-black ">
                        <div className="flex justify-between w-full items-center space-x-4 lg:my-8 my-5 ">
                            <Link className="text-5xl font-semibold" href="/">

                                <Image
                                    className="h-[40px] mb-1"
                                    width={150}
                                    height={40}
                                    priority
                                    src="/images/logo/logo.svg"
                                    alt="logo"
                                />
                            </Link>

                            <div className="flex items-center">
                                <DarkModeMobile />
                                {!menuOpen ? (
                                    <span
                                        onClick={() => setMenuOpen(!menuOpen)}
                                        className="lg:opacity-0 lg:invisible visible opacity-100  bg-[#43ac42] w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-white dark:text-white text-3xl ml-3 "
                                    >
                                        <AiOutlineMenu />
                                    </span>
                                ) : (
                                    <span
                                        onClick={() => setMenuOpen(!menuOpen)}
                                        className="lg:opacity-0 cursor-pointer lg:invisible visible opacity-100  bg-[#43ac42] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-3xl ml-3 "
                                    >
                                        <AiOutlineClose />
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <nav
                        className={`${menuOpen ? "block  dark:bg-black   " : "hidden lg:block"
                            }`}
                    >
                        <ul
                            className={`${menuOpen
                                ? "block lg:hidden  absolute left-0 rounded-b-[20px] top-20 z-[22222222222222] w-full bg-white dark:bg-[#212425] drop-shadow-lg py-4 "
                                : "flex my-12 "
                                }`}
                        >
                            {HeaderMenu.map((item) => (
                                <li key={item.id} className="mb-1">
                                    <Link
                                        className={`${isActiveLink(item.routePath, pathname)
                                            ? "rounded-md  cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#43ac42] to-[#2c8f2b] dark:text-[#A6A6A6] linked bg-gradient-to-r "
                                            : "px-2 rounded-md  cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#43ac42] to-[#2c8f2b] dark:text-[#A6A6A6]"
                                            } `}
                                        href={item.routePath}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <span className="mr-2 text-xl">{item.icon}</span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            <DarkMode />
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    );
};

export default Header;