import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";

module.exports = [
    {
        id: 1,
        title: "Education",
        icon: <MdOutlineBusinessCenter />,
        items: [
            {
                id: 1,
                date: "2021-2023",
                title: "Ph.D in Horriblensess ",
                desc: "ABC University, Los Angeles, CA",
                bg: "#FFF4F4",
            },

            {
                id: 2,
                date: "2019 - Present",
                title: "Sr. Software Tester",
                desc: "Google Inc.",
                bg: "#FFF1FB",
            },

            {
                id: 3,
                date: "2021",
                title: "Best Developer ",
                desc: "University Of Melbourne, NA",
                bg: "#FFF4F4",
            },
        ],
    },
    {
        id: 2,
        title: "Experience",
        icon: <MdOutlineSchool />,
        items: [
            {
                id: 1,
                date: "2017-2021",
                title: "Computer Science",
                desc: "Imperialize Technical Institute",
                bg: "#EEF5FA",
            },

            {
                id: 2,
                date: "2015-2017",
                title: "Cr. Web Developer",
                desc: "ib-themes ltd.",
                bg: "#F2F4FF",
            },

            {
                id: 3,
                date: "2008",
                title: "Best Writter",
                desc: "Online Typodev Soluation Ltd.",
                bg: "#EEF5FA",
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
