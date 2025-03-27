import contactData from "@/data/contactData";

const Address = () => {
    return (
        <>
            {contactData.map(({ title, info, icon, iconColor }, i) => (
                <div
                    key={i}
                    style={{
                        background: "#101010",
                    }}
                    className="flex flex-wrap p-[30px] border-[#A6A6A6] gap-2 rounded-xl"
                >
                    <div className="space-y-2">
                        <p className="text-xl flex font-semibold text-white">
                            <div
                                className="text-2xl mr-3"
                                style={{ color: iconColor }}
                            >
                                {icon}
                            </div>
                            {title}
                        </p>
                        <span className="break-all">{info}</span>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Address;