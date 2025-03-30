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
                href: "https://www.it-akademija.com",
                label: "www.it-akademija.com",
            },
            {
                id: 2,
                date: "2012 - 2016",
                title: "Professional Engineer of Electrical Engineering and Computer Science",
                desc: "School of electrical and computer engineering of applied studies",
                href: "https://www.viser.edu.rs",
                label: "www.viser.edu.rs",
            },
            {
                id: 3,
                date: "2008 - 2012",
                title: "Electrical Computer Tehnics",
                desc: "High School Kolubara",
                href: "https://www.tehnickaskolakolubara.edu.rs",
                label: "www.tehnickaskolakolubara.edu.rs",
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
                href: "https://www.getadigital.com",
                label: "www.getadigital.com",
            },
            {
                id: 2,
                date: "2019 - 2021",
                title: "Frontend Developer",
                desc: "Eximius Solutions",
                href: "https://eximius-solutions.com",
                label: "eximius-solutions.com",
            },
            {
                id: 3,
                date: "2019 - 2019",
                title: "Web Developer",
                desc: "Link Group",
                href: "https://www.link.co.rs",
                label: "www.link.co.rs",
            },
            {
                id: 4,
                date: "2017 - 2019",
                title: "Electrical Engineer",
                desc: "Standard Invest Group",
                href: "https://www.sigdoo.rs",
                label: "www.sigdoo.rs",
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
