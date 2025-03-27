import techStackData from "@/data/techStackData";

const Tag = () => {
    return (
        <div className="space-y-6">
            {techStackData.map(({ name, icon, iconColor, tags }) => (
                <div key={name}>
                    <div className="flex items-center mb-2">
                        <div className="mr-2 text-xl"
                        style={{color: iconColor}}>
                            {icon}
                        </div>
                        <h2 className="text-xl text-white font-small">{name}</h2>
                    </div>
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
