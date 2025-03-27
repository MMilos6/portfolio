import contactData from "@/data/contactData";

const Address = () => {
    return (
        <>
            {contactData.map(({ id, label, href, icon, iconColor }) => (
                <a
                    key={id}
                    href={href}
                    style={{
                        background: "#101010",
                    }}
                    className=" shadow-[0_5px_10px_rgba(0,0,0,0.1)] flex flex-wrap p-[30px] border-[#A6A6A6] gap-2 rounded-xl text-[#A6A6A6] hover:text-[#3d6037] duration-300 group"
                >
                    <div className="space-y-2">
                        <p className="text-xl flex items-center font-semibold text-white">
                            <div
                                className="text-2xl mr-2"
                                style={{ color: iconColor }}
                            >
                                {icon}
                            </div>
                            <span className="text-[#A6A6A6] group-hover:text-[#3d6037] duration-300">
                                {label}
                            </span>
                        </p>
                    </div>
                </a>
            ))}
        </>
    );
};

export default Address;
