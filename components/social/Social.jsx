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
            label: "LinkedIn Profile",
        },
        {
            id: 2,
            link: "https://github.com/Mmilos6",
            icon: <FaGithub />,
            iconClass: "text-[#545454]",
            label: "GitHub Profile",
        },
        {
            id: 3,
            link: "https://www.instagram.com/mosquito_junior/",
            icon: <FaInstagram />,
            iconClass: "text-[#E4405F]",
            label: "Instagram Profile",
        },
    ];

    return (
        <>
            {socialContent.map((item) => (
                <a
                    key={item.id}
                    target="_blank"
                    href={item.link}
                    rel="noopener noreferrer"
                    aria-label={item.label}
                >
                    <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
                </a>
            ))}
        </>
    );
};

export default Social;
