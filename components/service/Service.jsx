"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import serviceData from "@/data/serviceData";

const Service = () => {
    const { theme } = useTheme();

    return (
        <>
            {serviceData.map((item) => (
                <div
                    className="about-box  bg-transparent"
                    key={item.id}
                >
                    <Image
                        className="w-10 h-10 object-contain  block"
                        src={item.icon}
                        width={40}
                        height={40}
                        alt="icon"
                    />

                    <div className="space-y-2 break-all">
                        <h3 className=" text-white text-xl font-semibold">
                            {item?.title}
                        </h3>
                        <p className=" leading-8  text-[#A6A6A6]">
                            {item?.des}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Service;