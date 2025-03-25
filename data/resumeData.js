import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";

module.exports = [
    {
        id: 1,
        title: "Education",
        icon: <MdOutlineSchool />,
        items: [
            {
                id: 1,
                date: "2018 - 2019",
                title: "Frontend JavaScript Development",
                desc: "ITAcademy",
                info: (
                    <p>
                        <a
                            target="blank"
                            href="https://www.it-akademija.com"
                            className="text-[#b7b7b7] hover:text-[#2E8B57]"
                            style={{fontStyle: "italic"}}
                        >
                            www.it-akademija.com
                        </a>
                    </p>
                ),
            },

            {
                id: 2,
                date: "2012 - 2016",
                title: "Profesional engineer of electrical engineering and computer science",
                desc: "School of electrical and computer engineering of applied studies",
                info: (
                    <p>
                        <a
                            target="blank"
                            href="https://www.viser.edu.rs"
                            className="text-[#b7b7b7] hover:text-[#2E8B57]"
                            style={{fontStyle: "italic"}}
                        >
                            www.viser.edu.rs
                        </a>
                    </p>
                ),
            },

            {
                id: 3,
                date: "2008 - 2012",
                title: "Electrical computer tehnics",
                desc: "High School Kolubara",
                info: (
                    <p>
                        <a
                            target="blank"
                            href="https://www.tehnickaskolakolubara.edu.rs"
                            className="text-[#b7b7b7] hover:text-[#2E8B57]"
                            style={{fontStyle: "italic"}}
                        >
                            www.tehnickaskolakolubara.edu.rs
                        </a>
                    </p>
                ),
            },
        ],
    },
    {
        id: 2,
        title: "Experience",
        icon: <MdOutlineBusinessCenter />,
        items: [
            {
                id: 1,
                date: "2021 - Present",
                title: "Frontend Developer",
                desc: "Geta Digital",
                info: (
                    <p>
                        <a
                            target="blank"
                            href="https://www.getadigital.com/"
                            className="text-[#b7b7b7] hover:text-[#2E8B57]"
                            style={{fontStyle: "italic"}}
                        >
                            www.getadigital.com
                        </a>
                    </p>
                ),
            },
            {
                id: 2,
                date: "2019 - 2021",
                title: "Frontend Developer",
                desc: "Eximius Solutions",
                info: (
                    <p>
                        <a
                            target="blank"
                            href="https://eximius-solutions.com/"
                            className="text-[#b7b7b7] hover:text-[#2E8B57]"
                            style={{fontStyle: "italic"}}
                        >
                            eximius-solutions.com
                        </a>
                    </p>
                ),
            },
            {
                id: 3,
                date: "2019 - 2019",
                title: "Web Developer",
                desc: "Link Group",
                info: (
                    <p>
                        <a
                            target="blank"
                            href="https://www.link.co.rs"
                            className="text-[#b7b7b7] hover:text-[#2E8B57]"
                            style={{fontStyle: "italic"}}
                        >
                            www.link.co.rs
                        </a>
                    </p>
                ),
            },
            {
                id: 4,
                date: "2017 - 2019",
                title: "Electrical Engineer",
                desc: "Standard Invest Group",
                info: (
                    <p>
                        <a
                            target="blank"
                            href="https://www.sigdoo.rs"
                            className="text-[#b7b7b7] hover:text-[#2E8B57]"
                            style={{fontStyle: "italic"}}
                        >
                            www.sigdoo.rs
                        </a>
                    </p>
                ),
            },
        ],
    },
    {
        id: 3,
        title: "Personal",
        icon: <FaRegSmile />,
        items: [
            {
                id: 1,
                date: "2023",
                title: "Traveled across 5 countries",
                desc: "Explored cultures, met people",
                bg: "#FCF4FF",
            },
            {
                id: 2,
                date: "2022",
                title: "Completed a hiking challenge",
                desc: "Pushed mental and physical limits",
                bg: "#FCF9F2",
            },
            {
                id: 3,
                date: "2021",
                title: "Started a workout habit",
                desc: "Improved health and strength",
                bg: "#FCF4FF",
            },
        ],
    },
];
