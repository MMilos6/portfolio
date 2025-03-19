const Tag = () => {
    const tagList = [
        "TypeScript",
        "Web App",
        "NextJS",
        "Sanity CMS",
        "HTML",
        "GitHub",
        "CSS",
        "Photoshop",
        "JavaScript",
        "React",
        "Photography",
        "Web Design",
        "AWS",
        "eCommerce",
        "Digital Design",
        "Print",
        "Illustrator",
        "Mobile App",
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