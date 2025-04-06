import {
    FaBehance, FaCamera, FaChartLine, FaCloud, FaCode, FaCogs, FaCss3Alt, FaDatabase, FaDribbble,
    FaFacebookF, FaFigma, FaGitAlt, FaGithub, FaHeadset, FaInstagram, FaLinkedinIn, FaLock,
    FaMobileAlt, FaNodeJs, FaPaintBrush, FaProjectDiagram, FaReact, FaSearch, FaShoppingCart,
    FaTachometerAlt, FaThumbtack, FaTools, FaTypo3, FaUserAlt, FaWifi, FaYoutube
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

type IconMap = {
    [key: string]: React.ComponentType;
};

export const iconsMap: IconMap = {
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
    FaGithub: FaGithub,
    FaLinkedin: FaLinkedinIn,
    FaInstagram: FaInstagram,
    FaBehance: FaBehance,
    FaYoutube: FaYoutube,
    FaFacebook: FaFacebookF,
    FaDribbble: FaDribbble,
    FaX: FaXTwitter,
    Fa_type: FaTypo3
};

export default iconsMap;