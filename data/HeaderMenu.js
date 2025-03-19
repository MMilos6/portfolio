import { CgNotes } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";

module.exports = [
    {
        id: "1",
        name: "Home",
        routePath: "/",
        icon: <AiOutlineHome />,
    },
    {
        id: "2",
        name: "About",
        routePath: "/about",
        icon: <FaRegUser />,
    },
    {
        id: "3",
        name: "Resume",
        routePath: "/resume",
        icon: <CgNotes />,
    },
    {
        id: "4",
        name: "Works",
        routePath: "/works",
        icon: <FiCodesandbox />,
    },
    {
        id: "5",
        name: "Contact",
        routePath: "/contact",
        icon: <RiContactsBookLine />,
    },
];