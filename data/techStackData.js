import { FaReact, FaCss3Alt, FaFigma, FaShoppingCart, FaGitAlt, FaNodeJs, FaTachometerAlt, FaCogs, FaProjectDiagram } from 'react-icons/fa';

module.exports = [
    {
        name: "Frontend Development",
        icon: <FaReact />,
        iconColor: "#61DBFB",
        tags: [
            "TypeScript", "JavaScript", "React", "Next.js", "Gatsby", "Redux", "jQuery",
            "Server Components", "React Query", "PWA", "Static & SSR approaches",
            "Responsive Web Design"
        ]
    },
    {
        name: "Styling & UI Frameworks",
        icon: <FaCss3Alt />,
        iconColor: "#1572B6",
        tags: [
            "CSS3", "SCSS", "Tailwind CSS", "Bootstrap", "Material UI", "CSS Modules", "CSS-in-JS",
            "Styled Components", "Emotion", "Ant Design"
        ]
    },
    {
        name: "CMS & eCommerce",
        icon: <FaShoppingCart />,
        iconColor: "#FF4F1F",
        tags: [
            "Sanity CMS", "Payload CMS", "Strapi", "Contentful",
            "Shopify", "Optimizely CMS", "WordPress"
        ]
    },
    {
        name: "Performance & Optimization",
        icon: <FaTachometerAlt />,
        iconColor: "#00B0A9",
        tags: [
            "Code Splitting", "Web Accessibility (a11y)", "Lazy Loading", "Image Optimization",
            "Lighthouse", "A/B Testing", "Core Web Vitals", "Caching Strategies"
        ]
    },
    {
        name: "Design & UX/UI",
        icon: <FaFigma />,
        iconColor: "#F24E1E",
        tags: [
            "Figma", "Adobe XD", "Photoshop", "Illustrator",
            "UX/UI Design Principles", "Wireframing", "Prototyping",
            "Web Design", "Print", "Photography"
        ]
    },
    {
        name: "APIs & Backend",
        icon: <FaNodeJs />,
        iconColor: "#68A063",
        tags: [
            "REST APIs", "GraphQL", "GROQ", "WebSockets",
            "Node.js", "Express.js", "Serverless Architecture",
            "Firebase"
        ]
    },
    {
        name: "Build Tools & Deployment",
        icon: <FaGitAlt />,
        iconColor: "#F1502F",
        tags: [
            "Webpack", "Vite", "Parcel", "npm", "Yarn", "pnpm",
            "Git", "GitHub", "GitLab", "Bitbucket", "Version Control",
            "CI/CD Pipelines", "Vercel", "Netlify", "Firebase"
        ]
    },
    {
        name: "Other Technologies & Tools",
        icon: <FaCogs />,
        iconColor: "#6C757D",
        tags: [
            "Electron", "Mobile App Development", "React Native basics",
            "GTM", "SEO Best Practices", "Google Analytics"
        ]
    },
    {
        name: "Project Management & Tracking",
        icon: <FaProjectDiagram />,
        iconColor: "#F4B400",
        tags: [
            "Jira", "Trello", "Asana",
            "Agile & Scrum Methodologies", "Task & Issue Tracking"
        ]
    }
];
