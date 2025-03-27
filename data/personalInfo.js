import {
    FaMobileAlt,
    FaMapMarkerAlt,
    FaRegCalendarAlt,
    FaEnvelopeOpenText,
} from "react-icons/fa";

module.exports = [
    {
        id: 1,
        icon: <FaMobileAlt />,
        iconColor: "#F1A66D",
        name: "Phone",
        meta: (
            <>
                <a
                    className="hover:text-[#3d6037] duration-300 transition"
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
        iconColor: "#7B9A56",
        name: "Location",
        meta: <>Belgrade, Serbia</>,
    },
    {
        id: 3,
        icon: <FaEnvelopeOpenText />,
        iconColor: "#C7A7E4",
        name: "Email",
        meta: (
            <>
                {" "}
                <a
                    className="hover:text-[#3d6037] duration-300 transition"
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
        iconColor: "#F4A300",
        name: "Birthday",
        meta: <>06.11.1992</>,
    },
];
