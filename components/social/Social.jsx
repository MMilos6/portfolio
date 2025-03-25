import {
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const Social = () => {
    const socialContent = [
        {
            id: 1,
            link: "https://www.linkedin.com/in/milos--milovanovic/",
            icon: <FaLinkedinIn />,
            iconClass: "text-[#0077B5]",
        },
        {
            id: 2,
            link: "https://github.com/Mmilos6",
            icon: <FaGithub />,
            iconClass: "text-[#181717]",
        },
        {
            id: 3,
            link: "https://www.instagram.com/mosquito_junior/",
            icon: <FaInstagram />,
            iconClass: "text-[#E4405F]",
        },
    ];

    return (
        <>
            {socialContent.map((item) => (
                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={item.id}
                >
                    <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
                </a>
            ))}
        </>
    );
};

export default Social;