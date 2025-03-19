import {
    FaMobileAlt,
    FaMapMarkerAlt,
    FaRegCalendarAlt,
    FaEnvelopeOpenText,
} from "react-icons/fa";

const PersonalInfo = () => {
    const personalContent = [
        {
            id: 1,
            icon: <FaMobileAlt />,
            iconColor: "text-oriange",
            name: "Phone",
            meta: (
                <>
                    <a
                        className="hover:text-[#FA5252] duration-300 transition"
                        href="tel:+381656848296"
                    >
                        +381 65 6848 296
                    </a>
                </>
            ),
        },
        {
            id: 2,
            icon: <FaMapMarkerAlt />,
            iconColor: "text-oriange-lite",
            name: "Location",
            meta: <>Belgrade, Serbia</>,
        },
        {
            id: 3,
            icon: <FaEnvelopeOpenText />,
            iconColor: "text-green",
            name: "Email",
            meta: (
                <>
                    {" "}
                    <a
                        className="hover:text-[#FA5252] duration-300 transition"
                        href="mailto:milos.milovanovic.la@gmail.com"
                    >
                        milos.milovanovic.la@gmail.com
                    </a>
                </>
            ),
        },
        {
            id: 4,
            icon: <FaRegCalendarAlt />,
            iconColor: "text-color-50",
            name: "Birthday",
            meta: <>06.11.1992</>,
        },
    ];

    return (
        <>
            {personalContent.map((item) => (
                <div className="flex" key={item.id}>
                    <span
                        className={`${item.iconColor} dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-`}
                    >
                        {item.icon}
                    </span>
                    <div className="space-y-1">
                        <p className="text-xs text-gray-lite dark:text-color-910">
                            {item.name}
                        </p>
                        <h6 className="font-medium dark:text-white">{item.meta}</h6>
                    </div>
                </div>
            ))}
        </>
    );
};

export default PersonalInfo;