import contactData from "@/data/contactData";

const Address = () => {
    return (
        <>
            {contactData.map(({ info, icon, iconColor }, i) => (
                <div
                    key={i}
                    style={{
                        background: "#101010",
                    }}
                    className="flex flex-wrap p-[30px] border-[#A6A6A6] gap-2 rounded-xl"
                >
                    <div className="space-y-2">
                        <p className="text-xl flex items-center font-semibold text-white">
                            <div
                                className="text-lg mr-2"
                                style={{ color: iconColor }}
                            >
                                {icon}
                            </div>
                            {info}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Address;