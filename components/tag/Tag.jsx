const stackCategories = {
    "Frontend Development": [
        "TypeScript", "JavaScript", "React", "Next.js", "Gatsby", "Redux", "React Query", "jQuery",
        "Server Components", "Static & SSR approaches",
        "PWA", "Web Accessibility (a11y)", "Responsive Web Design"
    ],
    "Styling & UI Frameworks": [
        "CSS3", "SCSS", "Tailwind CSS", "Bootstrap", "Material UI", "CSS Modules", "CSS-in-JS",
        "Styled Components", "Emotion", "Ant Design"
    ],
    "Design & UX/UI": [
        "Figma", "Adobe XD", "Photoshop", "Illustrator",
        "UX/UI Design Principles", "Wireframing", "Prototyping",
        "Web Design", "Print", "Photography"
    ],
    "CMS & eCommerce": [
        "Sanity CMS", "Payload CMS", "Strapi", "Contentful",
        "Shopify", "Optimizely CMS", "WordPress"
    ],
    "Build Tools & Deployment": [
        "Webpack", "Vite", "Parcel", "npm", "Yarn", "pnpm",
        "Git", "GitHub", "GitLab", "Bitbucket", "Version Control",
        "CI/CD Pipelines", "Vercel", "Netlify", "Firebase"
    ],
    "APIs & Backend": [
        "REST APIs", "GraphQL", "GROQ", "WebSockets",
        "Node.js", "Express.js", "Serverless Architecture",
        "Firebase"
    ],
    "Performance & Optimization": [
        "Code Splitting", "Lazy Loading", "Image Optimization",
        "Lighthouse", "Core Web Vitals", "Caching Strategies"
    ],
    "Other Technologies & Tools": [
        "Electron", "Mobile App Development", "React Native basics",
        "GTM", "SEO Best Practices", "Google Analytics"
    ],
    "Project Management & Tracking": [
        "Jira", "Trello", "Asana",
        "Agile & Scrum Methodologies", "Task & Issue Tracking"
    ]
};

const Tag = () => {
    return (
        <div className="space-y-6">
            {Object.entries(stackCategories).map(([category, tags]) => (
                <div key={category}>
                    <h2 className="text-xl text-white font-small mb-2">{category}</h2>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, i) => (
                            <button className="resume-btn text-[15px]" key={i}>
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Tag;
