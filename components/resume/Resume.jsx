"use client";
import { useTheme } from "next-themes";
import resumeData from "@/data/resumeData";

const Resume = () => {
    const { theme } = useTheme();

    return (
        <>
            {resumeData.map((item) => (
                <div key={item.id}>
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="text-6xl text-[#2E8B57]">{item.icon}</div>
                        <h4 className="text-5xl  text-white font-medium">
                            {item.title}
                        </h4>
                    </div>
                    {item.items.map((singleItem) => (
                        <div
                            className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg   border-[#212425]  border-2"
                            key={singleItem.id}
                        >
                            <span className="text-tiny    text-[#b7b7b7]">
                                {singleItem.date}
                            </span>
                            <h3 className="text-xl  text-white"> {singleItem.title} </h3>
                            <p className=" text-[#b7b7b7]">{singleItem.desc}</p>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
};

export default Resume;