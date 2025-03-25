const Tag = () => {
    const tagList = [
        "TypeScript",
        "NextJS",
        "GitHub",
        "Headless CMS",
        "Photoshop",
        "JavaScript",
        "React",
        "Print",
        "Photography",
        "Web Design",
        "eCommerce",
        "Illustrator",
        "Git",
        "Mobile App",
        "HTML5",
        "CSS3",
        "SCSS",
        "Bootstrap",
        "npm",
        "JQuery",
        "PHP",
        "AdobeXD",
        "Sanity CMS",
        "WordPress",
        "Vite",
        "Node.js",
        "Gatsby",
        "CSS-in-JS",
        "CSS Modules",
        "GraphQL",
        "SEO",
        "REST APIs",
        "GROQ",
        "Redux",
        "React Query",
        "Responsive Design",
        "Tailwind CSS",
        "PWA",
        "Figma",
        "Webpack",
        "Serverless",
        "SASS",
        "Material UI",
        "UX/UI Design",
        "Electron",
        "Vercel",
        "Firebase",
        "Payload CMS",
        "Version Control",
    ];
    return (
        <>
            {tagList.map((tag, i) => (
                <button className="resume-btn text-[15px]" key={i}>
                    {tag}
                </button>
            ))}
        </>
    );
};

export default Tag;