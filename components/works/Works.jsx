"use client";
import Image from "next/image";
import Modal from "react-modal";
import Masonry from "react-masonry-css";
import { BsXCircle } from "react-icons/bs";
import { useEffect, useState } from "react";
import portfolioData from "@/data/worksData";
import { FiUser, FiCode, FiFilePlus, FiExternalLink } from "react-icons/fi";

const Works = () => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        500: 1,
    };

    // start dynamic portfolio with slug
    const [singleData, setSingleData] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const handlePortfolioData = (id) => {
        const find = portfolioData.find((item) => item?.id === id);
        setSingleData(find);
        setIsOpen(true);
    };

    const handleModle = (id) => {
        handlePortfolioData(id);
    };

    const [test, setTest] = useState("All");

    const handleSearch = (text) => {
        handleData(text);
        setTest(text);
    };
    useEffect(() => {
        setTest("All");
        handleData("All");
    }, []);

    const [data, setData] = useState(portfolioData);

    // fillter portfilo data
    const handleData = (text) => {
        if (text === "All") {
            setData(portfolioData);
        } else {
            const findData = portfolioData.filter((item) => item.tag === text);
            setData(findData);
        }
    };

    return (
        <>
            <ul className="flex w-full justify-start md:justify-end flex-wrap font-medium pb-12">
                <li
                    className={`${test === "All" ? "text-[#3d6037] border-b-2 border-[#3d6037]" : "text-[#A6A6A6] hover:text-[#3d6037] transition duration-300 cursor-pointer"
                        } mr-2 md:mx-2`}
                    onClick={() => handleSearch("All")}
                >
                    All
                </li>
                <li
                    className={`${test === "Development" ? "text-[#3d6037] border-b-2 border-[#3d6037]" : "text-[#A6A6A6] hover:text-[#3d6037] transition duration-300 cursor-pointer"
                        } mr-2 md:mx-2`}
                    onClick={() => handleSearch("Development")}
                >
                    Development
                </li>
                <li
                    className={`${test === "Design" ? "text-[#3d6037] border-b-2 border-[#3d6037]" : "text-[#A6A6A6] hover:text-[#3d6037] transition duration-300 cursor-pointer"
                        } mr-2 md:mx-2`}
                    onClick={() => handleSearch("Design")}
                >
                    Design
                </li>
                <li
                    className={`${test === "Photography" ? "text-[#3d6037] border-b-2 border-[#3d6037]" : "text-[#A6A6A6] hover:text-[#3d6037] transition duration-300 cursor-pointer"}  mr-2 md:mx-2 `}
                    onClick={() => handleSearch("Photography")}
                >
                    Photography
                </li>
            </ul>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {data.map((item) => (
                    <div
                        className="rounded-lg p-6 border-[2px] border-[#101010]"
                        style={{
                            background: "transparent",
                        }}
                        key={item.id}
                        onClick={() => handleModle(item?.id)}
                    >
                        <div className="overflow-hidden rounded-lg">
                            <Image
                                className="w-full    cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto "
                                src={item.imgSmall}
                                width={300}
                                height={300}
                                priority
                                alt="portfolio Image"
                            />
                        </div>
                        <span className="pt-5 text-[14px] font-normal block  text-[#A6A6A6]">
                            {item.tag}
                        </span>
                        <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#3d6037]  hover:text-[#3d6037]  text-white mt-2">
                            {item.title}
                        </h2>
                    </div>
                ))}
            </Masonry>
            <Modal
                ariaHideApp={false}
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                className=" outline-none flex items-center  p-4 md:p-8  rounded-2xl my-8"
            >
                <div className="w-full md:w-10/12 lg:w-[850px] w-[calc(100%-40px)] flex items-center bg-[#161616] mx-auto rounded-xl p-4 md:p-8 absolute left-1/2 top-[140px] transform -translate-x-[50%] shadow-lg max-h-[65vh]">
                    <div className=" overflow-y-scroll max-h-[60vh] no-scrollbar ">
                        {/* close button */}
                        <BsXCircle
                            onClick={() => setIsOpen(false)}
                            className="text-7xl cursor-pointer  absolute right-2 -top-12 md:-right-10 md:-top-6 z-50  text-white transition transform hover:text-[#3d6037] duration-300 ease-in-out "
                        />
                        <h2 className="text-[#3d6037]  hover:text-[#3d6037] text-4xl text-center font-bold">
                            {singleData.tag}
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 my-6">
                            <div className="space-y-2">
                                <p className=" text-white flex items-center text-[15px]  sm:text-lg ">
                                    <FiFilePlus className="sm:text-lg hidden sm:block mr-2  md:text-xl" />
                                    Project Type :&nbsp; <span className="font-medium ">{singleData?.projectType}</span>
                                </p>
                                <p className=" text-white flex items-center text-[15px]  sm:text-lg ">
                                    <FiCode className="text-lg mr-2 hidden sm:block " />
                                    {singleData?.langages &&
                                        <>
                                            <span>Langages :&nbsp;</span>
                                            <span className="font-medium ">{singleData?.langages}</span>
                                        </>
                                    }
                                    {singleData?.tools &&
                                        <>
                                            <span>Tools :&nbsp;</span>
                                            <span className="font-medium ">{singleData?.tools}</span>
                                        </>
                                    }
                                </p>
                            </div>

                            <div className="space-y-2">
                                <p className=" text-white flex items-center mt-2 lg:mt-0 text-[15px]  sm:text-lg ">
                                    <FiUser className="text-lg mr-2 hidden sm:block" />
                                    Client :&nbsp;
                                    <span className="font-medium ">{singleData?.client}</span>
                                </p>
                                <p className=" text-white flex items-center text-[15px] sm:text-lg ">
                                    <FiExternalLink className="text-lg mr-2 hidden sm:block" />
                                    Preview :&nbsp;
                                    <span className="font-medium transition-all duration-300 ease-in-out hover:text-[#3d6037] ">
                                        <a
                                            href={singleData?.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {singleData?.linkText}
                                        </a>
                                    </span>
                                </p>
                            </div>
                        </div>

                        <p className=" text-white  text-2line font-normal text-[15px] sm:text-sm  ">
                            {singleData?.description}
                        </p>

                        <Image
                            className="w-full md:h-[450px]  h-auto object-cover rounded-xl mt-6"
                            src={singleData?.img}
                            alt="blog details image"
                            width={620}
                            height={420}
                            loading="lazy"
                        />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Works;