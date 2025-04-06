import {
    FaCamera, FaChartLine, FaCloud, FaCode, FaCogs, FaCss3Alt, FaDatabase, FaFigma, FaGitAlt,
    FaHeadset, FaLock, FaMobileAlt, FaNodeJs, FaPaintBrush, FaProjectDiagram, FaReact, FaSearch,
    FaShoppingCart, FaTachometerAlt, FaThumbtack, FaTools, FaUserAlt, FaWifi
} from 'react-icons/fa';

type IconMap = {
    [key: string]: React.ComponentType;
};

const iconsMap: IconMap = {
    FaCamera: FaCamera,
    FaGitAlt: FaGitAlt,
    FaHeadset: FaHeadset,
    FaNodeJs: FaNodeJs,
    FaPaintBrush: FaPaintBrush,
    FaReact: FaReact,
    FaSearch: FaSearch,
    FaTachometerAlt: FaTachometerAlt,
    FaCode: FaCode,
    FaDatabase: FaDatabase,
    FaMobileAlt: FaMobileAlt,
    FaCloud: FaCloud,
    FaChartLine: FaChartLine,
    FaUserAlt: FaUserAlt,
    FaLock: FaLock,
    FaWifi: FaWifi,
    FaTools: FaTools,
    FaThumbtack: FaThumbtack,
    FaCogs: FaCogs,
    FaCss3Alt: FaCss3Alt,
    FaFigma: FaFigma,
    FaProjectDiagram: FaProjectDiagram,
    FaShoppingCart: FaShoppingCart,
};

export default iconsMap;