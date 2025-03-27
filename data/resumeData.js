import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";

module.exports = [
    {
        id: 1,
        title: "Education",
        icon: <MdOutlineSchool />,
        iconColor: "#F4D03F",
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
                            className="break-all text-[#b7b7b7] hover:text-[#3d6037]"
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
                            className="break-all text-[#b7b7b7] hover:text-[#3d6037]"
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
                            className="break-all text-[#b7b7b7] hover:text-[#3d6037]"
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
        iconColor: "#9C8D4F",
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
                            className="break-all text-[#b7b7b7] hover:text-[#3d6037]"
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
                            className="break-all text-[#b7b7b7] hover:text-[#3d6037]"
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
                            className="break-all text-[#b7b7b7] hover:text-[#3d6037]"
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
                            className="break-all text-[#b7b7b7] hover:text-[#3d6037]"
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
        iconColor: "#E6A5D7",
        items: [
            {
                id: 1,
                date: "2022 - Present",
                title: "Bicycling Adventures",
                desc: "Exploring new trails and routes while staying fit and enjoying nature.",
            },
            {
                id: 2,
                date: "2018 - Present",
                title: "Photography Hobbyist",
                desc: "Capturing beautiful moments and experimenting with different photography styles.",
            },
            {
                id: 3,
                date: "2010 - Present",
                title: "Beer Tasting Enthusiast",
                desc: "Exploring new craft beers while learning about brewing techniques.",
            },
        ],
    },
];
