import { FaPhoneAlt, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

module.exports = [
    {
        id: "01",
        title: "Phone",
        icon: <FaPhoneAlt />,
        iconColor: "#F1A66D",
        info: (
            <p>
                <a
                    href="tel:+381656848296"
                    className="text-lg text-[#A6A6A6] hover:text-[#3d6037] duration-300"
                >
                    +381 65 6848 296
                </a>
            </p>
        ),
    },
    {
        id: "02",
        title: "LinkedIn",
        icon: <FaLinkedinIn />,
        iconColor: "#0077B5",
        info: (
            <p>
                <a
                    href="https://www.linkedin.com/in/milos--milovanovic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-[#A6A6A6] hover:text-[#3d6037] duration-300"
                >
                    Milos Milovanovic
                </a>
            </p>
        ),
    },
    {
        id: "03",
        title: "GitHub",
        icon: <FaGithub />,
        iconColor: "#656565",
        info: (
            <p>
                <a
                    href="https://github.com/Mmilos6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-[#A6A6A6] hover:text-[#3d6037] duration-300"
                >
                    MMilos6
                </a>
            </p>
        ),
    },
    {
        id: "04",
        title: "Instagram",
        icon: <FaInstagram />,
        iconColor: "#E4405F",
        info: (
            <p>
                <a
                    href="https://www.instagram.com/mosquito_junior/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-[#A6A6A6] hover:text-[#3d6037] duration-300"
                >
                    mosquito_junior
                </a>
            </p>
        ),
    },
];
