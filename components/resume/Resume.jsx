import resumeData from "@/data/resumeData";

const Resume = () => {
    return (
        <>
            {resumeData.map(({ id, iconColor, title, items, icon }) => (
                <div key={id}>
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="text-6xl" style={{ color: iconColor }}>{icon}</div>
                        <h4 className="text-5xl text-white font-medium">
                            {title}
                        </h4>
                    </div>
                    {items.map(({ id, date, title, desc, href, label }) => (
                        <div
                            className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg   border-[#101010]  border-2"
                            key={id}
                        >
                            <span className="text-tiny text-[#b7b7b7]">
                                {date}
                            </span>
                            <h3 className="text-xl text-white"> {title} </h3>
                            <p className=" text-[#b7b7b7]">{desc}</p>
                            <a
                                href={href}
                                target="_blank"
                                style={{ fontStyle: "italic" }}
                                className="break-all !mt-2 block text-[#b7b7b7] hover:text-[#3d6037]"
                            >
                                {label}
                            </a>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
};

export default Resume;