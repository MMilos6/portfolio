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
        href: "tel:+381656848296",
        label: "+381 65 6848 296",
    },
    {
        id: 2,
        icon: <FaMapMarkerAlt />,
        iconColor: "#7B9A56",
        name: "Location",
        label: "Belgrade, Serbia",
    },
    {
        id: 3,
        icon: <FaEnvelopeOpenText />,
        iconColor: "#C7A7E4",
        name: "Email",
        href: "mailto:milos.milovanovic.la@gmail.com",
        label: "milos.milovanovic.la@gmail.com",
    },
    {
        id: 4,
        icon: <FaRegCalendarAlt />,
        iconColor: "#F4A300",
        name: "Birthday",
        label: "06.11.1992",
    },
];
